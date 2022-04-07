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
	<p class='transient'><a href='./p_comida' class='once'>Pedir comida</a>.</p>\
	<br>\
	<p class='transient'><a href='./p_dinero' class='once'>Preguntar por un trabajo</a>.</p>\
	<br>\
	<p class='transient'><a href='./p_nombre' class='once'>Preguntar por su nombre</a>.</p>\
	<br>\
	<p class='transient'><a href='./p_irse' class='once'>Marcharse</a>.</p>\
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
		<p>Turdis se dirige hacia a ti con un pergamino que desenrolla en un lado de la mesa.</p>\
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
		,{
			actions: {
				"robar_chorizo":function(character, system, action) {
									//int dado = system.rnd.randomInt(1,10);//+character.qualities.skill
									system.setQuality("cuchillo", character.qualities.cuchillo+1);
									/*
									var dado = system.rnd.randomInt(1,10);
									if ((dado+character.qualities.skill) > 5){
										system.setQuality("stamina", dado);
										system.write($("#chorizo").html());
									}else{
										system.setQuality("stamina", dado);
										system.write($("#no_chorizo").html());
									}*/
				}
			}
		}
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
					if(character.qualities.sabiduria > 2){
						system.setQuality("vida", character.qualities.vida+1);
						system.write($("#bayas").html());						
					}else{
						system.write($("#no_bayas").html());
					}
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
					if(character.qualities.sigilo > 3){
						system.write($("#no_te_engaña").html());						
					}else{
						system.write($("#te_engaña").html());
						system.setQuality("vida", character.qualities.vida-1);
					}
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
						
						if(character.qualities.sigilo > 2){
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
	
    start: new undum.SimpleSituation(
        "<h1>Starting Out with Undum</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>Welcome to the Undum tutorial. Undum is a tool for writing\
        hypertext interactive fiction. It has some unique features\
        and a visual design that encourages narrative games.</p>\
        \
        <p>Hypertext interactive fiction is the digital equivalent of the\
        Choose Your Own Adventure (CYOA) books that were popular in the\
        1980s. The story is told in chunks, and you select from a range\
        of options to move it forward. Unlike the book form, however, the\
        digital form gives you far more flexibility to tell rich stories\
        and introduce more interesting game elements.</p>\
        \
        <p class='transient'>Click <a href='hub'>this link to\
        continue...</a></p>"
    ),

    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "What Undum Games are Made Of",
        displayOrder: 1
    }),
    todo: new undum.SimpleSituation(
        "<p>Two things can happen in a situation. The character either\
        <a href='links'>leaves</a> the situation and enters another one, or\
        they carry out some <a href='./do-something'>action</a>. Actions may\
        perform some processing, they may display some results, but\
        ultimately they put the character back into the same situation\
        again.</p>\
        \
        <p>When you are designing your game, use situations to reflect a\
        change in what the character can do. So you would change situation if\
        the character pulls a lever to open a trapdoor, for example. Actions\
        are intended for situations where the character can examine things\
        more closely, or maybe top up their magic by drinking a potion.\
        Things that don't affect the state of the world around them.</p>\
        \
        <p>Situations generate content when they are <em>enter</em>ed,\
        <em>exit</em>ed, and when they receive an <em>act</em>ion (the\
        italicised words are the names of the three methods that do this).\
        You can write code to generate content in any way you like, so the\
        content that is displayed can be totally dynamic: taking into\
        account the current state of the character.\
        Content is just plain HTML, so you use regular HTML tags to make\
        things <strong>bold</strong> or <em>italic</em>, or to include\
        images. This gives you a lot of flexibility. For example, since Undum\
        targets HTML5 browsers, you could use the <em>audio</em> or\
        <em>video</em> tags to include rich media.</p>\
        \
        <p class='transient'>Make sure you've carried out the action above,\
        then <a href='hub'>return to the topic list</a>.</p>",
        {
            actions: {
                'do-something': "<p>You carried out the action, well done.\
                                 You'll notice that the links for this\
                                 situation are still active. This means you\
                                 can click to perform the action again.</p>"
            }
        }
    ),
    links: new undum.SimpleSituation(
        "<p>Between each chunk of new text, Undum inserts a discreet line\
        in the margin. This allows you to see at a glance everything that\
        has been output as a result of your last click.\
        It is particularly useful for small devices, or when\
        lots of content has appeared. The window also scrolls so the start\
        of the new content is as near to the top of the window as possible.\
        This is also designed to help you read more naturally.</p>\
        \
        <p>If you've been watching carefully, you will have noticed that\
        parts of the text have been disappearing when you move between\
        situations. This isn't a bug! One of the aims of Undum is to give\
        game designers the ability to make the transcript of\
        the game read as a coherent piece of narrative. However, you often\
        need chunks of text that do nothing but offer the reader choices.\
        Undum defines a special CSS class to add to your HTML for this\
        (remember generated content is just HTML). It is <em>transient</em>,\
        and can be applied to paragraphs, <em>div</em>s, or just\
        <em>span</em>s<span class='transient'> (such as this one)</span>.</p>\
        \
        <p>You may also have noticed that, when you move situations, all the\
        links in the previous situation turn into regular text. This is to\
        stop you backtracking and trying previous options when you've already\
        committed to one. In other H-IF systems, this is\
        done by completely removing the content from previous pages.\
        That prevents you going back and reading your story, however.</p>\
        \
        <p class='transient'>The 'Different Kinds of Links' topic has more\
        about these links.\
        Let's return to the <a href='hub'>topic list</a>.</p>",
        {
            heading: "Disappearing Content",
            diplayOrder: 2,
            tags: ["topic"]
        }
    ),
    sticky: new undum.SimpleSituation(
        "<p>There are three types of link in Undum. The first two we've seen\
        in previous topics:\
        links to change situation and links to carry out an action. When you\
        include a link in your output, Undum parses it and wires it up\
        correctly. If you create a link with a HTML <em>href</em> attribute\
        containing just a name ('ballroom', for\
        example) this will send the character to the situation with that\
        name. Links\
        with two components ('ballroom/view-painting', for example) send\
        the character to a new situation <em>and then</em> carry out the\
        named action ('view-painting' in this case). To carry out an action\
        in the current situation, you can replace the situation name with a\
        dot (so it would be './view-painting'). In all cases, if the\
        character is already in that situation, then the situation's\
        <em>enter</em> method won't be called again.</p>\
        \
        <img src='media/games/tutorial/woodcut2.png' class='float_left'>\
        <p>The third type of link, then, is a general hyperlink. If your\
        link doesn't consist of a single element or pair of elements, as\
        above, then Undum will guess that you have a normal hyperlink. As\
        <a href='http://news.bbc.co.uk' class='sticky'>in this link</a>.\
        If you have a link that <em>does</em> look like an Undum link, you\
        can still force Undum not to interpret it as an action or situation\
        move, by adding the CSS class <em>raw</em> to the HTML <em>a</em> tag.\
        links that don't have the <em>raw</em> class, but that are considered\
        to be non-Undum links (like the link above), will have <em>raw</em>\
        added to them before display. This could allow you to style external\
        links differently, as we have done here.</p>\
        \
        <p>In the last situation I said you can prevent links from being\
        turned into regular text when you move situations. This is done\
        by another CSS class: <em>sticky</em>. When you\
        <a href='oneshot'>leave this situation</a>, you'll notice the\
        external link stays active. This can allow you to have options that\
        stay valid throughout the narrative, for example, such as a spell to\
        teleport home.</p>",
        {
            tags: ["topic"],
            displayOrder: 3,
            heading: "Different Kinds of Links"
        }
    ),
    oneshot: new undum.SimpleSituation(
        "<p>There is one final option for links. If you give a link\
        the <em>once</em> CSS class, then that link will disappear\
        after it is clicked. This is  used (as in\
        <a href='./one-time-action' class='once'>this link</a>) for\
        actions that you only want to be possible once. There is no\
        point using 'once' on situation links because they'll be turned\
        into text as soon as you click them anyway (unless they are also\
        <em>sticky</em>, of course).</p><p>Once links are useful\
        for actions such as examining an object more carefully. You\
        don't want lots of repeated descriptions, so making the link\
        a <em>once</em> link is more user friendly.</p>\
        <p>If you have more than one link to the same action, then all\
        matching links will be removed, so you don't have to worry about\
        the player having an alternative way to carry out the action.</p>\
        <p class='transient'>After you've clicked the link, let's\
        <a href='hub'>move on</a>.</p>",
        {
            actions: {
                "one-time-action": "<p>As I said, one time actions are\
                                   mostly used to describe something in\
                                   more detail, where you don't want the\
                                   same descriptive text repeated over and\
                                   over</p>"
            }
        }
    ),
    qualities: new undum.SimpleSituation(
        "<p>Let's talk about the character.\
        The character is described by a series of <em>qualities</em>. These\
        are numeric values that can describe anything from natural abilities\
        to how much of a resource the character controls. Qualities are\
        shown in the box on the right of the text.</p>\
        \
        <p>The qualities there are those you started the game with. When you\
        <a href='quality-types'>go to the next situation</a>, keep your\
        eyes on the character panel. You'll notice I'll give you a boost to\
        your stamina quality. This process is animated and highlighted to\
        draw your attention to it. You could also get a boost of skill\
        by carrying out <a href='./skill-boost'>this action</a> as many\
        times as you like.</p>",
        {
            heading: "Qualities and the Character",
            tags: ["topic"],
            displayOrder: 4,
            actions: {
                "skill-boost": function(character, system, action) {
                    system.setQuality("skill", character.qualities.skill+1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("stamina", character.qualities.stamina+1);
            }
        }
    ),
    "quality-types": new undum.SimpleSituation(
        "<p>Not all the qualities in the character panel are displayed as\
        numeric. Internally they are all numeric, but different qualities\
        get to choose how to display themselves. So 'Luck', for example, is\
        displayed as words (based on the FUDGE RPG's adjective scale),\
        and 'Novice' is using just a check-mark.</p>\
        \
        <p>To see how Luck changes, try using this\
        <a href='./luck-boost'>luck-boosting action</a> or this\
        <a href='./luck-reduce'>luck-reducing action</a>. Notice that\
        luck uses a numeric bonus when it runs out of words. There are a range\
        of different display types provided with Undum, and you can easily\
        add your own too.</p>\
        \
        <p>When you <a href='character-text'>leave this situation</a>,\
        I'll set 'Novice' to zero. Watch\
        the character panel, and you'll see that Novice decides it doesn't\
        need to be displayed any more and will be removed. You will also see\
        that when the last\
        quality in a group is removed ('Novice' is in the 'Progress' group),\
        then the group heading is also removed. You can tell Undum what\
        group each quality belongs to, and what order they should be listed.\
        <p>",
        {
            actions: {
                "luck-boost": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck+1);
                },
                "luck-reduce": function(character, system, action) {
                    system.setQuality("luck", character.qualities.luck-1);
                }
            },
            exit: function(character, system, to) {
                system.setQuality("novice", 0);
            }
        }
    ),
    "character-text": new undum.SimpleSituation(
        "<h1>Character Text</h1>\
        <p>Above the list of qualities is a short piece of text, called\
        the character-text. This describes the character in some way. It\
        can be set by any action or when entering or leaving a situation.\
        It is just regular HTML content, as for all text in Undum. It can\
        also contain Undum links, so this is another place you can put\
        actions that the character can carry out over a long period of time.\
        </p>\
        <p class='transient'>Let's go back to the\
        <a href='hub'>topic list</a>. As you do, I'll change the\
        character text. Notice that it is highlighted, just the same as\
        when a quality is altered.</p>",
        {
            exit: function(character, system, to) {
                system.setCharacterText(
                    "<p>We're nearing the end of the road.</p>"
                );
            }
        }
    ),
    progress: new undum.SimpleSituation(
        "<p>Sometimes you want to make the change in a quality into a more\
        significant event. You can do this by animating the change in\
        quality. If you <a href='./boost-stamina-action'>boost your\
        stamina</a>, you will see the stamina change in the normal\
        way in the character panel. But you will also see a progress\
        bar appear and animate below.</p>",
        {
            tags: ["topic"],
            heading: "Showing a Progress Bar",
            displayOrder: 5,
            actions: {
                // I'm going indirect here - the link carries out an
                // action, which then uses doLink to directly change
                // the situation.  This isn't the recommended way (I
                // could have just changed situation in the link), but
                // it illustrates the use of doLink.
                "boost-stamina-action": function(character, system, action) {
                    system.doLink("boost-stamina");
                }
            },
            exit: function(character, system, to) {
                system.animateQuality(
                    'stamina', character.qualities.stamina+1
                );
            }
        }
    ),
    "boost-stamina": new undum.SimpleSituation(
        "<p>\
        <img src='media/games/tutorial/woodcut3.png' class='float_right'>\
        The progress bar is also useful in situations where the\
        character block is displaying just the whole number of a quality,\
        whereas some action changes a fraction. If the quality is displaying\
        the character's level, for example, you might want to show a progress\
        bar to indicate how near the character is to levelling up.</p>\
        \
        <p>After a few seconds, the progress bar disappears, to keep the\
        focus on the text. Undum isn't designed for games where a lot of\
        statistic management is needed. If you want a change to be part\
        of the permanent record of the game, then write it in text.</p>\
        \
        <p>Let's <a href='hub'>return to the topic list.</a></p>"
        ),
    // Again, we'll retrieve the text we want from the HTML file.
    "saving": new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_saving").html());
        },
        tags: ["topic"],
        displayOrder: 6,
        optionText: "Saving and Loading"
    }),

    "implicit-boost": new undum.SimpleSituation(
        "<p>Your luck has been boosted<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck+1)
                system.doLink('example-choices');
            },
            optionText: "Boost Your Luck",
            displayOrder: 1,
            canView: function(character, system, host) {
                return character.qualities.luck < 4;
            }
        }
    ),
    "implicit-drop": new undum.SimpleSituation(
        "<p>Your luck has been reduced<span class='transient'>, check the\
        list of options to see if they have changed</span>.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.animateQuality("luck", character.qualities.luck-1)
                system.doLink('example-choices');
            },
            optionText: "Reduce Your Luck",
            displayOrder: 2,
            canView: function(character, system, host) {
                return character.qualities.luck > -4;
            }
        }
    ),
    "high-luck-only": new undum.SimpleSituation(
        "<p>Your luck is higher than 'fair'. The link to this \
        situation would not\
        have appeared if it were lower.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "High Luck Option",
            displayOrder: 3,
            canView: function(character, system, host) {
                return character.qualities.luck > 0;
            }
        }
    ),
    "low-luck-only": new undum.SimpleSituation(
        "<p>Your luck is lower than 'fair'. The link to this situation \
        appears whether\
        it is low or high, but can only be chosen if it is low. It does this\
        by defining a <em>canChoose</em> method.</p>",
        {
            tags: ["example"],
            enter: function(character, system, from) {
                system.doLink('example-choices');
            },
            optionText: "Low Luck Option (requires low luck to be clickable)",
            displayOrder: 3,
            canChoose: function(character, system, host) {
                return character.qualities.luck < 0;
            }
        }
    ),

    "last": new undum.SimpleSituation(
        "<h1>Where to Go Now</h1>\
        <p>So that's it. We've covered all of Undum. This situation is the\
        end, because it has no further links. The 'The End' message is\
        just in the HTML output of this situation, it isn't anything special\
        to Undum</p>\
        \
        <p>I've added an\
        inspiration quality to your character list. Its time for you to\
        crack open the game file and write your own story.</p>\
        <h1>The End</h1>",
        {
            tags: ["topic"],
            optionText: "Finish the Tutorial",
            displayOrder: 8,
            enter: function(character, system, from) {
                system.setQuality("inspiration", 1);
                system.setCharacterText(
                    "<p>You feel all inspired, why not have a go?</p>"
                );
            }
        }
    )
};

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
        "Cuchillo", {priority:"0002", group:'stats'}
    )	
	/*
    skill: new undum.IntegerQuality(
        "Skill", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Stamina", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    )*/
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
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
};
