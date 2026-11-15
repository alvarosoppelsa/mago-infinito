# Mago Infinito: habilidades y progresión

Análisis de la versión local de index.html. Contiene 16 héroes, 192 habilidades particulares y 12 generales. Las generales y los poderes pertenecen a la Torre del mago.

## Cómo se sube de nivel

- El héroe empieza en nivel 1, con 1 punto disponible y todas las habilidades a nivel 0 (sin aprender).
- Experiencia para el siguiente nivel: redondear(20 × 1,22^(nivel del héroe − 1)). Cada subida consume esa experiencia, da 1 punto exclusivo para las habilidades del héroe y recupera un 20% de vida máxima.
- Cada compra aumenta una habilidad un nivel, hasta 20. No suben por usarlas. Al pulsar se consume primero un punto; si no hay, se paga oro.
- Habilidad particular: redondear(90 × 1,30^L) de oro. General: redondear(80 × 1,28^L). L es el nivel actual, antes de comprar; aprender cuesta 90/80.
- Las mejoras particulares de niveles 5, 10, 15 y 20 se acumulan. Los multiplicadores de daño, radio, duración, curación y enfriamiento se multiplican; las cantidades adicionales se suman. Por ejemplo, +50% y luego +40% de daño resulta en ×2,10.
- Si todas las habilidades del héroe llegan a 20, sus siguientes subidas dan +10% de daño. La torre solo da esta bonificación cuando sus habilidades y sus diez poderes están al máximo.
- La torre empieza en nivel 1 con un punto propio. No tiene nivel máximo. Hasta el nivel 30 necesita redondear(15 × 1,33^(nivel − 1)) de experiencia; después el coste crece linealmente un 6% del coste del nivel 30 por nivel. Cada 50 niveles aparece otra torre con su propio ataque básico; todas comparten experiencia, nivel y mejoras. Recibe el 15% base de cada baja más el 85% multiplicado por su fracción del daño efectivo; se incluye el golpe mortal y se excluye el exceso de daño. Cada subida da un punto exclusivo para habilidades o poderes de torre.
- La vida base real es la ficha del héroe +25, y gana +8 por nivel del héroe, antes de objetos y pasivas.

## Cómo leer las cifras

Las tablas de héroes muestran la progresión base que calcula la ficha del juego, ANTES de las cuatro mejoras especiales listadas debajo y de los objetos. Algunas descripciones son simplificaciones: no son una simulación del daño efectivo. Las cifras de radio/alcance son píxeles del mundo a zoom 1.

El daño de referencia de muchas habilidades particulares es (10 + 3,5 × L) × 2,2 × daño global × potencia del héroe. Cada ataque aplica además su propio coeficiente, sus mejoras, resistencias y estados. No todas las habilidades hacen daño: algunas modifican ataques, curan o invocan.

Daño global base = (1 + 0,12 × nivel del Bastón) × (1 + 0,10 × bonificaciones tras completar las habilidades del héroe o todo lo de la torre) × arranque. Arranque pasa de 0,8 en nivel de héroe 1 a 1 en nivel 12.

## Habilidades particulares, por héroe

### Mago

Maestro de la magia: misiles, campo eléctrico, golems y supernova.

Ataque básico: **Disparo arcano**, tipo magic, intervalo base 0.9 s. Potencia de habilidades: ×2.

#### Misiles arcanos extra

Lanza misiles arcanos adicionales, cada uno a un enemigo distinto.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 2 misiles cada 3.9 s |
| 5 | 3 misiles cada 3.4 s |
| 10 | 5 misiles cada 2.8 s |
| 15 | 7 misiles cada 2.2 s |
| 20 | 8 misiles cada 1.6 s |

- **Nv 5 — Salva doble:** +2 misiles por salva.
- **Nv 10 — Misiles rebotantes:** Cada misil rebota a 2 enemigos cercanos (50% de daño).
- **Nv 15 — Misiles explosivos:** +35% de daño y explotan en área.
- **Nv 20 — Tormenta arcana:** +3 misiles, +40% de daño y -25% de enfriamiento.

#### Campo eléctrico

Un campo eléctrico te rodea y golpea a los enemigos que entran en él.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 104 · golpea cada 0,4 s |
| 5 | Radio 118 · golpea cada 0,4 s |
| 10 | Radio 135 · golpea cada 0,4 s |
| 15 | Radio 153 · golpea cada 0,4 s |
| 20 | Radio 170 · golpea cada 0,4 s |

- **Nv 5 — Campo amplio:** +30% de radio.
- **Nv 10 — Descarga paralizante:** +50% de daño y ralentiza un 30%.
- **Nv 15 — Tormenta estática:** Pulsa un 30% más rápido y a veces aturde.
- **Nv 20 — Campo supremo:** +60% de daño y +30% de radio.

#### Bolas de fuego extra

Dispara bolas de fuego adicionales que explotan y queman.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 bola(s) cada 3.5 s |
| 5 | 2 bola(s) cada 3.1 s |
| 10 | 3 bola(s) cada 2.6 s |
| 15 | 4 bola(s) cada 2.1 s |
| 20 | 5 bola(s) cada 1.6 s |

- **Nv 5 — Bola extra:** +1 bola de fuego.
- **Nv 10 — Llama voraz:** +40% de daño y quemaduras más fuertes.
- **Nv 15 — Meteoritos:** +1 bola y explosión un 30% mayor.
- **Nv 20 — Infierno:** +50% de daño, -30% de enfriamiento y +1 bola.

#### Congelación

Congela a los enemigos cercanos y los empuja hacia atrás.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 173 · congela 1.3 s · cada 15.6 s |
| 5 | Radio 185 · congela 1.5 s · cada 14.0 s |
| 10 | Radio 200 · congela 1.8 s · cada 12.0 s |
| 15 | Radio 215 · congela 2.1 s · cada 10.0 s |
| 20 | Radio 230 · congela 2.4 s · cada 8.0 s |

- **Nv 5 — Escarcha amplia:** +30% de radio.
- **Nv 10 — Hielo profundo:** +50% de duración de la congelación.
- **Nv 15 — Escarcha cortante:** +100% de daño y ejecuta a los de menos del 20% de vida.
- **Nv 20 — Cero absoluto:** -35% de enfriamiento, +50% de duración y onda gélida.

#### Escudo arcano

Una barrera mágica absorbe daño.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Absorbe 13% de tu vida · cada 21.4 s |
| 5 | Absorbe 17% de tu vida · cada 19.0 s |
| 10 | Absorbe 22% de tu vida · cada 16.0 s |
| 15 | Absorbe 27% de tu vida · cada 13.0 s |
| 20 | Absorbe 32% de tu vida · cada 10.0 s |

- **Nv 5 — Barrera gruesa:** El escudo es un 50% mayor.
- **Nv 10 — Recarga rápida:** -30% de enfriamiento.
- **Nv 15 — Barrera reflectante:** Al crearlo lanza una onda de choque.
- **Nv 20 — Égida arcana:** Escudo +50%, +4 vida/s y -10% de daño recibido.

#### Golems de piedra

Invoca golems de piedra que pelean y atraen a los enemigos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 2 golems · duran 25.5 s · cada 33.2 s |
| 5 | 2 golems · duran 27.5 s · cada 30.0 s |
| 10 | 3 golems · duran 30.0 s · cada 26.0 s |
| 15 | 3 golems · duran 32.5 s · cada 22.0 s |
| 20 | 4 golems · duran 35.0 s · cada 18.0 s |

- **Nv 5 — Golem extra:** +1 golem.
- **Nv 10 — Golems de granito:** +50% de vida y +30% de daño.
- **Nv 15 — Golems eternos:** +50% de duración.
- **Nv 20 — Titanes:** +2 golems, +50% de vida y +50% de daño.

#### Meditación

Regeneras vida y aceleras todos tus ataques.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +0.6 vida/s · +2.5% velocidad de ataque |
| 5 | +3.0 vida/s · +12.5% velocidad de ataque |
| 10 | +6.0 vida/s · +25.0% velocidad de ataque |
| 15 | +9.0 vida/s · +37.5% velocidad de ataque |
| 20 | +12.0 vida/s · +50.0% velocidad de ataque |

- **Nv 5 — Mente serena:** +3 vida/s.
- **Nv 10 — Concentración:** +10% de velocidad de ataque.
- **Nv 15 — Trance:** +3 vida/s y -8% de daño recibido.
- **Nv 20 — Ascensión:** +15% de velocidad de ataque, +5 vida/s y -8% de daño recibido.

#### Relámpago en cadena

Un rayo salta de enemigo en enemigo y golpea a todos los que encuentra.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Golpea a 4 enemigos · daño x1,4 · cada 8.8 s |
| 5 | Golpea a 5 enemigos · daño x1,4 · cada 7.8 s |
| 10 | Golpea a 6 enemigos · daño x1,4 · cada 6.5 s |
| 15 | Golpea a 7 enemigos · daño x1,4 · cada 5.3 s |
| 20 | Golpea a 8 enemigos · daño x1,4 · cada 4.0 s |

- **Nv 5 — Rayo largo:** +2 saltos.
- **Nv 10 — Rayo potente:** +50% de daño.
- **Nv 15 — Rayo paralizante:** Cada impacto aturde 1 s (50%).
- **Nv 20 — Tormenta de rayos:** +3 saltos, +40% de daño y -30% de enfriamiento.

#### Meteoro infernal

Marca un grupo de enemigos y hace caer un meteoro: daño enorme en área y quemadura.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 82 · daño x3,2 · cada 15.6 s |
| 5 | Radio 90 · daño x3,2 · cada 14.0 s |
| 10 | Radio 100 · daño x3,2 · cada 12.0 s |
| 15 | Radio 110 · daño x3,2 · cada 10.0 s |
| 20 | Radio 120 · daño x3,2 · cada 8.0 s |

- **Nv 5 — Meteoro grande:** +30% de radio.
- **Nv 10 — Doble meteoro:** Cae un meteoro más sobre otro grupo.
- **Nv 15 — Meteoro ardiente:** +60% de daño y quema.
- **Nv 20 — Lluvia infernal:** +2 meteoros, -30% de enfriamiento y aturde 1,2 s.

#### Supernova arcana

Una explosión arcana enorme que golpea a todos los enemigos a tu alcance.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Daño x4 · cada 46.8 s |
| 5 | Daño x4 · cada 42.0 s |
| 10 | Daño x4 · cada 36.0 s |
| 15 | Daño x4 · cada 30.0 s |
| 20 | Daño x4 · cada 25.0 s |

- **Nv 5 — Supernova ardiente:** +40% de daño.
- **Nv 10 — Supernova ancha:** +30% de radio.
- **Nv 15 — Doble supernova:** Una segunda explosión (70%) medio segundo después.
- **Nv 20 — Big bang:** +50% de daño, -30% de enfriamiento, una explosión más y aturde 1,5 s.

#### Familiar elemental

Un elemental te acompaña y alterna fuego, hielo y rayo contra los enemigos: quema, ralentiza o encadena.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 familiar(es) · ataca cada 1.5 s · quema, ralentiza y encadena |
| 5 | 1 familiar(es) · ataca cada 1.4 s · quema, ralentiza y encadena |
| 10 | 2 familiar(es) · ataca cada 1.2 s · quema, ralentiza y encadena |
| 15 | 2 familiar(es) · ataca cada 1.1 s · quema, ralentiza y encadena |
| 20 | 3 familiar(es) · ataca cada 0.9 s · quema, ralentiza y encadena |

- **Nv 5 — Familiar extra:** +1 familiar.
- **Nv 10 — Elementos potentes:** +40% de daño.
- **Nv 15 — Ritmo arcano:** Ataca un 30% más rápido.
- **Nv 20 — Señor de los elementos:** +1 familiar, +40% de daño y ataca un 20% más rápido.

#### Distorsión temporal

Abres una zona donde el tiempo se arrastra: los enemigos van a la mitad de velocidad y tus ataques se aceleran mientras dura.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 133 · 5.2 s · enemigos -50% velocidad · +50% de tu velocidad de ataque · cada 25.4 s |
| 5 | Radio 145 · 5.8 s · enemigos -50% velocidad · +50% de tu velocidad de ataque · cada 23.0 s |
| 10 | Radio 160 · 6.5 s · enemigos -50% velocidad · +50% de tu velocidad de ataque · cada 20.0 s |
| 15 | Radio 175 · 7.3 s · enemigos -50% velocidad · +50% de tu velocidad de ataque · cada 17.0 s |
| 20 | Radio 190 · 8.0 s · enemigos -50% velocidad · +50% de tu velocidad de ataque · cada 14.0 s |

- **Nv 5 — Zona amplia:** +30% de radio.
- **Nv 10 — Tiempo prolongado:** +50% de duración.
- **Nv 15 — Estasis:** Enemigos a -75% de velocidad y aturdidos 1 s al abrirse la zona.
- **Nv 20 — Maestro del tiempo:** +30% de radio, +40% de duración y -25% de enfriamiento.

### Arquero elfo

Daño preciso a distancia: críticos, flechas múltiples, veneno y esquiva.

Ataque básico: **Flecha**, tipo phys, intervalo base 0.8 s. Potencia de habilidades: ×1.1.

#### Golpe crítico

Tus flechas pueden hacer golpes críticos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 13% prob. · daño x2.1 |
| 5 | 23% prob. · daño x2.6 |
| 10 | 35% prob. · daño x3.2 |
| 15 | 48% prob. · daño x3.8 |
| 20 | 60% prob. · daño x4.4 |

- **Nv 5 — Ojo de halcón:** +10% de prob. de crítico.
- **Nv 10 — Golpe mortal:** +40% de daño crítico.
- **Nv 15 — Cazador sediento:** +10% de prob. y los críticos te curan.
- **Nv 20 — Ejecutor:** +100% de daño a enemigos bajo el 25% de vida y +30% de crítico.

#### Velocidad de golpe

Disparas más rápido.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +3% velocidad de disparo |
| 5 | +15% velocidad de disparo |
| 10 | +30% velocidad de disparo |
| 15 | +45% velocidad de disparo |
| 20 | +60% velocidad de disparo |

- **Nv 5 — Mano ágil:** +12% de velocidad de disparo.
- **Nv 10 — Ráfaga:** +12% de velocidad de disparo.
- **Nv 15 — Pulso firme:** +15% de velocidad de disparo.
- **Nv 20 — Lluvia veloz:** +25% de velocidad de disparo.

#### Flechas múltiples

Cada disparo lanza flechas a varios enemigos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 flechas por disparo |
| 5 | 2 flechas por disparo |
| 10 | 3 flechas por disparo |
| 15 | 4 flechas por disparo |
| 20 | 4 flechas por disparo |

- **Nv 5 — Flecha extra:** +1 flecha por disparo.
- **Nv 10 — Flechas potentes:** +25% de daño.
- **Nv 15 — Flechas explosivas:** +1 flecha y explotan en área (40%).
- **Nv 20 — Tormenta de flechas:** +2 flechas y +30% de daño.

#### Flecha aturdidora

Posibilidad de aturdir al enemigo golpeado.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 7% prob. · 0.8 s |
| 5 | 12% prob. · 0.9 s |
| 10 | 18% prob. · 1.0 s |
| 15 | 24% prob. · 1.1 s |
| 20 | 30% prob. · 1.2 s |

- **Nv 5 — Impacto aturdidor:** +8% de prob. de aturdir.
- **Nv 10 — Golpe largo:** +50% de duración del aturdimiento.
- **Nv 15 — Conmoción:** +10% de prob. y las flechas ralentizan un 30%.
- **Nv 20 — Parálisis:** +15% de prob. y +50% de duración.

#### Flecha venenosa

Algunas flechas envenenan al enemigo.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 27% de las flechas envenenan |
| 5 | 35% de las flechas envenenan |
| 10 | 45% de las flechas envenenan |
| 15 | 55% de las flechas envenenan |
| 20 | 65% de las flechas envenenan |

- **Nv 5 — Veneno virulento:** +10% de prob. y +50% de daño del veneno.
- **Nv 10 — Veneno lento:** El veneno ralentiza un 30%.
- **Nv 15 — Veneno paralizante:** Las flechas envenenadas aturden 1 s (15%).
- **Nv 20 — Veneno letal:** Veneno x2 y +25% de prob.

#### Esquivar

Posibilidad de esquivar el daño que recibes.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 4% de esquiva |
| 5 | 9% de esquiva |
| 10 | 14% de esquiva |
| 15 | 19% de esquiva |
| 20 | 25% de esquiva |

- **Nv 5 — Pies ligeros:** +5% de esquiva.
- **Nv 10 — Reflejos:** +5% de esquiva y +2 vida/s.
- **Nv 15 — Piel curtida:** +5% de esquiva y -8% de daño recibido.
- **Nv 20 — Sombra veloz:** +8% de esquiva, -8% de daño y +3 vida/s.

#### Lluvia de flechas

Una lluvia de flechas cae sobre el mayor grupo de enemigos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 102 · 3.1 s · cada 15.5 s |
| 5 | Radio 110 · 3.5 s · cada 13.5 s |
| 10 | Radio 120 · 4.0 s · cada 11.0 s |
| 15 | Radio 130 · 4.5 s · cada 8.5 s |
| 20 | Radio 140 · 5.0 s · cada 8.0 s |

- **Nv 5 — Lluvia amplia:** +30% de radio.
- **Nv 10 — Lluvia larga:** +50% de duración.
- **Nv 15 — Doble lluvia:** Cae una lluvia más sobre otro grupo.
- **Nv 20 — Diluvio:** +60% de daño, -30% de enfriamiento y ralentiza.

#### Disparo certero

Un disparo potentísimo contra el enemigo más fuerte que atraviesa a todos los de su línea.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Daño x5 en línea · cada 13.7 s |
| 5 | Daño x5 en línea · cada 12.3 s |
| 10 | Daño x5 en línea · cada 10.5 s |
| 15 | Daño x5 en línea · cada 8.8 s |
| 20 | Daño x5 en línea · cada 7.0 s |

- **Nv 5 — Mira láser:** +40% de daño.
- **Nv 10 — Recarga ágil:** -30% de enfriamiento.
- **Nv 15 — Bala perforante:** +50% de daño y ejecuta bajo el 30% de vida.
- **Nv 20 — Doble disparo:** Un disparo más contra otro objetivo, +40% de daño y aturde 1 s.

#### Trampa de red

Lanzas una red sobre el mayor grupo: quedan inmovilizados y heridos, y la red sigue dañándolos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 72 · inmoviliza 3.1 s · cada 16.6 s |
| 5 | Radio 80 · inmoviliza 3.5 s · cada 15.0 s |
| 10 | Radio 90 · inmoviliza 4.0 s · cada 13.0 s |
| 15 | Radio 100 · inmoviliza 4.5 s · cada 11.0 s |
| 20 | Radio 110 · inmoviliza 5.0 s · cada 9.0 s |

- **Nv 5 — Red amplia:** +30% de radio.
- **Nv 10 — Red resistente:** +50% de duración y +50% de daño.
- **Nv 15 — Doble red:** Lanzas una red más sobre otro grupo.
- **Nv 20 — Red explosiva:** +60% de daño, -30% de enfriamiento y onda de choque.

#### Flecha perforante

Algunas flechas atraviesan a todos los enemigos en línea.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 9% de las flechas perforan |
| 5 | 12% de las flechas perforan |
| 10 | 16% de las flechas perforan |
| 15 | 20% de las flechas perforan |
| 20 | 24% de las flechas perforan |

- **Nv 5 — Punta afilada:** +8% de prob. de perforar.
- **Nv 10 — Punta de acero:** +50% de daño.
- **Nv 15 — Punta ardiente:** +10% de prob., +30% de daño y quema.
- **Nv 20 — Atravesador:** +15% de prob., +50% de daño y ejecuta bajo el 30% de vida.

#### Halcón compañero

Un halcón te acompaña, se lanza en picado sobre el enemigo más fuerte y lo marca: los marcados reciben más daño y tus flechas contra ellos son críticas.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Marca cada 3.3 s · +21% daño recibido · 6.2 s |
| 5 | Marca cada 3.0 s · +26% daño recibido · 7.0 s |
| 10 | Marca cada 2.6 s · +32% daño recibido · 8.0 s |
| 15 | Marca cada 2.2 s · +38% daño recibido · 9.0 s |
| 20 | Marca cada 1.8 s · +44% daño recibido · 10.0 s |

- **Nv 5 — Halcón veloz:** El halcón marca un 30% más rápido.
- **Nv 10 — Garras afiladas:** +50% de daño de las picadas.
- **Nv 15 — Ojo de águila:** Los marcados reciben +25% de daño y marcas 1 presa más.
- **Nv 20 — Rey de los cielos:** +1 presa, +40% de daño, -20% de enfriamiento y +50% de duración de la marca.

#### Flechas rebotantes

Algunas flechas rebotan al impactar y saltan a otros enemigos cercanos con parte de su daño.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 27% de las flechas · 2 rebotes · 80% de daño por rebote |
| 5 | 35% de las flechas · 2 rebotes · 80% de daño por rebote |
| 10 | 45% de las flechas · 3 rebotes · 80% de daño por rebote |
| 15 | 55% de las flechas · 4 rebotes · 80% de daño por rebote |
| 20 | 65% de las flechas · 4 rebotes · 80% de daño por rebote |

- **Nv 5 — Rebote largo:** +1 rebote.
- **Nv 10 — Flechas afiladas:** +30% de daño de los rebotes.
- **Nv 15 — Rebote frecuente:** +15% de probabilidad de rebotar.
- **Nv 20 — Tormenta de rebotes:** +2 rebotes, +30% de daño y +15% de probabilidad.

### Nigromante

Ejército de no-muertos: esqueletos, vampiros, momias, muro de huesos y dragón esqueleto.

Ataque básico: **Proyectil de hueso**, tipo dark, intervalo base 1 s. Potencia de habilidades: ×0.7.

#### Levantar esqueletos

