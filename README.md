# Mago Infinito

Juego de supervivencia infinito en el navegador. Elige uno de los 16 héroes (mago, arquero elfo, nigromante, enano artillero, bárbaro, cazador demonio, sacerdote, monje, paladín, cazador troll, hombre lobo, tauren druida, Bestia abisal, Chamán de la tormenta, Bardo de guerra o Alquimista), combina habilidades, objetos y un dragón, y sobrevive el mayor tiempo posible.

- 30 tipos de enemigos, cada uno con su armadura y resistencias por tipo de daño. Algunos corren más, resucitan, se dividen, se curan (o curan a otros), se vuelven invulnerables por momentos o llegan en enjambres y oleadas numerosas. Pasa el ratón por encima de un enemigo para ver sus rasgos.
- Toda la interfaz está en el panel inferior: habilidades del héroe, torre del mago (habilidades generales y poderes), inventario (14 objetos) y el dragón. Pasa el ratón (o mantén pulsado en móvil) sobre cualquier casilla para ver su descripción.
- El dragón tiene 10 habilidades (incluidas *Aliento helado* y *Escamas de dragón*), cada una hasta nivel 20 y con una ultimate que se desbloquea a nivel 10.
- Cada habilidad tiene su propio alcance (por ejemplo, la *Lanza de acero* llega lejos y los *Cien puños* del monje solo cuerpo a cuerpo). Al pasar el ratón sobre una habilidad se ve su alcance en el tooltip y como un círculo en el mapa. El *Cristal de alcance* suma un 5% a todas.
- La **Torre del mago** es una estructura fija junto al héroe, indestructible, con su propio ataque básico (*Rayo arcano de la torre*). Lanza las 12 habilidades generales (se quitaron *Dagas*, *Bola de hielo*, *Dardo venenoso* y *Martillo sagrado* por redundantes) y desbloquea los 10 poderes automáticos al subir de nivel (3, 6, 9... 30). Sube con su propia experiencia (15% base de cada baja más el 85% de su proporción de daño efectivo), sin nivel máximo, y cada nivel da 1 punto de torre para mejorar sus habilidades y poderes (los puntos del héroe quedan para las habilidades del héroe). Se hace más alta y gana runas al subir. Las 12 habilidades generales están equilibradas: las de área destacan contra grupos y las de un objetivo contra jefes.
- El monje y el paladín pelean cuerpo a cuerpo: igual que el dragón, salen a perseguir al enemigo más cercano, golpean al llegar y vuelven a su puesto (la cámara se queda en el centro). El paladín tiene *Espada consagrada*, *Barrido*, *Escudo del cruzado*, *Carga sagrada*, *Martillo de la justicia*, *Aura de devoción*, *Imposición de manos* e *Ira vengadora*.
- Se juega en el navegador, sin instalar nada (abre `index.html` y conserva la carpeta `assets` a su lado).
- Funciona en ordenador y en móvil (el panel inferior se abre por pestañas, zoom con pellizco).
- Controles de escritorio: `P` pausa, `F` velocidad, rueda del ratón o `+`/`-` para zoom.
- El ranking se guarda localmente en tu navegador.

Estado: beta.

Los 14 objetos se pueden mejorar hasta nivel **50**. Cada habilidad muestra una estrella: gris antes de 5, verde desde 5, azul desde 10, violeta desde 15 y dorada desde 20. En objetos los tramos son 10/20/30/40; el nivel 50 conserva el dorado con brillo de máximo. Las estrellas permanecen visibles aunque no puedas comprar una mejora.

El Escudo arcano conserva su reducción anterior hasta nivel 20. Después reduce un 2,5% del daño restante por nivel para que cada mejora siga siendo útil sin convertir el daño en curación. Comprobación de compras y estrellas: `node comprobar-items-estrellas.cjs`.

Todas las habilidades de héroe, generales y los diez poderes de torre tienen mejoras acumulativas en los niveles 5, 10, 15 y 20. Las generales conservan además sus ultimates existentes. Las fichas muestran las mejoras desbloqueadas y pendientes.

- [Detalle de habilidades y escalados](ANALISIS-HABILIDADES.md).
- [Análisis del plantel y propuesta de cuatro nuevos héroes](PROPUESTA-HEROES.md).
- Comprobar la progresión: `node comprobar-progresion.cjs`.
- Regenerar el informe desde el código: `node generar-analisis.cjs`.

