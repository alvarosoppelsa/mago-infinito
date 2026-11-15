const fs=require('node:fs');
const source=fs.readFileSync('index.html','utf8');
const start=source.indexOf('{const r0=loadRank();'),end=source.indexOf('</script>',start);
if(start<0||end<0)throw Error('No se encuentra el arranque del juego');
const preview=`
window.addEventListener('error',e=>{document.body.dataset.previewError=e.message});
resize();buildShop();buildSkillsMenu();buildPowers();buildDragonUI();buildBar();buildRankBtn();buildTabs();setupDrawers();setupTip();
newGame('mage');G.lvl=20;G.tower.lvl=30;G.gold=5000;G.tpending=2;buyEgg();G.bx=60;G.by=20;
for(const s of SK)G.skills[s.id]=10;for(const sp of SPS)G.spLv[sp.id]=20;
for(const a of CLS.mage)G.cls[a.id]=10;G.tv=(G.tv||0)+1;recalc();G.hp=S.maxHp*.7;
for(let i=0;i<20;i++){const a=i*Math.PI/10;spawnEnemy(false,EN[i%EN.length],{x:towX()+Math.cos(a)*200,y:towY()+Math.sin(a)*180})}
useSpecial('barrier');for(let i=0;i<6;i++)update(.05);G.paused=false;refreshAll();refreshBar();draw();
const check=(ok,msg)=>{if(!ok)throw Error(msg)};
check(document.querySelectorAll('#powSlots .slot').length===10,'Faltan poderes');
check(document.querySelectorAll('#skills .slot').length===12,'Faltan habilidades');
check(document.querySelectorAll('#powSlots .power-star[data-rank="4"]').length===10,'Faltan estrellas de poderes');
check(powTip(SPS.at(-1)).split('✔').length-1===4,'Faltan las cuatro mejoras');
if(innerWidth<900){document.querySelector('#bottomp').dataset.mode='sk';document.querySelector('#bottomp').classList.add('open')}
check(document.documentElement.scrollWidth<=innerWidth,'Desbordamiento horizontal');
check(eggX()===towX()+58&&eggY()===towY()+34,'El huevo no está junto a la torre');
const panel=document.querySelector('#bottomp');check(panel.scrollWidth<=panel.clientWidth+1,'Desbordamiento del panel');
document.body.dataset.preview='ok';
function repaint(){draw();if(FOREST_TEXTURE.ready)document.body.dataset.forest='loaded';requestAnimationFrame(repaint)}requestAnimationFrame(repaint);
`;
fs.writeFileSync('preview-torre.html',source.slice(0,start)+preview+source.slice(end));
console.log('Generada preview-torre.html: torre Nv30, diez poderes Nv20 y comprobaciones de interfaz.');
