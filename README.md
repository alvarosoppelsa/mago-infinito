# Mago Infinito

Juego de supervivencia infinito en el navegador. Elige uno de los 13 héroes (mago, arquero elfo, nigromante, enano artillero, bárbaro, cazador demonio, sacerdote, monje, paladín, cazador troll, hombre lobo, tauren druida o Devorador abisal), combina habilidades, objetos y un dragón, y sobrevive el mayor tiempo posible.

- 30 tipos de enemigos, cada uno con su armadura y resistencias por tipo de daño. Algunos corren más, resucitan, se dividen, se curan (o curan a otros), se vuelven invulnerables por momentos o llegan en enjambres y oleadas numerosas. Pasa el ratón por encima de un enemigo para ver sus rasgos.
- Toda la interfaz está en el panel inferior: habilidades del héroe, habilidades generales, inventario (10 objetos, entre ellos el *Tomo del dragón* y el *Colmillo vampírico*) y el dragón. Pasa el ratón (o mantén pulsado en móvil) sobre cualquier casilla para ver su descripción.
- El dragón tiene 10 habilidades (incluidas *Aliento helado* y *Escamas de dragón*), cada una hasta nivel 20 y con una ultimate que se desbloquea a nivel 10.
- Cada habilidad tiene su propio alcance (por ejemplo, la *Lanza de acero* llega lejos y los *Cien puños* del monje solo cuerpo a cuerpo). Al pasar el ratón sobre una habilidad se ve su alcance en el tooltip y como un círculo en el mapa. El *Cristal de alcance* suma un 5% a todas.
- Las 16 habilidades generales están equilibradas: todas tienen el mismo daño de referencia (media entre un jefe solo y una horda), así que las de área destacan contra grupos y las de un objetivo contra jefes. Cada una tiene su propio aspecto en pantalla (dagas, estrellas arcanas, bolas de fuego con estela, cristales de hielo, dardos, martillos, monedas, orbes, lanzas, rayos con brillo, columnas de luz, ondas, espinas que brotan y granizo que cae).
- El monje y el paladín pelean cuerpo a cuerpo: igual que el dragón, salen a perseguir al enemigo más cercano, golpean al llegar y vuelven a su puesto (la cámara se queda en el centro). El paladín tiene *Espada consagrada*, *Barrido*, *Escudo del cruzado*, *Carga sagrada*, *Martillo de la justicia*, *Aura de devoción*, *Imposición de manos* e *Ira vengadora*.
- Se juega en el navegador, sin instalar nada (un único archivo `index.html`).
- Funciona en ordenador y en móvil (el panel inferior se abre por pestañas, zoom con pellizco).
- Controles de escritorio: `P` pausa, `F` velocidad, `Q W E R Z X C V B` poderes, rueda del ratón o `+`/`-` para zoom.
- El ranking se guarda localmente en tu navegador.

Estado: beta.

Todas las habilidades de héroe y generales tienen mejoras acumulativas en los niveles 5, 10, 15 y 20. Las generales conservan además sus ultimates existentes. Las fichas muestran las mejoras desbloqueadas y pendientes.

- [Detalle de habilidades y escalados](ANALISIS-HABILIDADES.md).
- [Análisis del plantel y propuesta de cuatro nuevos héroes](PROPUESTA-HEROES.md).
- Comprobar la progresión: `node comprobar-progresion.cjs`.
- Regenerar el informe desde el código: `node generar-analisis.cjs`.

El **Devorador abisal** consume restos cercanos para acumular hasta 60 de biomasa. Tiene diez habilidades con mejoras en 5/10/15/20 y una transformación temporal que puede prolongar al comer, con duración limitada. Su dibujo sigue el sistema articulado del resto de héroes y muestra placas y púas nuevas al mutar.

- [Dirección visual de los cuatro héroes elegidos](DISENO-NUEVOS-HEROES.md).
- Comprobar las mecánicas del Devorador: `node comprobar-devorador.cjs`.
- Generar galería visual y partida de prueba: `node previsualizar-devorador.cjs`.
