const vm=require('node:vm'),assert=require('node:assert/strict');
const {createGameContext}=require('./motor-pruebas.cjs');
const ctx=createGameContext(assert);
vm.runInContext(`
buildHeroMenu=()=>{};refreshAll=()=>{};W=1100;H=700;
function setup(){newGame('mage');G.tv=(G.tv||0)+1;recalc()}
for(const s of SK){
 setup();assert.equal(TIERS[s.id].length,4,s.id);
 for(const l of [0,4,5,9,10,14,15,19,20]){
  G.skills[s.id]=l;G.tv=(G.tv||0)+1;
  const f=tf(s.id);assert.ok(f.dm>=1);assert.ok(f.cd>0&&f.cd<=1);
  assert.equal(tierHtml(s.id).split('✔').length-1,[5,10,15,20].filter(n=>l>=n).length);
  const L=Math.max(1,l);
  assert.equal(skillDmg(s,L),s.dmg*BAL[s.id]*DMG_K*skK(L)*S.dmg*(s.id==='orbit'?1+.06*Math.max(0,L-5):1)*f.dm);
 }
}
setup();G.skills.orbit=20;G.skills.tentacle=20;G.tv=(G.tv||0)+1;
assert.equal(orbitInfo(20).n,7);assert.equal(orbitInfo(20).r,19*1.2);
assert.equal(tentacleCount(20),10);assert.equal(tf('tentacle').hm,1.5);
setup();G.skills.arcane=4;G.tv=(G.tv||0)+1;assert.equal(tf('arcane').cnt,0);
G.skills.arcane=5;G.tv=(G.tv||0)+1;assert.equal(tf('arcane').dm,1.15);
G.skills.arcane=20;G.tv=(G.tv||0)+1;assert.ok(tf('arcane').dm>1);assert.ok(tf('arcane').cd<1);
newGame('monk');G.cls.k_bell=20;G.tv=(G.tv||0)+1;assert.ok(Math.abs(tf('k_bell').cd-.49)<1e-12);
// El lanzamiento real incluye balance y mejoras, y conserva su origen.
setup();G.skills.pulse=20;G.tv=(G.tv||0)+1;
spawnEnemy(false,EN[0],{x:towX()+20,y:towY()});
const e=G.enemies[0];e.hp=e.max=100000;e.res={};
SRC='Pulso arcano';const before=e.hp;towerBegin();castSkill(SK.find(s=>s.id==='pulse'),20);towerEnd();
assert.ok(Math.abs(before-e.hp-skillDmg(SK.find(s=>s.id==='pulse'),20))<1e-8);
assert.equal(G.fx.at(-1).x,towX());assert.equal(G.fx.at(-1).r,(110+3*20)*1.2);
`,ctx);
console.log('Correcto: progresión de las 12 habilidades, mejoras acumuladas, fichas y daño real desde la torre.');