Probabilidad de invocar un esqueleto cuando muere un enemigo. No caducan con el tiempo: solo mueren si los matan.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 17% prob. · 1 esqueleto(s) · no caducan, solo mueren en combate (máx. 6) |
| 5 | 25% prob. · 1 esqueleto(s) · no caducan, solo mueren en combate (máx. 7) |
| 10 | 35% prob. · 2 esqueleto(s) · no caducan, solo mueren en combate (máx. 9) |
| 15 | 45% prob. · 2 esqueleto(s) · no caducan, solo mueren en combate (máx. 11) |
| 20 | 55% prob. · 3 esqueleto(s) · no caducan, solo mueren en combate (máx. 12) |

- **Nv 5 — Cementerio:** +10% de prob. de levantar un esqueleto.
- **Nv 10 — Esqueletos de acero:** +50% de vida y +30% de daño.
- **Nv 15 — Legión:** +1 esqueleto por muerte y más límite.
- **Nv 20 — Ejército de huesos:** +10% de prob., +1 esqueleto, +40% de daño y +50% de vida.

#### Vampiros

Vampiros vuelan a tu alrededor y atacan a los enemigos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 2 vampiros permanentes que te curan al morder |
| 5 | 3 vampiros permanentes que te curan al morder |
| 10 | 4 vampiros permanentes que te curan al morder |
| 15 | 5 vampiros permanentes que te curan al morder |
| 20 | 6 vampiros permanentes que te curan al morder |

- **Nv 5 — Murciélago extra:** +1 vampiro.
- **Nv 10 — Vampiros feroces:** +40% de daño y +40% de vida.
- **Nv 15 — Sed de sangre:** Te curan el doble al morder.
- **Nv 20 — Colmena de sangre:** +2 vampiros, +40% de daño y curación x1,5.

#### Momias

Invoca momias resistentes que pelean contigo.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 2 momias resistentes · duran 35.6 s · cada 25.4 s |
| 5 | 2 momias resistentes · duran 38.0 s · cada 23.0 s |
| 10 | 3 momias resistentes · duran 41.0 s · cada 20.0 s |
| 15 | 4 momias resistentes · duran 44.0 s · cada 17.0 s |
| 20 | 5 momias resistentes · duran 47.0 s · cada 14.0 s |

- **Nv 5 — Momia extra:** +1 momia.
- **Nv 10 — Momias selladas:** +50% de vida.
- **Nv 15 — Maldición faraónica:** +50% de duración y +30% de daño.
- **Nv 20 — Guardia del faraón:** +1 momia, +50% de daño, +50% de vida y -25% de enfriamiento.

#### Dragón esqueleto

Cuando tu dragón muere, vuelve como dragón esqueleto y sigue peleando. Requiere comprar el huevo como todos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Hasta 1 dragón(es) esqueleto · fuerza 74% |
| 5 | Hasta 2 dragón(es) esqueleto · fuerza 88% |
| 10 | Hasta 3 dragón(es) esqueleto · fuerza 105% |
| 15 | Hasta 4 dragón(es) esqueleto · fuerza 123% |
| 20 | Hasta 5 dragón(es) esqueleto · fuerza 140% |

- **Nv 5 — Dragón extra:** +1 dragón esqueleto.
- **Nv 10 — Escamas de hueso:** +40% de fuerza (vida y daño).
- **Nv 15 — Aliento mortal:** +40% de daño de su fuego.
- **Nv 20 — Dragón ancestral:** +1 dragón, +40% de daño y +40% de fuerza.

#### Muro de huesos

Un anillo de huesos te rodea para siempre: empuja fuera a los enemigos que estén dentro, se regenera, se reconstruye si se rompe y hiere a quien lo ataca.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Anillo permanente · resiste 52 · se regenera y se reconstruye solo · daña a quien lo ataca |
| 5 | Anillo permanente · resiste 80 · se regenera y se reconstruye solo · daña a quien lo ataca |
| 10 | Anillo permanente · resiste 115 · se regenera y se reconstruye solo · daña a quien lo ataca |
| 15 | Anillo permanente · resiste 150 · se regenera y se reconstruye solo · daña a quien lo ataca |
| 20 | Anillo permanente · resiste 185 · se regenera y se reconstruye solo · daña a quien lo ataca |

- **Nv 5 — Huesos duros:** +50% de resistencia del muro.
- **Nv 10 — Espinas de hueso:** El doble de daño a quien lo ataca.
- **Nv 15 — Muro regenerador:** Se reconstruye un 40% más rápido y +50% de resistencia.
- **Nv 20 — Fortaleza de huesos:** Espinas x2, +50% de resistencia y -10% de daño recibido.

#### Pestilencia

Una nube de pestilencia te rodea, daña y ralentiza a los enemigos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 124 · ralentiza 32% y daña |
| 5 | Radio 140 · ralentiza 38% y daña |
| 10 | Radio 160 · ralentiza 45% y daña |
| 15 | Radio 180 · ralentiza 52% y daña |
| 20 | Radio 200 · ralentiza 60% y daña |

- **Nv 5 — Nube amplia:** +30% de radio.
- **Nv 10 — Peste virulenta:** +60% de daño.
- **Nv 15 — Peste paralizante:** Aturde brevemente a los enfermos.
- **Nv 20 — Plaga negra:** +30% de radio, +60% de daño y te cura con el daño.

#### Maldición

Maldice a los enemigos: reciben más daño durante unos segundos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +33% de daño recibido y -15% de su daño · 8.3 s · cada 17.5 s |
| 5 | +43% de daño recibido y -15% de su daño · 9.3 s · cada 15.5 s |
| 10 | +55% de daño recibido y -15% de su daño · 10.5 s · cada 13.0 s |
| 15 | +68% de daño recibido y -15% de su daño · 11.8 s · cada 10.5 s |
| 20 | +80% de daño recibido y -15% de su daño · 13.0 s · cada 9.0 s |

- **Nv 5 — Maldición profunda:** +15% de daño recibido por los malditos.
- **Nv 10 — Maldición duradera:** +50% de duración.
- **Nv 15 — Maldición letal:** +20% de daño recibido y -25% de enfriamiento.
- **Nv 20 — Condena:** +25% de daño recibido, +50% de duración y onda de choque al lanzarla.

#### Drenar vida

Drenas la vida de los enemigos más fuertes durante unos segundos y la conviertes en tu propia vida.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 2 objetivos · 3.1 s · cada 16.6 s |
| 5 | 2 objetivos · 3.4 s · cada 15.0 s |
| 10 | 3 objetivos · 3.8 s · cada 13.0 s |
| 15 | 4 objetivos · 4.2 s · cada 11.0 s |
| 20 | 5 objetivos · 4.6 s · cada 9.0 s |

- **Nv 5 — Drenaje largo:** +40% de duración.
- **Nv 10 — Doble drenaje:** +2 objetivos.
- **Nv 15 — Sed insaciable:** +60% de daño y curas casi el doble.
- **Nv 20 — Cosecha de almas:** +2 objetivos, +50% de daño, -30% de enfriamiento y escudo del 15%.

#### Lanza de huesos

Lanzas una enorme lanza de hueso que atraviesa a todos los enemigos en línea.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Daño x2,4 en línea · cada 8.8 s |
| 5 | Daño x2,4 en línea · cada 7.8 s |
| 10 | Daño x2,4 en línea · cada 6.5 s |
| 15 | Daño x2,4 en línea · cada 5.3 s |
| 20 | Daño x2,4 en línea · cada 4.0 s |

- **Nv 5 — Lanza extra:** Lanzas una lanza más.
- **Nv 10 — Lanza afilada:** +50% de daño.
- **Nv 15 — Lanza del abismo:** Ralentiza un 40% y a veces aturde.
- **Nv 20 — Lluvia de huesos:** +2 lanzas, +40% de daño, -30% de enfriamiento y explota.

#### Explosión de cadáveres

Los enemigos muertos pueden explotar y dañar a los de alrededor.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 13% prob. · radio 82 |
| 5 | 17% prob. · radio 89 |
| 10 | 22% prob. · radio 98 |
| 15 | 27% prob. · radio 107 |
| 20 | 32% prob. · radio 116 |

- **Nv 5 — Cadáveres inestables:** +30% de radio.
- **Nv 10 — Cadáveres tóxicos:** +60% de daño.
- **Nv 15 — Epidemia:** +10% de prob. de explosión.
- **Nv 20 — Cadena de explosiones:** +10% de prob., +50% de daño y +30% de radio.

#### Abominación

Fusionas esqueletos en una abominación de carne enorme y resistente que atrae a los enemigos y golpea con un hachazo brutal. Consume 2 esqueletos por abominación.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Vida 490 · dura 25.5 s · cada 39.1 s · consume 2 esqueletos |
| 5 | Vida 770 · dura 27.5 s · cada 35.5 s · consume 2 esqueletos |
| 10 | Vida 1120 · dura 30.0 s · cada 31.0 s · consume 2 esqueletos |
| 15 | Vida 1470 · dura 32.5 s · cada 26.5 s · consume 2 esqueletos |
| 20 | Vida 1820 · dura 35.0 s · cada 22.0 s · consume 2 esqueletos |

- **Nv 5 — Carne resistente:** +50% de vida.
- **Nv 10 — Hachazo brutal:** +50% de daño.
- **Nv 15 — Segunda abominación:** Fusionas una abominación más a la vez (necesita 2 esqueletos más).
- **Nv 20 — Coloso de huesos:** +50% de vida, +40% de daño, +30% de duración y -25% de enfriamiento.

#### Cosecha de almas

Cada baja te da un alma. Al juntar suficientes, liberas espíritus que persiguen a los enemigos y los hieren.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Cada 29 almas · 3 espíritus · daño x2 |
| 5 | Cada 27 almas · 4 espíritus · daño x2 |
| 10 | Cada 24 almas · 5 espíritus · daño x2 |
| 15 | Cada 21 almas · 6 espíritus · daño x2 |
| 20 | Cada 18 almas · 7 espíritus · daño x2 |

- **Nv 5 — Almas ávidas:** Necesitas un 20% menos de almas.
- **Nv 10 — Espíritus extra:** +2 espíritus por liberación.
- **Nv 15 — Almas ardientes:** +50% de daño.
- **Nv 20 — Cosecha suprema:** +2 espíritus, +40% de daño, -20% de almas y robo de vida.

### Enano artillero

Fusil, granadas, minas y torreta. Muy resistente.

Ataque básico: **Disparo de fusil**, tipo phys, intervalo base 1.2 s. Potencia de habilidades: ×1.3.

#### Golpe crítico

Tus disparos pueden hacer golpes críticos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 13% prob. · daño x2.1 |
| 5 | 23% prob. · daño x2.6 |
| 10 | 35% prob. · daño x3.2 |
| 15 | 48% prob. · daño x3.8 |
| 20 | 60% prob. · daño x4.4 |

- **Nv 5 — Ojo de artillero:** +10% de prob. de crítico.
- **Nv 10 — Impacto brutal:** +40% de daño crítico.
- **Nv 15 — Pólvora sedienta:** +10% de prob. y los críticos te curan.
- **Nv 20 — Ejecutor:** +100% de daño a enemigos bajo el 25% de vida y +30% de crítico.

#### Velocidad de golpe

Disparas más rápido.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +4% velocidad de disparo |
| 5 | +20% velocidad de disparo |
| 10 | +40% velocidad de disparo |
| 15 | +60% velocidad de disparo |
| 20 | +80% velocidad de disparo |

- **Nv 5 — Gatillo ágil:** +12% de velocidad de disparo.
- **Nv 10 — Recarga rápida:** +12% de velocidad de disparo.
- **Nv 15 — Cañón engrasado:** +15% de velocidad de disparo.
- **Nv 20 — Fuego a discreción:** +25% de velocidad de disparo.

#### Golpe múltiple

Cada disparo se convierte en una ráfaga.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 disparos por ráfaga |
| 5 | 2 disparos por ráfaga |
| 10 | 3 disparos por ráfaga |
| 15 | 4 disparos por ráfaga |
| 20 | 4 disparos por ráfaga |

- **Nv 5 — Ráfaga extra:** +1 disparo por ráfaga.
- **Nv 10 — Balas pesadas:** +25% de daño.
- **Nv 15 — Balas explosivas:** +1 disparo y explotan en área (40%).
- **Nv 20 — Ametralladora:** +2 disparos y +30% de daño.

#### Disparo aturdidor

Posibilidad de aturdir al enemigo golpeado.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 7% prob. · 0.8 s |
| 5 | 12% prob. · 0.9 s |
| 10 | 18% prob. · 1.0 s |
| 15 | 24% prob. · 1.1 s |
| 20 | 30% prob. · 1.2 s |

- **Nv 5 — Impacto aturdidor:** +8% de prob. de aturdir.
- **Nv 10 — Golpe largo:** +50% de duración del aturdimiento.
- **Nv 15 — Conmoción:** +10% de prob. y los disparos ralentizan un 30%.
- **Nv 20 — Parálisis:** +15% de prob. y +50% de duración.

#### Lanzagranadas

Lanza granadas que explotan tras un instante.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 granada(s) · radio 72 · cada 6.3 s |
| 5 | 1 granada(s) · radio 78 · cada 5.8 s |
| 10 | 2 granada(s) · radio 85 · cada 5.0 s |
| 15 | 3 granada(s) · radio 93 · cada 4.3 s |
| 20 | 4 granada(s) · radio 100 · cada 3.5 s |

- **Nv 5 — Granada extra:** +1 granada.
- **Nv 10 — Granada grande:** +30% de radio.
- **Nv 15 — Granadas incendiarias:** +40% de daño y queman.
- **Nv 20 — Bombardeo:** +2 granadas, +40% de daño y -30% de enfriamiento.

#### Campo minado

Siembra minas a tu alrededor que explotan al pisarlas.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Hasta 4 minas · radio 61 |
| 5 | Hasta 6 minas · radio 66 |
| 10 | Hasta 9 minas · radio 72 |
| 15 | Hasta 11 minas · radio 78 |
| 20 | Hasta 14 minas · radio 84 |

- **Nv 5 — Más minas:** +3 minas máximas.
- **Nv 10 — Minas grandes:** +30% de radio y +40% de daño.
- **Nv 15 — Minas rápidas:** Siembras minas un 40% más rápido.
- **Nv 20 — Campo letal:** +6 minas máximas, +50% de daño y aturden 1 s.

#### Torreta

Despliega torretas automáticas que disparan a los enemigos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 torreta(s) · duran 25.5 s · cada 35.2 s |
| 5 | 1 torreta(s) · duran 27.5 s · cada 32.0 s |
| 10 | 2 torreta(s) · duran 30.0 s · cada 28.0 s |
| 15 | 2 torreta(s) · duran 32.5 s · cada 24.0 s |
| 20 | 3 torreta(s) · duran 35.0 s · cada 20.0 s |

- **Nv 5 — Torreta extra:** +1 torreta.
- **Nv 10 — Torretas reforzadas:** +50% de duración.
- **Nv 15 — Cadencia:** Disparan y se reponen un 30% más rápido, +30% de daño.
- **Nv 20 — Fortín:** +1 torreta, +50% de daño y sus disparos explotan.

#### Cañonazo

Un proyectil de cañón cae sobre el mayor grupo: explosión enorme que empuja a los enemigos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 92 · daño x4 · cada 14.7 s |
| 5 | Radio 100 · daño x4 · cada 13.3 s |
| 10 | Radio 110 · daño x4 · cada 11.5 s |
| 15 | Radio 120 · daño x4 · cada 9.8 s |
| 20 | Radio 130 · daño x4 · cada 8.0 s |

- **Nv 5 — Bala grande:** +30% de radio.
- **Nv 10 — Pólvora negra:** +50% de daño.
- **Nv 15 — Doble cañonazo:** Un cañonazo más sobre otro grupo.
- **Nv 20 — Artillería pesada:** +1 cañonazo, +40% de daño, -30% de enfriamiento y aturde 1,5 s.

#### Golpe sísmico

Golpeas el suelo con tu martillo: una onda hiere, aturde y empuja a todos los que te rodean.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 133 · aturde 1.0 s · cada 14.7 s |
| 5 | Radio 145 · aturde 1.2 s · cada 13.3 s |
| 10 | Radio 160 · aturde 1.4 s · cada 11.5 s |
| 15 | Radio 175 · aturde 1.6 s · cada 9.8 s |
| 20 | Radio 190 · aturde 1.8 s · cada 8.0 s |

- **Nv 5 — Temblor amplio:** +30% de radio.
- **Nv 10 — Martillazo:** +50% de daño.
- **Nv 15 — Réplica:** Una segunda onda sísmica.
- **Nv 20 — Terremoto:** +30% de radio, +40% de daño, -30% de enfriamiento y escudo del 15%.

#### Armadura de hierro

Más vida máxima y menos daño recibido.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +4% vida · -1.2% daño recibido |
| 5 | +20% vida · -6.0% daño recibido |
| 10 | +40% vida · -12.0% daño recibido |
| 15 | +60% vida · -18.0% daño recibido |
| 20 | +80% vida · -24.0% daño recibido |

- **Nv 5 — Coraza:** +15% de vida máxima.
- **Nv 10 — Piel de hierro:** -8% de daño recibido y +3 vida/s.
- **Nv 15 — Forja enana:** +20% de vida máxima y +3 vida/s.
- **Nv 20 — Inquebrantable:** +20% de vida, -10% de daño recibido y +5 vida/s.

#### Lanzallamas

Desatas un chorro de fuego en cono contra los enemigos cercanos: daño continuo y quemadura.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Alcance 172 · 3.1 s · cada 15.6 s |
| 5 | Alcance 180 · 3.5 s · cada 14.0 s |
| 10 | Alcance 190 · 4.0 s · cada 12.0 s |
| 15 | Alcance 200 · 4.5 s · cada 10.0 s |
| 20 | Alcance 210 · 5.0 s · cada 9.0 s |

- **Nv 5 — Depósito grande:** +40% de duración.
- **Nv 10 — Fuego intenso:** +50% de daño.
- **Nv 15 — Llama larga:** +30% de alcance y de ángulo.
- **Nv 20 — Napalm:** +40% de daño, +30% de duración, -25% de enfriamiento y quemadura intensa.

#### Cohetes teledirigidos

Lanzas una salva de cohetes que persiguen a distintos enemigos y explotan en área.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 3 cohetes · radio 64 · daño x1,9 · cada 13.7 s |
| 5 | 4 cohetes · radio 70 · daño x1,9 · cada 12.3 s |
| 10 | 5 cohetes · radio 77 · daño x1,9 · cada 10.5 s |
| 15 | 6 cohetes · radio 85 · daño x1,9 · cada 8.8 s |
| 20 | 8 cohetes · radio 92 · daño x1,9 · cada 7.0 s |

- **Nv 5 — Salva ampliada:** +2 cohetes.
- **Nv 10 — Ojiva grande:** +30% de radio de explosión y +20% de daño.
- **Nv 15 — Carga explosiva:** +50% de daño.
- **Nv 20 — Lluvia de misiles:** +3 cohetes, +30% de daño y -25% de enfriamiento.

### Orco guerrero

Guerrero cuerpo a cuerpo: corre hacia los enemigos y les lanza a quemarropa hachas giratorias que van y vuelven atravesándolos. La furia lo hace más fuerte al estar herido.

Ataque básico: **Hacha giratoria**, tipo phys, intervalo base 1 s. Potencia de habilidades: ×0.35.

#### Golpe crítico

Tus hachas pueden hacer golpes críticos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 12% prob. · daño x2.1 |
| 5 | 20% prob. · daño x2.5 |
| 10 | 30% prob. · daño x3.0 |
| 15 | 40% prob. · daño x3.5 |
| 20 | 50% prob. · daño x4.0 |

- **Nv 5 — Ojo de sangre:** +10% de prob. de crítico.
- **Nv 10 — Hachazo brutal:** +40% de daño crítico.
- **Nv 15 — Sed de sangre:** +10% de prob. y los críticos te curan.
- **Nv 20 — Verdugo:** +100% de daño a enemigos bajo el 25% de vida y +30% de crítico.

#### Hachas múltiples

Lanzas varias hachas a la vez, cada una a un enemigo distinto.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 hachas por lanzamiento |
| 5 | 1 hachas por lanzamiento |
| 10 | 2 hachas por lanzamiento |
| 15 | 2 hachas por lanzamiento |
| 20 | 3 hachas por lanzamiento |

- **Nv 5 — Hacha extra:** +1 hacha por lanzamiento.
- **Nv 10 — Hachas pesadas:** +25% de daño.
- **Nv 15 — Hachas explosivas:** +1 hacha y explotan en área (40%).
- **Nv 20 — Lluvia de hachas:** +2 hachas y +30% de daño.

#### Velocidad de lanzamiento

Lanzas las hachas más rápido.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +4% velocidad de lanzamiento |
| 5 | +20% velocidad de lanzamiento |
| 10 | +40% velocidad de lanzamiento |
| 15 | +60% velocidad de lanzamiento |
| 20 | +80% velocidad de lanzamiento |

- **Nv 5 — Brazo ágil:** +12% de velocidad de lanzamiento.
- **Nv 10 — Ritmo de batalla:** +12% de velocidad de lanzamiento.
- **Nv 15 — Músculos de acero:** +15% de velocidad de lanzamiento.
- **Nv 20 — Frenesí de hachas:** +25% de velocidad de lanzamiento.

#### Hachas gigantes

Tus hachas crecen de tamaño: golpean a muchos más enemigos a la vez y pegan más fuerte.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +5% de tamaño · +2% de daño |
| 5 | +25% de tamaño · +10% de daño |
| 10 | +50% de tamaño · +20% de daño |
| 15 | +75% de tamaño · +30% de daño |
| 20 | +100% de tamaño · +40% de daño |

- **Nv 5 — Hojas anchas:** +20% de tamaño de las hachas.
- **Nv 10 — Hojas afiladas:** +30% de daño.
- **Nv 15 — Atraviesan más:** Cada hacha golpea a 3 enemigos más.
- **Nv 20 — Hachas colosales:** +30% de tamaño, +50% de daño y +3 golpes.

#### Sangrado

Las hachas hacen sangrar a los enemigos (daño en el tiempo que se acumula).

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Sangrado durante 4 s · 26% del golpe por segundo (se acumula) |
| 5 | Sangrado durante 4 s · 30% del golpe por segundo (se acumula) |
| 10 | Sangrado durante 4 s · 35% del golpe por segundo (se acumula) |
| 15 | Sangrado durante 4 s · 40% del golpe por segundo (se acumula) |
| 20 | Sangrado durante 4 s · 45% del golpe por segundo (se acumula) |

