const fs=require('node:fs'),path=require('node:path'),{spawn}=require('node:child_process'),assert=require('node:assert/strict');
const pause=ms=>new Promise(r=>setTimeout(r,ms));
async function main(){
 const profile=path.resolve('.edge-preview/torre-cdp');fs.mkdirSync(profile,{recursive:true});
 fs.rmSync(path.join(profile,'DevToolsActivePort'),{force:true});
 const chrome=process.env.CHROME_PATH||'C:/Program Files/Google/Chrome/Application/chrome.exe';
 const browser=spawn(chrome,['--headless','--disable-gpu','--no-first-run','--no-default-browser-check','--remote-debugging-port=0','--user-data-dir='+profile,'about:blank'],{stdio:'ignore',windowsHide:true});
 let ws,sessionId;const pending=new Map();let seq=0;
 try{
  let port;
  for(let i=0;i<80;i++){try{port=fs.readFileSync(path.join(profile,'DevToolsActivePort'),'utf8').split('\n')[0];if(port)break}catch{}await pause(100)}
  assert.ok(port,'Chrome no publicó el puerto de pruebas');
  const targets=await(await fetch('http://127.0.0.1:'+port+'/json')).json();
  ws=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);
  await new Promise((resolve,reject)=>{ws.onopen=resolve;ws.onerror=reject});
  ws.onmessage=event=>{const m=JSON.parse(event.data);if(m.id&&pending.has(m.id)){const {resolve,reject}=pending.get(m.id);pending.delete(m.id);m.error?reject(Error(m.error.message)):resolve(m.result)}};
  const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++seq;pending.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}))});
  const evaluate=async expression=>{const r=await send('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(r.exceptionDetails)throw Error(r.exceptionDetails.text);return r.result.value};
  for(const viewport of [{width:1500,height:1000,mobile:false,file:'preview-torre.png'},{width:390,height:844,mobile:true,file:'preview-torre-movil.png'}]){
   await send('Emulation.setDeviceMetricsOverride',{width:viewport.width,height:viewport.height,deviceScaleFactor:1,mobile:viewport.mobile});
   await send('Page.navigate',{url:'file:///'+path.resolve('preview-torre.html').replaceAll('\\','/')});
   let state;
   for(let i=0;i<100;i++){state=await evaluate('({ready:document.body?.dataset.preview,forest:document.body?.dataset.forest,error:document.body?.dataset.previewError})');if(state.error)throw Error(state.error);if(state.ready==='ok'&&state.forest==='loaded')break;await pause(50)}
   assert.equal(state.ready,'ok');assert.equal(state.forest,'loaded');
   const metrics=await evaluate(`({width:innerWidth,panel:document.querySelector('#bottomp').clientWidth,scroll:document.querySelector('#bottomp').scrollWidth,powers:document.querySelectorAll('#powSlots .slot').length})`);
   assert.equal(metrics.width,viewport.width);assert.ok(metrics.scroll<=metrics.panel+1);assert.equal(metrics.powers,10);
   // Comprueba el botón del décimo poder y su cambio a AUTO mediante teclado.
   await send('Input.dispatchKeyEvent',{type:'keyDown',key:'N',code:'KeyN',modifiers:8});
   await send('Input.dispatchKeyEvent',{type:'keyUp',key:'N',code:'KeyN',modifiers:8});
   assert.equal(await evaluate('G.auto.barrier'),true);
   await evaluate('refreshBar()');
   const shot=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(viewport.file,Buffer.from(shot.data,'base64'));
   console.log(JSON.stringify({viewport:viewport.width+'x'+viewport.height,...metrics,forest:state.forest,shiftN:'ok'}));
  }
  await send('Browser.close').catch(()=>{});
 }finally{if(ws)ws.close();browser.kill()}
}
main().catch(e=>{console.error(e);process.exitCode=1});
