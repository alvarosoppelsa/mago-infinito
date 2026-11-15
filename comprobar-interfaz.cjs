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
  for(const viewport of [{width:1500,height:1000,mobile:false,file:'preview-torre.png'},{width:1100,height:850,mobile:false,file:'preview-torre-compacta.png'},{width:390,height:844,mobile:true,file:'preview-torre-movil.png'}]){
   await send('Emulation.setDeviceMetricsOverride',{width:viewport.width,height:viewport.height,deviceScaleFactor:1,mobile:viewport.mobile});
   await send('Page.navigate',{url:'file:///'+path.resolve('preview-torre.html').replaceAll('\\','/')});
   let state;
   for(let i=0;i<100;i++){state=await evaluate('({ready:document.body?.dataset.preview,forest:document.body?.dataset.forest,error:document.body?.dataset.previewError})');if(state.error)throw Error(state.error);if(state.ready==='ok'&&state.forest==='loaded')break;await pause(50)}
   assert.equal(state.ready,'ok');assert.equal(state.forest,'loaded');
   const metrics=await evaluate(`({width:innerWidth,panel:document.querySelector('#bottomp').clientWidth,scroll:document.querySelector('#bottomp').scrollWidth,powers:document.querySelectorAll('#powSlots .slot').length})`);
   assert.equal(metrics.width,viewport.width);assert.ok(metrics.scroll<=metrics.panel+1);assert.equal(metrics.powers,10);
   assert.equal(await evaluate("document.querySelectorAll('#bar .cast,#bar .mode').length"),0);
   assert.equal(await evaluate("document.querySelectorAll('#towerXp').length"),0);
   assert.equal(await evaluate('towerCount()'),3);
   if(!viewport.mobile){
    const rows=await evaluate("Array.from(document.querySelectorAll('#heroSk,#skills,#powSlots,#shop,#drSk')).map(e=>e.getBoundingClientRect().top)");
    assert.ok(Math.max(...rows)-Math.min(...rows)<1,'Las filas inferiores no están alineadas: '+rows);
   }
   const autoUi=await evaluate(`(()=>{
    const check=(ok,msg)=>{if(!ok)throw Error(msg)};
    check(document.querySelectorAll('.btitle>.auto-upgrade').length===5,'Faltan checkboxes de sección');
    check(document.querySelectorAll('.slot-wrap>.auto-upgrade').length===60,'Faltan checkboxes de casilla');
    const heroId=CLS[G.hero][0].id,heroKey='slot:hero:'+heroId;
    const hero=document.querySelector('[data-auto-key="'+heroKey+'"] input');
    const tower=document.querySelector('[data-auto-key="slot:tower:arcane"] input');
    const level=G.cls[heroId],gold=G.gold;
    hero.click();check(G.cls[heroId]===level&&G.gold===gold,'El checkbox compra por accidente');
    check(hero.checked&&hero.parentElement.querySelector('b').textContent==='1','Falta prioridad 1');
    tower.click();check(tower.parentElement.querySelector('b').textContent==='2','Falta prioridad 2');
    hero.click();check(tower.parentElement.querySelector('b').textContent==='1','No renumera');
    const header=document.querySelector('[data-auto-key="section:hero"] input');header.click();
    G.gold=0;G.pending=1;G.tpending=0;runAutoUpgrades(1);
    check(G.cls[heroId]===level+1&&G.skills.arcane===10,'No salta al siguiente recurso disponible');
    G.skills.arcane=19;G.tpending=1;runAutoUpgrades(1);
    check(!tower.checked&&tower.disabled,'No desactiva la casilla máxima');
    check(header.parentElement.querySelector('b').textContent==='1','No renumera al completar');
    // Demostración con números visibles en las cinco secciones.
    G.autoUpgrades=[];for(const section of ['hero','tower','powers','inventory','dragon']){
     if(section==='powers')G.spLv.nova=19;
     setAutoUpgrade('section:'+section,true);
    }
    G.gold=5000;G.tv=(G.tv||0)+1;refreshAll();
    return{slots:60,sections:5,clickSafe:true,priorities:true};
   })()`);
   const shot=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync(viewport.file,Buffer.from(shot.data,'base64'));
   console.log(JSON.stringify({viewport:viewport.width+'x'+viewport.height,...metrics,forest:state.forest,automaticPowers:true,towers:3,alignment:'ok',autoUi}));
  }
  await send('Browser.close').catch(()=>{});
 }finally{if(ws)ws.close();browser.kill()}
}
main().catch(e=>{console.error(e);process.exitCode=1});