- **Nv 5 — Hemorragia:** +50% de sangrado.
- **Nv 10 — Heridas lentas:** Las hachas ralentizan un 30%.
- **Nv 15 — Heridas aturdidoras:** Las hachas aturden 0,8 s (15%).
- **Nv 20 — Desangrado:** Sangrado x2.

#### Furia

Cada enemigo que matas te da furia: más daño y más velocidad durante unos segundos. Con poca vida, aún más.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +1.1% por baja (hasta 10 bajas, 4 s) · +32% con poca vida |
| 5 | +1.4% por baja (hasta 12 bajas, 4 s) · +40% con poca vida |
| 10 | +1.8% por baja (hasta 15 bajas, 4 s) · +50% con poca vida |
| 15 | +2.2% por baja (hasta 17 bajas, 4 s) · +60% con poca vida |
| 20 | +2.6% por baja (hasta 20 bajas, 4 s) · +70% con poca vida |

- **Nv 5 — Furia creciente:** +5 acumulaciones máximas.
- **Nv 10 — Furia larga:** +50% de duración.
- **Nv 15 — Furia curativa:** Cada baja te cura un 0,8% de vida.
- **Nv 20 — Furia ciega:** +5 acumulaciones y +30% de efecto de la furia.

#### Torbellino de hachas

Unas hachas giran a tu alrededor un rato y trituran a quien se acerque.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 144 · 5.2 s · cada 12.7 s · daño alto |
| 5 | Radio 160 · 5.8 s · cada 11.3 s · daño alto |
| 10 | Radio 180 · 6.5 s · cada 9.5 s · daño alto |
| 15 | Radio 200 · 7.3 s · cada 7.8 s · daño alto |
| 20 | Radio 220 · 8.0 s · cada 7.0 s · daño alto |

- **Nv 5 — Torbellino amplio:** +30% de radio.
- **Nv 10 — Torbellino largo:** +50% de duración.
- **Nv 15 — Hachas afiladas:** +60% de daño y ralentiza.
- **Nv 20 — Ciclón de acero:** +30% de radio, +50% de daño, -30% de enfriamiento y robo de vida.

#### Decapitador

Golpeas a los enemigos más débiles: los que están por debajo del 30% de vida mueren al instante.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 2 objetivos · ejecuta bajo el 30% · cada 12.7 s |
| 5 | 2 objetivos · ejecuta bajo el 30% · cada 11.5 s |
| 10 | 3 objetivos · ejecuta bajo el 30% · cada 10.0 s |
| 15 | 4 objetivos · ejecuta bajo el 30% · cada 8.5 s |
| 20 | 5 objetivos · ejecuta bajo el 30% · cada 7.0 s |

- **Nv 5 — Filo cruel:** +40% de daño.
- **Nv 10 — Ritmo del verdugo:** -30% de enfriamiento.
- **Nv 15 — Lista de la muerte:** +2 objetivos.
- **Nv 20 — Verdugo supremo:** +2 objetivos, +50% de daño y robo de vida.

#### ★ Berserker (ULTIMATE)

Entras en trance: atacas un 60% más rápido, pegas un 40% más fuerte, recibes un 40% menos de daño y te curas.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 8.3 s · +60% velocidad · +40% daño · -40% daño recibido · cada 68.5 s |
| 5 | 9.5 s · +60% velocidad · +40% daño · -40% daño recibido · cada 62.5 s |
| 10 | 11.0 s · +60% velocidad · +40% daño · -40% daño recibido · cada 55.0 s |
| 15 | 12.5 s · +60% velocidad · +40% daño · -40% daño recibido · cada 47.5 s |
| 20 | 14.0 s · +60% velocidad · +40% daño · -40% daño recibido · cada 40.0 s |

- **Nv 5 — Rabia duradera:** +30% de duración.
- **Nv 10 — Sed de sangre:** El doble de curación durante el berserker.
- **Nv 15 — Furia desatada:** +30% de daño y -25% de enfriamiento.
- **Nv 20 — Dios de la guerra:** +30% de duración, +40% de daño y +50% de curación.

#### Grito de guerra

Aturde y empuja a los enemigos cercanos y te da más velocidad de ataque unos segundos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 204 · aturde 1.3 s · cada 19.6 s · +50% velocidad |
| 5 | Radio 220 · aturde 1.4 s · cada 18.0 s · +50% velocidad |
| 10 | Radio 240 · aturde 1.7 s · cada 16.0 s · +50% velocidad |
| 15 | Radio 260 · aturde 1.9 s · cada 14.0 s · +50% velocidad |
| 20 | Radio 280 · aturde 2.2 s · cada 12.0 s · +50% velocidad |

- **Nv 5 — Grito potente:** +30% de radio.
- **Nv 10 — Grito paralizante:** +50% de duración del aturdimiento.
- **Nv 15 — Grito de guerra:** +50% de daño y +3 s de velocidad.
- **Nv 20 — Grito del rey:** -30% de enfriamiento, escudo del 20% y onda de choque.

#### Hacha con cadena

Lanzas un hacha encadenada contra los enemigos más fuertes: los hieres, los arrastras hasta ti y los aturdes (los jefes solo se ralentizan).

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 objetivo(s) · aturde 0.9 s · cada 13.7 s |
| 5 | 1 objetivo(s) · aturde 1.1 s · cada 12.3 s |
| 10 | 2 objetivo(s) · aturde 1.2 s · cada 10.5 s |
| 15 | 2 objetivo(s) · aturde 1.4 s · cada 8.8 s |
| 20 | 3 objetivo(s) · aturde 1.5 s · cada 7.0 s |

- **Nv 5 — Cadena larga:** +30% de alcance.
- **Nv 10 — Gancho pesado:** +50% de daño.
- **Nv 15 — Doble gancho:** +1 objetivo.
- **Nv 20 — Cazador de presas:** +1 objetivo, +40% de daño, -25% de enfriamiento y +50% de aturdimiento.

#### Hachas ardientes

Tus hachas giratorias arden: queman a los enemigos que golpean y dejan una estela de fuego a su paso.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Estela 2.1 s · radio 23 · +2% de daño de las hachas |
| 5 | Estela 2.3 s · radio 25 · +10% de daño de las hachas |
| 10 | Estela 2.6 s · radio 27 · +20% de daño de las hachas |
| 15 | Estela 2.9 s · radio 30 · +30% de daño de las hachas |
| 20 | Estela 3.2 s · radio 32 · +40% de daño de las hachas |

- **Nv 5 — Brasas duraderas:** +50% de duración de las llamas.
- **Nv 10 — Hierro al rojo:** +40% de daño de la estela.
- **Nv 15 — Estela ancha:** +40% de tamaño de las llamas.
- **Nv 20 — Infierno de acero:** +40% de daño, +30% de duración, +20% de tamaño y quemadura.

### Cazador demonio

Inspirado en los cazadores de demonios: dos guadañas de energía vil, metamorfosis, rayos oculares, aura de fuego y evasión.

Ataque básico: **Guadañas viles**, tipo magic, intervalo base 0.85 s. Potencia de habilidades: ×1.6.

#### Metamorfosis

Te transformas en un demonio alado: lanzas 3 guadañas, atacas más rápido, pegas más fuerte y te regeneras.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 8.3 s · +32% daño · +40% velocidad · cada 29.4 s |
| 5 | 9.5 s · +40% daño · +40% velocidad · cada 27.0 s |
| 10 | 11.0 s · +50% daño · +40% velocidad · cada 24.0 s |
| 15 | 12.5 s · +60% daño · +40% velocidad · cada 21.0 s |
| 20 | 14.0 s · +70% daño · +40% velocidad · cada 18.0 s |

- **Nv 5 — Forma duradera:** +30% de duración.
- **Nv 10 — Alas veloces:** +20% de velocidad de ataque.
- **Nv 15 — Regeneración vil:** Regeneras el doble y +20% de daño.
- **Nv 20 — Señor demonio:** +30% de duración, -30% de enfriamiento, +30% de daño y onda de choque.

#### Aura de inmolación

Un aura de fuego vil te rodea y quema a los enemigos que se acercan.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 114 · golpea cada 0,5 s |
| 5 | Radio 130 · golpea cada 0,5 s |
| 10 | Radio 150 · golpea cada 0,5 s |
| 15 | Radio 170 · golpea cada 0,5 s |
| 20 | Radio 190 · golpea cada 0,5 s |

- **Nv 5 — Aura amplia:** +30% de radio.
- **Nv 10 — Fuego voraz:** +50% de daño.
- **Nv 15 — Llama lenta:** Pulsa un 30% más rápido y ralentiza.
- **Nv 20 — Inmolación total:** +30% de radio, +60% de daño y robo de vida.

#### Rayos oculares

Tus ojos disparan rayos de energía que atraviesan a todos los enemigos en línea.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 rayo(s) · cada 9.8 s |
| 5 | 2 rayo(s) · cada 8.8 s |
| 10 | 3 rayo(s) · cada 7.5 s |
| 15 | 4 rayo(s) · cada 6.3 s |
| 20 | 5 rayo(s) · cada 5.0 s |

- **Nv 5 — Tercer ojo:** +1 rayo.
- **Nv 10 — Mirada ardiente:** +50% de daño y queman.
- **Nv 15 — Mirada paralizante:** +1 rayo y aturden 1 s (40%).
- **Nv 20 — Ojos del abismo:** +2 rayos, +40% de daño y -30% de enfriamiento.

#### Evasión

Posibilidad de esquivar el daño que recibes.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 6% de esquiva |
| 5 | 12% de esquiva |
| 10 | 18% de esquiva |
| 15 | 25% de esquiva |
| 20 | 30% de esquiva |

- **Nv 5 — Pies ligeros:** +5% de esquiva.
- **Nv 10 — Reflejos:** +5% de esquiva y +2 vida/s.
- **Nv 15 — Piel vil:** +5% de esquiva y -8% de daño recibido.
- **Nv 20 — Sombra del abismo:** +8% de esquiva, -8% de daño y +3 vida/s.

#### Quemadura vil

Tus guadañas queman a los enemigos con energía vil (daño en el tiempo que se acumula).

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 27% del golpe por segundo durante 4 s |
| 5 | 35% del golpe por segundo durante 4 s |
| 10 | 45% del golpe por segundo durante 4 s |
| 15 | 55% del golpe por segundo durante 4 s |
| 20 | 65% del golpe por segundo durante 4 s |

- **Nv 5 — Llama viva:** +50% del daño de la quemadura.
- **Nv 10 — Llama pegajosa:** Las guadañas ralentizan un 30%.
- **Nv 15 — Llama voraz:** +60% del daño de la quemadura.
- **Nv 20 — Infierno vil:** La quemadura hace el doble de daño.

#### Golpe de sombras

Golpea con sombras a los enemigos más duros del mapa y los ralentiza.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 2 objetivos · cada 10.7 s |
| 5 | 3 objetivos · cada 9.5 s |
| 10 | 4 objetivos · cada 8.0 s |
| 15 | 5 objetivos · cada 6.5 s |
| 20 | 7 objetivos · cada 6.0 s |

- **Nv 5 — Más sombras:** +2 objetivos.
- **Nv 10 — Sombras profundas:** +50% de daño.
- **Nv 15 — Sombras aturdidoras:** Aturden 1,5 s.
- **Nv 20 — Legión de sombras:** +3 objetivos, +40% de daño y -30% de enfriamiento.

#### Cazador de demonios

Más daño contra jefes y enemigos que disparan, y recuperas vida con cada baja.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +3% de daño a jefes y tiradores · cura 0.4% de vida por baja |
| 5 | +15% de daño a jefes y tiradores · cura 0.6% de vida por baja |
| 10 | +30% de daño a jefes y tiradores · cura 0.8% de vida por baja |
| 15 | +45% de daño a jefes y tiradores · cura 1.0% de vida por baja |
| 20 | +60% de daño a jefes y tiradores · cura 1.2% de vida por baja |

- **Nv 5 — Cazador veterano:** +20% de daño a jefes y tiradores.
- **Nv 10 — Cosecha vil:** Curas un 0,6% más de vida por baja.
- **Nv 15 — Cazador implacable:** +30% de daño a jefes y +3 vida/s.
- **Nv 20 — Azote de demonios:** +40% de daño a jefes, +1% de vida por baja y -10% de daño recibido.

#### Vacío vil

Abres un agujero oscuro que atrae a los enemigos hacia su centro y los desgarra.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 112 · dura 3.1 s · cada 17.6 s |
| 5 | Radio 120 · dura 3.5 s · cada 16.0 s |
| 10 | Radio 130 · dura 4.0 s · cada 14.0 s |
| 15 | Radio 140 · dura 4.5 s · cada 12.0 s |
| 20 | Radio 150 · dura 5.0 s · cada 10.0 s |

- **Nv 5 — Vacío amplio:** +30% de radio.
- **Nv 10 — Vacío duradero:** +50% de duración.
- **Nv 15 — Vacío devorador:** +60% de daño.
- **Nv 20 — Doble vacío:** Un vacío más, -30% de enfriamiento y +40% de daño.

#### Tormenta de guadañas

Guadañas viles giran a tu alrededor un rato y trituran a todo el que se acerque.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 3 guadañas · 4.1 s · cada 15.7 s |
| 5 | 3 guadañas · 4.6 s · cada 14.3 s |
| 10 | 4 guadañas · 5.2 s · cada 12.5 s |
| 15 | 4 guadañas · 5.8 s · cada 10.8 s |
| 20 | 5 guadañas · 6.4 s · cada 9.0 s |

- **Nv 5 — Más guadañas:** +2 guadañas.
- **Nv 10 — Guadañas afiladas:** +50% de daño.
- **Nv 15 — Tormenta larga:** +50% de duración.
- **Nv 20 — Huracán vil:** +3 guadañas, +50% de daño, -30% de enfriamiento y robo de vida.

#### Caos vil

Una explosión de caos hiere a todos los enemigos a tu alcance y los hace huir unos segundos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Daño alto · huyen 2.1 s · cada 31.3 s |
| 5 | Daño alto · huyen 2.3 s · cada 28.5 s |
| 10 | Daño alto · huyen 2.6 s · cada 25.0 s |
| 15 | Daño alto · huyen 2.9 s · cada 21.5 s |
| 20 | Daño alto · huyen 3.2 s · cada 18.0 s |

- **Nv 5 — Caos amplio:** +30% de radio.
- **Nv 10 — Terror prolongado:** +50% de duración de la huida.
- **Nv 15 — Caos destructor:** +60% de daño.
- **Nv 20 — Caos absoluto:** +30% de radio, +50% de daño, -30% de enfriamiento y aturde 1 s.

#### Fragmentos de alma

Los enemigos caídos pueden soltar fragmentos de alma. Al recogerlos te curas y ganas daño acumulable durante unos segundos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 42% prob. · cura 0.6% · +2.1% daño por fragmento (máx. 6) |
| 5 | 50% prob. · cura 0.8% · +2.5% daño por fragmento (máx. 7) |
| 10 | 60% prob. · cura 1.0% · +3.0% daño por fragmento (máx. 8) |
| 15 | 70% prob. · cura 1.2% · +3.5% daño por fragmento (máx. 9) |
| 20 | 80% prob. · cura 1.4% · +4.0% daño por fragmento (máx. 11) |

- **Nv 5 — Fragmentos nutritivos:** +50% de curación por fragmento.
- **Nv 10 — Imán de almas:** +50% de radio de atracción y +15% de probabilidad de aparecer.
- **Nv 15 — Poder demoníaco:** +5 acumulaciones máximas y +50% de duración.
- **Nv 20 — Cosecha vil:** Al recoger con el máximo, el fragmento estalla en área; +50% de curación.

#### Paso de sombra

Te desvaneces y reapareces junto a los enemigos más fuertes, hiriéndolos con un tajo de sombras y ralentizándolos. Eres intocable mientras dura.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 2 objetivos · daño x2,5 · cada 9.8 s |
| 5 | 2 objetivos · daño x2,5 · cada 8.8 s |
| 10 | 3 objetivos · daño x2,5 · cada 7.5 s |
| 15 | 4 objetivos · daño x2,5 · cada 6.3 s |
| 20 | 5 objetivos · daño x2,5 · cada 5.0 s |

- **Nv 5 — Paso extra:** +1 objetivo.
- **Nv 10 — Filo sombrío:** +50% de daño.
- **Nv 15 — Paso veloz:** -30% de enfriamiento.
- **Nv 20 — Danza de sombras:** +2 objetivos, +40% de daño y -25% de enfriamiento.

### Sacerdote

Luz sagrada: halo, juicio, ángeles guardianes, consagración y curación. Purifica a los enemigos (les quita la invulnerabilidad, la curación y la resurrección) y puede resucitar una vez.

Ataque básico: **Rayo sagrado**, tipo divine, intervalo base 1 s. Potencia de habilidades: ×1.2.

#### Plegaria de sanación

Cada cierto tiempo te curas una parte de tu vida y curas también a tus aliados.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Cura 8.6% de la vida · cada 11.7 s |
| 5 | Cura 11.0% de la vida · cada 10.3 s |
| 10 | Cura 14.0% de la vida · cada 8.5 s |
| 15 | Cura 17.0% de la vida · cada 6.8 s |
| 20 | Cura 20.0% de la vida · cada 5.0 s |

- **Nv 5 — Plegaria fuerte:** +30% de curación.
- **Nv 10 — Plegaria veloz:** -30% de enfriamiento.
- **Nv 15 — Plegaria radiante:** Al curar lanza una onda de luz que daña a los enemigos.
- **Nv 20 — Plegaria suprema:** +40% de curación, -25% de enfriamiento y escudo del 10%.

#### Halo sagrado

Un halo de luz te rodea y quema con daño divino a los enemigos que se acercan.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 114 · golpea cada 0,5 s |
| 5 | Radio 130 · golpea cada 0,5 s |
| 10 | Radio 150 · golpea cada 0,5 s |
| 15 | Radio 170 · golpea cada 0,5 s |
| 20 | Radio 190 · golpea cada 0,5 s |

- **Nv 5 — Halo amplio:** +30% de radio.
- **Nv 10 — Luz abrasadora:** +50% de daño.
- **Nv 15 — Luz lenta:** Pulsa un 30% más rápido y ralentiza.
- **Nv 20 — Halo supremo:** +30% de radio, +60% de daño y robo de vida.

#### Juicio

Rayos de luz caen del cielo sobre los enemigos más fuertes a tu alcance.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 rayo(s) · cada 8.8 s |
| 5 | 2 rayo(s) · cada 7.8 s |
| 10 | 3 rayo(s) · cada 6.5 s |
| 15 | 4 rayo(s) · cada 5.3 s |
| 20 | 6 rayo(s) · cada 4.0 s |

- **Nv 5 — Rayo extra:** +1 rayo.
- **Nv 10 — Juicio severo:** +50% de daño.
- **Nv 15 — Juicio paralizante:** Los rayos aturden 1 s (60%).
- **Nv 20 — Tormenta divina:** +2 rayos, +40% de daño y -30% de enfriamiento.

#### Ángeles guardianes

Ángeles permanentes vuelan a tu alrededor y atacan con daño divino.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 ángel(es) permanentes |
| 5 | 2 ángel(es) permanentes |
| 10 | 3 ángel(es) permanentes |
| 15 | 4 ángel(es) permanentes |
| 20 | 4 ángel(es) permanentes |

- **Nv 5 — Ángel extra:** +1 ángel.
- **Nv 10 — Ángeles fuertes:** +40% de daño y +40% de vida.
- **Nv 15 — Coro celestial:** +1 ángel y +30% de vida.
- **Nv 20 — Serafines:** +1 ángel, +50% de daño y +50% de vida.

#### Barrera divina

Recibes menos daño y una barrera de luz absorbe golpes cada cierto tiempo.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | -1.2% daño recibido · barrera 11% de la vida cada 19.5 s |
| 5 | -6.0% daño recibido · barrera 15% de la vida cada 17.5 s |
| 10 | -12.0% daño recibido · barrera 20% de la vida cada 15.0 s |
| 15 | -18.0% daño recibido · barrera 25% de la vida cada 12.5 s |
| 20 | -24.0% daño recibido · barrera 30% de la vida cada 10.0 s |

- **Nv 5 — Barrera gruesa:** La barrera es un 50% mayor.
- **Nv 10 — Recarga rápida:** -30% de enfriamiento.
- **Nv 15 — Barrera radiante:** -8% de daño recibido y onda de luz al crearla.
- **Nv 20 — Égida divina:** Barrera +50%, -8% de daño recibido y +3 vida/s.

#### Consagración

Consagra el suelo bajo el mayor grupo de enemigos: daño divino continuo.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 92 · 4.1 s · cada 11.7 s |
| 5 | Radio 100 · 4.5 s · cada 10.5 s |
| 10 | Radio 110 · 5.0 s · cada 9.0 s |
| 15 | Radio 120 · 5.5 s · cada 7.5 s |
| 20 | Radio 130 · 6.0 s · cada 6.0 s |

- **Nv 5 — Suelo amplio:** +30% de radio.
- **Nv 10 — Suelo duradero:** +50% de duración.
- **Nv 15 — Doble consagración:** Consagras otro grupo a la vez.
- **Nv 20 — Tierra sagrada:** +60% de daño, -30% de enfriamiento y robo de vida.

#### Purificación

Una onda sagrada daña a los enemigos a tu alcance, les quita la invulnerabilidad y les impide curarse, regenerarse y resucitar durante unos segundos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Purifica 4.2 s · cada 15.6 s |
| 5 | Purifica 4.8 s · cada 14.0 s |
| 10 | Purifica 5.5 s · cada 12.0 s |
| 15 | Purifica 6.3 s · cada 10.0 s |
| 20 | Purifica 7.0 s · cada 8.0 s |

- **Nv 5 — Onda amplia:** +30% de radio.
- **Nv 10 — Purga larga:** +50% de duración.
- **Nv 15 — Purga ardiente:** +60% de daño.
- **Nv 20 — Juicio final:** +30% de radio, +40% de daño, -30% de enfriamiento y aturde 1,5 s.