La **Bestia abisal** adapta el estilo de Primal Beast: Embestida, Pisotear, Rugido, Pulverizar y Lanzamiento de roca, junto con Colosal y mejoras complementarias. Tiene doce habilidades con progresión en 5/10/15/20. Acumula furia al recibir daño y deja de atacar durante Pisotear o Pulverizar. Su silueta muestra lomo naranja con grandes placas dorsales, vientre pizarra y brazos enormes con cadenas.

- [Dirección visual de los cuatro héroes elegidos](DISENO-NUEVOS-HEROES.md).
- Comprobar las mecánicas de la Bestia: `node comprobar-devorador.cjs`.
- Generar galería visual y partida de prueba: `node previsualizar-devorador.cjs`.

Los tres nuevos héroes tienen habilidades propias y mejoras en 5/10/15/20:

- **Chamán troll:** piel azul, orejas largas, colmillos y bastón ritual. Aplica Mojado, acumula hasta 30 de estática, mantiene tótems destructibles y desata Monzón.
- **Bardo gnomo:** cuerpo pequeño, barba y bigote blancos y laúd redondo. Alterna Marcha, Refugio y Balada con el botón **Melodía**. Una sola canción está activa; Gran concierto recorre las tres automáticamente.
- **Alquimista ogro:** cuerpo corpulento, barriga, colmillos y alambique dorsal. Combina hasta 16 charcos de ácido, aceite y gas. El fuego enciende el aceite; Mezcla y Transmutación consumen charcos sin generar reacciones infinitas.

Comprobar sus mecánicas y seis simulaciones del motor: `node comprobar-nuevos-heroes.cjs`. Regenerar su galería y página de prueba: `node previsualizar-nuevos-heroes.cjs`.

La torre no tiene nivel máximo. Hasta el nivel 30 conserva la curva `redondear(15 × 1,33^(nivel − 1))`; después el coste crece linealmente un 6% del coste del nivel 30 por nivel. En los niveles **50, 100, 150…** aparece otra torre indestructible con su propio rayo arcano. Todas comparten nivel, experiencia y mejoras; las habilidades generales y los poderes salen de la torre principal. Se ajustó la curva inicial tras simular doce minutos con cada héroe. La **Barrera rúnica** se desbloquea al nivel 30: otorga un escudo al héroe y libera una onda arcana que daña y ralentiza. Sus mejoras aumentan el escudo, el daño, el radio y la duración de la ralentización, y reducen su recarga.

Cada poder empieza en nivel 1 y se puede mejorar hasta 20 con puntos de torre u oro. Todos tienen mejoras acumulativas en **5, 10, 15 y 20**, detalladas en su ficha y en el informe de habilidades. Se lanzan automáticamente al recargarse y tener objetivos adecuados. Los iconos del panel inferior sirven para comprar mejoras; se han retirado los botones y atajos de lanzamiento manual.

- Verificar torre, reparto de experiencia, compras y las cuatro mejoras de los diez poderes: `node comprobar-torre.cjs`.
- Simular doce minutos por héroe y mostrar los tiempos de desbloqueo: `node comprobar-torre.cjs --simular`. Usa semilla fija, compras automáticas e inmunidad del héroe para medir la progresión completa; no mide supervivencia ni sustituye el balance de partidas manuales.
- Comparar el daño con las comunes desde el héroe o la torre: `node comprobar-torre.cjs --comparar`.
- Verificar la interfaz real en Chrome, a 1500×1000 y móvil a 390×844: `node previsualizar-torre.cjs` y `node comprobar-interfaz.cjs` (Windows; usa `CHROME_PATH` si Chrome está en otra ruta).
- Generar una partida de revisión de la torre para ordenador y móvil: `node previsualizar-torre.cjs`.

El huevo del dragón incuba en un nido fijo junto a la torre, incluso cuando el héroe se desplaza; el dragón nace en ese mismo punto. El mapa es un claro de bosque verde ilustrado, con árboles, helechos, flores, piedras con musgo y una pequeña charca. La imagen se carga una vez y el fondo se guarda en caché; si no está disponible, se dibuja una pradera de respaldo.

La experiencia de la torre aparece únicamente en el HUD superior, junto a la vida, la experiencia del héroe y las barras del dragón. Las cinco secciones inferiores comparten altura de cabecera y filas alineadas; en móvil se mantienen dentro del cajón de habilidades y tienda.
