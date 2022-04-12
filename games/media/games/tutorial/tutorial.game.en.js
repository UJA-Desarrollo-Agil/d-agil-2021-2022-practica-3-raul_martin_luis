
// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500


/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {

	
	inicio: new undum.SimpleSituation(
		"<h2>Capítulo 1</h2>\
		<br>\
		<p>Caminas con la mirada perdida, escuchando el sonido de tu respiración,\
		sintiendo como las gotas de lluvia golpean y empapan la caperuza de tu capa.\
		De repente un rayo dibuja en el oscuro firmamento la silueta de una ciudad con castillo.\
		Esta visión te llena de esperanza, es el primer signo de civilización que ves en tres días.\
		Tus provisiones empiezan a escasear y estás harto de dormir a la intemperie, y sabes que\
		donde hay castillos, hay comida y lechos calientes.</p>\
		<br>\
		<p class='transient'><a href='muralla'>Siguiente Página</a></p>"
	),
	
	muralla: new undum.SimpleSituation(
		"<p>Tardas dos horas de caminata bajo la incesante lluvia en alcanzar las afueras de la ciudad.\
		Un espeso olor a descomposición, que ni siquiera el viento es capaz de disipar, llega reptando\
		hasta tus fosas nasales. Alzas la vista y observas una serie de cabezas empaladas sobre unos\
		letreros carcomidos en los que yace la palabra “hereje”.No es nada nuevo, en muchas otras\
		ciudades has tenido la suerte de contemplar la misma advertencia macabra que viene a decir “no\
		queremos gente rebelde en nuestra ciudad, solo borregos que obedezcan sin hacer ruido”. Y como\
		no, camuflado bajo la excusa de la religión y esa retahíla de salvar el alma de los pecadores.</p>\
		<br>\
		<p class='transient'><a href='ciudad'>Siguiente Página</a></p>"
	),
	
	ciudad: new undum.SimpleSituation(
		"<h2>Capítulo 2</h2>\
		<br>\
		<p>No te detienes a contemplar la “obra de Dios” durante mucho tiempo porque el olor empieza a ser\
		insoportable hasta tal punto de darte arcadas a pesar de tener el estómago vacío. Cruzas el arco\
		de la entrada y poco a poco la lluvia empieza a amainar. Te quitas la caperuza y miras alrededor:\
		calles inundadas de barro y estiércol, casas con fachadas grises y visiblemente maltratadas por el\
		tiempo y, lo más extraño, no ves a nadie. De improvisto, como si de puñetazo se tratase, el hambre\
		golpea tus entrañas.</p>\
		<br>\
		<p>―Joder…una posada― piensas en voz alta ―necesito comer algo.</p>\
		<br>\
		<p>Sigues avanzando por la calle más ancha, evitando charcos, hasta que ves un cartel oxidado:\
		“El Patito Frito”.</p>\
		<br>\
		<p class='transient'><a href='posada'>Siguiente Página</a></p>"
	),
	
	posada: new undum.SimpleSituation(
	"<p>No hay gente, al menos a la vista, porque está muy oscuro, malamente iluminado por unas cuantas lámparas de\
	aceite que hacen que las penumbras sean aún más intensas. Pero por otro lado lo agradeces, porque si llega a\
	haber más luz seguramente te sorprendería la cantidad de polvo y grasa acumulada en el simple y tosco inmobiliario.</p>\
	<br>\
	<p>―¿¡Hola!?― saludas, para ver si hay alguien.</p>\
	<br>\
	<p>―¡Qué sorpresa!― dice una pequeña silueta de voz aguda desde detrás de la barra ― Un cliente. Pasa, pasa. ¿Qué se te ofrece?</p>\
	<br>\
	<p>Te acercas y ves a una chica joven, no muy alta, de cabellos cenicientos que lleva un delantal no muy limpio.</p>\
	<br>\
	<ul class='options'>\
		<li><a href='./p_comida' class='once'>Pedir comida</a>.</li>\
		<li><a href='./p_dinero' class='once'>Preguntar por un trabajo</a>.</li>\
		<li><a href='./p_nombre' class='once'>Preguntar por su nombre</a>.</li>\
		<li><a href='./p_irse' class='once'>Marcharse</a>.</li>\
	</ul>\
	<br>\
	",
		{
			actions: {
				"p_comida":"<p>―Algo de comer por favor, llevo varios días en el camino.</p>\
							<br>\
							<p>―Perdona mi desconfianza pero…―dice estirando la cabeza mientras te mira de arriba abajo con sus\
							grandes ojos verdes― ¿tienes dinero pa pagar?</p>\
							<br>\
							<p>―A decir verdad no, lo siento.</p>\
							<br>\
							<p>―Pos no hay comida.―exclama agitando sus grisáceos cabellos― No voy a gastar la escasa\
							comida que queda a cambio de nada.</p>"
							,
				'p_dinero': "<br><p>―¿Hay alguna manera de conseguir dinero rápido por aquí?</p>\
							<br>\
							<p>―Que va. ¿Acaso no has visto cómo está la ciudad? El rey nos despoja tos los meses del poco\
							oro que tenemos. Muchos artesanos y comerciantes se fueron de la ciudad porque apenas tenían pa vivir.</p>\
							<br>\
							<p>―Joder…― malcides volviendo los ojos ―¿Entonces no queda nadie?</p>\
							<br>\
							<p>―Al principio éramos bastantes, pero vino una extraña enfermedad y poco a poco nuestro número disminuyó.\
							Los pocos que quedan se refugian en sus casas.</p>\
							<br>\
							<p>―En menudo agujero he ido a parar. ¿Y el rey no hace nada para solucionarlo?</p>\
							<br>\
							<p>―Nada, de hecho, lo empeora. Desde que su hijo y heredero cayó enfermo, empezó a acusarnos de herejía, de\
							que habíamos traído el mal a esta tierra y la enfermedad era un castigo divino. Y a todo aquel que se acercaba\
							a pedir ayuda o a exigir que hiciera algo, terminaba con la testa en una pica.</p>\
							<br>\
							<p>―Wow, la cosa mejora por momentos. Será mejor que me vaya de aquí."
							,
				'p_nombre':	"<p>―Antes de irme. ¿Cómo te llamas?</p>\
							<br>\
							<p>―<b>Falka</b></p>\
							<br>\
							<p>―Y dime <b>Falka</b>, ¿por qué no te vas como el resto?</p>\
							<br>\
							<p>―Mis padres, que regentaban esta taberna, murieron a causa de la enfermedad. Y tampoco tengo dinero como\
							para ir a algún sitio. Además una chica como yo, sola vagabundeando por los caminos…</p>\
							<br>\
							<p>―Comprendo. No prometo nada, pero haré lo que pueda. Hasta pronto Falka.</p>"
							,
				'p_irse':	"<p>―Espera un momento, por favor. Por tus pintas diría que eres una persona valiente y aventurera, de las que han\
							visto mundo. Se rumorea que el rey ofrece una recompensa por la cura pa salvar al príncipe, por mu avaro que sea.\
							Deseo que se muera el mu gusano, pero la cura vendría bien a todo el reino.</p>\
							<br>\
							<p>―Estupendo. O me muero de hambre por el camino o voy al castillo y con un poco de suerte no me decapitan. Supongo\
							que no tengo más opción. Gracias pequeña.</p>\
							<br>\
							<p class='transient'><a href='calle'>Siguiente Página</a></p>"
			}
		}

	),
	
	calle: new undum.SimpleSituation(
		"<p>Te diriges al castillo, cuesta arriba, con pasos lentos pero firmes, porque a pesar de que ha dejado de llover, el desgastado y húmedo\
		empedrado resbala bastante y la suciedad que los recubre tampoco ayuda.</p>\
		<br>\
		<p>Las calles están completamente mudas. Ves a unas pocas personas que asoman curiosas por las ventanas cuando pasas por delante, pero\
		rápidamente vuelven a esconderse tras un repentino ataque de tos. Hasta que al fin aparecen dos soldados reales.</p>\
		<br>\
		<p>―¡Alto! Identifíquese</p>\
		<br>\
		<p>A ambos soldados tan solo se les puede llamar “soldados” por sus vestimentas: botas altas, cota de malla, cascos y los colores y\
		escudos reales. Pero si llega a ser por su físico, no dirías que son soldados, ya que no son altos ni especialmente jóvenes, y a\
		juzgar por sus redondeadas barrigas, y fuerte olor, apostarías que son amantes del aguardiente.</p>\
		<br>\
		<p>―Soy [insertar nombre]― contestas sosegadamente ―Acabo de llegar. He oído que vuestro rey necesita ayuda con la enfermedad, me\
		gustaría prestar mis servicios.</p>\
		<br>\
		<p>―Bien, seguidnos</p>\
		<br>\
		<p>Los sigues durante poco tiempo hasta que llegáis a un gran foso que separa la ciudad con el castillo. Un puente levadizo conecta\
		ambos lados. Lo cruzais y llegais al patio principal. En él puedes encontrar una cuadriga de la que se escuchan unos relinchos.\
		Por otro lado, hay una zona de entrenamiento bastante descuidada, en la que hay un par de viejos maniquíes de paja y varias dianas\
		torcidas. También hay unas varias escaleras de piedra que dan a la parte superior de la muralla, y otras tantas puertas para acceder al interior.</p>\
		<br>\
		<p>Continuais recto por el patio, subis unas escaleras que dan a un gran portón entreabierto. Uno de los soldados lo empuja con esfuerzo\
		y entrais al castillo.</p>\
		<br>\
		<p class='transient'><a href='castillo' class='once'>Siguiente página</a>.</p>"
	),
	
	castillo: new undum.SimpleSituation(
		"<p>Al entrar te quedas completamente sorprendido por el contraste con todo lo visto hasta ahora. Al llegar a la ciudad jamás te\
		hubieras imaginado que encontrarías tal cantidad de riqueza y lujo: Candelabros dorados por todos lados iluminando con sus\
		reflejos la gran sala, tapices y cuadros detalladamente elaborados con escenas épicas de guerra, caza y algún que otro desnudo.\
		Y en el suelo, una amplia y limpia alfombra roja que conducía hasta el trono. Eso en cuanto a la decoración. A lo referente a la\
		arquitectura había anchas columnas a los lados llenas de florituras, separadas entre sí por vidrieras de colores. Todo muy ostentoso\
		e imponente.</p>\
		<br>\
		<p>Un empujón te devuelve a la realidad, uno de los soldados te hace un gesto ordenándote que camines. Avanzais hasta una amplia\
		escalera de mármol, sobre ella se hallan dos magnificentes tronos: el del rey y el de la reina.</p>\
		<br>\
		<p>El rey <b>Artorias</b>, un hombre viejo grandullón y barbudo, estaba envuelto en una espesa y abrigada capa, portando cadenas y colgantes\
		dorados de diversos tipos. Sus ropajes también parecían ser de fabricación laboriosa. Ante él había dispuesta una bandeja con patas\
		de la que engullía un muslo de pollo y bebía de una copa de vino. Su capacidad de desmenuzar al animal, a pesar de tener los dedos\
		llenos de anillos, es realmente extraordinaria. Lo que te lleva a pensar que si sigue comiendo así, pronto tendrían que fabricar otro\
		trono más grande. O trasladar su alcoba a la sala del trono.</p>\
		<br>\
		<p>Por otro lado estaba la reina <b>Jera Mug</b>, sentada en su trono más pequeño, suspirando con la mirada perdida. Por su redondeada forma\
		y ancho cuello, deduces que a ella tampoco le falta comida.</p>\
		<br>\
		<p>―¿Qué queréis?― pregunta el rey mientras alza brevemente la vista hacia a ti.</p>\
		<br>\
		<p>―Su majestad este…― dice tímidamente uno de los soldados.</p>\
		<br>\
		<p>―Me llamo [insertar nombre], alteza― te presentas antes de que el militar terminase de hablar― Recorro el mundo en busca de aventuras.\
		A mis oídos ha llegado que buscáis la cura para la enfermedad que atormenta a vuestro hijo. Y humildemente os presto mis servicios.</p>\
		<br>\
		<p>―Bien, bien…― asiente con la boca llena.</p>\
		<br>\
		<p>―Artorias, hermano mío, no debéis escuchar a este… asaltante de caminos.</p>\
		<br>\
		<p>Un hombre esbelto con armadura negra, que había pasado desapercibido hasta el momento, irrumpe en la sala. Era el duque <b>Paul Married</b>,\
		medio hermano del rey. A diferencia de los reyes, él parece estar en buena forma física. Tampoco porta joyas, tan solo un anillo\
		con la <b>flor de lys</b>.</p>\
		<br>\
		<p>―¿Y qué remedio nos queda, Paul?― le contesta el rey alzando la vista del plato ―O enviamos a alguien en busca de una cura o será\
		el fin de este reino.</p>\
		<br>\
		<p>―Pero…</p>\
		<br>\
		<p>―¡Pero nada!― exclama el rey enfadado ―Se trata de mi hijo. Y yo soy tu rey, así que a callar y no me repliques.</p>\
		<br>\
		<p>El caballero se da la vuelta de una forma muy dramática tirando de un lado de la capa.</p>\
		<br>\
		<p>―Vos estais acabando con el reino― farfulla muy bajito sin que nadie le oiga salvo tú.</p>\
		<br>\
		<p>Desaparece de la sala tras un portazo. El rey suspira y se gira hacia ti.</p>\
		<br>\
		<p>―¿Y bien? ¿Aún estás aquí?― te recrimina con un gesto exagerado.</p>\
		<br>\
		<p>―Disculpe su majestad― dices mientras haces una reverencia ― Pero esperaba que me pusierais al tanto de la cura. Y si era posible,\
		reponer mis víveres para el camino.</p>\
		<br>\
		<p>―¿Sabes cuantos aventureros han venido antes de ti? Yo no recompenso por promesas, premio los resultados, así que no esperes que\
		te dé caviar y cerveza de reserva. ¡Turdis!― grita y señala a uno de los guardias ―Sácalo de aquí y explicale a donde ha de ir en\
		busca de la cura, y dale un mendrugo pan y, si eso, algo de mantequilla.</p>\
		<br>\
		<p class='transient'><a href='cocina' class='once'>Siguiente página</a>.</p>"
	),
	
	cocina: new undum.SimpleSituation(
		"<p>Turdis te conduce fuera de palacio, y te lleva a la parte de atrás de las cocinas. Allí te ofrece un trozo de pan con un poco de\
		mantequilla, tal como se le ordenó.</p>\
		<br>\
		<p>―Espera aquí forastero, y no toques nada.</p>\
		<br>\
		<p>Te encuentras solo en la cocina. Sobre una amplia mesa hay cacharros, diversos cuchillos y verduras, algunas troceadas. En la\
		pared junto a la puerta hay ristras de tripas de chorizo y salchichón. Escuchas unos pasos que se acercan a la cocina.</p>\
		<p><a href='./robar_chorizo' class='once'>Intentar robar un chorizo</a>.</p>\
		<br>\
		<p class='transient'><a href='cocina2' class='once'>Siguiente página</a>.</p>\
		<br>"		
		,{
			actions: {
				"robar_chorizo":function(character, system, action) {
									//int dado = system.rnd.randomInt(1,10);//+character.qualities.skill
									system.setQuality("cuchillo", character.qualities.cuchillo+1);
									
									var dado = jsRandom.get(1,10);
									if ((dado+character.qualities.agilidad) > 5){
										system.setQuality("tirada", dado);
										system.write($("#chorizo").html());
									}else{
										system.setQuality("stamina", dado);
										system.write($("#no_chorizo").html());
									}
									
									system.write($("#te_regaña").html());
				}
			}
		}
	),
	
	cocina2: new undum.SimpleSituation(
		"<p>Turdis se dirige hacia a ti con un pergamino que desenrolla en un lado de la mesa.</p>\
		<br>\
		<p>―Mira.― ves que se trata de un gran mapa  ― Esto es Dragonborn, que es donde estamos actualmente, y esto otro es el templo de Ver-dulería,\
		allí es donde unos monjes cultivan la preciada Remolacha. Esta planta tiene sorprendentes propiedades curativas.</p>\
		<br>\
		<p>―¿”Verdulería” y “remolacha”?― contestas torciendo la cabeza ―¿Es en serio? ¿Y de paso traigo el pan y media de huevos?</p>\
		<br>\
		―¿Tengo cara de estar bromeando?― se revuelve de manera cómica ―¿No escuchaste antes al rey? Muchos se han dejado la vida en este viaje.\
		<br>\
		―Está bien, está bien.― vuelves los ojos en blanco y suspiras― Dame el mapa ya, a ver si terminamos con esto pronto.\
		<br>\
		<p class='transient'><a href='camino' class='once'>Siguiente página</a>.</p>"
	),
	
	/*Se supone que la  lista ul debe desaparecer al pinchar en una de las opciones*/
	camino: new undum.SimpleSituation(
		"<h2>Capítulo 3</h2>\
		<p>A la mañana siguiente despiertas renovado. Estás acostado bajo una enramada; las ramas de un árbol bajaban entrelazadas hasta el suelo.\
		La cama de helechos y musgo era suave y profunda, tan cómoda que te hizo olvidar el berrinche que pillaste al enterarte de que no se te\
		permitía pasar la noche en la ciudad. “Otra maldita noche a la intemperie” pensaste. Pero no llovió nada el resto del día y el sol brilló\
		con fuerza. Así que la tierra y matojos se secaron y reblandecieron en su justa medida.</p>\
		<br>\
		<p>Ahora, el sol refulgía entre las hojas temblorosas. Te levantas de un salto, agitas tus ropajes para desprenderte de las púas de pino y,\
		tras unos estiramientos, te pones en marcha. Al cabo de un rato te entra hambre y ves unos arbustos con bayas muy apetecibles.</p>\
		<br>\
		<ul class='options'>\
			<li><a href='./prudente' >Intentar identificar bayas</a></li>\
			<li><a href='./temerario' >Coger las bayas directamente</a></li>\
			<li><a href='./hambre' >Pasar de las bayas y seguir tu camino</a></li>\
		</ul>\
		",
		{
			actions:{
				"prudente":function(character, system, action) {
					var dado = jsRandom.get(1,10);
					if ((dado+character.qualities.sabiduria) > 5){
						system.setQuality("vida", character.qualities.vida+1);
						system.write($("#bayas").html());						
					}else{
						system.write($("#no_bayas").html());
					}
					system.setQuality("tirada", dado);
				},
				
				"temerario":function(character, system, action) {
					system.write($("#tragon").html());
					system.setQuality("vida", character.qualities.vida+1);
				},
				
				"hambre":function(character, system, action) {
					system.write($("#ayunas").html());
				}				
			}
		}
	),
	
	camino2: new undum.SimpleSituation(
		"<p>Sigues por el estrecho y retorcido sendero durante varias horas sin novedad alguna. El hecho de llevar las armas\
		a la vista, piensas, evita problemas, los asaltantes se lo piensan dos veces antes de interponerse en tu camino.</p>\
		<br>\
		<p>Al torcer por una curva cerrada del camino, no muy lejos divisas un bulto negro en el camino.\
		Parece ser una persona que cojea.</p>\
		<br>\
		<p>Avanzas lentamente hasta que el anciano maltrecho se percata de tu presencia.</p>\
		<br>\
		<p>―¡Hey! Hola viajero.― alza la mano ―¿Una ayuda a un anciano?</p>\
		<br>\
		<p><a href='./observar' class='once'>Tirada percepción</a></p>",
		{
			actions:{
				"observar":function(character, system, action) {
					var dado = jsRandom.get(1,10);
					if ((dado+character.qualities.sigilo) > 5){
						system.write($("#no_te_engaña").html());						
					}else{
						system.write($("#te_engaña").html());
						system.setQuality("vida", character.qualities.vida-1);
					}
					system.setQuality("tirada", dado);
				}
			}
		}
	),
	
	asesino1: new undum.SimpleSituation(
	"",
		{
			enter:function(character, system, action) {
				system.write($("#pelea_asesino").html());
					if(character.qualities.cuchillo > 0){
						system.write($("#vives").html());
						system.setQuality("cuchillo", character.qualities.cuchillo-1);
						system.setQuality("vida", character.qualities.vida-3);
						
						var dado = jsRandom.get(1,10);
						if ((dado+character.qualities.sigilo) > 5){
							system.write($("#cartita").html());						
						}else{
							system.write($("#no_cartita").html());
						}
						
					}else{
						system.write($("#mueres").html());
					}
				}
		}
	),
	
   templo: new undum.SimpleSituation(
        "<h1>EL TEMPLO</h1>\
        <p>Tras día y medio de travesía, el templo de Ver-duleria se deja ver al fin. Este se encuetra en lo alto de una colina\
        rodeado por un bosque de escasos árboles. Distingues un pequeño sendero que parece dirigirse al templo y decides tomarlo. Se trata de un\
        pequeño edificio de dos plantas hecho de piedra marrón desgastada. En la entrada te recibe un monje vestido con un hábito marron y blanco.</p>\
        <p class = 'dialogo'>― Bienvenido joven viajero, a que se debe su visita?</p>\
        <ul class='options'>\
        <li><a href = 'explicar'>Explicar tu situación</a></li>\
        <li><a href ='noexplicar'>Desconfiar del monje y no explicar tu situación</a></li>\
        </ul>\
         <br>",
         {
            enter:function(character, system, action) {
            system.setQuality("progreso", character.qualities.progreso+1);

            }
         }
    ),
    //Situacion en la que explicas al monje
    explicar: new undum.SimpleSituation(
        "<h1>SENDERO</h1>\
        <p>Tras explicar la situacción con gusto el monje accede a llevarte hacia \
        donde se encuentra la Remolacha, en un sendero que rodea el templo. A mitad de camino\
        el monje se detiene y parece no saber el camino a tomar, desconcertado le preguntas:</p>\
        <p class = 'dialogo'>― ¿Sabe usted por donde ir?</p>\
        <p class = 'dialogo'>― Sí, disculpa, mi memoria ya no es lo que era, es por aquí. ―Responde el monje</p>\
        <p>El camino es algo laberíntico, y trás un rato detrás del monje empiezas a sospechar\
        que estáis caminando en círculos. De pronto el monje se agacha y arranca una hierba.</p>\
        <p class = 'dialogo'>― Al fin, aquí está la planta que buscas!</p>\
       <p> El monje te entrega la planta.\
        <a href ='./examinar' class='once'>Examinar planta(Tirada de percepción)</a></p>",
        {
            actions: 
            {
                'examinar':function(character, system, action){
                    var dado = jsRandom.get(1,10);
                    
									if ((dado+character.qualities.sabiduria) > 5){
										system.setQuality("tirada", dado);
										system.write("<p>Al examinar la planta te das cuenta de que es una planta común y la has visto varias veces\
                                            en el camino, el monje te está engañando, ¡quizás sea un impostor!\
                                            No te queda otra que <a href = 'combatemonje'> atacarle </a> </p>");
									}else{
										system.setQuality("stamina", dado);
										system.write("<p><a href='nosabiduria'>Continuar</a></p>");
									}
                }
            }



        }
    ),
    //si no tienes la sabiduria necesaria
    nosabiduria: new undum.SimpleSituation(
       " <h1>REGRESO AL CASTILLO</h1>\
       <p>Debe de ser la Remolacha, piensas. Satisfecho con tu labor, decides volver al castillo para entregarle la hierba al Duque y obtener tu recompensa.\
       Una vez allí eres muy bien recibido, el Duque Agnar te da las gracias y entrega la planta a sus expertos. Estos le comunican enseguida que la planta\
       que has traído no es la Remolacha sino una planta muy común. El enfado del Duque es tal, que ordena tu decapitación pública inmediatamente... </p><p><b>FIN DEL JUEGO</b></p>"

    ),
        //Situación en la que no le explicas al monje y decides pasar
    noexplicar: new undum.SimpleSituation(
        "<h1>EL TEMPLO</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>Decides entrar en el templo sin el consentimiento del monje, \
        no te fías ni un pelo de él. Este se ve reacio a dejaros entrar y de pronto\
        saca una larga y afilada espada. Al moverse bruscamente, un colgante asoma de su hábito. LLeva \
        la marca de la flor Lis. La misma que llevaba Felipo. Te enzarzas en un duro <a href='combatemonje'>combate</a> con él.</p>"
    ),

    //Combate con el monje(falta escribirlo)
    combatemonje: new undum.SimpleSituation(
        "",
        {
			enter:function(character, system, action) {
				system.write($("#pelea_monje").html());
                var dado = jsRandom.get(1,10);
					if(dado + character.qualities.cuchillo > 3){
						system.write($("#vives_monje").html());
                        system.write("<p><a href='aftercombate'>Siguiente pagina</a></p>");
						system.setQuality("cuchillo", character.qualities.cuchillo-1);
						system.setQuality("vida", character.qualities.vida-3);
						
					}else{
						system.write($("#mueres_monje").html());
					}
				}
		}
    ),

    aftercombate: new undum.SimpleSituation(
        "<h1>EL TEMPLO</h1>\
        <p>Tras derrotar al asesino, observas una columna de humo proveniente del interior del templo. Se trata de unos hombres que están\
        quemando toda la información relacionada con la planta. Te apresuras pero para cuando llegas los hombres han huido. La sala resulta ser una biblioteca antigua\
        con una gran fogata en el centro donde están quemándose <a href= './libros' class  ='once'>los libros</a>. Observas una <a href ='./ventana' class  ='once'>ventana</a> en la parte derecha de la sala. </p>\
        ",
        {
            actions: 
            {
                'libros': "<p> De entre las llamas rescatas un libro con información de la hierba. Está en mal estado pero consigues rescatar un pequeño mapa que dice llevar a un lugar\
                donde es posible encontrar la planta. <a href = 'mapa'>Decides seguir el mapa </p>",
                'ventana':"<p> Te asomas a la ventana y ves a los hombres que han quemado los libros huir a toda velocidad. No merece la pena perseguirlos</p>" 
            }
        }
    ),
   
    ataquefinal: new undum.SimpleSituation(
        "<h1> ATAQUE FINAL </h1><p>Al salir de la caverna te encuentras con GAL, el asesino que contrató Felipo para impedirte lograr tu misión. En su rostro contemplas el miedo, como de haber observado tu enfrentamiento con la bestia. </p>\
        De pronto se da la vuelta y ante tu sorpresa se quita de su sucio dedo un anillo de tres rubíes. Recuerdas que es el mismo anillo que llevaba Felipo el día que lo viste en el castillo. Es imprescindible conseguirlo, pues es una prueba contra él. \
        GAL lanza el anillo a un lodazal para que se hunda en él y dice : \
        <p class= 'dialogo'>― Podrás vencerme a mi, pero jamás acabareis con Felipo. Aunque dudo que pueda contra mi un necio de tu calibre.</p>\
        <p>Acto seguido se lanza al ataque. Es tan veloz que no tienes tiempo de reaccionar y y consigue hacerle un corte en el brazo. Desenvainas tu espada mientras observas como el anillo, la única prueba contra\
         Felipo, se hunde en el lodo. El combate es trepidante, es sin duda el mejor de los asesinos contratados por Felipo, y tu te encuentras exhausto tras el combate con la bestia. Decides desequilibrarlo \
        y zambullarte en el lodazal para tratar de coger el anillo pero justo cuando un palmo separa tu dedo de este GAL agarra tu pierna y tira con fuerza. El lodo es denso y espeso y aprovechas que tu enemigo  \
        ha perdido su arma en él para darle una última oportunidad de vivir, con tu espada rozando su cuello. GAL desvía su mirada de la tuya para observar el anillo. Tu te giras para contemplarlo también y en ese despiste\
        aprovecha para coger su espada y blandirla contra ti. Consigues esquivarla y esta vez no concedes ninguna oportunidad. Le das muerte a tu enemigo. Rápidamente sumerges bien tu brazo en el lodo para sacar el anillo.</p>\
        <br>\
		<p class='transient'><a href='vueltacastillo'>Siguiente Página</a></p>",
    ),
    vueltacastillo: new undum.SimpleSituation(
        "<h1>REGRESO AL CASTILLO</h1>\
        <p>Regresas al castillo por fin para entregarle la hierba al Duque y obtener tu recompensa. Una vez allí eres muy bien recibido. En la sala del trono, un perplejo Felipo observa como entras con elegancia.\
        <ul class='options'>\
        <li><a href= 'noperdonar'>Decides mostrar el anillo para acusar a Felipo de intentar matarte</a></li>\
        <li><a href='perdonar'>Decides perdonarlo y guardar el anillo para venderlo por una gran cantidad de dinero</a></li>\
        </ul>\
         <br>"
    ),
    noperdonar: new undum.SimpleSituation(
        "<h1>REGRESO AL CASTILLO</h1>\
        <p>Al mostrar el anillo Felipo coge a su hermano y le pone una daga en el cuello para intentar escapar con su guardia personal. \
        Sin embargo sus deseos se ven frustrados cuando de una patada de su esposa en los miembros inferiores este cae al suelo y comienza a llorar. Más tarde es encerrado por traidor.\
        El Duque Agnar te da las gracias por tu labor y te entrega tu merecida recompensa.<p><b>FIN</b></p>",
        {
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+100);
                }
        }
    ),
    perdonar: new undum.SimpleSituation(
        "<h1>REGRESO AL CASTILLO</h1>\
        <p>El Duque Agnar te da las gracias por tu labor y te entrega una merecida recompensa. Felipo, \
        que aún desconfía de ti, ordena que te maten nada mas salir del castillo. Allí, sus guardias te pillan desprevenido\
        y consiguen derrotarte sin mucho esfuerzo.</p> <p><b>FIN DEL JUEGO</b></p>"
    ),
    }

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */

undum.game.start = "inicio";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
	vida: new undum.NumericQuality(
		"Vida", {priority:"0001", group:'stats'}
	),
	
	fuerza: new undum.NumericQuality(
		"Fuerza", {priority:"0001", group:'stats'}
	),
	
	agilidad: new undum.NumericQuality(
		"Agilidad", {priority:"0001", group:'stats'}
	),
	
	defensa: new undum.NumericQuality(
		"defensa", {priority:"0001", group:'stats'}
	),
	
	sabiduria: new undum.NumericQuality(
		"Sabiduía", {priority:"0001", group:'stats'}
	),
	
	sigilo: new undum.NumericQuality(
		"Sigilo", {priority:"0001", group:'stats'}
	),
	
	cuchillo: new undum.NumericQuality(
        "Cuchillo", {priority:"0003", group:'objetos', onDisplay:"&#10003;"}
    ),
	
	tirada: new undum.NumericQuality(
        "Tirada", {priority:"0002", group:'dado', onDisplay:"&#10003;"}
    ),
    progreso: new undum.NumericQuality(
        "%", {priority:"0004", group:'progreso', onDisplay:"&#10003;"}

    )
	
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    dado: new undum.QualityGroup('Dado', {priority:"0002"}),
	objetos: new undum.QualityGroup('Objetos' , {priority:"0003"}),
    progreso: new undum.QualityGroup('Progreso', {priority:"0004"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
	character.qualities.vida = 10;
    character.qualities.fuerza = 3;
	character.qualities.agilidad = 3;
	character.qualities.defensa = 3;
	character.qualities.sabiduria = 3;
	character.qualities.sigilo = 3;
	character.qualities.cuchillo = 0;
	character.qualities.tirada = 0;
    character.qualities.progreso = 0;

};