#### ★ Nova de luz (ULTIMATE)

Una explosión de luz sagrada hiere a todos los enemigos a tu alcance y cura a tus aliados y a ti.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Daño x4 · cura 20.5% · cada 53.8 s |
| 5 | Daño x4 · cura 22.5% · cada 49.0 s |
| 10 | Daño x4 · cura 25.0% · cada 43.0 s |
| 15 | Daño x4 · cura 27.5% · cada 37.0 s |
| 20 | Daño x4 · cura 30.0% · cada 31.0 s |

- **Nv 5 — Nova ardiente:** +40% de daño.
- **Nv 10 — Nova ancha:** +30% de radio.
- **Nv 15 — Nova sanadora:** +50% de curación y escudo del 20%.
- **Nv 20 — Nova doble:** +50% de daño, -30% de enfriamiento y una segunda explosión.

#### Cadenas de luz

Cadenas de luz atrapan a los enemigos más fuertes: inmóviles, heridos y más vulnerables.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 2 objetivos · inmoviliza 3.1 s · cada 14.7 s |
| 5 | 2 objetivos · inmoviliza 3.5 s · cada 13.3 s |
| 10 | 3 objetivos · inmoviliza 4.0 s · cada 11.5 s |
| 15 | 4 objetivos · inmoviliza 4.5 s · cada 9.8 s |
| 20 | 5 objetivos · inmoviliza 5.0 s · cada 8.0 s |

- **Nv 5 — Cadenas largas:** +50% de duración.
- **Nv 10 — Más cadenas:** +2 objetivos.
- **Nv 15 — Cadenas ardientes:** +50% de daño y los presos reciben +20% de daño.
- **Nv 20 — Prisión divina:** +2 objetivos, +40% de daño, -30% de enfriamiento y +20% de daño recibido.

#### Resurrección

Si mueres, vuelves a la vida con parte de tu vida y unos segundos de invulnerabilidad.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Revive con 32% de vida · 2 s invulnerable · cada 146 s |
| 5 | Revive con 40% de vida · 2 s invulnerable · cada 130 s |
| 10 | Revive con 50% de vida · 2 s invulnerable · cada 110 s |
| 15 | Revive con 60% de vida · 2 s invulnerable · cada 90 s |
| 20 | Revive con 70% de vida · 2 s invulnerable · cada 70 s |

- **Nv 5 — Vuelta fuerte:** Revives con un 30% más de vida.
- **Nv 10 — Segunda oportunidad:** -30% de enfriamiento.
- **Nv 15 — Resurrección radiante:** +100% de invulnerabilidad y onda de luz al revivir.
- **Nv 20 — Milagro:** +30% de vida al revivir, -30% de enfriamiento y escudo del 30%.

#### Fe ardiente

Tus rayos sagrados prenden en los enemigos: daño divino extra y quemadura. Cada pocos ataques una oleada de fe cura a ti y a tus aliados.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +33% daño divino · cura 1.3% cada 5 ataques |
| 5 | +45% daño divino · cura 1.6% cada 5 ataques |
| 10 | +60% daño divino · cura 2.0% cada 5 ataques |
| 15 | +75% daño divino · cura 2.4% cada 5 ataques |
| 20 | +90% daño divino · cura 2.8% cada 5 ataques |

- **Nv 5 — Llama sagrada:** +40% de daño divino.
- **Nv 10 — Fervor:** Cura cada 4 ataques en lugar de cada 5 y +50% de curación.
- **Nv 15 — Llamas purificadoras:** Las llamas queman y salpican a los enemigos de alrededor.
- **Nv 20 — Fe inquebrantable:** +40% de daño, +50% de curación y llamas que ralentizan.

#### Santuario

Levantas un domo sagrado: los enemigos dentro van más lentos y casi no pueden herirte, y tú y tus aliados os regeneráis.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 153 · 6.2 s · -95% daño recibido · +3.1% vida/s · cada 39.1 s |
| 5 | Radio 165 · 7.0 s · -95% daño recibido · +3.8% vida/s · cada 35.5 s |
| 10 | Radio 180 · 8.0 s · -95% daño recibido · +4.5% vida/s · cada 31.0 s |
| 15 | Radio 195 · 9.0 s · -95% daño recibido · +5.3% vida/s · cada 26.5 s |
| 20 | Radio 210 · 10.0 s · -95% daño recibido · +6.0% vida/s · cada 22.0 s |

- **Nv 5 — Domo amplio:** +30% de radio.
- **Nv 10 — Santuario duradero:** +50% de duración.
- **Nv 15 — Luz curativa:** El doble de curación dentro del domo.
- **Nv 20 — Fortaleza celestial:** +30% de radio, +30% de duración, -25% de enfriamiento y onda de luz.

### Monje panda

Panda maestro de kung-fu, luchador cuerpo a cuerpo: corre hacia los enemigos y los golpea con puñetazos muy rápidos, combos de palma, ola de chi, cien puños y la campana dorada que lo vuelve invulnerable.

Ataque básico: **Puño de chi**, tipo phys, intervalo base 0.55 s. Potencia de habilidades: ×2.6.

#### Combo de palma

Cada pocos puñetazos das un golpe de palma: mucho más daño, explosión en área y aturdimiento breve.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Cada 4 golpes · daño x2.1 · radio 52 |
| 5 | Cada 4 golpes · daño x2.6 · radio 60 |
| 10 | Cada 3 golpes · daño x3.2 · radio 70 |
| 15 | Cada 3 golpes · daño x3.8 · radio 80 |
| 20 | Cada 3 golpes · daño x4.4 · radio 90 |

- **Nv 5 — Palma amplia:** +30% de radio de la palma.
- **Nv 10 — Palma potente:** +40% de daño.
- **Nv 15 — Combo veloz:** La palma sale un golpe antes.
- **Nv 20 — Palma suprema:** +40% de daño, +30% de radio y aturde 1,2 s.

#### Ráfaga de puños

Golpeas más rápido y a más enemigos a la vez.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +4% velocidad · 1 objetivo(s) |
| 5 | +20% velocidad · 2 objetivo(s) |
| 10 | +40% velocidad · 3 objetivo(s) |
| 15 | +60% velocidad · 4 objetivo(s) |
| 20 | +80% velocidad · 4 objetivo(s) |

- **Nv 5 — Puños ágiles:** +12% de velocidad.
- **Nv 10 — Puño extra:** +1 objetivo.
- **Nv 15 — Puños de acero:** +15% de velocidad.
- **Nv 20 — Lluvia de puños:** +1 objetivo y +20% de velocidad.

#### Paso del viento

Posibilidad de esquivar el daño que recibes.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 5% de esquiva |
| 5 | 11% de esquiva |
| 10 | 17% de esquiva |
| 15 | 24% de esquiva |
| 20 | 30% de esquiva |

- **Nv 5 — Pies ligeros:** +5% de esquiva.
- **Nv 10 — Paso fantasma:** +5% de esquiva y +2 vida/s.
- **Nv 15 — Piel de viento:** +5% de esquiva y -8% de daño recibido.
- **Nv 20 — Viento eterno:** +8% de esquiva, -8% de daño y +3 vida/s.

#### Ola de chi

Liberas una ola de chi que daña y empuja a los enemigos cercanos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 185 · cada 11.7 s |
| 5 | Radio 205 · cada 10.5 s |
| 10 | Radio 230 · cada 9.0 s |
| 15 | Radio 255 · cada 7.5 s |
| 20 | Radio 280 · cada 6.0 s |

- **Nv 5 — Ola amplia:** +30% de radio.
- **Nv 10 — Ola potente:** +50% de daño.
- **Nv 15 — Ola paralizante:** Aturde 1 s (60%).
- **Nv 20 — Maremoto de chi:** +30% de radio, +40% de daño y -30% de enfriamiento.

#### Palma del dragón

Una palma de energía en forma de dragón atraviesa a todos los enemigos en línea.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 palma(s) · cada 9.8 s |
| 5 | 2 palma(s) · cada 8.8 s |
| 10 | 3 palma(s) · cada 7.5 s |
| 15 | 4 palma(s) · cada 6.3 s |
| 20 | 4 palma(s) · cada 5.0 s |

- **Nv 5 — Palma extra:** +1 palma.
- **Nv 10 — Palma ardiente:** +50% de daño.
- **Nv 15 — Aliento de dragón:** +1 palma y queman.
- **Nv 20 — Dragón ancestral:** +2 palmas, +40% de daño y -30% de enfriamiento.

#### Campana dorada

Cuando tu vida baja del 40% te vuelves invulnerable unos segundos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Invulnerable 1.6 s · cada 38.9 s |
| 5 | Invulnerable 1.9 s · cada 34.5 s |
| 10 | Invulnerable 2.3 s · cada 29.0 s |
| 15 | Invulnerable 2.7 s · cada 23.5 s |
| 20 | Invulnerable 3.1 s · cada 18.0 s |

- **Nv 5 — Campana larga:** +30% de invulnerabilidad.
- **Nv 10 — Campana rápida:** -30% de enfriamiento.
- **Nv 15 — Campana curativa:** Al sonar te curas un 20%.
- **Nv 20 — Campana eterna:** +30% de duración, -30% de enfriamiento y onda de choque.

#### Serenidad

Regeneras vida y recibes menos daño.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +0.3 vida/s · -1% daño recibido |
| 5 | +1.5 vida/s · -5% daño recibido |
| 10 | +3.0 vida/s · -10% daño recibido |
| 15 | +4.5 vida/s · -15% daño recibido |
| 20 | +6.0 vida/s · -20% daño recibido |

- **Nv 5 — Calma:** +3 vida/s.
- **Nv 10 — Mente clara:** -7% de daño recibido.
- **Nv 15 — Armonía:** +4 vida/s y -7% de daño recibido.
- **Nv 20 — Iluminación:** +6 vida/s y -10% de daño recibido.

#### Patada del huracán

Giras con una serie de patadas que hieren, empujan y aturden a todos los que te rodean.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 3 patadas · radio 122 · cada 12.7 s |
| 5 | 3 patadas · radio 130 · cada 11.5 s |
| 10 | 3 patadas · radio 140 · cada 10.0 s |
| 15 | 3 patadas · radio 150 · cada 8.5 s |
| 20 | 3 patadas · radio 160 · cada 7.0 s |

- **Nv 5 — Patada amplia:** +30% de radio.
- **Nv 10 — Patada doble:** +2 patadas.
- **Nv 15 — Patada brutal:** +50% de daño.
- **Nv 20 — Huracán supremo:** +2 patadas, +40% de daño, -30% de enfriamiento y aturde 1 s.

#### ★ Nirvana (ULTIMATE)

Alcanzas el nirvana: atacas un 50% más rápido, pegas un 30% más fuerte, recibes la mitad de daño, te curas y emites pulsos de chi.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 8.3 s · +50% velocidad · -50% daño recibido · cada 68.5 s |
| 5 | 9.5 s · +50% velocidad · -50% daño recibido · cada 62.5 s |
| 10 | 11.0 s · +50% velocidad · -50% daño recibido · cada 55.0 s |
| 15 | 12.5 s · +50% velocidad · -50% daño recibido · cada 47.5 s |
| 20 | 14.0 s · +50% velocidad · -50% daño recibido · cada 40.0 s |

- **Nv 5 — Trance largo:** +30% de duración.
- **Nv 10 — Pulso de chi:** +30% de daño del nirvana y de los pulsos.
- **Nv 15 — Calma profunda:** -25% de enfriamiento y +50% de curación.
- **Nv 20 — Iluminación total:** +30% de duración, +40% de daño y escudo del 20%.

#### Cien puños

Golpeas en un instante a muchos enemigos a tu alcance, tres veces cada uno.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 6 enemigos x3 golpes · cada 19.5 s |
| 5 | 8 enemigos x3 golpes · cada 17.5 s |
| 10 | 11 enemigos x3 golpes · cada 15.0 s |
| 15 | 13 enemigos x3 golpes · cada 12.5 s |
| 20 | 16 enemigos x3 golpes · cada 10.0 s |

- **Nv 5 — Más puños:** +4 enemigos golpeados.
- **Nv 10 — Puños de hierro:** +50% de daño.
- **Nv 15 — Ritmo veloz:** -30% de enfriamiento.
- **Nv 20 — Mil puños:** +6 enemigos, +40% de daño, -20% de enfriamiento y aturde 0,8 s.

#### Gong del trueno

Golpeas un gong gigante: una onda de trueno hiere, empuja y aturde a todos los que te rodean.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 223 · daño x2,2 · aturde 1.2 s · cada 17.6 s |
| 5 | Radio 235 · daño x2,2 · aturde 1.3 s · cada 16.0 s |
| 10 | Radio 250 · daño x2,2 · aturde 1.5 s · cada 14.0 s |
| 15 | Radio 265 · daño x2,2 · aturde 1.6 s · cada 12.0 s |
| 20 | Radio 280 · daño x2,2 · aturde 1.8 s · cada 10.0 s |

- **Nv 5 — Onda amplia:** +30% de radio.
- **Nv 10 — Trueno largo:** +50% de aturdimiento.
- **Nv 15 — Eco del gong:** Una segunda onda tras el golpe.
- **Nv 20 — Gong supremo:** +30% de radio, +40% de daño, -30% de enfriamiento y otra onda.

#### Crías de panda

Invocas crías de panda que ruedan y pelean a tu lado durante un rato.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 2 crías · duran 22.5 s · cada 25.4 s |
| 5 | 2 crías · duran 24.5 s · cada 23.0 s |
| 10 | 3 crías · duran 27.0 s · cada 20.0 s |
| 15 | 4 crías · duran 29.5 s · cada 17.0 s |
| 20 | 4 crías · duran 32.0 s · cada 14.0 s |

- **Nv 5 — Más crías:** +1 cría.
- **Nv 10 — Crías fuertes:** +40% de vida y +40% de daño.
- **Nv 15 — Crías duraderas:** +50% de duración.
- **Nv 20 — Manada de pandas:** +1 cría, +30% de vida, +30% de daño y -25% de enfriamiento.

### Paladín enano

Enano sagrado cuerpo a cuerpo, barbudo y duro como la roca: avanza con martillo y escudo, carga contra los enemigos, los aturde con el martillo de la justicia y se protege con auras y curaciones.

Ataque básico: **Espada sagrada**, tipo phys, intervalo base 0.8 s. Potencia de habilidades: ×1.5.

#### Espada consagrada

Tus espadazos hacen daño divino extra y te curan un poco.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +28% daño divino · cura 0.2% vida por golpe |
| 5 | +40% daño divino · cura 0.3% vida por golpe |
| 10 | +55% daño divino · cura 0.5% vida por golpe |
| 15 | +70% daño divino · cura 0.6% vida por golpe |
| 20 | +85% daño divino · cura 0.8% vida por golpe |

- **Nv 5 — Filo sagrado:** +40% de daño divino.
- **Nv 10 — Luz curativa:** El doble de curación por golpe.
- **Nv 15 — Filo aturdidor:** +40% de daño y aturde 0,6 s (10%).
- **Nv 20 — Espada de luz:** +50% de daño, +50% de curación y ejecuta bajo el 25% de vida.

#### Barrido

Cada espadazo también golpea a los enemigos alrededor del objetivo (50% del daño).

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 42 |
| 5 | Radio 50 |
| 10 | Radio 60 |
| 15 | Radio 70 |
| 20 | Radio 80 |

- **Nv 5 — Barrido amplio:** +30% de radio.
- **Nv 10 — Barrido fuerte:** +25% de daño.
- **Nv 15 — Barrido lento:** +30% de radio y ralentiza un 30%.
- **Nv 20 — Barrido supremo:** +35% de daño y +20% de radio.

#### Escudo del cruzado

Recibes menos daño y puedes bloquear golpes por completo.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | -1.5% daño recibido · 4% de bloqueo |
| 5 | -7.5% daño recibido · 9% de bloqueo |
| 10 | -15.0% daño recibido · 14% de bloqueo |
| 15 | -22.5% daño recibido · 19% de bloqueo |
| 20 | -30.0% daño recibido · 25% de bloqueo |

- **Nv 5 — Escudo firme:** -7% de daño recibido.
- **Nv 10 — Parada:** +5% de bloqueo.
- **Nv 15 — Muro de fe:** -7% de daño recibido y +3 vida/s.
- **Nv 20 — Baluarte:** +5% de bloqueo, -10% de daño recibido y +4 vida/s.

#### Carga sagrada

Cargas contra un enemigo lejano: daño en área y aturdimiento al llegar.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 72 · aturde 0.8 s · cada 11.7 s |
| 5 | Radio 80 · aturde 1.0 s · cada 10.3 s |
| 10 | Radio 90 · aturde 1.1 s · cada 8.5 s |
| 15 | Radio 100 · aturde 1.3 s · cada 6.8 s |
| 20 | Radio 110 · aturde 1.4 s · cada 5.0 s |

- **Nv 5 — Carga amplia:** +30% de radio.
- **Nv 10 — Impacto prolongado:** +50% de duración del aturdimiento.
- **Nv 15 — Carga potente:** +50% de daño y -20% de enfriamiento.
- **Nv 20 — Carga divina:** +30% de radio, +50% de daño, -30% de enfriamiento y onda de choque.

#### Martillo de la justicia

Lanzas un martillo de luz al enemigo más fuerte: gran daño divino y lo aturde.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 martillo(s) · aturde 1.6 s · cada 8.8 s |
| 5 | 1 martillo(s) · aturde 1.8 s · cada 7.8 s |
| 10 | 2 martillo(s) · aturde 2.0 s · cada 6.5 s |
| 15 | 2 martillo(s) · aturde 2.3 s · cada 5.3 s |
| 20 | 3 martillo(s) · aturde 2.5 s · cada 4.0 s |

- **Nv 5 — Martillo extra:** +1 martillo.
- **Nv 10 — Martillo pesado:** +50% de daño.
- **Nv 15 — Martillo del juicio:** +50% de aturdimiento y rebota a 2 enemigos.
- **Nv 20 — Lluvia de martillos:** +2 martillos, +40% de daño y -30% de enfriamiento.

#### Aura de devoción

Un aura sagrada quema a los enemigos cercanos y te regenera.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 93 · +0.3 vida/s |
| 5 | Radio 105 · +1.3 vida/s |
| 10 | Radio 120 · +2.5 vida/s |
| 15 | Radio 135 · +3.8 vida/s |
| 20 | Radio 150 · +5.0 vida/s |

- **Nv 5 — Aura amplia:** +30% de radio.
- **Nv 10 — Aura ardiente:** +50% de daño y +3 vida/s.
- **Nv 15 — Aura lenta:** Pulsa un 30% más rápido y ralentiza.
- **Nv 20 — Aura suprema:** +30% de radio, +60% de daño y +5 vida/s.

#### Imposición de manos

Cuando tu vida baja del 35% te curas de golpe.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Cura 37% · cada 58 s |
| 5 | Cura 43% · cada 50 s |
| 10 | Cura 50% · cada 40 s |
| 15 | Cura 58% · cada 30 s |
| 20 | Cura 65% · cada 20 s |

- **Nv 5 — Manos fuertes:** +30% de curación.
- **Nv 10 — Manos veloces:** -30% de enfriamiento.
- **Nv 15 — Manos protectoras:** Además te da un escudo del 20%.
- **Nv 20 — Manos divinas:** +30% de curación, -30% de enfriamiento y onda de luz.

#### Lanza de luz

Una lanza de luz divina atraviesa al enemigo más fuerte y a todos los de su línea.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Daño x4 en línea · cada 11.7 s |
| 5 | Daño x4 en línea · cada 10.5 s |
| 10 | Daño x4 en línea · cada 9.0 s |
| 15 | Daño x4 en línea · cada 7.5 s |
| 20 | Daño x4 en línea · cada 6.0 s |

- **Nv 5 — Lanza afilada:** +40% de daño.
- **Nv 10 — Lanza doble:** Una lanza más contra otro objetivo.
- **Nv 15 — Lanza paralizante:** Aturde 1 s (60%) y -20% de enfriamiento.
- **Nv 20 — Lanza del cielo:** +1 lanza, +40% de daño, -30% de enfriamiento y robo de vida.

#### ★ Bastión divino (ULTIMATE)

Un bastión de luz te protege: recibes un 65% menos de daño, te curas y pulsos sagrados hieren a los enemigos cercanos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 6.3 s · -65% daño recibido · pulso cada 0,6 s · cada 68.5 s |
| 5 | 7.3 s · -65% daño recibido · pulso cada 0,6 s · cada 62.5 s |
| 10 | 8.5 s · -65% daño recibido · pulso cada 0,6 s · cada 55.0 s |
| 15 | 9.8 s · -65% daño recibido · pulso cada 0,6 s · cada 47.5 s |
| 20 | 11.0 s · -65% daño recibido · pulso cada 0,6 s · cada 40.0 s |

- **Nv 5 — Bastión duradero:** +30% de duración.
- **Nv 10 — Luz castigadora:** +50% de daño de los pulsos.
- **Nv 15 — Bastión curativo:** -25% de enfriamiento y el doble de curación.
- **Nv 20 — Fortaleza de luz:** +30% de duración, +50% de daño, +30% de radio y escudo del 20%.

#### Ira vengadora

Te salen alas de luz: durante unos segundos golpeas más rápido y más fuerte.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +30% daño y +50% velocidad · 6.2 s · cada 39 s |
| 5 | +30% daño y +50% velocidad · 7.0 s · cada 35 s |
| 10 | +30% daño y +50% velocidad · 8.0 s · cada 30 s |
| 15 | +30% daño y +50% velocidad · 9.0 s · cada 25 s |
| 20 | +30% daño y +50% velocidad · 10.0 s · cada 20 s |

- **Nv 5 — Ira duradera:** +30% de duración.
- **Nv 10 — Ira feroz:** +20% de daño.
- **Nv 15 — Ira veloz:** -25% de enfriamiento y +15% de velocidad.
- **Nv 20 — Ira divina:** +30% de duración, +30% de daño y escudo del 15%.

#### Lanzamiento de escudo

