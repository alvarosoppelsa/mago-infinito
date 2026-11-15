const fs=require('fs'),vm=require('vm');
function createGameContext(assert){
 const html=fs.readFileSync('index.html','utf8');
 let script=html.slice(html.indexOf('<script>')+8,html.indexOf('</script>',html.indexOf('<script>')));
 script=script.slice(0,script.indexOf('{const r0=loadRank();'));
 const noop=()=>{},gradient={addColorStop:noop};
 const canvasContext=new Proxy({createLinearGradient:()=>gradient,createRadialGradient:()=>gradient,measureText:()=>({width:50})},{get:(t,k)=>k in t?t[k]:noop,set:(t,k,v)=>(t[k]=v,true)});
 const element=()=>({style:{},dataset:{},classList:{add:noop,remove:noop,toggle:noop,contains:()=>false},addEventListener:noop,appendChild:noop,insertBefore:noop,querySelector:()=>element(),querySelectorAll:()=>[],getContext:()=>canvasContext,getBoundingClientRect:()=>({width:1100,height:700,left:0,top:0}),setAttribute:noop,getAttribute:()=>null});
 const ctx={assert,console,document:{querySelector:()=>element(),querySelectorAll:()=>[],createElement:()=>element(),addEventListener:noop},window:{addEventListener:noop,devicePixelRatio:1},navigator:{language:'es-ES',languages:['es-ES'],userAgent:'test'},localStorage:{getItem:()=>null,setItem:noop},performance:{now:()=>0},requestAnimationFrame:noop,setTimeout:noop,innerWidth:1100,innerHeight:900};
 vm.createContext(ctx);vm.runInContext(script,ctx,{timeout:10000});return ctx;
}
module.exports={createGameContext};
