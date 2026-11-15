const fs = require('fs');
const vm = require('vm');
const src = fs.readFileSync('index.html', 'utf8');
const section = (start, end) => src.slice(src.indexOf(start), src.indexOf(end, src.indexOf(start)));
const code = [
  section('const SK=[', '/* res:'),
  section('const HEROES={', 'const clsCost='),
  section('const BAL=', '/* Ultimates:'),
  section('const SPS=[', '/* Coste base'),
  'const RNG={}, ALLYK={};',
  section('HEROES.troll=', 'const TIER_LV='),
  section('const TIER_LV=', 'let TFC='),
  ...Array.from(src.matchAll(/^defTiers\([^\n]+/gm), m => m[0]),
  ...Array.from(src.matchAll(/^CLS\.[a-z]+\.splice\(7,0,[\s\S]*?\);/gm), m => m[0]),
  ...Array.from(src.matchAll(/^CLS\.[a-z]+\.push\([\s\S]*?\);/gm), m => m[0]),
  'result = {HEROES, CLS, TIERS, SK, BAL, SPS};'
].join('\n');
const context = { result: null }; vm.createContext(context); vm.runInContext(code, context);
const {HEROES, CLS, TIERS, SK, BAL, SPS} = context.result;
const levels = [1,5,10,15,20];
let out = `# Mago Infinito: habilidades y progresión\n\nAnálisis de la versión local de index.html. Contiene ${Object.keys(HEROES).length} héroes, ${Object.values(CLS).flat().length} habilidades particulares y ${SK.length} generales. Las generales y los poderes pertenecen a la Torre del mago.\n\n## Cómo se sube de nivel\n\n- El héroe empieza en nivel 1, con 1 punto disponible y todas las habilidades a nivel 0 (sin aprender).\n- Experiencia para el siguiente nivel: redondear(20 × 1,22^(nivel del héroe − 1)). Cada subida consume esa experiencia, da 1 punto exclusivo para las habilidades del héroe y recupera un 20% de vida máxima.\n- Cada compra aumenta una habilidad un nivel, hasta 20. No suben por usarlas. Al pulsar se consume primero un punto; si no hay, se paga oro.\n- Habilidad particular: redondear(90 × 1,30^L) de oro. General: redondear(80 × 1,28^L). L es el nivel actual, antes de comprar; aprender cuesta 90/80.\n- Las mejoras particulares de niveles 5, 10, 15 y 20 se acumulan. Los multiplicadores de daño, radio, duración, curación y enfriamiento se multiplican; las cantidades adicionales se suman. Por ejemplo, +50% y luego +40% de daño resulta en ×2,10.\n- Si todas las habilidades del héroe llegan a 20, sus siguientes subidas dan +10% de daño. La torre solo da esta bonificación cuando sus habilidades y sus diez poderes están al máximo.\n- La torre empieza en nivel 1 con un punto propio. No tiene nivel máximo. Hasta el nivel 30 necesita redondear(15 × 1,33^(nivel − 1)) de experiencia; después el coste crece linealmente un 6% del coste del nivel 30 por nivel. Cada 50 niveles aparece otra torre con su propio ataque básico; todas comparten experiencia, nivel y mejoras. Recibe el 15% base de cada baja más el 85% multiplicado por su fracción del daño efectivo; se incluye el golpe mortal y se excluye el exceso de daño. Cada subida da un punto exclusivo para habilidades o poderes de torre.\n- La vida base real es la ficha del héroe +25, y gana +8 por nivel del héroe, antes de objetos y pasivas.\n\n## Cómo leer las cifras\n\nLas tablas de héroes muestran la progresión base que calcula la ficha del juego, ANTES de las cuatro mejoras especiales listadas debajo y de los objetos. Algunas descripciones son simplificaciones: no son una simulación del daño efectivo. Las cifras de radio/alcance son píxeles del mundo a zoom 1.\n\nEl daño de referencia de muchas habilidades particulares es (10 + 3,5 × L) × 2,2 × daño global × potencia del héroe. Cada ataque aplica además su propio coeficiente, sus mejoras, resistencias y estados. No todas las habilidades hacen daño: algunas modifican ataques, curan o invocan.\n\nDaño global base = (1 + 0,12 × nivel del Bastón) × (1 + 0,10 × bonificaciones tras completar las habilidades del héroe o todo lo de la torre) × arranque. Arranque pasa de 0,8 en nivel de héroe 1 a 1 en nivel 12.\n\n## Habilidades particulares, por héroe\n`;
for (const [id,h] of Object.entries(HEROES)) {
 out += `\n### ${h.n}\n\n${h.desc}\n\nAtaque básico: **${h.basic.n}**, tipo ${h.basic.type}, intervalo base ${h.basic.cd} s. Potencia de habilidades: ×${h.pw}.\n`;
 for (const a of CLS[id]) {
  out += `\n#### ${a.n}\n\n${a.desc}\n\n| Nivel | Efecto base de la ficha |\n|---|---|\n`;
  for (const l of levels) out += `| ${l} | ${a.eff(l)} |\n`;
  if (TIERS[a.id]) out += '\n'+TIERS[a.id].map((t,i)=>`- **Nv ${levels[i+1]} — ${t[0]}:** ${t[1]}`).join('\n')+'\n';
 }
}
const bal=BAL;
out += '\n## Habilidades generales\n\nLas doce se lanzan desde la torre y pueden usarse con cualquier héroe. Daño por impacto de referencia = base × factor de balance × 2,2 × K(L) × daño global. K(L) = 1 + 0,5(L−1) hasta nivel 5; después 3 + 0,18(L−5). K vale 1 / 3 / 3,9 / 4,8 / 5,7 en niveles 1 / 5 / 10 / 15 / 20. Las orbitales añaden ×(1 + 0,06 × máximo(0,L−5)).\n\nLos daños siguientes usan daño global = 1 y no incluyen daño periódico, críticos, explosiones secundarias ni resistencias. El intervalo base de las generales NO baja por subir su habilidad: se divide por la velocidad global de ataque y, con prisa, por otro ×1,5.\n';
for (const s of SK) {
 out += `\n### ${s.n}\n\n${s.desc}\n\nTipo: ${s.type}. ${s.cd?'Intervalo base: '+s.cd+' s.':'Efecto continuo.'}\n\n| Nivel | Daño por impacto | Cantidad base |\n|---|---|---|\n`;
 for(const l of levels)out+=`| ${l} | ${(s.dmg*bal[s.id]*2.2*(l<=5?1+.5*(l-1):3+.18*(l-5))*(s.id==='orbit'?1+.06*Math.max(0,l-5):1)).toFixed(2)} | ${s.cnt(l)} |\n`;
 if(TIERS[s.id])out+='\nMejoras acumulativas (se añaden a la progresión base de la tabla):\n\n'+TIERS[s.id].map((t,i)=>`- **Nv ${levels[i+1]} — ${t[0]}:** ${t[1]}`).join('\n')+'\n';
}
out += `
## Escalados adicionales y ultimates de las generales

L = nivel de la habilidad; U = máximo(0,L−5). Las ultimates siguientes se activan automáticamente desde nivel 5. Orbitales, pulpo y disparo de oro no tienen ultimate en la tabla ULT.

| Habilidad | Escalado adicional y ultimate |
|---|---|
| Misil arcano | Lluvia arcana: 2 misiles a cada enemigo susceptible del mapa; requiere al menos 3. Intervalo base ultimate 32 s. |
| Bola de fuego | Explosión de radio 45+4L; quemadura de 35% del daño del proyectil por segundo durante 3 s. Desde Nv5: probabilidad 10%+1,5 pp × U de bola XL; daño ×(3+0,1U), tamaño y radio ×2,2. |
| Cadena de rayos | Saltos adicionales = L hasta Nv5; después 5+entero((L−5)/3). Cada salto conserva 85% del daño anterior. Rayo rojo: probabilidad 6%+0,8 pp × U; daño ×(1,6+0,04U), añade 3+entero(U/5) saltos y conserva 88% entre saltos. Selección inicial sin límite de alcance; distancia entre saltos hasta 320. |
| Castigo divino | El objetivo recibe el impacto completo; enemigos a menos de 45 reciben 50%. Juicio de luz golpea a cada enemigo susceptible del mapa, requiere al menos 3; intervalo base 30 s. |
| Orbe oscuro | Atraviesa enemigos. Orbe gigante: tamaño 72 frente al normal 12; daño ×2 sobre la referencia de ultimate, duración 4,5 s. Intervalo base 26 s. |
| Lanza de acero | Atraviesa en línea. Ultimate golpea a todos los enemigos del mapa e inmoviliza/aturde 2+0,05U s; requiere al menos 3. Intervalo base 30 s. |
| Pulso arcano | Radio normal 110+3L. Ultimate: radio 230+4U, daño divino ×3 sobre la referencia de ultimate y repulsión durante 3+0,05U s. Requiere al menos 3 cercanos; intervalo base 28 s. |
| Espinas venenosas | Radio 55+L. Veneno por segundo (3+2L) × daño global, durante 4 s. Desde Nv5: 15%+2 pp × U de enraizar 3+0,1U s. |
| Granizo | Radio 55+L. Ralentiza mínimo(80%,30%+3 pp × L) durante 2,5 s. Desde Nv5: 12%+1,5 pp × U de congelar 2+0,05U s. |
| Bolas de fuego orbitales | Hasta 5 bolas; tamaño 7+0,6L, radio orbital 46+L, velocidad angular 2+0,12L. Cada bola puede golpear al mismo enemigo cada 0,4 s y aplicar quemadura del 30% del impacto por segundo durante 2 s. |
| Pulpo vampírico | Hasta 8 tentáculos, +1 en niveles impares hasta Nv15. Golpe cada 0,5 s. Cura por golpe (0,25%+0,02 pp × L) de vida máxima: 0,27% en Nv1 y 0,65% en Nv20. |
| Disparo de oro | Al matar añade oro según oro base enemigo ×0,6 ×(1+0,15L) ×(1+tiempo/120) × multiplicador global de oro, redondeado hacia arriba. Desde Nv6, daño ×[1+mínimo(1,5+0,15(L−6), oro/1000 ×(0,5+0,05(L−6)))]. Límite ×2,5 en Nv6 y ×4,6 en Nv20. |

En ultimates con intervalo, intervalo real = base × máximo(0,55,1−0,03U): a Nv20 tardan el 55% del intervalo de Nv5. Su referencia de daño añade ×(1+0,05U), hasta ×1,75 en Nv20, además del escalado normal. Si no hay objetivos suficientes, reintentan en 0,5 s.

Los venenos acumulables refrescan su duración: la primera aplicación aporta su DPS completo y las siguientes añaden la mitad del nuevo DPS, con tope de cinco veces el nuevo DPS. Las quemaduras no acumulables conservan el mayor DPS y refrescan duración.

## Observaciones del código

- Los ataques básicos escalan con el nivel del héroe: (16+3,6 × nivel del héroe) ×2,2 × daño global × coeficiente del ataque básico × potencia del héroe, antes de pasivas y resistencias.
- Una habilidad marcada ULTIMATE en el nombre del héroe es una habilidad particular comprable; no debe confundirse con las ultimates adicionales de las generales al llegar a Nv5.
- Resurrección del sacerdote tiene enfriamiento: no está limitada a una sola vez por partida, aunque la descripción del héroe diga «una vez».
- La descripción de Cadena de rayos dice «+1 salto por nivel», pero después de Nv5 el código añade uno cada 3 niveles.
- La ficha de Flechas múltiples limita la cantidad base a 4; el cálculo real del disparo incluye las mejoras especiales y permite hasta 7. Las tablas de ficha no deben interpretarse como el total final de proyectiles.
- Cristal de alcance añade 5% por nivel a habilidades que usan el multiplicador de alcance. El pulso normal usa directamente 110+3L, sin ese multiplicador.
- Los diez poderes automáticos pertenecen a la torre y se desbloquean en sus niveles 3, 6…30.
- Este informe cubre las habilidades particulares de los héroes y las generales. El dragón y el inventario tienen sus propios sistemas independientes.
`;
out=out.replace('El intervalo base de las generales NO baja por subir su habilidad: se divide por la velocidad global de ataque y, con prisa, por otro ×1,5.','El intervalo base se multiplica por las mejoras de enfriamiento de la habilidad; luego se divide por la velocidad global de ataque y, con prisa, por otro ×1,5. Las tablas muestran cantidades y daños base, ANTES de las mejoras especiales listadas debajo.');
out=out.replace('El pulso normal usa directamente 110+3L, sin ese multiplicador.','El pulso normal usa (110+3L) por su mejora especial de radio, sin el multiplicador del Cristal.');
out+='\n## Progresión especial completada\n\nLas '+Object.values(CLS).flat().length+' particulares y las '+SK.length+' generales tienen ahora cuatro mejoras en 5/10/15/20. Las generales conservan sus ultimates originales; las nuevas mejoras se acumulan con ellas. El daño mostrado incorpora la mejora de daño; la ficha muestra también los nuevos recuentos y la curación del pulpo. Orbitales llega a 7 bolas y pulpo a 10 tentáculos. Las cifras base de las tablas anteriores no incluyen estas mejoras.\n\nLos nuevos multiplicadores de radio afectan al alcance de las generales que lo usan; también a las explosiones de fuego, al área secundaria de Castigo, al radio de espinas y granizo, al pulso y al tamaño de las orbitales según su ficha.\n';
fs.writeFileSync('ANALISIS-HABILIDADES.md',out,'utf8');
console.log(JSON.stringify({heroes:Object.keys(HEROES).length,particulares:Object.values(CLS).flat().length,generales:SK.length,archivo:'ANALISIS-HABILIDADES.md'}));

let powers='\n## Poderes de la Torre del mago\n\nSe desbloquean en niveles 3, 6…30 de la torre. Cada uno empieza en nivel 1 y se mejora hasta 20 con puntos de torre u oro. Las mejoras de nivel 5, 10, 15 y 20 son acumulativas. El daño escala con el nivel de la torre y los objetos. Se lanzan automáticamente cuando están listos y hay objetivos adecuados. Los iconos inferiores sirven para mejorar sus niveles.\n';
for(const sp of SPS){powers+='\n### '+sp.icon+' '+sp.n+'\n\nTorre Nv '+sp.unlock+' · recarga base '+sp.cd+' s. '+sp.desc+'\n\n'+TIERS[sp.id].map((t,i)=>'- **Nv '+[5,10,15,20][i]+' — '+t[0]+':** '+t[1]).join('\n')+'\n'}
fs.appendFileSync('ANALISIS-HABILIDADES.md',powers);