Lanzas tu escudo: rebota entre varios enemigos, los hiere y los aturde, y vuelve a tu mano.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 3 rebotes · daño x1,7 · cada 6.8 s |
| 5 | 3 rebotes · daño x1,7 · cada 6.0 s |
| 10 | 4 rebotes · daño x1,7 · cada 5.0 s |
| 15 | 5 rebotes · daño x1,7 · cada 4.0 s |
| 20 | 6 rebotes · daño x1,7 · cada 3.5 s |

- **Nv 5 — Escudo ligero:** +1 rebote.
- **Nv 10 — Borde afilado:** +50% de daño.
- **Nv 15 — Rebote aturdidor:** 50% de probabilidad de aturdir 1 s.
- **Nv 20 — Égida rebotante:** +2 rebotes, +40% de daño y -25% de enfriamiento.

#### Runas de piedra

Clavas runas de piedra a tu alrededor: bloquean los proyectiles enemigos y pulsan hiriendo y ralentizando a quien se acerca.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 3 runas · duran 12.3 s · cada 23.5 s |
| 5 | 3 runas · duran 13.5 s · cada 21.5 s |
| 10 | 4 runas · duran 15.0 s · cada 19.0 s |
| 15 | 5 runas · duran 16.5 s · cada 16.5 s |
| 20 | 6 runas · duran 18.0 s · cada 14.0 s |

- **Nv 5 — Runa extra:** +1 runa.
- **Nv 10 — Piedra duradera:** +50% de duración.
- **Nv 15 — Runas explosivas:** +50% de daño y +30% de radio de las pulsaciones.
- **Nv 20 — Círculo rúnico:** +2 runas, +30% de duración, +40% de daño y -25% de enfriamiento.

### Cazador troll

Cazador de la jungla: lanza lanzas veloces, envenena, pone trampas de sombra, cría raptores y maldice a los enemigos con ranas. Se regenera como un troll y su ultimate invoca al espíritu del Loa.

Ataque básico: **Lanza arrojadiza**, tipo phys, intervalo base 0.85 s. Potencia de habilidades: ×1.15.

#### Lluvia de lanzas

Lanzas varias lanzas a la vez y más deprisa. Nv5, 10 y 15: +1 lanza.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 lanza(s) · +3% velocidad de ataque |
| 5 | 2 lanza(s) · +15% velocidad de ataque |
| 10 | 3 lanza(s) · +30% velocidad de ataque |
| 15 | 4 lanza(s) · +45% velocidad de ataque |
| 20 | 4 lanza(s) · +60% velocidad de ataque |

- **Nv 5 — Lanza gemela:** +1 lanza por lanzamiento.
- **Nv 10 — Lanzas rebotantes:** Cada lanza rebota a 2 enemigos cercanos (50% de daño).
- **Nv 15 — Lanzas explosivas:** +35% daño y explotan en área.
- **Nv 20 — Tormenta de lanzas:** +1 lanza más y +40% daño.

#### Veneno de loa

Algunas lanzas envenenan al enemigo con un veneno que se acumula.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 27% de las lanzas envenenan |
| 5 | 35% de las lanzas envenenan |
| 10 | 45% de las lanzas envenenan |
| 15 | 55% de las lanzas envenenan |
| 20 | 65% de las lanzas envenenan |

- **Nv 5 — Veneno virulento:** +10% de prob. y +50% de daño del veneno.
- **Nv 10 — Veneno paralizante:** Las lanzas envenenadas aturden 1 s (15%).
- **Nv 15 — Plaga:** El veneno ralentiza un 30% y +15% de prob.
- **Nv 20 — Veneno letal:** Veneno x2 y +25% de prob.

#### Cazador de cabezas

Posibilidad de golpe crítico con las lanzas.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 13% prob. · daño x2.1 |
| 5 | 23% prob. · daño x2.6 |
| 10 | 35% prob. · daño x3.2 |
| 15 | 48% prob. · daño x3.8 |
| 20 | 60% prob. · daño x4.4 |

- **Nv 5 — Ojo de cazador:** +10% de prob. de crítico.
- **Nv 10 — Golpe brutal:** +30% de daño crítico.
- **Nv 15 — Cazador sediento:** +10% de prob. y los críticos te curan.
- **Nv 20 — Decapitador:** +100% de daño a enemigos bajo el 25% de vida.

#### Trampa de sombra

Pone una trampa bajo el mayor grupo de enemigos: daño oscuro y los deja clavados al suelo.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 62 · inmoviliza 2.6 s · cada 15.6 s |
| 5 | Radio 70 · inmoviliza 2.9 s · cada 14.0 s |
| 10 | Radio 80 · inmoviliza 3.3 s · cada 12.0 s |
| 15 | Radio 90 · inmoviliza 3.7 s · cada 10.0 s |
| 20 | Radio 100 · inmoviliza 4.1 s · cada 8.0 s |

- **Nv 5 — Trampa amplia:** +30% de radio.
- **Nv 10 — Trampa duradera:** +50% de duración y +50% de daño.
- **Nv 15 — Doble trampa:** Pones una trampa más en otro grupo.
- **Nv 20 — Trampa explosiva:** +50% daño, -30% enfriamiento y onda de choque.

#### Raptor domesticado

Raptores leales luchan a tu lado para siempre y se reponen solos si caen.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 raptor(es) permanentes |
| 5 | 1 raptor(es) permanentes |
| 10 | 2 raptor(es) permanentes |
| 15 | 3 raptor(es) permanentes |
| 20 | 4 raptor(es) permanentes |

- **Nv 5 — Manada:** +1 raptor.
- **Nv 10 — Raptores curtidos:** +50% de vida y +30% de daño.
- **Nv 15 — Raptores salvajes:** +1 raptor y sus mordiscos queman.
- **Nv 20 — Raptor alfa:** +60% daño, +50% vida y robo de vida.

#### Regeneración troll

Tu sangre troll cierra las heridas: más vida por segundo, el doble con menos de la mitad de vida.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +0.5 vida/s (x2 por debajo del 50%) |
| 5 | +2.5 vida/s (x2 por debajo del 50%) |
| 10 | +5.0 vida/s (x2 por debajo del 50%) |
| 15 | +7.5 vida/s (x2 por debajo del 50%) |
| 20 | +10.0 vida/s (x2 por debajo del 50%) |

- **Nv 5 — Sangre espesa:** +3 vida/s.
- **Nv 10 — Piel de troll:** -10% de daño recibido.
- **Nv 15 — Segundo aliento:** +4 vida/s y regeneración doble hasta el 70% de vida.
- **Nv 20 — Inmortal:** -10% de daño recibido y +5 vida/s.

#### Maleficio de rana

Convierte en rana a los enemigos más fuertes: quedan aturdidos y reciben más daño.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 2 objetivos · aturde 3.1 s · +31% daño · cada 13.7 s |
| 5 | 3 objetivos · aturde 3.5 s · +36% daño · cada 12.3 s |
| 10 | 4 objetivos · aturde 4.0 s · +42% daño · cada 10.5 s |
| 15 | 5 objetivos · aturde 4.5 s · +48% daño · cada 8.8 s |
| 20 | 6 objetivos · aturde 5.0 s · +54% daño · cada 7.0 s |

- **Nv 5 — Doble maleficio:** +1 objetivo.
- **Nv 10 — Maleficio duradero:** +40% de duración.
- **Nv 15 — Maldición profunda:** Los malditos reciben +25% de daño extra.
- **Nv 20 — Plaga de ranas:** +2 objetivos y -25% de enfriamiento.

#### Tótem ancestral

Plantas un tótem que te cura y fulmina con rayos a los enemigos cercanos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Cura 0.9%/s · rayo cada 1 s · dura 14.3 s · cada 23.5 s |
| 5 | Cura 1.1%/s · rayo cada 1 s · dura 15.5 s · cada 21.5 s |
| 10 | Cura 1.4%/s · rayo cada 1 s · dura 17.0 s · cada 19.0 s |
| 15 | Cura 1.7%/s · rayo cada 1 s · dura 18.5 s · cada 16.5 s |
| 20 | Cura 2.0%/s · rayo cada 1 s · dura 20.0 s · cada 14.0 s |

- **Nv 5 — Tótem recio:** +40% de duración.
- **Nv 10 — Segundo tótem:** Plantas 2 tótems a la vez.
- **Nv 15 — Tótem sagrado:** +40% de radio y cura el doble.
- **Nv 20 — Tótem del Loa:** +60% de daño y -25% de enfriamiento.

#### Frenesí sangriento

Cada baja te acelera: acumulas furia que aumenta tu velocidad de ataque unos segundos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +1.3% velocidad por baja · máx. 5 acumulaciones · 4 s |
| 5 | +2.5% velocidad por baja · máx. 6 acumulaciones · 4 s |
| 10 | +4.0% velocidad por baja · máx. 7 acumulaciones · 4 s |
| 15 | +5.5% velocidad por baja · máx. 8 acumulaciones · 4 s |
| 20 | +7.0% velocidad por baja · máx. 10 acumulaciones · 4 s |

- **Nv 5 — Sed de caza:** +3 acumulaciones máximas.
- **Nv 10 — Frenesí largo:** +50% de duración.
- **Nv 15 — Frenesí curativo:** Cada baja te cura un 0,6% de vida.
- **Nv 20 — Frenesí explosivo:** Las bajas explotan en área.

#### ★ Espíritu del Loa (ULTIMATE)

El espíritu del Loa te posee: atacas mucho más rápido y una lluvia de lanzas espectrales cae sobre los enemigos del mapa.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 8.3 s · lanza espectral cada 0,3 s (daño x1,3) · cada 68.5 s |
| 5 | 9.5 s · lanza espectral cada 0,3 s (daño x1,3) · cada 62.5 s |
| 10 | 11.0 s · lanza espectral cada 0,3 s (daño x1,3) · cada 55.0 s |
| 15 | 12.5 s · lanza espectral cada 0,3 s (daño x1,3) · cada 47.5 s |
| 20 | 14.0 s · lanza espectral cada 0,3 s (daño x1,3) · cada 40.0 s |

- **Nv 5 — Espíritu veloz:** +30% de duración.
- **Nv 10 — Lluvia doble:** Dos lanzas espectrales por golpe.
- **Nv 15 — Loa ancestral:** +50% de daño y +3 s de aceleración.
- **Nv 20 — Avatar del Loa:** +50% duración, +1 lanza y -20% de enfriamiento.

#### Jabalí de guerra

Un jabalí de guerra combate a tu lado: muy resistente, atrae a los enemigos para que te dejen en paz y se repone solo si cae.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Vida 440 · atrae enemigos en radio 244 · -45% daño recibido |
| 5 | Vida 680 · atrae enemigos en radio 260 · -45% daño recibido |
| 10 | Vida 980 · atrae enemigos en radio 280 · -45% daño recibido |
| 15 | Vida 1280 · atrae enemigos en radio 300 · -45% daño recibido |
| 20 | Vida 1580 · atrae enemigos en radio 320 · -45% daño recibido |

- **Nv 5 — Jabalí robusto:** +50% de vida.
- **Nv 10 — Colmillos afilados:** +50% de daño.
- **Nv 15 — Segundo jabalí:** +1 jabalí.
- **Nv 20 — Rey jabalí:** +50% de vida, +40% de daño y +1 jabalí.

#### Lanza explosiva

Clavas una lanza en el enemigo más fuerte: a los 2 segundos explota en área y quema.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 lanza(s) · radio 82 · daño x3,2 · cada 7.8 s |
| 5 | 1 lanza(s) · radio 90 · daño x3,2 · cada 7.0 s |
| 10 | 1 lanza(s) · radio 100 · daño x3,2 · cada 6.0 s |
| 15 | 2 lanza(s) · radio 110 · daño x3,2 · cada 5.0 s |
| 20 | 2 lanza(s) · radio 120 · daño x3,2 · cada 5.0 s |

- **Nv 5 — Lanza extra:** +1 lanza.
- **Nv 10 — Ojiva grande:** +30% de radio de explosión.
- **Nv 15 — Fuego del Loa:** +40% de daño y quemadura.
- **Nv 20 — Lanza ancestral:** +2 lanzas, +30% de daño y -30% de enfriamiento.

### Hombre lobo

Bestia cuerpo a cuerpo: zarpazos que hacen sangrar, saltos de presa, aullidos que aterrorizan, manada espectral y, con la Luna llena, se transforma en un lobo gigante imparable.

Ataque básico: **Zarpazo**, tipo phys, intervalo base 0.55 s. Potencia de habilidades: ×1.7.

#### Garras sangrientas

Tus zarpazos hacen sangrar: daño en el tiempo que se acumula.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Sangrado 4 s · 50% del golpe por segundo (se acumula) |
| 5 | Sangrado 4 s · 50% del golpe por segundo (se acumula) |
| 10 | Sangrado 4 s · 50% del golpe por segundo (se acumula) |
| 15 | Sangrado 4 s · 50% del golpe por segundo (se acumula) |
| 20 | Sangrado 4 s · 50% del golpe por segundo (se acumula) |

- **Nv 5 — Hemorragia:** +50% de sangrado.
- **Nv 10 — Desangrar:** Los sangrantes se ralentizan un 25%.
- **Nv 15 — Hemorragia profunda:** Sangrado x2.
- **Nv 20 — Sangre derramada:** Los enemigos sangrantes reciben +20% de daño.

#### Zarpazo doble

Golpeas más rápido y a más enemigos a la vez.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +3% velocidad · 1 objetivo(s) |
| 5 | +15% velocidad · 2 objetivo(s) |
| 10 | +30% velocidad · 3 objetivo(s) |
| 15 | +45% velocidad · 4 objetivo(s) |
| 20 | +60% velocidad · 4 objetivo(s) |

- **Nv 5 — Garra gemela:** +1 objetivo.
- **Nv 10 — Furia veloz:** +30% de daño.
- **Nv 15 — Zarpazo en arco:** Cada golpe daña en área (50%).
- **Nv 20 — Frenesí de garras:** +1 objetivo y +40% de daño.

#### Salto de presa

Saltas sobre el grupo más lejano: daño en área y aturdimiento al caer.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 62 · aturde 0.6 s · cada 10.7 s |
| 5 | Radio 70 · aturde 0.8 s · cada 9.5 s |
| 10 | Radio 80 · aturde 0.9 s · cada 8.0 s |
| 15 | Radio 90 · aturde 1.0 s · cada 6.5 s |
| 20 | Radio 100 · aturde 1.2 s · cada 5.0 s |

- **Nv 5 — Salto largo:** +30% de radio.
- **Nv 10 — Aterrizaje brutal:** +50% de daño y aturde siempre.
- **Nv 15 — Salto veloz:** -30% de enfriamiento.
- **Nv 20 — Depredador:** +60% de daño y quema.

#### Sed de sangre

Cada golpe te cura una parte de tu vida.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Cura 0.2% de vida por golpe |
| 5 | Cura 0.4% de vida por golpe |
| 10 | Cura 0.6% de vida por golpe |
| 15 | Cura 0.8% de vida por golpe |
| 20 | Cura 1.0% de vida por golpe |

- **Nv 5 — Sed:** +50% de curación por golpe.
- **Nv 10 — Frenesí sanguíneo:** El doble de curación por golpe.
- **Nv 15 — Banquete:** Curas un 3% de vida al matar.
- **Nv 20 — Vampirismo:** Curación x2 y +2% al matar.

#### Pelaje grueso

Tu pelaje te protege: recibes menos daño y te regeneras.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | -1.4% daño recibido · +0.3 vida/s |
| 5 | -7.0% daño recibido · +1.5 vida/s |
| 10 | -14.0% daño recibido · +3.0 vida/s |
| 15 | -21.0% daño recibido · +4.5 vida/s |
| 20 | -28.0% daño recibido · +6.0 vida/s |

- **Nv 5 — Pelaje denso:** -10% de daño recibido.
- **Nv 10 — Regeneración lupina:** +4 vida/s.
- **Nv 15 — Coraza de pelo:** -10% de daño y +2 vida/s.
- **Nv 20 — Piel de bestia:** -15% de daño y +6 vida/s.

#### Aullido a la luna

Un aullido aterrador daña a los enemigos cercanos, los hace huir y te da velocidad de ataque.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 204 · huyen 2.0 s · cada 19.5 s |
| 5 | Radio 220 · huyen 2.3 s · cada 17.5 s |
| 10 | Radio 240 · huyen 2.5 s · cada 15.0 s |
| 15 | Radio 260 · huyen 2.8 s · cada 12.5 s |
| 20 | Radio 280 · huyen 3.0 s · cada 10.0 s |

- **Nv 5 — Aullido largo:** +30% de radio.
- **Nv 10 — Aullido aterrador:** +60% de duración del miedo.
- **Nv 15 — Aullido feroz:** +60% de daño y +3 s de aceleración.
- **Nv 20 — Aullido de la manada:** -30% enfriamiento y onda de choque.

#### Llamada de la manada

Invocas lobos espectrales que cazan a tu lado durante unos segundos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 2 lobos · duran 20.5 s · cada 27.3 s |
| 5 | 2 lobos · duran 22.5 s · cada 24.5 s |
| 10 | 3 lobos · duran 25.0 s · cada 21.0 s |
| 15 | 4 lobos · duran 27.5 s · cada 17.5 s |
| 20 | 4 lobos · duran 30.0 s · cada 14.0 s |

- **Nv 5 — Más lobos:** +1 lobo.
- **Nv 10 — Lobos feroces:** +40% de daño y +40% de vida.
- **Nv 15 — Manada duradera:** +50% de duración.
- **Nv 20 — Lobos alfa:** +2 lobos y sus mordiscos queman.

#### Tajo salvaje

Un zarpazo enorme en abanico frente a ti: mucho daño y sangrado a todo el que alcance.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Alcance 153 · daño x3,4 · cada 11.7 s |
| 5 | Alcance 165 · daño x3,4 · cada 10.5 s |
| 10 | Alcance 180 · daño x3,4 · cada 9.0 s |
| 15 | Alcance 195 · daño x3,4 · cada 7.5 s |
| 20 | Alcance 210 · daño x3,4 · cada 6.0 s |

- **Nv 5 — Tajo amplio:** +40% de alcance.
- **Nv 10 — Tajo sangrante:** +50% de daño.
- **Nv 15 — Doble tajo:** Un segundo tajo tras el primero.
- **Nv 20 — Desgarro mortal:** +50% de daño y ejecuta bajo el 30% de vida.

#### Marca de la presa

Marcas al enemigo más fuerte: recibe más daño y, al morir, no escapa de la caza.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +26% de daño recibido · 8 s · cada 15.6 s |
| 5 | +30% de daño recibido · 8 s · cada 14.0 s |
| 10 | +35% de daño recibido · 8 s · cada 12.0 s |
| 15 | +40% de daño recibido · 8 s · cada 10.0 s |
| 20 | +45% de daño recibido · 8 s · cada 9.0 s |

- **Nv 5 — Presa marcada:** La presa recibe +20% de daño.
- **Nv 10 — Dos presas:** Marcas una presa más.
- **Nv 15 — Explosión de caza:** Al morir, la presa explota (daño x2).
- **Nv 20 — Cacería feroz:** +1 presa, +30% de daño marcado y curas al matarla.

#### ★ Luna llena (ULTIMATE)

Te transformas en un lobo gigante: más daño, golpeas un 50% más rápido, robas 3 veces más vida y recibes un 35% menos de daño.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 8.3 s · daño x1,4 · cada 73.5 s |
| 5 | 9.5 s · daño x1,4 · cada 67.5 s |
| 10 | 11.0 s · daño x1,4 · cada 60.0 s |
| 15 | 12.5 s · daño x1,4 · cada 52.5 s |
| 20 | 14.0 s · daño x1,4 · cada 45.0 s |

- **Nv 5 — Luna creciente:** +30% de duración.
- **Nv 10 — Luna de sangre:** Al transformarte lanzas una onda de choque.
- **Nv 15 — Luna eclipse:** -25% de enfriamiento y +30% de duración.
- **Nv 20 — Bestia primigenia:** Al transformarte curas un 25% y +50% de duración.

#### Lobo alfa

Un lobo alfa gigante lucha a tu lado, atrae a los enemigos y, con su aullido, acelera tus ataques.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Vida 305 · aullido cada 14 s (+3 s de velocidad) |
| 5 | Vida 485 · aullido cada 14 s (+3 s de velocidad) |
| 10 | Vida 710 · aullido cada 14 s (+3 s de velocidad) |
| 15 | Vida 935 · aullido cada 14 s (+3 s de velocidad) |
| 20 | Vida 1160 · aullido cada 14 s (+3 s de velocidad) |

- **Nv 5 — Alfa robusto:** +50% de vida.
- **Nv 10 — Colmillos de alfa:** +50% de daño.
- **Nv 15 — Aullido del alfa:** Su aullido da 3 s más de velocidad de ataque.
- **Nv 20 — Líder de la manada:** +1 lobo alfa, +40% de vida y +40% de daño.

#### Zarpas de plata

Tus zarpazos de plata hacen daño extra a jefes y enemigos blindados, rompen su invulnerabilidad e impiden que se curen o resuciten.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +19% daño plata (x3 contra jefes y élites) |
| 5 | +24% daño plata (x3 contra jefes y élites) |
| 10 | +30% daño plata (x3 contra jefes y élites) |
| 15 | +36% daño plata (x3 contra jefes y élites) |
| 20 | +42% daño plata (x3 contra jefes y élites) |

- **Nv 5 — Plata pura:** +40% de daño.
- **Nv 10 — Plata aturdidora:** 15% de probabilidad de aturdir 0,8 s.
- **Nv 15 — Maldición de plata:** Los golpeados reciben +20% de daño.
- **Nv 20 — Cazador de monstruos:** +40% de daño, +20% de daño recibido por el golpeado y robo de vida.

### Tauren druida

Sabio de la naturaleza: cólera, fuego lunar, raíces, retoños que luchan por él, lluvia de estrellas y piel de corteza. Su ultimate lo convierte en un oso colosal.

Ataque básico: **Cólera**, tipo magic, intervalo base 0.95 s. Potencia de habilidades: ×1.25.

#### Cólera de la naturaleza

Lanzas varios rayos de cólera a la vez y más deprisa. Nv7 y 14: +1 rayo.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 rayo(s) · +2% velocidad de ataque |
| 5 | 1 rayo(s) · +10% velocidad de ataque |
| 10 | 2 rayo(s) · +20% velocidad de ataque |
| 15 | 3 rayo(s) · +30% velocidad de ataque |
| 20 | 3 rayo(s) · +40% velocidad de ataque |

- **Nv 5 — Cólera doble:** +1 rayo.
- **Nv 10 — Cólera ardiente:** +40% de daño.
- **Nv 15 — Cólera estelar:** Los rayos explotan en área.
- **Nv 20 — Furia de la naturaleza:** +1 rayo y robo de vida.

#### Fuego lunar

Quema a los enemigos más fuertes con fuego lunar: golpe inicial y daño en el tiempo que se acumula.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 objetivo(s) · cada 9.8 s |
| 5 | 2 objetivo(s) · cada 8.8 s |
| 10 | 3 objetivo(s) · cada 7.5 s |
| 15 | 4 objetivo(s) · cada 6.3 s |
| 20 | 6 objetivo(s) · cada 5.0 s |

- **Nv 5 — Doble luna:** +1 objetivo.
- **Nv 10 — Fuego persistente:** +50% de daño.
- **Nv 15 — Luna ardiente:** -30% de enfriamiento.
- **Nv 20 — Eclipse:** +2 objetivos y cadena de fuego.

#### Enredar

Raíces brotan bajo el mayor grupo de enemigos: daño y los dejan inmóviles.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 72 · inmoviliza 2.6 s · cada 14.7 s |
| 5 | Radio 80 · inmoviliza 2.9 s · cada 13.3 s |
| 10 | Radio 90 · inmoviliza 3.3 s · cada 11.5 s |
| 15 | Radio 100 · inmoviliza 3.7 s · cada 9.8 s |
| 20 | Radio 110 · inmoviliza 4.1 s · cada 8.0 s |

- **Nv 5 — Raíces amplias:** +30% de radio.
- **Nv 10 — Raíces profundas:** +50% de duración.
- **Nv 15 — Espinas venenosas:** +60% de daño y ralentiza al soltar.
- **Nv 20 — Bosque vivo:** -30% enfriamiento y onda de espinas.

#### Rejuvenecimiento

Regeneras vida sin parar y, con menos del 40% de vida, te curas de golpe.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +0.3 vida/s · cura 26% cada 22 s |
| 5 | +1.8 vida/s · cura 30% cada 22 s |
| 10 | +3.5 vida/s · cura 35% cada 22 s |
| 15 | +5.3 vida/s · cura 40% cada 22 s |
| 20 | +7.0 vida/s · cura 45% cada 22 s |

- **Nv 5 — Savia:** +3 vida/s.
- **Nv 10 — Florecer:** +3 vida/s más.
- **Nv 15 — Armonía:** -8% de daño recibido.
- **Nv 20 — Árbol de la vida:** +6 vida/s y -8% de daño recibido.

#### Retoños (Ents)

Invocas ents de madera que luchan por ti. Son muy resistentes.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 ent(s) · duran 25.5 s · cada 33.2 s |
| 5 | 1 ent(s) · duran 27.5 s · cada 30.0 s |
| 10 | 2 ent(s) · duran 30.0 s · cada 26.0 s |
| 15 | 2 ent(s) · duran 32.5 s · cada 22.0 s |
| 20 | 3 ent(s) · duran 35.0 s · cada 18.0 s |

- **Nv 5 — Más ents:** +1 ent.
- **Nv 10 — Ents robustos:** +50% de vida y +40% de daño.
- **Nv 15 — Ents duraderos:** +50% de duración.
- **Nv 20 — Guardianes del bosque:** +1 ent y aturden con sus golpes.

#### Lluvia de estrellas

Estrellas caen del cielo sobre los enemigos durante unos segundos, con daño en área.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 4.1 s · estrella cada 0,3 s · cada 25.4 s |
| 5 | 4.5 s · estrella cada 0,3 s · cada 23.0 s |
| 10 | 5.0 s · estrella cada 0,3 s · cada 20.0 s |
| 15 | 5.5 s · estrella cada 0,3 s · cada 17.0 s |
| 20 | 6.0 s · estrella cada 0,3 s · cada 14.0 s |

- **Nv 5 — Más estrellas:** +30% de duración.
- **Nv 10 — Estrellas grandes:** +50% de daño.
- **Nv 15 — Lluvia densa:** -30% de enfriamiento.
- **Nv 20 — Cometa:** +50% de duración y aturden con el impacto.

#### Piel de corteza

Tu piel se endurece: recibes menos daño y un escudo cada cierto tiempo.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | -1.2% daño · escudo 6% de vida cada 21.5 s |
| 5 | -6.0% daño · escudo 8% de vida cada 19.5 s |
| 10 | -12.0% daño · escudo 10% de vida cada 17.0 s |
| 15 | -18.0% daño · escudo 12% de vida cada 14.5 s |
| 20 | -24.0% daño · escudo 14% de vida cada 12.0 s |

- **Nv 5 — Corteza dura:** -8% de daño recibido.
- **Nv 10 — Escudo grande:** El escudo es un 50% mayor.
- **Nv 15 — Raíces de roble:** -8% de daño y +3 vida/s.
- **Nv 20 — Armadura de roble:** Escudo +50% y -8% de daño.

#### Ciclón

Atrapas a los enemigos más fuertes en un ciclón: quedan aturdidos y heridos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 objetivo(s) · aturde 2.6 s · cada 17.6 s |
| 5 | 1 objetivo(s) · aturde 2.9 s · cada 15.8 s |
| 10 | 2 objetivo(s) · aturde 3.3 s · cada 13.5 s |
| 15 | 3 objetivo(s) · aturde 3.7 s · cada 11.3 s |
| 20 | 4 objetivo(s) · aturde 4.1 s · cada 9.0 s |

- **Nv 5 — Doble ciclón:** +1 objetivo.
- **Nv 10 — Ciclón fuerte:** +50% de daño.
- **Nv 15 — Ojo de la tormenta:** +60% de duración.
- **Nv 20 — Tornado:** +2 objetivos y -30% de enfriamiento.

#### Enjambre

Un enjambre de insectos cubre al mayor grupo de enemigos y los devora poco a poco.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 82 · dura 5.2 s · cada 21.5 s |
| 5 | Radio 90 · dura 5.8 s · cada 19.5 s |
| 10 | Radio 100 · dura 6.5 s · cada 17.0 s |
| 15 | Radio 110 · dura 7.3 s · cada 14.5 s |
| 20 | Radio 120 · dura 8.0 s · cada 12.0 s |

- **Nv 5 — Enjambre grande:** +30% de radio.
- **Nv 10 — Enjambre feroz:** +60% de daño.
- **Nv 15 — Enjambre duradero:** +50% de duración.
- **Nv 20 — Plaga:** +40% radio, ralentiza 30% y -30% enfriamiento.

#### ★ Forma de oso (ULTIMATE)

Te transformas en un oso colosal: recibes un 60% menos de daño, te regeneras y aplastas a todo el que te rodea.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 10.3 s · aplastón cada 0,9 s (daño x2,4) · cada 68.5 s |
| 5 | 11.8 s · aplastón cada 0,9 s (daño x2,4) · cada 62.5 s |
| 10 | 13.5 s · aplastón cada 0,9 s (daño x2,4) · cada 55.0 s |
| 15 | 15.3 s · aplastón cada 0,9 s (daño x2,4) · cada 47.5 s |
| 20 | 17.0 s · aplastón cada 0,9 s (daño x2,4) · cada 40.0 s |

- **Nv 5 — Oso robusto:** +30% de duración.
- **Nv 10 — Zarpazo de oso:** +50% de daño del aplastón.
- **Nv 15 — Rugido:** Al transformarte onda de choque y -20% de enfriamiento.
- **Nv 20 — Furia del oso:** Al transformarte curas un 30% y +50% de duración.

#### Tormenta eléctrica

Una nube de tormenta se cierne sobre el mayor grupo de enemigos y los fulmina con rayos.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 122 · 5.2 s · rayo cada 0.4 s · cada 21.5 s |
| 5 | Radio 130 · 5.8 s · rayo cada 0.4 s · cada 19.5 s |
| 10 | Radio 140 · 6.5 s · rayo cada 0.4 s · cada 17.0 s |
| 15 | Radio 150 · 7.3 s · rayo cada 0.3 s · cada 14.5 s |
| 20 | Radio 160 · 8.0 s · rayo cada 0.3 s · cada 12.0 s |

- **Nv 5 — Nube amplia:** +30% de radio.
- **Nv 10 — Tormenta larga:** +50% de duración.
- **Nv 15 — Rayos encadenados:** Cada rayo salta a 2 enemigos más.
- **Nv 20 — Supertormenta:** +30% de radio, +30% de duración, +40% de daño y -25% de enfriamiento.

#### Eclipse

Alternas entre fase solar (tus ataques pegan más fuerte) y fase lunar (te regeneras y atacas más rápido).

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Fase 9.9 s · solar +26% daño · lunar +0.9% vida/s y +50% velocidad |
| 5 | Fase 9.5 s · solar +30% daño · lunar +1.1% vida/s y +50% velocidad |
| 10 | Fase 9.0 s · solar +35% daño · lunar +1.4% vida/s y +50% velocidad |
| 15 | Fase 8.5 s · solar +40% daño · lunar +1.7% vida/s y +50% velocidad |
| 20 | Fase 8.0 s · solar +45% daño · lunar +2.0% vida/s y +50% velocidad |

- **Nv 5 — Eclipse largo:** +40% de duración de cada fase.
- **Nv 10 — Sol ardiente:** +40% del bonus de daño solar.
- **Nv 15 — Luna sanadora:** +60% de curación lunar.
- **Nv 20 — Eclipse total:** Onda de energía al cambiar de fase, +30% de daño y de curación.

### Bestia abisal

Bestia inspirada en Primal Beast: embiste, pisotea al avanzar, acumula furia al recibir daño y pulveriza presas contra el suelo. Lanza rocas y ondas tectónicas.

Ataque básico: **Zarpazo primigenio**, tipo phys, intervalo base 0.85 s. Potencia de habilidades: ×1.2.

#### Embestida (Onslaught)

Se prepara durante 0,7 s y carga en línea hacia una presa. Golpea una vez a cada enemigo atravesado, lo empuja y aturde. Los jefes no se desplazan.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Daño x2,2 · aturde 0.6 s · cada 15.7 s |
| 5 | Daño x2,2 · aturde 0.7 s · cada 14.5 s |
| 10 | Daño x2,2 · aturde 0.8 s · cada 13.0 s |
| 15 | Daño x2,2 · aturde 1.0 s · cada 11.5 s |
| 20 | Daño x2,2 · aturde 1.1 s · cada 10.0 s |

- **Nv 5 — Carga contundente:** +25% de daño.
- **Nv 10 — Frente amplio:** +20% de ancho de impacto.
- **Nv 15 — Impulso frecuente:** -20% de enfriamiento.
- **Nv 20 — Avalancha:** +30% de daño y +30% de aturdimiento.

#### Pisotear (Trample)

Durante unos segundos, cada 45 px recorridos causa daño de área. No hace ataques básicos mientras pisotea. Quedarse quieto no causa daño.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 77 · dura 4.1 s · daño base x0,6 + 30% del ataque · cada 19.6 s |
| 5 | Radio 85 · dura 4.6 s · daño base x0,6 + 30% del ataque · cada 18.3 s |
| 10 | Radio 95 · dura 5.2 s · daño base x0,6 + 30% del ataque · cada 16.5 s |
| 15 | Radio 105 · dura 5.8 s · daño base x0,6 + 30% del ataque · cada 14.8 s |
| 20 | Radio 115 · dura 6.4 s · daño base x0,6 + 30% del ataque · cada 13.0 s |

- **Nv 5 — Paso amplio:** +20% de radio.
- **Nv 10 — Paso pesado:** +30% de daño.
- **Nv 15 — Marcha imparable:** +25% de duración.
- **Nv 20 — Terremoto viviente:** +30% de daño y -20% de enfriamiento.

#### Rugido (Uproar)

Acumula hasta 5 cargas de furia con el daño que llega a su vida. Ruge automáticamente con 5 cargas, o estando herido: consume las cargas, ralentiza y gana daño y protección durante 7 s.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +4.3% daño por carga · protección 2.6% por carga · radio 260 |
| 5 | +5.5% daño por carga · protección 3.0% por carga · radio 260 |
| 10 | +7.0% daño por carga · protección 3.5% por carga · radio 260 |
| 15 | +8.5% daño por carga · protección 4.0% por carga · radio 260 |
| 20 | +10.0% daño por carga · protección 4.5% por carga · radio 260 |

- **Nv 5 — Rugido potente:** +20% al daño adicional por carga.
- **Nv 10 — Furia duradera:** +25% de duración.
- **Nv 15 — Rugido protector:** +20% al efecto de protección por carga.
- **Nv 20 — Cólera ancestral:** +25% al daño adicional y +20% de radio.

#### ★ Pulverizar (ULTIMATE)

Agarra a un enemigo cercano y lo golpea repetidamente contra el suelo. Cada impacto hace más daño y causa un pequeño aturdimiento en área. Durante la canalización no se mueve ni ataca. Los jefes no se levantan ni se desplazan.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 3 golpes cada 0,55 s · +20% daño por golpe consecutivo · cada 41.2 s |
| 5 | 3 golpes cada 0,55 s · +20% daño por golpe consecutivo · cada 38.0 s |
| 10 | 4 golpes cada 0,55 s · +20% daño por golpe consecutivo · cada 34.0 s |
| 15 | 4 golpes cada 0,55 s · +20% daño por golpe consecutivo · cada 30.0 s |
| 20 | 5 golpes cada 0,55 s · +20% daño por golpe consecutivo · cada 26.0 s |

- **Nv 5 — Agarre brutal:** +25% de daño.
- **Nv 10 — Impacto amplio:** +20% de radio.
- **Nv 15 — Golpe adicional:** +1 golpe por canalización.
- **Nv 20 — Aniquilación:** +30% de daño y -25% de enfriamiento.

#### Lanzamiento de roca

Lanza una roca con trayectoria visible a una posición distante. Al aterrizar daña y aturde a los enemigos en área.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 67 · daño x2,5 · cada 15.7 s |
| 5 | Radio 75 · daño x2,5 · cada 14.5 s |
| 10 | Radio 85 · daño x2,5 · cada 13.0 s |
| 15 | Radio 95 · daño x2,5 · cada 11.5 s |
| 20 | Radio 105 · daño x2,5 · cada 10.0 s |

- **Nv 5 — Roca grande:** +20% de radio.
- **Nv 10 — Roca pesada:** +30% de daño.
- **Nv 15 — Cantera rápida:** -20% de enfriamiento.
- **Nv 20 — Meteorito pétreo:** +30% de daño y +30% de aturdimiento.

#### Colosal

Aumenta vida máxima. La vida máxima aumenta ligeramente su tamaño y sus áreas, con límites para conservar la legibilidad.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +1.2% vida máxima · hasta +35% de área según vida |
| 5 | +6.0% vida máxima · hasta +35% de área según vida |
| 10 | +12.0% vida máxima · hasta +35% de área según vida |
| 15 | +18.0% vida máxima · hasta +35% de área según vida |
| 20 | +24.0% vida máxima · hasta +35% de área según vida |

- **Nv 5 — Masa creciente:** +8% de vida máxima.
- **Nv 10 — Peso colosal:** +5% de radio de las áreas.
- **Nv 15 — Masa ancestral:** +8% de vida máxima.
- **Nv 20 — Coloso:** +10% de vida máxima y +5% de radio.

#### Piel pétrea

Reduce daño recibido; durante Pisotear obtiene protección adicional.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | -0.6% daño · -0.5% adicional mientras pisotea |
| 5 | -3.0% daño · -2.5% adicional mientras pisotea |
| 10 | -6.0% daño · -5.0% adicional mientras pisotea |
| 15 | -9.0% daño · -7.5% adicional mientras pisotea |
| 20 | -12.0% daño · -10.0% adicional mientras pisotea |

- **Nv 5 — Escamas duras:** -4% de daño recibido.
- **Nv 10 — Escamas vivas:** +2 vida/s.
- **Nv 15 — Coraza antigua:** -4% de daño recibido.
- **Nv 20 — Armadura primigenia:** -5% de daño recibido y +2 vida/s.

#### Impacto brutal

Al terminar una Embestida emite una onda física adicional. Solo se activa una vez por carga.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 87 · daño x0.8 |
| 5 | Radio 95 · daño x1.0 |
| 10 | Radio 105 · daño x1.2 |
| 15 | Radio 115 · daño x1.4 |
| 20 | Radio 125 · daño x1.6 |

- **Nv 5 — Onda amplia:** +20% de radio.
- **Nv 10 — Impacto fuerte:** +30% de daño.
- **Nv 15 — Onda lenta:** Ralentiza 30% durante 2 s.
- **Nv 20 — Choque sísmico:** +30% de daño y +20% de radio.

#### Ondas tectónicas

Rugido libera 3 oleadas de proyectiles terrestres. Su cantidad depende de las cargas consumidas. Las ondas atraviesan enemigos y no generan nuevas ondas.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 2 ondas por carga y oleada · daño x0.4 |
| 5 | 2 ondas por carga y oleada · daño x0.5 |
| 10 | 2 ondas por carga y oleada · daño x0.6 |
| 15 | 2 ondas por carga y oleada · daño x0.7 |
| 20 | 2 ondas por carga y oleada · daño x0.8 |

- **Nv 5 — Ondas fuertes:** +25% de daño.
- **Nv 10 — Frente múltiple:** +2 proyectiles por oleada.
- **Nv 15 — Ondas largas:** +20% de recorrido.
- **Nv 20 — Falla tectónica:** +30% de daño y ralentiza 25% durante 1 s.

#### Roca fragmentada

La roca principal se divide al caer en 3 fragmentos que impactan detrás del objetivo. Los fragmentos no se vuelven a dividir.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 3 fragmentos · radio 46 · daño x0.5 |
| 5 | 3 fragmentos · radio 50 · daño x0.7 |
| 10 | 3 fragmentos · radio 55 · daño x0.8 |
| 15 | 3 fragmentos · radio 60 · daño x0.9 |
| 20 | 3 fragmentos · radio 65 · daño x1.1 |

- **Nv 5 — Fragmentos amplios:** +20% de radio.
- **Nv 10 — Fragmentos pesados:** +30% de daño.
- **Nv 15 — Esquirlas:** +1 fragmento.
- **Nv 20 — Ruptura total:** +30% de daño y +1 fragmento.

#### Ímpetu salvaje

Aumenta la velocidad de desplazamiento y el daño de los zarpazos. No permite atacar durante Pisotear, Embestida o Pulverizar.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +1.0% movimiento · +1.5% daño de zarpazo |
| 5 | +5.0% movimiento · +7.5% daño de zarpazo |
| 10 | +10.0% movimiento · +15.0% daño de zarpazo |
| 15 | +15.0% movimiento · +22.5% daño de zarpazo |
| 20 | +20.0% movimiento · +30.0% daño de zarpazo |

- **Nv 5 — Garras pesadas:** +20% de daño de zarpazo.
- **Nv 10 — Paso ágil:** +10% de velocidad de movimiento.
- **Nv 15 — Garras antiguas:** +20% de daño de zarpazo.
- **Nv 20 — Bestia imparable:** +25% de daño de zarpazo y +10% de movimiento.

#### Vigor ancestral

Regenera vida de forma constante, sin consumir cadáveres ni invocar criaturas.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +0.3 vida/s |
| 5 | +1.5 vida/s |
| 10 | +3.0 vida/s |
| 15 | +4.5 vida/s |
| 20 | +6.0 vida/s |

- **Nv 5 — Vigor creciente:** +25% de regeneración de esta habilidad.
- **Nv 10 — Descanso ancestral:** +2 vida/s.
- **Nv 15 — Vigor antiguo:** +30% de regeneración de esta habilidad.
- **Nv 20 — Vitalidad primigenia:** +30% de regeneración y -3% de daño recibido.

### Chamán de la tormenta

Troll ritual: moja a sus enemigos, acumula estática y la descarga mediante rayos y tótems. Combina viento, lluvia y un monzón devastador.

Ataque básico: **Descarga estática**, tipo elec, intervalo base 0.95 s. Potencia de habilidades: ×1.15.

#### Lluvia ritual

Crea una zona que aplica Mojado durante 4 s. Mojado aumenta un 15% el daño eléctrico recibido, sin eliminar inmunidades.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 97 · dura 5.1 s · cada 12.8 s |
| 5 | Radio 105 · dura 5.5 s · cada 11.8 s |
| 10 | Radio 115 · dura 6.0 s · cada 10.5 s |
| 15 | Radio 125 · dura 6.5 s · cada 9.3 s |
| 20 | Radio 135 · dura 7.0 s · cada 8.0 s |

- **Nv 5 — Nube amplia:** +20% de radio.
- **Nv 10 — Lluvia persistente:** +30% de duración.
- **Nv 15 — Ciclo del agua:** -20% de enfriamiento.
- **Nv 20 — Diluvio ritual:** +20% de radio y +30% de duración.

#### Arco conductor

Los impactos del ataque básico saltan a otros enemigos, priorizando mojados. Golpear con el básico a un mojado genera 1 de estática (máximo 30).

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 saltos · daño x0.4 |
| 5 | 1 saltos · daño x0.5 |
| 10 | 2 saltos · daño x0.6 |
| 15 | 3 saltos · daño x0.7 |
| 20 | 3 saltos · daño x0.8 |

- **Nv 5 — Conductor fuerte:** +25% de daño de los saltos.
- **Nv 10 — Arco extra:** +1 salto.
- **Nv 15 — Tensión creciente:** +30% de daño de los saltos.
- **Nv 20 — Red eléctrica:** +1 salto y +25% de daño.

#### Tótem del trueno

Coloca tótems destructibles. Cada descarga consume 1 de estática; permanecen inactivos sin carga.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 tótems · duran 14.3 s · cada 21.6 s |
| 5 | 1 tótems · duran 15.5 s · cada 20.0 s |
| 10 | 2 tótems · duran 17.0 s · cada 18.0 s |
| 15 | 2 tótems · duran 18.5 s · cada 16.0 s |
| 20 | 3 tótems · duran 20.0 s · cada 14.0 s |

- **Nv 5 — Madera firme:** +40% de vida de los tótems.
- **Nv 10 — Cobre cargado:** +30% de daño.
- **Nv 15 — Invocación rápida:** -20% de enfriamiento.
- **Nv 20 — Círculo del trueno:** +1 tótem y +30% de daño.

#### Tótem de la marea

Coloca un tótem destructible que cura al héroe y a aliados cercanos cada segundo.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Cura 0.6% vida/s · dura 10.2 s · cada 23.6 s |
| 5 | Cura 0.8% vida/s · dura 11.0 s · cada 22.0 s |
| 10 | Cura 1.0% vida/s · dura 12.0 s · cada 20.0 s |
| 15 | Cura 1.2% vida/s · dura 13.0 s · cada 18.0 s |
| 20 | Cura 1.4% vida/s · dura 14.0 s · cada 16.0 s |

- **Nv 5 — Agua vital:** +30% de curación.
- **Nv 10 — Marea amplia:** +25% de radio de curación.
- **Nv 15 — Madera curada:** +40% de vida y +25% de duración.
- **Nv 20 — Marea perpetua:** +30% de curación y -20% de enfriamiento.

#### Ráfaga de viento

Golpea y aleja enemigos cercanos. Los jefes resisten el desplazamiento.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 133 · daño x1,5 · cada 11.8 s |
| 5 | Radio 145 · daño x1,5 · cada 10.8 s |
| 10 | Radio 160 · daño x1,5 · cada 9.5 s |
| 15 | Radio 175 · daño x1,5 · cada 8.3 s |
| 20 | Radio 190 · daño x1,5 · cada 7.0 s |

- **Nv 5 — Viento amplio:** +20% de radio.
- **Nv 10 — Viento cortante:** +35% de daño.
- **Nv 15 — Ráfaga frecuente:** -20% de enfriamiento.
- **Nv 20 — Vendaval:** +30% de daño y ralentiza 30% durante 2 s.

#### Nube cargada

Una nube sigue lentamente al grupo elegido y descarga cada segundo. Puede mojar durante Monzón.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 82 · dura 5.1 s · cada 16.6 s |
| 5 | Radio 90 · dura 5.6 s · cada 15.3 s |
| 10 | Radio 100 · dura 6.2 s · cada 13.5 s |
| 15 | Radio 110 · dura 6.8 s · cada 11.8 s |
| 20 | Radio 120 · dura 7.4 s · cada 10.0 s |

- **Nv 5 — Nube extensa:** +20% de radio.
- **Nv 10 — Nube intensa:** +30% de daño.
- **Nv 15 — Nube duradera:** +30% de duración.
- **Nv 20 — Cumulonimbo:** +30% de daño y -20% de enfriamiento.

#### Piel de tormenta

Crea una barrera temporal. Al agotarse o caducar libera una descarga cercana. No acumula barreras de esta habilidad.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Barrera 10.6% vida · dura 6 s · cada 19.6 s |
| 5 | Barrera 13.0% vida · dura 6 s · cada 18.0 s |
| 10 | Barrera 16.0% vida · dura 6 s · cada 16.0 s |
| 15 | Barrera 19.0% vida · dura 6 s · cada 14.0 s |
| 20 | Barrera 22.0% vida · dura 6 s · cada 12.0 s |

- **Nv 5 — Barrera gruesa:** +30% de barrera.
- **Nv 10 — Estallido amplio:** +25% de radio de descarga.
- **Nv 15 — Recarga:** -20% de enfriamiento.
- **Nv 20 — Armadura del trueno:** +30% de barrera y +40% de daño de descarga.

#### Sobrecarga

Consume Mojado de varios objetivos para causar daño eléctrico adicional y aturdir. Los jefes reciben control reducido.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 2 objetivos · daño x2,4 · cada 11.8 s |
| 5 | 2 objetivos · daño x2,4 · cada 10.8 s |
| 10 | 3 objetivos · daño x2,4 · cada 9.5 s |
| 15 | 4 objetivos · daño x2,4 · cada 8.3 s |
| 20 | 5 objetivos · daño x2,4 · cada 7.0 s |

- **Nv 5 — Carga fuerte:** +30% de daño.
- **Nv 10 — Carga múltiple:** +2 objetivos.
- **Nv 15 — Parálisis:** +40% de duración del control.
- **Nv 20 — Sobretensión:** +30% de daño y -20% de enfriamiento.

#### Vórtice

Una zona atrae enemigos normales y los moja. Los jefes solo se ralentizan.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 102 · dura 3.1 s · cada 17.6 s |
| 5 | Radio 110 · dura 3.5 s · cada 16.3 s |
| 10 | Radio 120 · dura 4.0 s · cada 14.5 s |
| 15 | Radio 130 · dura 4.5 s · cada 12.8 s |
| 20 | Radio 140 · dura 5.0 s · cada 11.0 s |

- **Nv 5 — Espiral amplia:** +20% de radio.
- **Nv 10 — Espiral larga:** +30% de duración.
- **Nv 15 — Corriente continua:** -20% de enfriamiento.
- **Nv 20 — Ojo de tormenta:** +20% de radio y +30% de duración.

#### ★ Monzón (ULTIMATE)

Moja una zona amplia, descarga rayos y genera estática para los tótems una vez por segundo.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Dura 7.2 s · cada 63.6 s |
| 5 | Dura 8.0 s · cada 58.0 s |
| 10 | Dura 9.0 s · cada 51.0 s |
| 15 | Dura 10.0 s · cada 44.0 s |
| 20 | Dura 11.0 s · cada 37.0 s |

- **Nv 5 — Estación larga:** +25% de duración.
- **Nv 10 — Rayos intensos:** +35% de daño.
- **Nv 15 — Regreso del monzón:** -25% de enfriamiento.
- **Nv 20 — Tempestad:** +20% de duración y +30% de daño.

#### Golpe de relámpago

Un rayo enorme cae sobre el enemigo más fuerte y gasta estática. Si el objetivo está mojado, el daño es mucho mayor. Necesita estática suficiente.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Gasta 10 de estática · daño x6 (x9 si está mojado) · cada 13.7 s |
| 5 | Gasta 10 de estática · daño x6 (x9 si está mojado) · cada 12.5 s |
| 10 | Gasta 10 de estática · daño x6 (x9 si está mojado) · cada 11.0 s |
| 15 | Gasta 10 de estática · daño x6 (x9 si está mojado) · cada 9.5 s |
| 20 | Gasta 10 de estática · daño x6 (x9 si está mojado) · cada 8.0 s |

- **Nv 5 — Rayo pesado:** +30% de daño.
- **Nv 10 — Doble impacto:** +1 rayo contra otro enemigo.
- **Nv 15 — Conductor perfecto:** Cuesta 3 de estática menos y -20% de enfriamiento.
- **Nv 20 — Furia de la tormenta:** +1 rayo, +40% de daño y aturde a los golpeados 1 s.

#### Bola de relámpago

Un orbe eléctrico recorre despacio al grupo más numeroso: descarga sobre todos los de su alrededor, los moja y genera estática.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 71 · dura 4.1 s · golpea cada 0,35 s · +1 estática por mojado (máx. 3) · cada 17.6 s |
| 5 | Radio 75 · dura 4.5 s · golpea cada 0,35 s · +1 estática por mojado (máx. 3) · cada 16.0 s |
| 10 | Radio 80 · dura 5.0 s · golpea cada 0,35 s · +1 estática por mojado (máx. 3) · cada 14.0 s |
| 15 | Radio 85 · dura 5.5 s · golpea cada 0,35 s · +1 estática por mojado (máx. 3) · cada 12.0 s |
| 20 | Radio 90 · dura 6.0 s · golpea cada 0,35 s · +1 estática por mojado (máx. 3) · cada 10.0 s |

- **Nv 5 — Orbe grande:** +30% de radio.
- **Nv 10 — Descarga intensa:** +40% de daño.
- **Nv 15 — Orbe persistente:** +50% de duración.
- **Nv 20 — Bola gemela:** +1 orbe, +30% de daño y -20% de enfriamiento.

### Bardo de guerra

Gnomo músico: alterna marcha, refugio y balada con el botón Melodía. Sus notas generan compases y remates; el gran concierto recorre las tres canciones.

Ataque básico: **Nota cortante**, tipo magic, intervalo base 0.9 s. Potencia de habilidades: ×1.15.

#### Acorde cortante

Las notas básicas atraviesan enemigos y ganan daño. Solo el primer impacto de cada nota genera un compás.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +3% daño · atraviesa 2 objetivos |
| 5 | +15% daño · atraviesa 2 objetivos |
| 10 | +30% daño · atraviesa 3 objetivos |
| 15 | +45% daño · atraviesa 4 objetivos |
| 20 | +60% daño · atraviesa 4 objetivos |

- **Nv 5 — Cuerda de acero:** +20% de daño.
- **Nv 10 — Nota penetrante:** +1 enemigo atravesado.
- **Nv 15 — Resonancia:** +25% de daño.
- **Nv 20 — Acorde maestro:** +1 enemigo atravesado y +20% de daño.

#### Marcha de guerra

Melodía ofensiva seleccionable: acelera tus ataques y, en menor medida, los de aliados cercanos. Solo una melodía está activa.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +9.2% velocidad propia · aliados reciben la mitad |
| 5 | +14.0% velocidad propia · aliados reciben la mitad |
| 10 | +20.0% velocidad propia · aliados reciben la mitad |
| 15 | +26.0% velocidad propia · aliados reciben la mitad |
| 20 | +32.0% velocidad propia · aliados reciben la mitad |

- **Nv 5 — Paso vivo:** ×1,1 al efecto de velocidad.
- **Nv 10 — Marcha amplia:** +25% de radio de aliados.
- **Nv 15 — Paso firme:** ×1,15 al efecto de velocidad.
- **Nv 20 — Marcha heroica:** ×1,2 al efecto de velocidad.

#### Canción de refugio

Melodía defensiva seleccionable: reduce el daño que recibes. Sustituye a las otras melodías.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | -8.8% daño recibido |
| 5 | -12.0% daño recibido |
| 10 | -16.0% daño recibido |
| 15 | -20.0% daño recibido |
| 20 | -24.0% daño recibido |

- **Nv 5 — Refugio firme:** ×1,15 al efecto defensivo.
- **Nv 10 — Respirar:** +2 vida/s.
- **Nv 15 — Muro sonoro:** ×1,15 al efecto defensivo.
- **Nv 20 — Refugio heroico:** ×1,2 al efecto defensivo.

#### Balada vital

Melodía curativa seleccionable: recupera vida para ti y aliados cercanos. Sustituye a las otras melodías.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Cura 0.4% vida/s |
| 5 | Cura 0.6% vida/s |
| 10 | Cura 0.8% vida/s |
| 15 | Cura 0.9% vida/s |
| 20 | Cura 1.1% vida/s |

- **Nv 5 — Balada cálida:** +30% de curación.
- **Nv 10 — Balada amplia:** +25% de radio.
- **Nv 15 — Segunda estrofa:** +25% de curación.
- **Nv 20 — Balada heroica:** +30% de curación.

#### Disonancia

Debilita enemigos cercanos: reciben más daño mágico durante 4 s. No afecta a inmunes ni acumula el mismo efecto.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 148 · +11.0% daño mágico · cada 11.8 s |
| 5 | Radio 160 · +15.0% daño mágico · cada 10.8 s |
| 10 | Radio 175 · +20.0% daño mágico · cada 9.5 s |
| 15 | Radio 190 · +25.0% daño mágico · cada 8.3 s |
| 20 | Radio 205 · +30.0% daño mágico · cada 7.0 s |

- **Nv 5 — Acorde amplio:** +20% de radio.
- **Nv 10 — Malestar persistente:** +40% de duración.
- **Nv 15 — Discordia frecuente:** -20% de enfriamiento.
- **Nv 20 — Discordia mayor:** +20% de radio y +10 puntos de vulnerabilidad.

#### Redoble

Cada cuarto compás libera un remate de área adicional. Sin esta habilidad, el cuarto compás lanza una pequeña onda básica.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 102 · daño x1.1 |
| 5 | Radio 110 · daño x1.3 |
| 10 | Radio 120 · daño x1.6 |
| 15 | Radio 130 · daño x1.9 |
| 20 | Radio 140 · daño x2.2 |

- **Nv 5 — Tambor amplio:** +20% de radio.
- **Nv 10 — Golpe seco:** +30% de daño.
- **Nv 15 — Tambor de guerra:** +30% de daño.
- **Nv 20 — Redoble heroico:** +25% de daño y ralentiza 25% durante 1 s.

#### Contratiempo

Interrumpe enemigos normales cercanos. Los jefes solo sufren una ralentización breve.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 142 · aturde 0.5 s · cada 13.7 s |
| 5 | Radio 150 · aturde 0.6 s · cada 12.5 s |
| 10 | Radio 160 · aturde 0.8 s · cada 11.0 s |
| 15 | Radio 170 · aturde 0.9 s · cada 9.5 s |
| 20 | Radio 180 · aturde 1.0 s · cada 8.0 s |

- **Nv 5 — Silencio amplio:** +20% de radio.
- **Nv 10 — Pausa larga:** +40% de duración.
- **Nv 15 — Ritmo quebrado:** -20% de enfriamiento.
- **Nv 20 — Silencio rotundo:** +20% de radio y +30% de duración.

#### Estribillo

Cada 8 notas básicas que impactan lanza un eco reducido. Los ecos no generan compases, otros ecos ni crescendo.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Eco de 36.5% del ataque básico |
| 5 | Eco de 42.5% del ataque básico |
| 10 | Eco de 50.0% del ataque básico |
| 15 | Eco de 57.5% del ataque básico |
| 20 | Eco de 65.0% del ataque básico |

- **Nv 5 — Eco fuerte:** +30% de daño.
- **Nv 10 — Segunda voz:** +1 objetivo del eco.
- **Nv 15 — Eco intenso:** +25% de daño.
- **Nv 20 — Coro:** +1 objetivo y +25% de daño.

#### Crescendo

Mantener una melodía acumula hasta 5 niveles de intensidad, uno cada 2 s. Cambiar de canción los consume en una onda.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 132 · daño por acumulación x0.3 |
| 5 | Radio 140 · daño por acumulación x0.4 |
| 10 | Radio 150 · daño por acumulación x0.5 |
| 15 | Radio 160 · daño por acumulación x0.6 |
| 20 | Radio 170 · daño por acumulación x0.8 |

- **Nv 5 — Crescendo amplio:** +20% de radio.
- **Nv 10 — Crescendo fuerte:** +35% de daño.
- **Nv 15 — Tensión musical:** +30% de daño.
- **Nv 20 — Remate heroico:** +25% de daño y +20% de radio.

#### ★ Gran concierto (ULTIMATE)

Recorre marcha, refugio y balada, una por vez, y emite ondas. Durante el concierto funciona cada canción incluso sin comprarla; al terminar vuelve a tu selección.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Dura 9.2 s · cada 63.7 s |
| 5 | Dura 9.8 s · cada 58.5 s |
| 10 | Dura 10.5 s · cada 52.0 s |
| 15 | Dura 11.3 s · cada 45.5 s |
| 20 | Dura 12.0 s · cada 39.0 s |

- **Nv 5 — Concierto largo:** +25% de duración.
- **Nv 10 — Concierto intenso:** +35% de daño de ondas.
- **Nv 15 — Nueva gira:** -25% de enfriamiento.
- **Nv 20 — Ovación:** +20% de duración y +30% de daño de ondas.

#### Lira hechizante

Tu lira hechiza a los enemigos más fuertes: durante unos segundos pelean contra los demás en vez de atacarte. Los jefes solo se ralentizan. Necesita al menos 2 enemigos cerca.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 objetivo(s) · 3.1 s · cada 17.6 s |
| 5 | 1 objetivo(s) · 3.5 s · cada 16.0 s |
| 10 | 2 objetivo(s) · 4.0 s · cada 14.0 s |
| 15 | 3 objetivo(s) · 4.5 s · cada 12.0 s |
| 20 | 4 objetivo(s) · 5.0 s · cada 10.0 s |

- **Nv 5 — Lira clara:** +40% de duración.
- **Nv 10 — Doble hechizo:** +1 objetivo.
- **Nv 15 — Pasión violenta:** Los hechizados hacen +50% de daño a los demás.
- **Nv 20 — Orquesta del amor:** +1 objetivo, +40% de duración y -25% de enfriamiento.

#### Invocación de osos

Invocas osos que pelean a tu lado y atraen a los enemigos. Se benefician de la Marcha de guerra.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 2 osos · vida 138 · duran 20.5 s · cada 27.4 s |
| 5 | 2 osos · vida 210 · duran 22.5 s · cada 25.0 s |
| 10 | 3 osos · vida 300 · duran 25.0 s · cada 22.0 s |
| 15 | 3 osos · vida 390 · duran 27.5 s · cada 19.0 s |
| 20 | 4 osos · vida 480 · duran 30.0 s · cada 16.0 s |

- **Nv 5 — Más osos:** +1 oso.
- **Nv 10 — Osos curtidos:** +50% de vida y +30% de daño.
- **Nv 15 — Osos duraderos:** +50% de duración.
- **Nv 20 — Manada ursina:** +1 oso, +30% de vida, +30% de daño y -25% de enfriamiento.

### Alquimista

Ogro alquimista: prepara charcos de ácido, aceite y gases. Prende el aceite, combina sustancias y consume veneno para curarse. El vidrio de sus frascos causa daño físico y el contenido aprendido causa veneno.

Ataque básico: **Frasco corrosivo**, tipo phys, intervalo base 1.05 s. Potencia de habilidades: ×1.15.

#### Frasco corrosivo

Mejora el ataque básico, añade salpicadura e intoxicación y deja un charco ácido al impactar. Máximo 16 charcos propios en total.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 39 · veneno x0,15/s durante 3 s · charco 5 s |
| 5 | Radio 43 · veneno x0,15/s durante 3 s · charco 5 s |
| 10 | Radio 48 · veneno x0,15/s durante 3 s · charco 5 s |
| 15 | Radio 53 · veneno x0,15/s durante 3 s · charco 5 s |
| 20 | Radio 58 · veneno x0,15/s durante 3 s · charco 5 s |

- **Nv 5 — Frasco ancho:** +20% de radio de salpicadura y ácido.
- **Nv 10 — Ácido fuerte:** +30% de daño de impacto, veneno y ácido.
- **Nv 15 — Ácido persistente:** +30% de duración del charco.
- **Nv 20 — Corrosión máxima:** +30% de daño y +20% de radio.

#### Aceite inflamable

Coloca aceite que ralentiza un 30%. El daño de fuego sobre un enemigo dentro prende el charco y consume el aceite.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 77 · dura 7.2 s · cada 11.8 s |
| 5 | Radio 85 · dura 7.8 s · cada 10.8 s |
| 10 | Radio 95 · dura 8.5 s · cada 9.5 s |
| 15 | Radio 105 · dura 9.3 s · cada 8.3 s |
| 20 | Radio 115 · dura 10.0 s · cada 7.0 s |

- **Nv 5 — Derrame amplio:** +20% de radio.
- **Nv 10 — Aceite denso:** +30% de duración.
- **Nv 15 — Reserva de aceite:** -20% de enfriamiento.
- **Nv 20 — Aceite refinado:** +40% de daño al arder y +20% de radio.

#### Chispa reactiva

Lanza una ignición de fuego sobre un grupo y prende el aceite cercano.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 72 · daño x1,8 · cada 9.8 s |
| 5 | Radio 80 · daño x1,8 · cada 9.0 s |
| 10 | Radio 90 · daño x1,8 · cada 8.0 s |
| 15 | Radio 100 · daño x1,8 · cada 7.0 s |
| 20 | Radio 110 · daño x1,8 · cada 6.0 s |

- **Nv 5 — Chispa amplia:** +20% de radio.
- **Nv 10 — Chispa intensa:** +35% de daño.
- **Nv 15 — Ignición rápida:** -20% de enfriamiento.
- **Nv 20 — Combustión:** +30% de daño y +20% de radio.

#### Catalizador

Adelanta 1 s de daño de venenos y quemaduras propios y reduce su duración en 1 s. No afecta a efectos de otras habilidades generales.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 3 enemigos · cada 8.8 s |
| 5 | 4 enemigos · cada 8.0 s |
| 10 | 5 enemigos · cada 7.0 s |
| 15 | 6 enemigos · cada 6.0 s |
| 20 | 7 enemigos · cada 5.0 s |

- **Nv 5 — Más reactivos:** +2 enemigos afectados.
- **Nv 10 — Catálisis rápida:** -20% de enfriamiento.
- **Nv 15 — Catalizador amplio:** +25% de alcance.
- **Nv 20 — Catálisis maestra:** +2 enemigos y -20% de enfriamiento.

#### Mezcla inestable

Consume dos charcos cercanos de sustancias distintas para causar una explosión. No se propaga a otras mezclas.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 102 · daño x3 · cada 11.8 s |
| 5 | Radio 110 · daño x3 · cada 10.8 s |
| 10 | Radio 120 · daño x3 · cada 9.5 s |
| 15 | Radio 130 · daño x3 · cada 8.3 s |
| 20 | Radio 140 · daño x3 · cada 7.0 s |

- **Nv 5 — Reacción amplia:** +20% de radio.
- **Nv 10 — Reacción fuerte:** +40% de daño.
- **Nv 15 — Reacción frecuente:** -20% de enfriamiento.
- **Nv 20 — Reacción magistral:** +30% de daño y +20% de radio.

#### Antídoto experimental

Consume una parte del veneno propio de hasta 3 enemigos cercanos para curarte. No puede curar sin veneno que consumir.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Cura hasta 2.1% vida por uso · cada 13.7 s |
| 5 | Cura hasta 2.6% vida por uso · cada 12.5 s |
| 10 | Cura hasta 3.2% vida por uso · cada 11.0 s |
| 15 | Cura hasta 3.8% vida por uso · cada 9.5 s |
| 20 | Cura hasta 4.4% vida por uso · cada 8.0 s |

- **Nv 5 — Fórmula sana:** +30% de curación.
- **Nv 10 — Dosis rápida:** -20% de enfriamiento.
- **Nv 15 — Fórmula pura:** +30% de curación.
- **Nv 20 — Panacea:** +30% de curación y -20% de enfriamiento.

#### Delantal protector

Reduce el daño recibido mientras estás cerca de tus charcos; cuenta como máximo 3.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | -1.1% daño por charco cercano |
| 5 | -1.6% daño por charco cercano |
| 10 | -2.2% daño por charco cercano |
| 15 | -2.8% daño por charco cercano |
| 20 | -3.4% daño por charco cercano |

- **Nv 5 — Cuero grueso:** -5% de daño recibido.
- **Nv 10 — Forro vital:** +2 vida/s.
- **Nv 15 — Cuero tratado:** -5% de daño recibido.
- **Nv 20 — Equipo protector:** -5% de daño recibido y +3 vida/s.

#### Destilación rápida

Acelera el lanzamiento de frascos básicos. No acelera las otras habilidades.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | +2% velocidad de lanzamiento |
| 5 | +10% velocidad de lanzamiento |
| 10 | +20% velocidad de lanzamiento |
| 15 | +30% velocidad de lanzamiento |
| 20 | +40% velocidad de lanzamiento |

- **Nv 5 — Mano rápida:** +10% de velocidad de lanzamiento.
- **Nv 10 — Destilado limpio:** +2 vida/s.
- **Nv 15 — Mano experta:** +10% de velocidad de lanzamiento.
- **Nv 20 — Maestro mezclador:** +15% de velocidad de lanzamiento.

#### Gas volátil

Crea una nube tóxica persistente que puede combinarse con ácido o aceite mediante Mezcla inestable.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 87 · dura 5.2 s · cada 14.7 s |
| 5 | Radio 95 · dura 5.8 s · cada 13.5 s |
| 10 | Radio 105 · dura 6.5 s · cada 12.0 s |
| 15 | Radio 115 · dura 7.3 s · cada 10.5 s |
| 20 | Radio 125 · dura 8.0 s · cada 9.0 s |

- **Nv 5 — Nube extensa:** +20% de radio.
- **Nv 10 — Gas concentrado:** +35% de daño.
- **Nv 15 — Gas persistente:** +30% de duración.
- **Nv 20 — Nube letal:** +30% de daño y -20% de enfriamiento.

#### ★ Gran transmutación (ULTIMATE)

Consume hasta 8 charcos y provoca una explosión en cada uno. Las explosiones no crean charcos ni activan nuevas reacciones.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 112 · daño x2,8 por charco · cada 63.7 s |
| 5 | Radio 120 · daño x2,8 por charco · cada 58.5 s |
| 10 | Radio 130 · daño x2,8 por charco · cada 52.0 s |
| 15 | Radio 140 · daño x2,8 por charco · cada 45.5 s |
| 20 | Radio 150 · daño x2,8 por charco · cada 39.0 s |

- **Nv 5 — Explosión amplia:** +20% de radio.
- **Nv 10 — Transmutación intensa:** +35% de daño.
- **Nv 15 — Transmutación frecuente:** -25% de enfriamiento.
- **Nv 20 — Obra magna:** +30% de daño y +20% de radio.

#### Toque de oro

Conviertes en oro a los enemigos más fuertes: los hieres y te llevas monedas. Cuanto más oro tengas, más fuerte pega.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | 1 objetivo(s) · daño x3 · hasta +153% según tu oro · +7 oro por golpe · cada 10.8 s |
| 5 | 1 objetivo(s) · daño x3 · hasta +165% según tu oro · +12 oro por golpe · cada 9.8 s |
| 10 | 2 objetivo(s) · daño x3 · hasta +180% según tu oro · +18 oro por golpe · cada 8.5 s |
| 15 | 2 objetivo(s) · daño x3 · hasta +195% según tu oro · +24 oro por golpe · cada 7.3 s |
| 20 | 3 objetivo(s) · daño x3 · hasta +210% según tu oro · +30 oro por golpe · cada 6.0 s |

- **Nv 5 — Oro puro:** +40% de oro por golpe.
- **Nv 10 — Peso del oro:** +50% de daño.
- **Nv 15 — Doble toque:** +1 objetivo.
- **Nv 20 — Piedra filosofal:** +1 objetivo, +40% de daño, +50% de oro y -25% de enfriamiento.

#### Pandemia

Cuando muere un enemigo envenenado, su veneno se contagia a los de alrededor.

| Nivel | Efecto base de la ficha |
|---|---|
| 1 | Radio 92 · 4 contagiados · veneno x0.2/s durante 5 s |
| 5 | Radio 100 · 5 contagiados · veneno x0.3/s durante 5 s |
| 10 | Radio 110 · 6 contagiados · veneno x0.3/s durante 5 s |
| 15 | Radio 120 · 7 contagiados · veneno x0.3/s durante 5 s |
| 20 | Radio 130 · 8 contagiados · veneno x0.4/s durante 5 s |

- **Nv 5 — Contagio amplio:** +30% de radio.
- **Nv 10 — Plaga virulenta:** +50% de daño del veneno.
- **Nv 15 — Cadena de plagas:** Los contagiados también propagan una vez más y +2 contagiados.
- **Nv 20 — Pandemia mortal:** +30% de radio, +40% de daño, +2 contagiados y el veneno ralentiza.

## Habilidades generales

Las doce se lanzan desde la torre y pueden usarse con cualquier héroe. Daño por impacto de referencia = base × factor de balance × 2,2 × K(L) × daño global. K(L) = 1 + 0,5(L−1) hasta nivel 5; después 3 + 0,18(L−5). K vale 1 / 3 / 3,9 / 4,8 / 5,7 en niveles 1 / 5 / 10 / 15 / 20. Las orbitales añaden ×(1 + 0,06 × máximo(0,L−5)).

Los daños siguientes usan daño global = 1 y no incluyen daño periódico, críticos, explosiones secundarias ni resistencias. El intervalo base se multiplica por las mejoras de enfriamiento de la habilidad; luego se divide por la velocidad global de ataque y, con prisa, por otro ×1,5. Las tablas muestran cantidades y daños base, ANTES de las mejoras especiales listadas debajo.

### Misil arcano

Misiles teledirigidos. Nv3, 5, 10 y 15: +1 misil.

Tipo: magic. Intervalo base: 1.1 s.

| Nivel | Daño por impacto | Cantidad base |
|---|---|---|
| 1 | 74.80 | 1 |
| 5 | 224.40 | 3 |
| 10 | 291.72 | 4 |
| 15 | 359.04 | 5 |
| 20 | 426.36 | 5 |

Mejoras acumulativas (se añaden a la progresión base de la tabla):

- **Nv 5 — Estrella intensa:** +15% de daño.
- **Nv 10 — Constelación:** +1 misil por lanzamiento.
- **Nv 15 — Órbita rápida:** -15% de enfriamiento.
- **Nv 20 — Resonancia arcana:** +20% de daño; cada impacto rebota a un enemigo cercano con 50% de daño.

### Bola de fuego

Explota en área y quema (daño en el tiempo).

Tipo: fire. Intervalo base: 1.8 s.

| Nivel | Daño por impacto | Cantidad base |
|---|---|---|
| 1 | 20.02 | 1 |
| 5 | 60.06 | 2 |
| 10 | 78.08 | 3 |
| 15 | 96.10 | 4 |
| 20 | 114.11 | 4 |

Mejoras acumulativas (se añaden a la progresión base de la tabla):

- **Nv 5 — Explosión amplia:** +15% de radio de explosión y alcance.
- **Nv 10 — Fuego intenso:** +20% de daño.
- **Nv 15 — Doble llamarada:** +1 bola por lanzamiento.
- **Nv 20 — Infierno continuo:** +20% de daño y -15% de enfriamiento.

### Cadena de rayos

Salta entre enemigos cercanos. +1 salto por nivel.

Tipo: elec. Intervalo base: 1.4 s.

| Nivel | Daño por impacto | Cantidad base |
|---|---|---|
| 1 | 118.58 | 1 |
| 5 | 355.74 | 1 |
| 10 | 462.46 | 1 |
| 15 | 569.18 | 1 |
| 20 | 675.91 | 1 |

Mejoras acumulativas (se añaden a la progresión base de la tabla):

- **Nv 5 — Carga extra:** +1 salto.
- **Nv 10 — Alta tensión:** +20% de daño.
- **Nv 15 — Descarga rápida:** -15% de enfriamiento.
- **Nv 20 — Tormenta encadenada:** +2 saltos y +15% de daño.

### Castigo divino

Rayo de luz con daño en área.

Tipo: divine. Intervalo base: 2.2 s.

| Nivel | Daño por impacto | Cantidad base |
|---|---|---|
| 1 | 127.78 | 1 |
| 5 | 383.33 | 3 |
| 10 | 498.33 | 4 |
| 15 | 613.32 | 5 |
| 20 | 728.32 | 5 |

Mejoras acumulativas (se añaden a la progresión base de la tabla):

- **Nv 5 — Luz extensa:** +20% de radio secundario y alcance.
- **Nv 10 — Juicio severo:** +20% de daño.
- **Nv 15 — Veredicto doble:** +1 objetivo por lanzamiento.
- **Nv 20 — Sentencia celestial:** -15% de enfriamiento y 20% de probabilidad de aturdir 0,8 s.

### Orbe oscuro

Orbe lento que atraviesa a todos los enemigos.

Tipo: dark. Intervalo base: 2.4 s.

| Nivel | Daño por impacto | Cantidad base |
|---|---|---|
| 1 | 108.11 | 1 |
| 5 | 324.32 | 2 |
| 10 | 421.62 | 3 |
| 15 | 518.92 | 4 |
| 20 | 616.22 | 4 |

Mejoras acumulativas (se añaden a la progresión base de la tabla):

- **Nv 5 — Núcleo oscuro:** +15% de daño.
- **Nv 10 — Orbe gemelo:** +1 orbe por lanzamiento.
- **Nv 15 — Vacío persistente:** Los impactos ralentizan un 25% durante 2 s.
- **Nv 20 — Eclipse:** +25% de daño y -15% de enfriamiento.

### Lanza de acero

Lanza veloz que atraviesa a todos los enemigos en línea.

Tipo: phys. Intervalo base: 1.5 s.

| Nivel | Daño por impacto | Cantidad base |
|---|---|---|
| 1 | 98.56 | 1 |
| 5 | 295.68 | 2 |
| 10 | 384.38 | 3 |
| 15 | 473.09 | 4 |
| 20 | 561.79 | 4 |

Mejoras acumulativas (se añaden a la progresión base de la tabla):

- **Nv 5 — Acero templado:** +15% de daño.
- **Nv 10 — Lanza gemela:** +1 lanza por lanzamiento.
- **Nv 15 — Lanzamiento rápido:** -15% de enfriamiento.
- **Nv 20 — Empalamiento:** +20% de daño y 15% de probabilidad de aturdir 0,8 s.

### Pulso arcano

Onda mágica que golpea a todos los enemigos cercanos. Más radio cada nivel.

Tipo: magic. Intervalo base: 2.6 s.

| Nivel | Daño por impacto | Cantidad base |
|---|---|---|
| 1 | 90.24 | 1 |
| 5 | 270.73 | 1 |
| 10 | 351.95 | 1 |
| 15 | 433.17 | 1 |
| 20 | 514.39 | 1 |

Mejoras acumulativas (se añaden a la progresión base de la tabla):

- **Nv 5 — Onda amplia:** +20% de radio.
- **Nv 10 — Onda intensa:** +20% de daño.
- **Nv 15 — Ritmo arcano:** -15% de enfriamiento.
- **Nv 20 — Onda opresiva:** +15% de daño y ralentiza un 30% durante 1,5 s.

### Espinas venenosas

Brotan espinas en área que envenenan (se acumula).

Tipo: poison. Intervalo base: 2.4 s.

| Nivel | Daño por impacto | Cantidad base |
|---|---|---|
| 1 | 80.96 | 1 |
| 5 | 242.88 | 2 |
| 10 | 315.74 | 3 |
| 15 | 388.61 | 4 |
| 20 | 461.47 | 4 |

Mejoras acumulativas (se añaden a la progresión base de la tabla):

- **Nv 5 — Maleza extensa:** +15% de radio y alcance.
- **Nv 10 — Espinas afiladas:** +20% de daño de impacto y veneno.
- **Nv 15 — Brote extra:** +1 zona de espinas por lanzamiento.
- **Nv 20 — Jardín mortal:** +20% de daño y -15% de enfriamiento.

### Granizo

Lluvia de hielo en área que ralentiza.

Tipo: ice. Intervalo base: 2.2 s.

| Nivel | Daño por impacto | Cantidad base |
|---|---|---|
| 1 | 123.09 | 1 |
| 5 | 369.27 | 2 |
| 10 | 480.05 | 3 |
| 15 | 590.83 | 4 |
| 20 | 701.61 | 4 |

Mejoras acumulativas (se añaden a la progresión base de la tabla):

- **Nv 5 — Nube extensa:** +15% de radio y alcance.
- **Nv 10 — Hielo pesado:** +20% de daño.
- **Nv 15 — Nube gemela:** +1 zona de granizo por lanzamiento.
- **Nv 20 — Ventisca:** +20% de daño y -15% de enfriamiento.

### Bolas de fuego orbitales

Bolas de fuego giran alrededor de la torre (1 por nivel, hasta 5) y queman a quien toquen. Con cada nivel son más grandes, rápidas y fuertes.

Tipo: fire. Efecto continuo.

| Nivel | Daño por impacto | Cantidad base |
|---|---|---|
| 1 | 13.73 | 1 |
| 5 | 41.18 | 5 |
| 10 | 69.60 | 5 |
| 15 | 105.43 | 5 |
| 20 | 148.67 | 5 |

Mejoras acumulativas (se añaden a la progresión base de la tabla):

- **Nv 5 — Satélite extra:** +1 bola orbital sobre el límite base.
- **Nv 10 — Sol ardiente:** +20% de daño de impacto y quemadura.
- **Nv 15 — Corona extensa:** +20% de tamaño de las bolas.
- **Nv 20 — Sistema solar:** +1 bola orbital y +20% de daño.

### Pulpo vampírico

Un pulpo violeta ata a los enemigos con tentáculos (+1 cada 2 niveles, hasta 8): les roba vida y te cura.

Tipo: dark. Efecto continuo.

| Nivel | Daño por impacto | Cantidad base |
|---|---|---|
| 1 | 49.70 | 1 |
| 5 | 149.09 | 3 |
| 10 | 193.82 | 5 |
| 15 | 238.55 | 8 |
| 20 | 283.28 | 8 |

Mejoras acumulativas (se añaden a la progresión base de la tabla):

- **Nv 5 — Brazo extra:** +1 tentáculo sobre el límite base.
- **Nv 10 — Succión vital:** +25% de curación por golpe.
- **Nv 15 — Abrazo profundo:** +20% de alcance y +15% de daño.
- **Nv 20 — Kraken:** +1 tentáculo, +20% de daño y +20% de curación.

### Disparo de oro

Da oro extra cuando mata. Desde el Nv6 su daño aumenta con el oro que tengas.

Tipo: phys. Intervalo base: 1.2 s.

| Nivel | Daño por impacto | Cantidad base |
|---|---|---|
| 1 | 34.19 | 1 |
| 5 | 102.56 | 2 |
| 10 | 133.33 | 3 |
| 15 | 164.10 | 4 |
| 20 | 194.87 | 4 |

Mejoras acumulativas (se añaden a la progresión base de la tabla):

- **Nv 5 — Moneda afilada:** +15% de daño.
- **Nv 10 — Acuñación doble:** +1 moneda por lanzamiento.
- **Nv 15 — Dinero veloz:** -15% de enfriamiento.
- **Nv 20 — Fortuna contundente:** +20% de daño; cada impacto rebota a un enemigo cercano con 50% de daño.

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
- Cristal de alcance añade 5% por nivel a habilidades que usan el multiplicador de alcance. El pulso normal usa (110+3L) por su mejora especial de radio, sin el multiplicador del Cristal.
- Los diez poderes automáticos pertenecen a la torre y se desbloquean en sus niveles 3, 6…30.
- Este informe cubre las habilidades particulares de los héroes y las generales. El dragón y el inventario tienen sus propios sistemas independientes.

## Progresión especial completada

Las 192 particulares y las 12 generales tienen ahora cuatro mejoras en 5/10/15/20. Las generales conservan sus ultimates originales; las nuevas mejoras se acumulan con ellas. El daño mostrado incorpora la mejora de daño; la ficha muestra también los nuevos recuentos y la curación del pulpo. Orbitales llega a 7 bolas y pulpo a 10 tentáculos. Las cifras base de las tablas anteriores no incluyen estas mejoras.

Los nuevos multiplicadores de radio afectan al alcance de las generales que lo usan; también a las explosiones de fuego, al área secundaria de Castigo, al radio de espinas y granizo, al pulso y al tamaño de las orbitales según su ficha.

## Poderes de la Torre del mago

Se desbloquean en niveles 3, 6…30 de la torre. Cada uno empieza en nivel 1 y se mejora hasta 20 con puntos de torre u oro. Las mejoras de nivel 5, 10, 15 y 20 son acumulativas. El daño escala con el nivel de la torre y los objetos. Se lanzan automáticamente cuando están listos y hay objetivos adecuados. Los iconos inferiores sirven para mejorar sus niveles.

### 💥 Explosión

Torre Nv 3 · recarga base 14 s. Explota alrededor de la torre: daño de quemadura, empuja y quema.

- **Nv 5 — Llama intensa:** +30% de daño.
- **Nv 10 — Onda expansiva:** +25% de radio.
- **Nv 15 — Fuego persistente:** +50% de duración de la quemadura y -15% de enfriamiento.
- **Nv 20 — Supernova:** +50% de daño y +20% de radio.

### ⛈️ Tormenta de rayos

Torre Nv 6 · recarga base 18 s. Fulmina a varios enemigos con rayos.

- **Nv 5 — Dos relámpagos:** +2 objetivos.
- **Nv 10 — Truenos intensos:** +35% de daño.
- **Nv 15 — Frente tormentoso:** +25% de alcance y -20% de enfriamiento.
- **Nv 20 — Tempestad:** +3 objetivos y +40% de daño.

### 💀 Soldados esqueleto

Torre Nv 9 · recarga base 25 s. Invoca esqueletos que luchan por ti durante 20 s.

- **Nv 5 — Refuerzos:** +2 soldados.
- **Nv 10 — Huesos rúnicos:** +50% de vida y +30% de daño.
- **Nv 15 — Guardia eterna:** +50% de duración.
- **Nv 20 — Legión arcana:** +3 soldados, +40% de daño y -20% de enfriamiento.

### 🧊 Ventisca

Torre Nv 12 · recarga base 30 s. Hiela y ralentiza a todos los enemigos en alcance.

- **Nv 5 — Frío intenso:** +40% de daño.
- **Nv 10 — Invierno largo:** +50% de duración de la ralentización.
- **Nv 15 — Frente polar:** +30% de alcance y -15% de enfriamiento.
- **Nv 20 — Cero absoluto:** Congela 2 s a los enemigos alcanzados y +50% de daño.

### ☄️ Lluvia de meteoros

Torre Nv 15 · recarga base 22 s. Marca varios puntos y, tras un instante, caen meteoros con daño de quemadura en área.

- **Nv 5 — Doble impacto:** +2 meteoros.
- **Nv 10 — Cráteres amplios:** +30% de alcance y radio de impacto.
- **Nv 15 — Lluvia frecuente:** -20% de enfriamiento y +30% de daño.
- **Nv 20 — Cataclismo:** +3 meteoros y +50% de daño.

### ☠️ Nube tóxica

Torre Nv 18 · recarga base 24 s. Zona de veneno sobre el mayor grupo de enemigos durante varios segundos.

- **Nv 5 — Miasma extenso:** +30% de alcance y radio.
- **Nv 10 — Veneno denso:** +40% de daño.
- **Nv 15 — Nube persistente:** +50% de duración.
- **Nv 20 — Plaga tóxica:** +50% de daño y -25% de enfriamiento.

### 🌟 Juicio divino

Torre Nv 21 · recarga base 28 s. Daño divino a todos los enemigos en alcance y cura al héroe.

- **Nv 5 — Luz intensa:** +35% de daño.
- **Nv 10 — Gracia divina:** +50% de curación.
- **Nv 15 — Juicio amplio:** +30% de alcance y -20% de enfriamiento.
- **Nv 20 — Absolución:** +50% de daño y +30% de curación.

### 🕳️ Agujero negro

Torre Nv 24 · recarga base 32 s. Atrae a los enemigos hacia un punto y los daña con oscuridad.

- **Nv 5 — Horizonte amplio:** +30% de alcance y radio.
- **Nv 10 — Singularidad densa:** +40% de daño.
- **Nv 15 — Vacío persistente:** +50% de duración.
- **Nv 20 — Colapso astral:** +60% de daño y -25% de enfriamiento.

### ⏳ Distorsión temporal

Torre Nv 27 · recarga base 40 s. Ralentiza a los enemigos y acelera tus ataques un 50% unos segundos.

- **Nv 5 — Tiempo dilatado:** +30% de duración de la prisa y ralentización.
- **Nv 10 — Campo temporal:** +30% de alcance.
- **Nv 15 — Bucle temporal:** -25% de enfriamiento.
- **Nv 20 — Eternidad:** +50% de duración y -20% de enfriamiento.

### 🔰 Barrera rúnica

Torre Nv 30 · recarga base 36 s. Protege al héroe con un escudo y libera desde la torre una onda arcana que daña y ralentiza.

- **Nv 5 — Runas reforzadas:** +40% de escudo.
- **Nv 10 — Onda protectora:** +30% de radio y +35% de daño.
- **Nv 15 — Sellos persistentes:** +50% de duración de la ralentización y -20% de enfriamiento.
- **Nv 20 — Bastión arcano:** +50% de escudo y +50% de daño.
