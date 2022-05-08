
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
var nombre;
nombre = prompt(
    "Antes de comenzar, por favor, ingrese un nombre para su personaje "
  );
  if(nombre == ''){
      nombre = "Caballero";
  }

var confianza = 0;

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {

    seleccion_personaje: new undum.SimpleSituation(
        "<p>Antes de comenzar tu aventura debes seleccionar un tipo de personaje. Selecciona un tipo para ver sus estadísticas:</p>\
        <ul class='options'>\
            <li><a href='guerrero'>Guerrero</a></li>\
            <li><a href='barbaro'>Bárbaro</a></li>\
            <li><a href='asesino'>Asesino</a></li>\
            <li><a href='erudito'>Erudito</a></li>\
            <li><a href='desecho'>Desecho</a></li>\
        </ul>"
    ),

    guerrero: new undum.SimpleSituation(
        "<h3>Guerrero</h3>\
        <img src='media/img/guerrero.jpg' class='float_right' height='50%' width='50%'/>\
        <p>El guerrero ha sido entrenado en el arte del combate, por lo que sus habilidades están bien pulidas y balanceadas.\
        Además, tuvo la suerte de recibir una educación decente, por lo que su capacidad mental también es buena.\
        Cuenta con una espada larga, el arma con el que aprendió a combatir y que tanto tiempo le ha acompañado.</p><br/>\
        <p>Estadísticas: <br/>\
        * Fuerza: 3 <br/>\
        * Agilidad: 3 <br/>\
        * Defensa: 3 <br/>\
        * Sabiduría: 3 <br/>\
        * Sigilo: 3 <br/>\
        * Arma: Espada larga.<br/>\
        ¿Deseas comenzar tu aventura con este personaje?</p><br/>\
        <ul class='options'>\
            <li><a href='./selecciona'>Sí.</a></li>\
            <li><a href='seleccion_personaje'>No.</a></li>\
        </ul>",
        {
            actions: {
                "selecciona": function (character, system, action) {
                    system.setQuality("fuerza", 3);
                    system.setQuality("agilidad", 3);
                    system.setQuality("defensa", 3);
                    system.setQuality("sabiduria", 3);
                    system.setQuality("sigilo", 3);
                    system.setQuality("espada_larga", 1);
                    system.write("<p class='transient'>¡Buena elección! Es hora de <a href='inicio'>comenzar tu aventura</a>.</p>");
                }
            }
        }
    ),

    barbaro: new undum.SimpleSituation(
        "<h3>Bárbaro</h3>\
        <img src='media/img/barbaro.jpg' class='float_right' height='50%' width='50%'/>\
        <p>Criado en los bosques, el bárbaro es un aventurero aguerrido y muy temido por sus enemigos debido a su increíble fuerza.\
        Es una persona hecha a sí misma, pero en sus planes nunca estuvo la lectura, por lo que no es el más inteligente.\
        Su arma favorita es el hacha de guerra ya que su estilo de combate no se caracteriza precisamente por el sigilo.</p><br/>\
        <p>Estadísticas: <br/>\
        * Fuerza: 5 <br/>\
        * Agilidad: 2 <br/>\
        * Defensa: 4 <br/>\
        * Sabiduría: 1 <br/>\
        * Sigilo: 1 <br/>\
        * Arma: Hacha de combate.<br/>\
        ¿Deseas comenzar tu aventura con este personaje?</p><br/>\
        <ul class='options'>\
            <li><a href='./selecciona'>Sí.</a></li>\
            <li><a href='seleccion_personaje'>No.</a></li>\
        </ul>",
        {
            actions: {
                "selecciona": function (character, system, action) {
                    system.setQuality("fuerza", 5);
                    system.setQuality("agilidad", 2);
                    system.setQuality("defensa", 4);
                    system.setQuality("sabiduria", 1);
                    system.setQuality("sigilo", 1);
                    system.setQuality("hacha", 1);
                    system.write("<p class='transient'>¡Buena elección! Es hora de <a href='inicio'>comenzar tu aventura</a>.</p>");
                }
            }
        }
    ),

    asesino: new undum.SimpleSituation(
        "<h3>Asesino</h3>\
        <img src='media/img/asesino.jpg' class='float_right' height='50%' width='50%'/>\
        <p>Aunque su fuerza no sea lo que le caracteriza, el asesino se vale de su agilidad para hacerse temer por los enemigos.\
        Cuenta con un par de dagas que emplea de forma rápida y efectiva.</p><br/>\
        <p>Estadísticas: <br/>\
        * Fuerza: 2 <br/>\
        * Agilidad: 5 <br/>\
        * Defensa: 2 <br/>\
        * Sabiduría: 3 <br/>\
        * Sigilo: 4 <br/>\
        * Arma: Dos dagas.<br/>\
        ¿Deseas comenzar tu aventura con este personaje?</p><br/>\
        <ul class='options'>\
            <li><a href='./selecciona'>Sí.</a></li>\
            <li><a href='seleccion_personaje'>No.</a></li>\
        </ul>",
        {
            actions: {
                "selecciona": function (character, system, action) {
                    system.setQuality("fuerza", 2);
                    system.setQuality("agilidad", 5);
                    system.setQuality("defensa", 2);
                    system.setQuality("sabiduria", 3);
                    system.setQuality("sigilo", 4);
                    system.setQuality("dagas", 1);
                    system.write("<p class='transient'>¡Buena elección! Es hora de <a href='inicio'>comenzar tu aventura</a>.</p>");
                }
            }
        }
    ),

    erudito: new undum.SimpleSituation(
        "<h3>Erudito</h3>\
        <img src='media/img/erudito.jpg' class='float_right' height='50%' width='50%'/>\
        <p>El erudito es una rata de biblioteca. Su pasión por los libros lo ha convertido en todo un intelectual y lo ha llevado\
        explorar el mundo en busca de nuevas obras que deborar. Haber pasado tanto tiempo entre libros no lo ha convertido en un portento físico, \
        sino todo lo contrario, se trata de una persona alta y delgada por lo que no destaca por su fuerza y agilidad.</p><br/>\
        <p>Estadísticas: <br/>\
        * Fuerza: 2 <br/>\
        * Agilidad: 2 <br/>\
        * Defensa: 2 <br/>\
        * Sabiduría: 5 <br/>\
        * Sigilo: 2 <br/>\
        * Arma: Espada corta.<br/>\
        ¿Deseas comenzar tu aventura con este personaje?</p><br/>\
        <ul class='options'>\
            <li><a href='./selecciona'>Sí.</a></li>\
            <li><a href='seleccion_personaje'>No.</a></li>\
        </ul>",
        {
            actions: {
                "selecciona": function (character, system, action) {
                    system.setQuality("fuerza", 2);
                    system.setQuality("agilidad", 2);
                    system.setQuality("defensa", 2);
                    system.setQuality("sabiduria", 5);
                    system.setQuality("sigilo", 2);
                    system.setQuality("espada_corta", 1);
                    system.write("<p class='transient'>¡Buena elección! Es hora de <a href='inicio'>comenzar tu aventura</a>.</p>");
                }
            }
        }
    ),

    desecho: new undum.SimpleSituation(
        "<h3>Desecho</h3>\
        <img src='media/img/desecho.jpg' class='float_right' height='50%' width='50%'/>\
        <p>Vestido con harapos y de origen desconocido. O fue un necio inconmensurable o le arrebataron todo.\
        El desecho es un tipo pálido y casi desnutrido que va vagando por las ciudades para sobrevivir como puede.</p><br/>\
        <p>Estadísticas: <br/>\
        * Fuerza: 1 <br/>\
        * Agilidad: 2 <br/>\
        * Defensa: 1 <br/>\
        * Sabiduría: 1 <br/>\
        * Sigilo: 2 <br/>\
        * Arma: Espada de madera.<br/>\
        ¿Deseas comenzar tu aventura con este personaje?</p><br/>\
        <ul class='options'>\
            <li><a href='./selecciona'>Sí.</a></li>\
            <li><a href='seleccion_personaje'>No.</a></li>\
        </ul>",
        {
            actions: {
                "selecciona": function (character, system, action) {
                    system.setQuality("fuerza", 1);
                    system.setQuality("agilidad", 2);
                    system.setQuality("defensa", 1);
                    system.setQuality("sabiduria", 1);
                    system.setQuality("sigilo", 2);
                    system.setQuality("espada_madera", 1);
                    system.write("<p class='transient'>¡Buena elección! Ahora sí, es hora de <a href='inicio'>comenzar tu aventura</a>.</p>");
                }
            }
        }
    ),

	
	inicio: new undum.SimpleSituation(
		"<h1>Capítulo 1</h1>\
		<p>Caminas con la mirada perdida, escuchando el sonido de tu respiración,\
		sintiendo como las gotas de lluvia golpean y empapan la caperuza de tu capa.\
		De repente un rayo dibuja en el oscuro firmamento la silueta de una ciudad con castillo.\
		Esta visión te llena de esperanza, es el primer signo de civilización que ves en tres días.\
		Tus provisiones empiezan a escasear y estás harto de dormir a la intemperie, y sabes que\
		donde hay castillos, hay comida y lechos calientes.</p>\
		<br>\
		<video controls autoplay width='100%'>\
          <source src='media/video/guerrero_negro.mp4' type='video/mp4' />\
        </video>\
		<p class='transient'><a href='muralla'>Siguiente Página</a></p>",
        {
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso.value=0);   
            }
        }
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
		<p class='transient'><a href='ciudad'>Siguiente Página</a></p>",
        {
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);   
            }
        }
	),
	
	ciudad: new undum.SimpleSituation(
		"<h1>Capítulo 2</h1>\
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
		<p class='transient'><a href='posada'>Siguiente Página</a></p>",
        {
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);   
            }
        }
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
		<br>"
		,{
            
			actions: {
				"p_comida":function(character, system, action) {
						system.write("<p>―Algo de comer por favor, llevo varios días en el camino.</p>\
							<br>\
							<p>―Perdona mi desconfianza pero…―dice estirando la cabeza mientras te mira de arriba abajo con sus\
							grandes ojos verdes― ¿tienes dinero pa pagar?</p>\
							<br>\
							<p>―A decir verdad no, lo siento.</p>\
							<br>\
							<p>―Pos no hay comida.―exclama agitando sus grisáceos cabellos― No voy a gastar la escasa\
							comida que queda a cambio de nada.</p>");
						confianza = confianza + 1;
				},
				'p_dinero': function(character, system, action) {
						system.write("<br><p>―¿Hay alguna manera de conseguir dinero rápido por aquí?</p>\
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
							<p>―Wow, la cosa mejora por momentos. Será mejor que me vaya de aquí.");
						confianza = confianza + 1;
				},
				'p_nombre':	function(character, system, action) {
						system.write("<p>―Antes de irme. ¿Cómo te llamas?</p>\
							<br>\
							<p>―<b>Falka</b></p>\
							<br>\
							<p>―Y dime <b>Falka</b>, ¿por qué no te vas como el resto?</p>\
							<br>\
							<p>―Mis padres, que regentaban esta taberna, murieron a causa de la enfermedad. Y tampoco tengo dinero como\
							para ir a algún sitio. Además una chica como yo, sola vagabundeando por los caminos…</p>\
							<br>\
							<p>―Comprendo. No prometo nada, pero haré lo que pueda. Hasta pronto Falka.</p>");
						confianza = confianza + 1;
				},
				'p_irse':	function(character, system, action) {
						system.write("<br><p>―Espera un momento, por favor. Por tus pintas diría que eres una persona valiente y aventurera, de las que han\
							visto mundo. Se rumorea que el rey ofrece una recompensa por la cura pa salvar al príncipe, por mu avaro que sea.\
							Deseo que se muera el mu gusano, pero la cura vendría bien a todo el reino.</p>\
							<br>\
							<p>―Estupendo. O me muero de hambre por el camino o voy al castillo y con un poco de suerte no me decapitan. Supongo\
							que no tengo más opción. Gracias pequeña.</p>\
							<br>\
							<p class='transient'><a href='calle'>Siguiente Página</a></p>");
				}
			},
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
		    },
			exit:function(character, system, action) {
                if( confianza==3 ){
					system.setQuality("vida", character.qualities.vida+3);
					system.write($("#te_da_comida").html());
				}
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
		<p>―Soy "+ nombre + " ― contestas sosegadamente ―Acabo de llegar. He oído que vuestro rey necesita ayuda con la enfermedad, me\
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
		<p class='transient'><a href='castillo' class='once'>Siguiente página</a>.</p>",
        {
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
            }
        }
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
		<p>―Me llamo " + nombre + " , alteza― te presentas antes de que el militar terminase de hablar― Recorro el mundo en busca de aventuras.\
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
		<p class='transient'><a href='cocina' class='once'>Siguiente página</a>.</p>",
        {
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
            }
        }
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
                                    /*
									if(character.qualities.cuchillo < 1){
										system.setQuality("cuchillo", 1);
									}
                                    */
									
									var dado = jsRandom.get(1,10);
									if ((dado+character.qualities.agilidad) > 5){
										system.setQuality("tirada", dado);
										system.write($("#chorizo").html());
										system.setQuality("vida", character.qualities.vida+2);
									}else{
										system.setQuality("tirada", dado);
										system.write($("#no_chorizo").html());
									}
									
									system.write($("#te_regaña").html());
				}
			},
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso + 3);
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
		<p>―¿Tengo cara de estar bromeando?― se revuelve de manera cómica ―¿No escuchaste antes al rey? Muchos se han dejado la vida en este viaje.</p>\
		<br>\
		<p>―Está bien, está bien.― vuelves los ojos en blanco y suspiras― Dame el mapa ya, a ver si terminamos con esto pronto.</p>\
		<br>\
		<p class='transient'><a href='camino' class='once'>Siguiente página</a>.</p>",
        {
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso + 3);
            }
        }
	),
	
	/*Se supone que la  lista ul debe desaparecer al pinchar en una de las opciones*/
	camino: new undum.SimpleSituation(
		"<h1>Capítulo 3</h1>\
		<p>A la mañana siguiente despiertas renovado. Estás acostado bajo una enramada; las ramas de un árbol bajaban entrelazadas hasta el suelo.\
		La cama de helechos y musgo era suave y profunda, tan cómoda que te hizo olvidar el berrinche que pillaste al enterarte de que no se te\
		permitía pasar la noche en la ciudad. “Otra maldita noche a la intemperie” pensaste. Pero no llovió nada el resto del día y el sol brilló\
		con fuerza. Así que la tierra y matojos se secaron y reblandecieron en su justa medida.</p>\
		<br>\
		<p>Ahora, el sol refulgía entre las hojas temblorosas. Te levantas de un salto, agitas tus ropajes para desprenderte de las púas de pino y,\
		tras unos estiramientos, te pones en marcha. Al cabo de un rato te entra hambre y ves unos arbustos con bayas muy apetecibles.</p>\
		<br>\
		<ul class='options'>\
			<li><a href='./prudente' class='once'>Intentar identificar bayas</a></li>\
			<li><a href='./temerario' class='once'>Coger las bayas directamente</a></li>\
			<li><a href='./hambre' class='once'>Pasar de las bayas y seguir tu camino</a></li>\
		</ul>\
		",
		{
			actions:{
				"prudente":function(character, system, action) {
					var dado = jsRandom.get(1,10);
					system.setQuality("tirada", dado);
					
					if ((dado+character.qualities.sabiduria) > 5){
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
			},
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
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
					system.setQuality("tirada", dado);
					
					if ((dado+character.qualities.sigilo) > 5){
						system.write($("#no_te_engaña").html());						
					}else{
						system.write($("#te_engaña").html());
						system.setQuality("vida", character.qualities.vida-1);
					}
					
					system.setQuality("vida_adv", 15);
				}
			},
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso + 3);
            }
		}
	),
	
	tu_turno: new undum.SimpleSituation(
		"",
		{
			enter:function(character, system, action) {				
				if(character.qualities.vida > 0){
					system.write("<p><b>TU TURNO</b></p>");
					system.write("<p class='transient'><a href='atacar' >Atacar</a>: Escala con <b>fuerza</b></p>");
				}else{
					system.write($("#mueres").html());
				}
			}
		}
	),
	
	atacar: new undum.SimpleSituation(
		"",
		{
			enter:function(character, system, action) {
				var dado = jsRandom.get(1,20);
					
					if(character.qualities.bonf == 1){
                        dado = dado + jsRandom.get(1, 4);
						system.setQuality("bonf", 0);
					}
					
					if(dado == 1){
						system.write("<p>Has fallado el ataque estrepitosamente. Ahora eres <b>vulnerable</b></p>\
									<p> · Tirada: "+ dado + " </p>\
									<p> · Daño infligido: 0 </p><br>");
						system.setQuality("vulnerable", 1);
					}else{
                        var ajuste = dado + character.qualities.fuerza;
                        if (character.qualities.espada_larga == 1) {
                            ajuste = ajuste + 4;
                        } else if (character.qualities.hacha == 1) {
                            ajuste = ajuste + 4;
                        } else if (character.qualities.dagas == 1) {
                            ajuste = ajuste + 2;
                        } else if (character.qualities.espada_corta == 1) {
                            ajuste = ajuste + 3;
                        } else if (character.qualities.espada_madera == 1) {
                            ajuste = ajuste + 1;
                        }

						if (ajuste > 10){		//ATAQUE EXITO						
							var atq = jsRandom.get(1,6);
							if(dado>=20){	//CRÍTICO!! Tira otro dado
								atq = atq + jsRandom.get(1,6);
								system.write("<p><b>CRÍTICO</b></p>")
							}
							system.write("<p>Has realizado un ataque con éxito<p>\
										<p> · Tirada: "+ dado + " </p>\
										<p> · Daño infligido: " + atq + "</p><br>");
							system.setQuality("vida_adv", character.qualities.vida_adv-atq);//Bajar vida adversario
						}else{							
								system.write("<p>Has fallado el ataque.</p>\
										<p> · Tirada: "+ dado + " </p>\
										<p> · Daño infligido: 0 </p><br>");
							}
					}
					//system.setQuality("tirada", dado);
					system.write("<p class='transient'><a href='turno_def' >Pasar turno</a></p><br>");
			}			
		}
	),
	
	turno_def:new undum.SimpleSituation(
		"",
		{
			enter:function(character, system, action) {				
				if(character.qualities.vida_adv > 0){
					system.write("<p><b>TURNO DEL RIVAL</b></p>");
					system.write("<ul class='options'>\
									<li><a href='bloqueo' >Bloquear</a>: Escala con <b>defensa</b></li>\
									<li><a href='esquive' >Esquiva</a>: Escala con <b>agilidad</b>. Menos prob. de exito pero obtienes un ventaja</li>\
								</ul>");
				}else{
					system.write("<p> <a href='victoria1' class='once'> Continuar </a> </p> <br>");
					system.setQuality("vida_adv", 0);
					system.setQuality("bonf", 0);
					system.setQuality("vulnerable", 0);
				}
			},
		}
	),
	
	bloqueo: new undum.SimpleSituation(
		"",
		{
			enter:function(character, system, action) {
				
				var dado = jsRandom.get(1,20) ;
				var ajuste = dado - character.qualities.defensa;
				
				if(character.qualities.vulnerable==1 || ajuste>12){
					var daño = jsRandom.get(1,6);
					system.setQuality("vida", character.qualities.vida - daño);
					system.setQuality("vulnerable", 0);
					system.write("<p>Has fallado el bloqueo.</p>\
									<p> · Tirada enemigo: "+ dado + " </p>\
									<p> · Daño recibido: "+ daño +"</p><br>");
				}else{
					system.write("<p>Has bloqueado el ataque</p>\
									<p> · Tirada enemigo: "+ dado + " </p>\
									<p> · Daño recibido: 0 </p><br>");
				}
				system.write("<p class='transient'><a href='tu_turno'>Tu turno</a></p><br>");
			}
		}
	),
	
	esquive: new undum.SimpleSituation(
		"",
		{
			enter:function(character, system, action) {
				
				var dado = jsRandom.get(1,20);
				var ajuste = dado - character.qualities.agilidad;
				if(character.qualities.vulnerable==1 || ajuste>=8){
					var daño = jsRandom.get(1,8);
					system.setQuality("vida", character.qualities.vida - daño);
					system.setQuality("vulnerable", 0);
					system.write("<p>Has fallado el esquive</p>\
									<p> · Tirada enemigo: "+ dado + " </p>\
									<p> · Daño recibido: "+ daño +"</p><br>");
				}else{
					system.write("<p>Has esquivado el ataque con éxito. Ganas una <b>bonificación</b> para tu siguiente ataque</p>\
									<p> · Tirada enemigo: "+ dado + " </p>\
									<p> · Daño recibido: 0 </p><br>");
					
					system.setQuality("bonf", 1);
				}
				system.write("<p class='transient'><a href='tu_turno' >Tu turno</a></p><br>");
			}
		}
	),
	
	victoria1: new undum.SimpleSituation(
		"<p>El brazo izquierdo palpita, arde y chorrea sangre. Estás harto de bailar. Te llevas la mano derecha, que empuña la espada,\
		al hombro para palpar la herida. De modo que desvías su atención a esta. Tu mano izquierda, sigilosa y oculta a la vista, busca el\
		tu cuchillo oculto. Amagas para atacar con la derecha. Él se prepara para rechazar y dar el golpe final. Realizas un rápido\
		y doloroso giro del codo izquierdo y el cuchillo vuela hasta su cuello. El asesino de cuatro labios cae de rodillas, se le escapa un\
		grito sordo y escupe sangre. Ya no es un profesional.</p>\
		<br>\
		<p>Con el enemigo muerto a tus pies, la euforia de la victoria y la adrenalina se disparan, aumentando el ritmo de tus pulsaciones.\
		Notas como la sangre brota con fuerza de tu brazo. Te mareas, hay que actuar rápido: rajas un trozo de la capa tras la que se ocultaba\
		el cazarrecompensas, envuelves varias veces la herida y ayudándote con los dientes aseguras el nudo. Permaneces sentado, observando el\
		cadáver, controlando la respiración.</p>\
		<p><a href='./registrar' class='once'>Registrar cuerpo</a></p>\
		<br>"
		,
		{
			actions:{
				"registrar":function(character, system, action) {
					var dado = jsRandom.get(1,10);
					system.setQuality("tirada", dado);
					if(dado>=3){
						system.write($("#cartita").html());
						system.setQuality("vida", 20);
					}else{
						system.write($("#no_cartita").html());
					}
				}
			}
		}
		
	),
	
	
	
	
   templo: new undum.SimpleSituation(
        "<h1>CAPITULO 4</h1>\
        <img src='media/img/templo_monje.png'>\
        <p>Tras día y medio de travesía, el templo de Ver-duleria se deja ver al fin. Este se encuetra en lo alto de una colina\
        rodeado por un bosque de escasos árboles. Distingues un pequeño sendero que parece dirigirse al templo y decides tomarlo. Se trata de un\
        pequeño edificio de dos plantas hecho de piedra marrón desgastada. En la entrada te recibe un monje vestido con un hábito marron y blanco.</p>\
        <p>―Bienvenido joven viajero, ¿A que se debe su visita?</p>\
		<br>\
        <ul class='options'>\
			<li><a href = 'explicar'>Explicar tu situación</a></li>\
			<li><a href ='noexplicar'>Desconfiar del monje y no explicar tu situación</a></li>\
        </ul>\
         <br>",
         {
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
            }
         }
    ),
    //Situacion en la que explicas al monje
    explicar: new undum.SimpleSituation(
        "<p>Tras explicar la situacción con gusto el monje accede a llevarte hacia \
        donde se encuentra la Remolacha, en un sendero que rodea el templo. A mitad de camino\
        el monje se detiene y parece no saber el camino a tomar, desconcertado le preguntas:</p>\
		<br>\
        <p>― ¿Sabe usted por donde ir?</p>\
		<br>\
        <p>― Sí, disculpa, mi memoria ya no es la que era, es por aquí. ―Responde el monje</p>\
		<br>\
        <p>El camino es algo laberíntico, y trás un rato detrás del monje empiezas a sospechar\
        que estáis caminando en círculos. De pronto el monje se agacha y arranca una hierba.</p>\
		<br>\
        <p>― Al fin, ¡aquí está la planta que buscas!</p>\
		<br>\
		<p> El monje te entrega la planta.\
		<br>\
        <a href ='./examinar' class='once'>Examinar planta(Tirada de percepción)</a></p>\
		<br>",
        {
            actions: 
            {
                'examinar':function(character, system, action){
                    var dado = jsRandom.get(1,10);
                    system.setQuality("tirada", dado);
									if ((dado+character.qualities.sabiduria) > 5){
										system.write($("#acusar_monje").html());
									}else{
										system.write($("#nosabiduria").html());
									}
                },
                'combate_monje':function(character,system,action){
                    system.write($("#pelea_monje").html());
                //system.setQuality("progreso", character.qualities.progreso+3);
                /*
				    var dado = jsRandom.get(1,10);
					if((dado + character.qualities.fuerza) > 5){
						system.write($("#vives_monje").html());
                        system.write("<p><a href='aftercombate'>Siguiente pagina</a></p>");	//-SERÁ UNA PELEA A MUERTE CON CUCHILLOS
						//system.setQuality("cuchillo", character.qualities.cuchillo-1);	//-¿DUELO A MUERTE CON CUCHILLOS?
						system.setQuality("vida", character.qualities.vida-3);				//-NO SÉ QUÉ ES ESO... CREO QUE VAN A PELEAR CON CUCHILLOS
						
					}else{
						system.write($("#mueres_monje").html());
					}
                    */
                }
            },
            enter: function (character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
            },
            exit:function (character, system, action) {
                system.setQuality("vida_adv", 20);
            }
        }
    ),
    tu_turno3: new undum.SimpleSituation(
		"",
		{
			enter:function(character, system, action) {				
				if(character.qualities.vida > 0){
					system.write("<p><b>TU TURNO</b></p>");
					system.write("<p class='transient'><a href='atacar3' >Atacar</a>: Escala con <b>fuerza</b></p>");
				}else{
					system.write($("#mueres_monje").html());
				}
			}
		}
	),
	
	atacar3: new undum.SimpleSituation(
		"",
		{
			enter:function(character, system, action) {
				var dado = jsRandom.get(1,20);
					
					if(character.qualities.bonf == 1){
						dado = dado + jsRandom.get(1,4)
						system.setQuality("bonf", 0);
					}
					
					if(dado == 1){
						system.write("<p>Has fallado el ataque estrepitosamente. Ahora eres <b>vulnerable</b></p>\
									<p> · Tirada: "+ dado + " </p>\
									<p> · Daño infligido: 0 </p><br>");
						system.setQuality("vulnerable", 1);
					}else{
                        var ajuste = dado + character.qualities.fuerza;
                        if (character.qualities.espada_larga == 1) {
                            ajuste = ajuste + 4;
                        } else if (character.qualities.hacha == 1) {
                            ajuste = ajuste + 4;
                        } else if (character.qualities.dagas == 1) {
                            ajuste = ajuste + 2;
                        } else if (character.qualities.espada_corta == 1) {
                            ajuste = ajuste + 3;
                        } else if (character.qualities.espada_madera == 1) {
                            ajuste = ajuste + 1;
                        }

						if (ajuste > 10){		//ATAQUE EXITO						
							var atq = jsRandom.get(2,6);
							if(dado>=20){	//CRÍTICO!! Tira otro dado
								atq = atq + jsRandom.get(2,6);
								system.write("<p><b>CRÍTICO</b></p>")
							}
							system.write("<p>Has realizazo un ataque con éxito<p>\
										<p> · Tirada: "+ dado + " </p>\
										<p> · Daño infligido: " + atq + "</p><br>");
							system.setQuality("vida_adv", character.qualities.vida_adv-atq);//Bajar vida adversario
						}else{							
								system.write("<p>Has fallado el ataque.</p>\
										<p> · Tirada: "+ dado + " </p>\
										<p> · Daño infligido: 0 </p><br>");
							}
					}
					//system.setQuality("tirada", dado);
					system.write("<p class='transient'><a href='turno_def3' >Pasar turno</a></p><br>");
			}			
		}
	),
	
	turno_def3:new undum.SimpleSituation(
		"",
		{
			enter:function(character, system, action) {				
				if(character.qualities.vida_adv > 0){
					system.write("<p><b>TURNO DEL RIVAL</b></p>");
					system.write("<ul class='options'>\
									<li><a href='bloqueo3' >Bloquear</a>: Escala con <b>defensa</b></li>\
									<li><a href='esquive3' >Esquiva</a>: Escala con <b>agilidad</b>. Menos prob. de exito pero obtienes un ventaja</li>\
								</ul>");
				}else{
					system.write("<p> <a href='vives_monje' class='once'> Continuar </a> </p> <br>");
					system.setQuality("vida_adv", 0);
					system.setQuality("bonf", 0);
					system.setQuality("vulnerable", 0);
				}
			},
		}
	),
	
	bloqueo3: new undum.SimpleSituation(
		"",
		{
			enter:function(character, system, action) {
				
				var dado = jsRandom.get(1,20) ;
				var ajuste = dado - character.qualities.defensa;
				
				if(character.qualities.vulnerable==1 || ajuste>12){
					var daño = jsRandom.get(2,6);
					system.setQuality("vida", character.qualities.vida - daño);
					system.setQuality("vulnerable", 0);
					system.write("<p>Has fallado el bloqueo.</p>\
									<p> · Tirada enemigo: "+ dado + " </p>\
									<p> · Daño recibido: "+ daño +"</p><br>");
				}else{
					system.write("<p>Has bloqueado el ataque</p>\
									<p> · Tirada enemigo: "+ dado + " </p>\
									<p> · Daño recibido: 0 </p><br>");
				}
				system.write("<p class='transient'><a href='tu_turno3'>Tu turno</a></p><br>");
			}
		}
	),
	
	esquive3: new undum.SimpleSituation(
		"",
		{
			enter:function(character, system, action) {
				
				var dado = jsRandom.get(1,20);
				var ajuste = dado - character.qualities.agilidad;
				if(character.qualities.vulnerable==1 || ajuste>=8){
					var daño = jsRandom.get(2,8);
					system.setQuality("vida", character.qualities.vida - daño);
					system.setQuality("vulnerable", 0);
					system.write("<p>Has fallado el esquive</p>\
									<p> · Tirada enemigo: "+ dado + " </p>\
									<p> · Daño recibido: "+ daño +"</p><br>");
				}else{
					system.write("<p>Has esquivado el ataque con éxito. Ganas una <b>bonificación</b> para tu siguiente ataque</p>\
									<p> · Tirada enemigo: "+ dado + " </p>\
									<p> · Daño recibido: 0 </p><br>");
					
					system.setQuality("bonf", 1);
				}
				system.write("<p class='transient'><a href='tu_turno3' >Tu turno</a></p><br>");
			}
		}
	),
	
    //si no tienes la sabiduria necesaria
	/*
    nosabiduria: new undum.SimpleSituation(
       "<p>Debe de ser la Remolacha, piensas. Satisfecho con tu labor, decides volver al castillo para entregarle la hierba al Duque y obtener tu recompensa.\
       Una vez allí eres muy bien recibido, el Duque Agnar te da las gracias y entrega la planta a sus expertos. Estos le comunican enseguida que la planta\
       que has traído no es la Remolacha sino una planta muy común. El enfado del Duque es tal, que ordena tu decapitación pública inmediatamente... </p>\
	   <br><p><b>FIN DEL JUEGO</b></p>",
       {enter:function(character, system, action) {
        system.setQuality("progreso", character.qualities.progreso+1);
        }}
    ),*/
	
    //Situación en la que no le explicas al monje y decides pasar
    noexplicar: new undum.SimpleSituation(
        "<p>Decides entrar en el templo sin el consentimiento del monje, \
        no te fías ni un pelo de él. Este se ve reacio a dejarte entrar y cuando vas a pasar a su lado te da un violento empujón. Al moverse bruscamente, un colgante asoma de su hábito. LLeva \
        la marca de la flor Lis. La misma que llevaba Felipo.</p>\
		<br>\
		<p>Te enzarzas en un duro <a href='./combate_monje'>combate</a> con él.</p>",
        {
            actions:{
                'combate_monje':function(character,system,action){
                    system.write($("#pelea_monje").html());
               // system.setQuality("progreso", character.qualities.progreso+3);
                
				var dado = jsRandom.get(1,10);
					if((dado + character.qualities.fuerza) > 5){
						system.write($("#vives_monje").html());
                        system.write("<p><a href='aftercombate'>Siguiente pagina</a></p>");	//-SERÁ UNA PELEA A MUERTE CON CUCHILLOS
						//system.setQuality("cuchillo", character.qualities.cuchillo-1);	//-¿DUELO A MUERTE CON CUCHILLOS?
						system.setQuality("vida", character.qualities.vida-3);				//-NO SÉ QUÉ ES ESO... CREO QUE VAN A PELEAR CON CUCHILLOS
						
					}else{
						system.write($("#mueres_monje").html());
					}
                }
            },
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
            }
        }
    ),

    aftercombate: new undum.SimpleSituation(
        "<p>Tras derrotar al asesino, observas una columna de humo proveniente del interior del templo. Se trata de unos hombres que están\
        quemando toda la información relacionada con la planta. Te apresuras pero para cuando llegas los hombres han huido. La sala resulta ser una biblioteca antigua\
        con una gran fogata en el centro donde están quemándose <a href= './libros' class  ='once'>los libros</a>. Observas una <a href ='./ventana' class  ='once'>ventana</a> en la parte derecha de la sala. </p>\
        <br>\
		",
        {
            actions: 
            {
                'libros': "<p> De entre las llamas rescatas un libro con información de la hierba. Está en mal estado pero consigues rescatar un pequeño mapa que dice llevar a un lugar\
                donde es posible encontrar la planta. <a href = 'post_templo'>Decides seguir el mapa </p><br>",
                'ventana':"<p> Te asomas a la ventana y ves a los hombres que han quemado los libros huir a toda velocidad. No merece la pena perseguirlos</p><br>" 
            },enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
            }
        }
    ),

        post_templo: new undum.SimpleSituation(
        "<p>Te pones a caminar y después de un buen rato de trayecto encuentras\
        un pinar que proporciona una sombra perfecta para descansar del calor\
        de la caminata, por lo que decides tumbarte a tomar aire.</p>\
        <br>\
        <p>Tumbado a la sombra de los pinos empiezas a pensar en lo ocurrido\
        ―Lo que me faltaba, un monje asesino en el templo. Era demasiado raro que\
        encontrar la dichosa cura fuese tan facil... ¡Si tan solo bastase con\
        hablar con un &quotmonjezucho&quot de nada para obtenerla nadie habría perdido\
        la vida en esta misión!―</p>\
		<br>\
        <p>Ante el evidente fracaso, te pones a pensar en cuál debería ser tu\
        próximo movimiento para continuar tu misión ―Demonios... En fin, veamos qué\
        puedo hacer ahora― y recuerdas haber podido salvar de las llamas los restos de\
        unos <a href='./papeles' class='once'>papeles</a> en la biblioteca del templo.</p><br>",
        {
            actions: {
                "papeles": "<p>Decides examinar los papeles por si estos pudieran arrojar\
                            un poco de luz y ¡voilá! Los papeles indican un lugar donde es\
                            posible encontrar la Remolacha y un pequeño mapa que lleva a una\
                            caverna, así que decides poner rumbo a la misma ―A ver si esta vez\
                            tengo un poquito más de suerte...― piensas en voz alta.</p>\
                            <br>\
                            <p class='transient'><a href='rumbo_caverna'>Rumbo a la caverna</a>.</p>'"
            },
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
            }
        }
    ),

    rumbo_caverna: new undum.SimpleSituation(
        "<h1>CAPÍTULO 5</h1>\
        <p>Pasas dos largos días caminando a través de colinas y terrenos escarpados varios.\
        Aunque la mayoría de lugares que has cruzado serían dignos de grandes escenas de lucha\
        y mortales e inesperadas trampas, la fortuna ha estado de tu parte y al fin, sin que haya\
        habido contratiempo ninguno, ves a lo lejos, entre un montón de árboles, la boca de la caverna.</p>\
        <br>\
        <p>Una vez ahí ves que la caverna tiene el ancho de dos hombres, espacio suficiente para que\
        alguien intente atacarte desde el interior de la misma, por lo que debes mantenerte alerta.\
        Sin embargo, no tienes otra alternativa, por lo que te pones en marcha para\
        <a href='./entrar_caverna' class='once'>entrar a la caverna</a>.</p>",
        {
            actions: {
                "entrar_caverna": "<p>Poco a poco te vas adentrando en el largo túnel y notas como,\
                                    a cada paso que das, la luz de fuera da paso a la oscuridad del\
                                    interior y el ambiente se hace más y más húmedo y cargado, tanto\
                                    que cuesta respirar.</p>\
                                    <br>\
                                    <p>―¡Dios! Llevo 10 minutos caminando por este condenado pasillo,\
                                    quién me manda a mí aceptar la misión... ¿Dónde estará esa maldita\
                                    planta?― piensas ―¿Y qué es este olor? Creo que preferiría morir\
                                    de asfixia...―</p>\
                                    <br>\
                                    <p>De repente, al dar un paso con firmeza, notas cómo el terreno\
                                    pasa a tener una gran inclinación, sin embargo, es demasiado resbaladizo,\
                                    a causa de la humedad y algún tipo de sustancia que desprende\
                                    ese fétido hedor, y no eres capaz de estabilizarte para evitar\
                                    <a href='gran_caverna'>la caída</a>.</p>"
            },
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
            }
        }
    ),

    gran_caverna: new undum.SimpleSituation(
        "<p>Te deslizas hacia abajo por esa rampa y finalmente te detienes en un terreno algo más llano.\
        Además, toda la colonia de murciélagos que había durmiendo en el interior de la caverna se ha\
        despertado a causa de tu estruendosa caída y, asustados, han salido volando directos hacia tí\
        enganchándose en tu ropa y rasgándola un poco.</p>\
        <br>\
        <p>―¡Me cago en! ¡Genial, ahora estoy cubierto de guano de murciélago!― te quejas, mientras\
        levantas la mirada y observas el lugar en el que estás ―¡Nada me apetecía más que-! Pero\
        qué demonios... ¿Dónde estoy?―</p>\
        <br>\
        <p>El pequeño túnel por el que estuviste caminando resultó ser nada más que la entrada a una\
        inmensa caverna repleta de estalactitas y estalagmitas, algunas de ellas unidas por el paso\
        del tiempo formando enormes columnas de roca. En la parte alta de la caverna ves una serie de\
        pequeñas grietas por las que entran escasos y tímidos rayos de sol y, tras unos segundos,\
        la vista se te hace a esos bajos niveles de luz.</p>\
        <br>\
        <p>―Bien, es más que obvio que no puedo volver por donde he venido, así que no me queda más\
        opción que explorar la caverna― dices mientras te incorporas y te sacudes la ropa para\
        intentar limpiarla un poco.</p>\
        <br>\
        <p>Tras explorar un poco encuentras una bifurcación</p>\
        <ul class='options'>\
            <li><a href='oeste_gc' class='once'>Ir al Oeste</a>.</li>\
            <li><a href='este_gc' class='once'>Ir al Este</a>.</li>\
        </ul>",
        {
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
            }
        }
        
    ),

    vuelta_gc: new undum.SimpleSituation(
        "<p>Decides volver a la sala principal de la caverna, quizás otro camino te depare una mejor suerte.</p>\
        <ul class='options'>\
            <li><a href='oeste_gc' class='once'>Ir al Oeste</a>.</li>\
            <li><a href='este_gc' class='once'>Ir al Este</a>.</li>\
        </ul>",
        {
        }
    ),

    oeste_gc: new undum.SimpleSituation(
        "<h2>El foso</h2>\
        <p> Pones rumbo hacia lo que supones, es el Oeste.Tras una pequeña caminata llegas a otra sala\
        de la caverna en la que puedes ves cómo desciende un foso. No logras ver el final, así que coges\
        una piedra del suelo, la dejas caer foso abajo y te pones a contar.</p>\
        <br>\
        <p>―Veamos, uno... dos... tres... Mmmm... De acuerdo, son unos once metros― aproximas.</p>\
		<br>\
        <p>Observas a tu alrededor y ves un gancho de acero clavado en una de las paredes de la sala,\
        parece que se puede bajar usando una <a href='./cuerda' class='once'>cuerda</a>. También puedes\
        <a href='vuelta_gc' class='once'>volver a la zona anterior</a> y probar suerte por el otro\
        camino.</p><br>",
        {
            actions: {
                "cuerda": function (character, system, action) {
                    system.setQuality("cuerda", 1);
                    system.write("<p>―Parece que no soy la única persona que pasa por la caverna... Con algo de\
                    suerte alguien se habrá dejado por aquí alguna cuerda para bajar...―</p>\
                    <p>Decides examinar un poco la zona y, tal y cómo esperabas, encuentras\
                    una larga cuerda empolvada en el suelo pegada a una de las paredes de la sala.\
                    Ahora podrás enganchar la cuerda al gancho de acero e\
                    <a href='bajada_foso' class='once'>intentar bajar por el foso</p>")
                },
                enter:function(character, system, action) {
                    system.setQuality("progreso", character.qualities.progreso+3);
                }
            }
        }
    ),

    bajada_foso: new undum.SimpleSituation(
        "<p>Coges la cuerda que había en el suelo, le haces un buen nudo en uno de los extremos, lo enganchas\
        con firmeza en el gancho de la pared y comienzasa descender cuidadósamente por el foso.</p>\
		<br>\
        <p>Con cada paso que das hacia abajo puedes notar cómo, extráñamente, se eleva la temperatura\
        cada vez más. Continúas el descenso cuando te percatas de un extraño\
        <a href='agujero_foso' class='once'>agujero en la pared</a>.</p>\
        <br>\
        <p><a href='sala_huesos' class='once'>Continuar la bajada</a>.</p>",
        {
            enter: function (character, system, from) {
                system.setQuality("cuerda", 0);
                system.setQuality("progreso", character.qualities.progreso+3);
            }
        }
    ),

    agujero_foso: new undum.SimpleSituation(
        "<p>El agujero de la pared te llama especialmente la atención, te ersulta demasiado raro que, en una\
        pared tan lisa, haya esa imperfección.―Quizás sea otro intento por parte de otro aventurero de\
        poner otro gancho en la pared para asegurar más la bajada― piensas.</p>\
        <br>\
        <p>Sin embargo, mientras estás absorto en tus pensamientos, empiezas a notar cómo la pared\
        comienza a vibrar ligeramente. Te propones bajar cuanto antes para evitar sorpresas, pero antes de\
        poder dar otro paso, un chorro de vapor sale del agujero dándote en los brazos y el torso y\
        lanzándote hacia abajo en caída libre.</p>\
        <br>\
        <p><a href='./vapor_foso' class='once'>Continuar descenso</a>.</p>",
        {
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
            },
            actions: {
                "vapor_foso": function (character, system, action) {
                    system.setQuality("progreso", character.qualities.progreso + 1);
                    var dado1 = jsRandom.get(1, 10);
                    system.setQuality("tirada", dado1);
                    if (dado1 < character.qualities.vida) {
                        system.setQuality("vida", character.qualities.vida - dado1);
                        system.write($("#sobrevives_caida").html());
                    } else {
                        system.write($("#muerte_caida").html());
                    }
                }
            }
        }
    ),

    sala_huesos: new undum.SimpleSituation(
        "<h2>La sala de los huesos</h2>\
        <p>Este nuevo área de la caverna tiene un enorme agujero en el techo y, justo debajo de este, una\
        inmensa montaña de huesos, tanto humanos como animales, que se extienden por toda la sala.</p>\
        <br>\
        <p>―Parece que las caídas desde ahí arriba son bastante habituales― dices.</p>\
        <p>Sabiendo eso, quizás no sería una mala idea\
        <a href='./montana_huesos' class='once'>examinar la montaña</a> por\
        si algún desafortunado viajero hubiese encontrado ahí el final y sus pertenencias siguieran en buen\
        estado.</p>\
        <br>\
        <p>Tras inspeccionar la zona, solo parece haber una salida.</p>\
        <br>\
        <p><a href='sala_lago'>Avanzar hacia la salida de la sala</a>.</p>",
        {
            actions: {
                "montana_huesos": function (character, system, from) {
                   
                    if (character.qualities.monedas_oro == 0) {
                        system.write("<p>Decides rebuscar entre los huesos, si tienes en cuenta la cantidad que hay,\
                                       no son pocos los exploradores y aventureros que han acabado su travesía aquí\
                                       agrandando la montaña.</p>\
                                       <br>\
                                       <p>Después de mirar bien y de llenarte de polvo de hueso, encuentras unas cuantas\
                                       monedas, una espada corta, un saco con algo de comida en mal estado, una daga\
                                       arrojadiza y un par de pociones; una de ellas tiene un color cian y un dibujo\
                                       de lo que recuerda a una corriente, nunca antes habías visto una poción así; la\
                                       otra, de un color rojo intenso, un dibujo de una gota, no te es difícil reconocer\
                                       que se trata de una poción sanadora.</p><br>")
                        system.setQuality("progreso", character.qualities.progreso+3);
                        system.setQuality("monedas_oro", 200);
                        system.setQuality("monedas_pl", 300);
                        //system.setQuality("espada_corta", 1);
                        //system.setQuality("daga_arr", 1);
                        system.setQuality("pocion_roja", 1);
                        system.setQuality("pocion_azul", 1);
                        system.setQuality("comida_mal", 1);
                    }
                }
            }
        }
    ),

    vuelta_salahuesos: new undum.SimpleSituation(
        "",
        {
            enter: function (character, system, from) {
                system.write("<h2>La sala de los huesos</h2>\
                            <p>Este nuevo área de la caverna tiene un enorme agujero en el techo y, justo debajo de este, una\
                            inmensa montaña de huesos, tanto humanos como animales, que se extienden por toda la sala.</p>\
                            <br>\
                            <p>―Parece que las caídas desde ahí arriba son bastante habituales― dices.</p>\
                            <br>\
                            <p>Tras inspeccionar la zona, solo parece haber una salida.</p>\
                            <br>\
                            <p><a href='sala_lago'>Avanzar hacia la salida de la sala</a>.</p>");
                if (character.qualities.monedas_oro == 0) {
                    system.write("<p>Quizás no sería una mala idea\
                    <a href='examina_montana' class='once'>examinar la montaña</a> por\
                    si algún desafortunado viajero hubiese encontrado ahí el final y sus pertenencias siguieran en buen\
                    estado.</p><br>");
                }
            }
        }
    ),

    examina_montana: new undum.SimpleSituation(
        "",
        {
            enter: function (character, system, from) {
                system.setQuality("progreso", character.qualities.progreso+3);
                system.write("<p>Decides rebuscar entre los huesos, si tienes en cuenta la cantidad que hay,\
                                       no son pocos los exploradores y aventureros que han acabado su travesía aquí\
                                       agrandando la montaña.</p>\
                                       <br>\
                                       <p>Después de mirar bien y de llenarte de polvo de hueso, encuentras unas cuantas\
                                       monedas, una espada corta, un saco con algo de comida en mal estado, una daga\
                                       arrojadiza y un par de pociones; una de ellas tiene un color cian y un dibujo\
                                       de lo que recuerda a una corriente, nunca antes habías visto una poción así; la\
                                       otra, de un color rojo intenso, un dibujo de una gota, no te es difícil reconocer\
                                       que se trata de una poción sanadora.</p><br>")
                system.setQuality("monedas_oro", 20);
                system.setQuality("monedas_pl", 30);
                //system.setQuality("espada_corta", 1);
                //system.setQuality("daga_arr", 1);
                system.setQuality("pocion_roja", 1);
                system.setQuality("pocion_azul", 1);
                system.setQuality("comida_mal", 1);
                system.write("<p><a href='sala_lago'>Avanzar hacia la salida de la sala</a>.</p>");
            }
        }
    ),

    este_gc: new undum.SimpleSituation(
        "<h2>La riada</h2>\
        <p>Pones rumbo hacia lo que, supones, es el Este. Conforme avanzas, el camino se va haciendo más y más\
        pequeño y angosto, hasta que solo cabe una persona. Además, el túnel va haciendo un ligero zig-zag.</p>\
        <br>\
        <p>Continúas andando y, de repente, empiezas a escuchar en tus pisadas el ruido del agua salpicando.</p>\
        <br>\
        <p>―Agua... Es posible que este túnel se haya forma por la erosión que provoca la misma―</p>\
        <p>Tienes dos opciones: continuar para\
        <a href='sigues_riada' class='once'>ver de dónde viene el agua</a> o\
        <a href='vuelta_gc' class='once'>volver a la zona anterior</a> para probar suerte por el otro camino.</p>",
        {
            enter:function(character, system, action) {
               // system.setQuality("progreso", character.qualities.progreso+3);
            }
        }
    ),

    vuelta_riada: new undum.SimpleSituation(
        "<h2>La riada</h2>\
        <p>Te adentras en un túnel al Sur del lago. Nada más poner un pie en él notas como un poco de agua ha salpicado con tu\
        pisada y como en el ambiente hay mucha humedad, es posible que este túnel se haya formado por la acción de la erosión\
        del agua.</p>\
        <br>\
        <p>Avanzas un poco más y descubres que tenías razón, en el techo del túnel se puede ver otro túnel vertical por el que cae\
        el agua y se aprecia fácilmente cómo esta tiene cada vez un nivel y fuerza mayor.\
        Sin embargo, hay algo que no termina de encajar, por mucho que el agua en ese punto sea más fuerte, no\
        crees que sea lo suficiente como para haber creado un túnel de esas dimensiones.</p>\
        <br>\
        <p>Sigues examinando la zona, cuando te percatas de que\
        <a href='./sube_agua' class='once'>el nivel del agua en tus pies es mayor</a> al que\
        había hace unos segundos y el ruido que hace esta al caer también es mayor.</p>",
        {
            actions: {
                "sube_agua": "<p>No ha pasado ni un minuto desde que te diste cuenta y el agua, que hace un\
                                momento estaba al nivel de tus pies, ha llegado ya a la altura de tu pantorrilla.</p>\
                                <br>\
                                <p>―Debería hacer algo, el agua está subiendo demasiado rápido― piensas.</p>\
                                <br>\
                                <p>Puedes <a href='sala_lago' class='once'>correr</a> hacia atrás y volver\
                                a la sala del lago, intentar <a href='techo' class='once'>subirte al techo</a>\
                                o <a href='dejarte_llevar' class='once'>dejarte llevar por la corriente</a>.</p>"
            }
        }
    ),

    sigues_riada: new undum.SimpleSituation(
        "<p>Decides seguir caminando para comprobar si estabas en lo cierto, todo apunta a que sí, ya que\
        cada vez hay más agua en el suelo y además, se empieza a oír un ruido al fondo del pasillo como si de\
        una tromba de agua se tratase.</p>\
        <br>\
        <p>Tras caminar un poco más confirmas tu teoría. En el techo del túnel se puede ver otro túnel\
        vertical por el que cae el agua y se aprecia fácilmente cómo esta tiene cada vez un nivel y fuerza mayor.\
        Sin embargo, hay algo que no termina de encajar, por mucho que el agua en ese punto sea más fuerte, no\
        crees que sea lo suficiente como para haber creado un túnel de esas dimensiones.</p>\
        <br>\
        <p>Sigues examinando la zona, cuando te percatas de que\
        <a href='./sube_agua' class='once'>el nivel del agua en tus pies es mayor</a> al que\
        había hace unos segundos y el ruido que hace esta al caer también es mayor.</p>",
        {
            actions: {
                "sube_agua": "<p>No ha pasado ni un minuto desde que te diste cuenta y el agua, que hace un\
                                momento estaba al nivel de tus pies, ha llegado ya a la altura de tu pantorrilla.</p>\
                                <br>\
                                <p>―Debería hacer algo, el agua está subiendo demasiado rápido― piensas.</p>\
                                <br>\
                                <p>Puedes <a href='sala_lago' class='once'>correr</a> hacia adelante y ver\
                                dónde acaba el túnel, intentar <a href='techo' class='once'>subirte al techo</a>\
                                o <a href='dejarte_llevar' class='once'>dejarte llevar por la corriente</a>.</p>"
            },
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
            }
        }
    ),

    techo: new undum.SimpleSituation(
        "<p>Echas un vistazo rápido a la sala y encuentras unos ganchos en el techo, así que\
        decides intentar agarrarte a ellos, con la esperanza de que el agua no termine\
        llenando la sala.</p>\
        <br>\
        <p><a href='./continua_techo' class='once'>Siguiente página</a>.</p>",
        {
            enter: function (character, system, action) {
                system.setQuality("progreso", character.qualities.progreso + 3);
            },
            actions: {
                "continua_techo": function (character, system, action) {
                    var dado = jsRandom.get(1, 10);
                    system.setQuality("tirada", dado);
                    if ((dado + character.qualities.agilidad) > 8) {
                        system.write("<p>Logras engancharte a ellos gracias a tu agilidad.</p>\
                                  <br>\
                                  <p>Tras unos instantes empieza a bajar el nivel del agua, has tenido suerte, aunque\
                                    cuando empezaste a notar el agua llegarte al pecho pensaste que sería tu fin.</p>\
                                  <br>\
                                  <p>Finalmente bajas de nuevo al suelo, decidido a\
                                  <a href='sala_lago' class='once'>continuar</a>.</p>")
                    } else {
                        system.write("<p>Agarras los ganchos con firmeza y, cuando dejas caer tu peso, ambos se desencajan\
                                    la pared.</p>\
                                   <br>")
                        if (character.qualities.pocion_azul == 1) {
                            system.write("<p>Cuando caes al suelo, el agua ya te llega a la altura del estómago, es demasiado\
                                        tarde como para correr, y tus intentos de nadar a contra corriente no están dando\
                                        resultado. En pleno momento de desesperación, una idea golpea tu mente: La poción\
                                        azul. No conoces sus efectos, pero a estas alturas acabarás muerto por\
                                        asfixia igualmente</p>\
                                      <br>\
                                      <p>Antes de que el agua llegue por encima de tu cabeza, destapas la poción\
                                        y te la tomas de un trago. A pesar de su llamativo aspecto, tiene un sabor\
                                        muy amargo.</p>\
                                      <p>―Es el fin― piensas, cuando el agua va a terminar por llenar la sala.\
                                        Tomas una última bocanada de aire y cierras los ojos. ―Aquí acaba mi misión―</p>\
                                      <br>\
                                      <p>Sin embargo, la muerte tendrá que esperar un poco más antes de venir a por tí,\
                                        esa poción ha resultado ser una que permite respirar bajo el agua. Con esa\
                                        facilidad, te pones a nadar hacia la salida del túnel.</p>\
                                      <br>\
                                      <p>Poco a poco vas avanzando por el túnel y el nivel del agua va bajando gracias a\
                                        a las grietas de las paredes, que permiten que el agua escape por ellas.</p>\
                                      <p>―Un golpe de suerte― piensas, mientras te diriges a la \
                                        <a href='sala_lago' class='once'>siguiente sala</a>.</p>")
                            system.setQuality("pocion_azul", 0);
                        } else {
                            system.write("<p>Cuando caes al suelo, el agua ya te llega a la altura del estómago, es demasiado\
                                        tarde como para correr, y tus intentos de nadar a contra corriente no están dando\
                                        resultado.</p>\
                                      <br>\
                                      <p>Eventualmente terminas cansándote y dejas de nadar. La fuerte corriente te arrastra\
                                        empujándote contra los afilados bordes de las paredes del túnel y provocándote cortes\
                                        por todo el cuerpo.</p>\
                                      <br>")
                            var dado2 = jsRandom.get(1, 10);
                            system.setQuality("tirada", dado2);
                            if (dado2 >= character.qualities.vida) {
                                system.write($("#muerte_riada").html());
                            } else {
                                system.write($("#sobrevives_riada").html());
                            }
                        }
                    }
                }
            }
        }
    ),

    dejarte_llevar: new undum.SimpleSituation(
        "<p>Decides esperar a que haya un poco más de agua y puedas dejarte llevar por la corriente. Un rato más\
        tarde descubres que no ha sido mala idea, ya que el agua te ha ayudado a avanzar tranquilamente por el túnel\
        como si de un tobogán acuático se tratara.</p>\
        <br>\
        <p>Finalmente, acabas llegando a una <a href='sala_lago' class='once'>nueva sala</a>.</p>",
        {
            enter: function (character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
            }
        }
    ),

    sala_lago: new undum.SimpleSituation(
        "<h2>El lago</h2>\
        <p>Llegas a una sala más amplia, aunque la mitad de todo este espacio está ocupado por un lago de aguas\
        nada apetecibles. Su tono verdoso y turbio no te da muchas ganas de\
        <a href='meterte_lago' class='once'>darte un chapuzón</a> y, además,\
        tampoco sabes cuán profundo será o qué puede estar esperando ahí abajo.</p>\
        <br>\
        <p>Observas un poco la sala y ves que tiene dos salidas</p>\
        <br>\
        <ul class='options'>\
            <li><a href='vuelta_salahuesos' class='once'>Salida Oeste</a></li>\
            <li><a href='vuelta_riada' class='once'>Salida Sur</a></li>\
        </ul>",
        {
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
            }
        }
    ),

    meterte_lago: new undum.SimpleSituation(
        "<p>Decides que la única alternativa que te queda es introducirte en el lago por si existiese la\
        posibilidad de que haya algún hueco en las paredes o en el fondo y que te pueda conducir a otra\
        zona de la caverna.</p>\
        <br>\
        <p>No parece haber nada a simple vista, tendrás que\
        <a href='sumergirte' class='once'>sumergirte en el agua</a> un poco para explorar más a fondo.</p>",
        {
            enter: function (character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
            }
        }
    ),

    sumergirte: new undum.SimpleSituation(
        "",
        {
            enter: function(character, system, action) {
                if (character.qualities.monedas_oro != 0) {
                    system.setQuality("progreso", character.qualities.progreso + 3);
                    system.write("<p>Empiezas a examinar pegado a las paredes y finalmente en una de ellas parece\
                                haber un hueco de unos dos metros, podrías\
                                <a href='./entrar_hueco' class='once'>intentar entrar</a> o\
                                <a href='./explora_lago' class='once'>seguir explorando el lago</a>.</p>");
                } else {
                    system.write("<p>Empiezas a examinar pegado a las paredes y finalmente en una de ellas parece\
                                haber un hueco de unos dos metros, podrías intentar entrar, aunque quizás sería\
                                buena idea <a href='sala_lago' class='once'>volver atrás</a> por si hubiera algo que pudiera\
                                ser de utilidad.</p>");
                    system.setQuality("progreso", character.qualities.progreso - 3);
                }
            },
            actions: {
                "entrar_hueco": "<p>Pruebas a entrar por el hueco en la pared, cabe un cuerpo sin problema,\
                                así que tomas una gran bocanada de aire y te pones a nadar por él, parece\
                                que el hueco sí conduce a alguna\
                                <a href='guarida_monstruo' class='once'>otra sala</a>.</p>",
                "explora_lago": "<p>Das unas cuantas vueltas al lago, incluso has buceado hasta el fondo,\
                                pero no encuentras ninguna pista más.</p>"
            },
        }
    ),

    guarida_monstruo: new undum.SimpleSituation(
        "<h2>La guarida del monstruo</h2>\
        <p>El hueco de la pared resultaba dar a un túnel acuático, algo más largo de lo que esperabas.\
        Finalmente sales del agua y, desesperado, tomas una gran bocanada de aire; momentos antes de salir\
        notabas un gran dolor en el pecho y cómo tu cuerpo suplicaba por algo de aire</p>\
        <br>\
        <p>Echas un vistazo rápido a la nueva sala, es quizás la que tiene unas dimensiones mayores de entre\
        todas las anteriores que viste. Al fondo se puede ver cómo las rocas forman una subida hasta llegar\
        a una pequeña grieta por la que entra la luz; aunque es lo suficientemente grande como para que quepa\
        una persona. A uno de los lados se ve un enorme hueco totalmente a oscuras.</p>\
        <br>\
        <p>Las paredes de la caverna están llenas de arbustos y en una de ellas reluce en un rojo intenso una\
        planta.</p>\
        <br>\
        <p>―¡Esa tiene que ser la Remolacha! De acuerdo, esta es mi oportunidad para salir de esta condenada\
        caverna y completar mi misión― piensas.</p>\
        <br>\
        <p>Sin embargo, cuando te adentras un poco más en la sala, escuchas un estruendoso ruido que hace que\
        se te erice el vello y se te tense el cuello.</p>\
        <br>\
        <p>Sin previo aviso, un enorme monstruo sale del hueco de al lado de la salida mientras ruge furiosamente.\
        Se trata de una mantícora, jamás pensaste que te cruzarías con una, menos aún de ese colosal tamaño.</p>\
        <br>\
        <p>La mantícora bloquea tu paso a la salida y, peor aún, dudas que te deje coger la Remolacha\
        tranquilamente si se lo pides por favor; tendrás que\
        <a href='manticora' class='once'>enfrentarte a ella</a>.</p>",
        {
            enter: function (character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
            }
        }
    ),

    manticora: new undum.SimpleSituation(
        "<p>La feroz mantícora, una quimera con cabeza y cuerpo de león, cuernos, alas y la cola de un escorpión,\
        con la que es capaz de envenenar a sus enemigos.</p>\
        <br>\
        <p>Sea como sea tienes que <a href='./pelear' class='once'>pelear</a> y derrotarla para poder salir de la\
        caverna con vida y con la tan preciada Remolacha.</p>\
        <br>\
        <p>Aunque quizás deberías <a href='curarte' class='once'>curarte</a> si tienes algo para hacerlo.</p>",
        {
            actions: {
                "pelear": function (character, system, action) {
                    //if (character.qualities.espada_corta == 1) {
                    system.write("<p><a href='tu_turno2' class='once'>Comienza el combate</a></p>");
                    //}
                },
            },
            enter: function (character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
            },
            exit: function (character, system, action) {
                system.setQuality("vida_adv", 30);
            }
        }
    ),

    curarte: new undum.SimpleSituation(
        "<p>Decides mantener la mente fría y curar tus heridas antes de lanzarte al combate, eso aumentará\
        tus oportunidades de supervivencia.</p>\
        <br>\
        <p>¿Qué usarás para curarte?</p>\
        <ul class='options'>\
            <li><a href='./pocion' class='once'>Usar la poción roja</a>.</li>\
            <li><a href='./comidamal' class='once'>Usar la comida en mal estado</a>.</li>\
        </ul>",
        {
            actions: {
                "pocion": function (character, system, action) {
                    system.setQuality("vida", character.qualities.vida + 7);
                    system.setQuality("pocion_roja", 0);
                    system.write("<p>―Será mejor no arriesgar― piensas, así que destapas la poción y te la\
                                    tomas de un trago; al menos esta tiene buen sabor.</p>\
                                    <br>\
                                    <p>Nada más acabarla empiezas a notar cómo se cierran tus heridas y\
                                    tienes mucha más energía. Estás preparado para\
                                    <a href='tu_turno2' class='once'>el combate</a>.</p>");
                },
                "comidamal": function (character, system, action) {
                    system.setQuality("vida", character.qualities.vida + 3);
                    system.setQuality("comida_mal", 0);
                    system.write("<p>Piensas que va a ser mejor guardar la poción para cuando acabes el\
                                    combate, si sobrevives, por lo que sacas la comida que encontraste en\
                                    la montaña de huesos.</p>\
                                    <br>\
                                    <p>Aprovechas las partes que no tienen moho ―Pan para hoy y hambre para\
                                    mañana― dices ―Algo me dice que después de esto voy a pasarme días en el\
                                    baño, pero al menos me llena la barriga.― </p>\
                                    <br>\
                                    <p>No ha sido de especial ayuda, pero lo suficiente para estar en mejores\
                                    condiciones para <a href='tu_turno2'> el combate</a>.</p>");
                }
            }
        }
    ),

    tu_turno2: new undum.SimpleSituation(
        "",
        {
            enter: function (character, system, action) {
                if (character.qualities.vida > 0) {
                    system.write("<p><b>TU TURNO</b></p>");
                    system.write("<p class='transient'><a href='atacar2' >Atacar</a>: Escala con <b>fuerza</b></p>");
                } else {
                    system.write($("#mueres_manticora").html());
                }
            }
        }
    ),

    atacar2: new undum.SimpleSituation(
        "",
        {
            enter: function (character, system, action) {
                var dado = jsRandom.get(1, 20);

                if (character.qualities.bonf == 1) {
                    dado = dado + jsRandom.get(1, 4);
                    system.setQuality("bonf", 0);
                }

                system.setQuality("tirada", dado);
                if (dado == 1) {
                    system.write("<p>Has fallado el ataque estrepitosamente. Ahora eres <b>vulnerable</b></p>\
									<p> · Tirada: "+ dado + " </p>\
									<p> · Daño infligido: 0 </p><br>");
                    system.setQuality("vulnerable", 1);
                } else {
                    var ajuste = dado + character.qualities.fuerza;
                    if (character.qualities.espada_larga == 1) {
                        ajuste = ajuste + 4;
                    } else if (character.qualities.hacha == 1) {
                        ajuste = ajuste + 4;
                    } else if (character.qualities.dagas == 1) {
                        ajuste = ajuste + 2;
                    } else if (character.qualities.espada_corta == 1) {
                        ajuste = ajuste + 3;
                    } else if (character.qualities.espada_madera == 1) {
                        ajuste = ajuste + 1;
                    }

                    if (ajuste > 10) {		//ATAQUE EXITO						
                        var atq = jsRandom.get(1, 6);
                        if (dado >= 20) {	//CRÍTICO!! Tira otro dado
                            atq = atq + jsRandom.get(1, 6);
                            system.write("<p><b>CRÍTICO</b></p>")
                        }
                        system.write("<p>Has realizado un ataque con éxito<p>\
										<p> · Tirada: "+ dado + " </p>\
										<p> · Daño infligido: " + atq + "</p><br>");
                        system.setQuality("vida_adv", character.qualities.vida_adv - atq);//Bajar vida adversario
                    } else {
                        system.write("<p>Has fallado el ataque.</p>\
										<p> · Tirada: "+ dado + " </p>\
										<p> · Daño infligido: 0 </p><br>");
                    }
                }
                //system.setQuality("tirada", dado);
                system.write("<p class='transient'><a href='turno_def2' >Pasar turno</a></p><br>");
            }
        }
    ),

    turno_def2: new undum.SimpleSituation(
        "",
        {
            enter: function (character, system, action) {
                if (character.qualities.vida_adv > 0) {
                    system.write("<p><b>TURNO DEL RIVAL</b></p>");
                    system.write("<ul class='options'>\
									<li><a href='bloqueo2' >Bloquear</a>: Escala con <b>defensa</b></li>\
									<li><a href='esquive2' >Esquiva</a>: Escala con <b>agilidad</b>. Menos prob. de exito pero obtienes un ventaja</li>\
								</ul>");
                } else {
                    system.write($("#vences_manticora").html());

                    /*
                    system.write("<p>Enhorabuena, por haber salido victorioso puedes usar un punto de habilidad para aumentar uno de tus atributos:</p><br/>\
                                  <ul class='options'>\
                                    <li><a href='./aumenta_fuerza'>Aumentar fuerza</a></li>\
                                    <li><a href='./aumenta_agilidad'>Aumentar agilidad</a></li>\
                                    <li><a href='./aumenta_defensa'>Aumentar defensa</a></li>\
                                    <li><a href='./aumenta_sabiduria'>Aumentar sabiduría</a></li>\
                                    <li><a href='./aumenta_sigilo'>Aumentar sigilo</a></li>\
                                  </ul><br/>\
                                  <p>Por fin podrás salir de la cueva, no sin antes recoger <a href='recoge_remolacha'>aquello que venías buscando</a></p>");
                                  */
                    system.setQuality("vida_adv", 0);
                    system.setQuality("bonf", 0);
                    system.setQuality("vulnerable", 0);
                }
            }/*,
            actions: {
                "aumenta_fuerza": function(character, system, action) {
                    system.setQuality("fuerza", character.qualities.fuerza + 1);
                },
                "aumenta_agilidad": function(character, system, action) {
                    system.setQuality("agilidad", character.qualities.agilidad + 1);
                },
                "aumenta_defensa": function(character, system, action) {
                    system.setQuality("defensa", character.qualities.defensa + 1);
                },
                "aumenta_sabiduria": function(character, system, action) {
                    system.setQuality("sabiduria", character.qualities.sabiduria + 1);
                },
                "aumenta_sigilo": function(character, system, action) {
                    system.setQuality("sigilo", character.qualities.sigilo + 1);
                },


            }*/
        }
    ),

    bloqueo2: new undum.SimpleSituation(
        "",
        {
            enter: function (character, system, action) {

                var dado = jsRandom.get(1, 20);
                var ajuste = dado - character.qualities.defensa;

                if (character.qualities.vulnerable == 1 || ajuste > 8) {
                    var daño = jsRandom.get(1, 6);
                    system.setQuality("vida", character.qualities.vida - daño);
                    system.setQuality("vulnerable", 0);
                    system.write("<p>Has fallado el bloqueo.</p>\
									<p> · Tirada enemigo: "+ dado + " </p>\
									<p> · Daño recibido: "+ daño + "</p><br>");
                } else {
                    system.write("<p>Has bloqueado el ataque</p>\
									<p> · Tirada enemigo: "+ dado + " </p>\
									<p> · Daño recibido: 0 </p><br>");
                }
                system.write("<p class='transient'><a href='tu_turno2'>Tu turno</a></p><br>");
            }
        }
    ),

    esquive2: new undum.SimpleSituation(
        "",
        {
            enter: function (character, system, action) {

                var dado = jsRandom.get(1, 20);
                var ajuste = dado - character.qualities.agilidad;
                if (character.qualities.vulnerable == 1 || ajuste >= 6) {
                    var daño = jsRandom.get(1, 8);
                    system.setQuality("vida", character.qualities.vida - daño);
                    system.setQuality("vulnerable", 0);
                    system.write("<p>Has fallado el esquive</p>\
									<p> · Tirada enemigo: "+ dado + " </p>\
									<p> · Daño recibido: "+ daño + "</p><br>");
                } else {
                    system.write("<p>Has esquivado el ataque con éxito. Ganas una <b>bonificación</b> para tu siguiente ataque</p>\
									<p> · Tirada enemigo: "+ dado + " </p>\
									<p> · Daño recibido: 0 </p><br>");

                    system.setQuality("bonf", 1);
                }
                system.write("<p class='transient'><a href='tu_turno2' >Tu turno</a></p><br>");
            }
        }
    ),

    /*
    combate_manticora: new undum.SimpleSituation(
        "<h3>Combate</h3>\
        <ul class='options'>\
            <li><a href='espadacorta' class='once'>Usar la espada corta</a>.</li>\
            <li><a href='daga_arrojadiza' class='once'>Usar la daga arrojadiza</a>.</li>\
        </ul>",
        {
            enter: function(character, system, from){
                system.setQuality("progreso", character.qualities.progreso + 3);
            },
        }
    ),
    

    espadacorta: new undum.SimpleSituation(
        "<p>Tomas la espada corta que encontraste en la montaña de huesos y corres\
         para lanzarle al monstruo un tajo certero.</p>\
        <br>\
        <p><a href='continuar_espada' class='once'>Continuar combate</a>.</p>",
        {
            enter: function (character, system, action) {
                system.setQuality("espada_corta", 0);
            },
            actions: {
                "continuar_espada": function (character, system, action) {
                    var dado = jsRandom.get(1, 6);
                    system.setQuality("tirada", dado);
                    if (dado >= 3) {
                        system.write($("#vences_manticora").html());
                    } else {
                        system.write($("#mueres_manticora").html());
                    }
                }
            }
        }
    ),

    daga_arrojadiza: new undum.SimpleSituation(
        "<p>Coges la daga arrojadiza que encontraste entre los huesos, un ataque a\
         distancia puede ser una buena idea, pero tiene que acertar en el objetivo.</p>\
        <br>\
        <p><a href='continuar_daga' class='once'>Continuar combate</a>.</p>",
        {
            enter: function (character, system, action) {
                system.setQuality("daga_arr", 0);
            },
            actions: {
                "continuar_daga": function (character, system, action) {
                    var dado = jsRandom.get(1, 6);
                    system.setQuality("tirada", dado);
                    if (dado >= 4) {
                        system.write($("#vences_manticora").html());
                    } else {
                        system.write($("#mueres_manticora").html());
                    }
                }
            }
        }
    ),
    */

    recoge_remolacha: new undum.SimpleSituation(
        "<p>Tras haber derrotado a la mantícora, te diriges a donde se desprende ese brillo rojo intenso para\
        recoger la cura que te mandaron buscar.</p>\
        <br>\
        <p>―Por fin podré salir de aquí y recibir mi recompensa― exclamas</p>\
        <p>Arrancas la remolacha del suelo y comienzas a subir por las rocas hacia la grieta de la pared. A\
        medida que te acercas, notas cómo el aire que respiras es más puro y cómo tus ojos te suplican que \
        avances despacio para poder acostumbrarse de nuevo a la luz después de tanto tiempo en penumbra.</p>\
        <br>\
        <p>Es hora de poner <a href='ataquefinal' class='once'>rumbo al castillo</a> de los Dragonborn de\
        nuevo.</p>",
        {
            enter: function (character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
            }
        }
    ),
   
    ataquefinal: new undum.SimpleSituation(
        "<h1> ATAQUE FINAL </h1><p>Al salir de la caverna te encuentras con GAL, el asesino que contrató Felipo para impedirte lograr tu misión. En su rostro contemplas el miedo, como de haber observado tu enfrentamiento con la bestia. </p>\
        De pronto se da la vuelta y ante tu sorpresa se quita de su sucio dedo un anillo de tres rubíes. Recuerdas que es el mismo anillo que llevaba Felipo el día que lo viste en el castillo. Es imprescindible conseguirlo, pues es una prueba contra él. \
        GAL lanza el anillo a un lodazal para que se hunda en él y dice : \
        <p class= 'dialogo'>― Podrás vencerme a mi, pero jamás acabareis con Felipo. Aunque dudo que pueda contra mi un necio de tu calibre.</p>\
        <br>\
		<p class='transient'><a href='tu_turno4'>Atacar</a></p>",
        {     enter:function(character, system, action) 
            {
            system.setQuality("progreso", character.qualities.progreso+3);

            },
            exit:function(character, system, action) 
            {
            system.setQuality("vida_adv",20);

            } 
        }
    ),
    tu_turno4: new undum.SimpleSituation(
		"",
		{
			enter:function(character, system, action) {				
				if(character.qualities.vida > 0){
					system.write("<p><b>TU TURNO</b></p>");
					system.write("<p class='transient'><a href='atacar4' >Atacar</a>: Escala con <b>fuerza</b></p>");
				}else{
					system.write($("#mueres_monje").html());
				}
			}
		}
	),
	
	atacar4: new undum.SimpleSituation(
		"",
		{
			enter:function(character, system, action) {
				var dado = jsRandom.get(1,20);
					
					if(character.qualities.bonf == 1){
						dado = dado + jsRandom.get(1,4)
						system.setQuality("bonf", 0);
					}
					
					if(dado == 1){
						system.write("<p>Has fallado el ataque estrepitosamente. Ahora eres <b>vulnerable</b></p>\
									<p> · Tirada: "+ dado + " </p>\
									<p> · Daño infligido: 0 </p><br>");
						system.setQuality("vulnerable", 1);
					}else{
                        var ajuste = dado + character.qualities.fuerza;
                        if (character.qualities.espada_larga == 1) {
                            ajuste = ajuste + 4;
                        } else if (character.qualities.hacha == 1) {
                            ajuste = ajuste + 4;
                        } else if (character.qualities.dagas == 1) {
                            ajuste = ajuste + 2;
                        } else if (character.qualities.espada_corta == 1) {
                            ajuste = ajuste + 3;
                        } else if (character.qualities.espada_madera == 1) {
                            ajuste = ajuste + 1;
                        }

						if (ajuste > 10){		//ATAQUE EXITO						
							var atq = jsRandom.get(1,6);
							if(dado>=20){	//CRÍTICO!! Tira otro dado
								atq = atq + jsRandom.get(1,6);
								system.write("<p><b>CRÍTICO</b></p>")
							}
							system.write("<p>Has realizazo un ataque con éxito<p>\
										<p> · Tirada: "+ dado + " </p>\
										<p> · Daño infligido: " + atq + "</p><br>");
							system.setQuality("vida_adv", character.qualities.vida_adv-atq);//Bajar vida adversario
						}else{							
								system.write("<p>Has fallado el ataque.</p>\
										<p> · Tirada: "+ dado + " </p>\
										<p> · Daño infligido: 0 </p><br>");
							}
					}
					//system.setQuality("tirada", dado);
					system.write("<p class='transient'><a href='turno_def4' >Pasar turno</a></p><br>");
			}			
		}
	),
	
	turno_def4:new undum.SimpleSituation(
		"",
		{
			enter:function(character, system, action) {				
				if(character.qualities.vida_adv > 0){
					system.write("<p><b>TURNO DEL RIVAL</b></p>");
					system.write("<ul class='options'>\
									<li><a href='bloqueo4' >Bloquear</a>: Escala con <b>defensa</b></li>\
									<li><a href='esquive4' >Esquiva</a>: Escala con <b>agilidad</b>. Menos prob. de exito pero obtienes un ventaja</li>\
								</ul>");
				}else{
					system.write("<p> <a href='victoria4' class='once'> Continuar </a> </p> <br>");
					system.setQuality("vida_adv", 0);
					system.setQuality("bonf", 0);
					system.setQuality("vulnerable", 0);
				}
			},
		}
	),
	
	bloqueo4: new undum.SimpleSituation(
		"",
		{
			enter:function(character, system, action) {
				
				var dado = jsRandom.get(1,20) ;
				var ajuste = dado - character.qualities.defensa;
				
				if(character.qualities.vulnerable==1 || ajuste>12){
					var daño = jsRandom.get(1,6);
					system.setQuality("vida", character.qualities.vida - daño);
					system.setQuality("vulnerable", 0);
					system.write("<p>Has fallado el bloqueo.</p>\
									<p> · Tirada enemigo: "+ dado + " </p>\
									<p> · Daño recibido: "+ daño +"</p><br>");
				}else{
					system.write("<p>Has bloqueado el ataque</p>\
									<p> · Tirada enemigo: "+ dado + " </p>\
									<p> · Daño recibido: 0 </p><br>");
				}
				system.write("<p class='transient'><a href='tu_turno4'>Tu turno</a></p><br>");
			}
		}
	),
	
	esquive4: new undum.SimpleSituation(
		"",
		{
			enter:function(character, system, action) {
				
				var dado = jsRandom.get(1,20);
				var ajuste = dado - character.qualities.agilidad;
				if(character.qualities.vulnerable==1 || ajuste>=8){
					var daño = jsRandom.get(1,8);
					system.setQuality("vida", character.qualities.vida - daño);
					system.setQuality("vulnerable", 0);
					system.write("<p>Has fallado el esquive</p>\
									<p> · Tirada enemigo: "+ dado + " </p>\
									<p> · Daño recibido: "+ daño +"</p><br>");
				}else{
					system.write("<p>Has esquivado el ataque con éxito. Ganas una <b>bonificación</b> para tu siguiente ataque</p>\
									<p> · Tirada enemigo: "+ dado + " </p>\
									<p> · Daño recibido: 0 </p><br>");
					
					system.setQuality("bonf", 1);
				}
				system.write("<p class='transient'><a href='tu_turno4' >Tu turno</a></p><br>");
			}
		}
	),
    victoria4 : new undum.SimpleSituation(
       " <p>Acto seguido se lanza al ataque. Es tan veloz que no tienes tiempo de reaccionar y y consigue hacerle un corte en el brazo. Desenvainas tu espada mientras observas como el anillo, la única prueba contra\
         Felipo, se hunde en el lodo. El combate es trepidante, es sin duda el mejor de los asesinos contratados por Felipo, y tu te encuentras exhausto tras el combate con la bestia. Decides desequilibrarlo \
        y zambullarte en el lodazal para tratar de coger el anillo pero justo cuando un palmo separa tu dedo de este GAL agarra tu pierna y tira con fuerza. El lodo es denso y espeso y aprovechas que tu enemigo  \
        ha perdido su arma en él para darle una última oportunidad de vivir, con tu espada rozando su cuello. GAL desvía su mirada de la tuya para observar el anillo. Tu te giras para contemplarlo también y en ese despiste\
        aprovecha para coger su espada y blandirla contra ti. Consigues esquivarla y esta vez no concedes ninguna oportunidad. Le das muerte a tu enemigo. Rápidamente sumerges bien tu brazo en el lodo para sacar el anillo.</p>\
        <br>\
        <p class='transient'><a href='vueltacastillo' >Continuar</a></p><br>"
    ),
    vueltacastillo: new undum.SimpleSituation(
        "<h1>REGRESO AL CASTILLO</h1>\
        <p>Regresas al castillo por fin para entregarle la hierba al rey Astorias y obtener tu recompensa. Una vez allí eres muy bien recibido. En la sala del trono, un perplejo Felipo observa como entras con elegancia.\
        <ul class='options'>\
        <li><a href= 'noperdonar'>Decides mostrar el anillo para acusar a Felipo de intentar matarte</a></li>\
        <li><a href='perdonar'>Decides perdonarlo y guardar el anillo para venderlo por una gran cantidad de dinero</a></li>\
        </ul>\
         <br>",
        {
            enter: function (character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
            }
        }
    ),
    noperdonar: new undum.SimpleSituation(
        "<h1>REGRESO AL CASTILLO</h1>\
        <p>Al mostrar el anillo Felipo coge a su hermano y le pone una daga en el cuello para intentar escapar con su guardia personal. \
        Sin embargo sus deseos se ven frustrados cuando de una patada de su esposa en los miembros inferiores este cae al suelo y comienza a llorar. Más tarde es encerrado por traidor.\
        El Duque Agnar te da las gracias por tu labor y te entrega tu merecida recompensa.<p><b>FIN</b></p>",
        {
            enter:function(character, system, action) {
                system.setQuality("progreso", character.qualities.progreso+3);
            }
        }
    ),
    perdonar: new undum.SimpleSituation(
        "<h1>REGRESO AL CASTILLO</h1>\
        <p>El rey Artorias te da las gracias por tu labor. Felipo, \
        allí presente, es consciente de que le has perdonado la vida al no enseñar el anillo. Ve bondad en tí y con su mirada clavada en la tuya alza la voz:</p>\
        <p>―Oh majestad, dejadme recompensar yo mismo al valiente caballero.</p><br>\
        <p>El rey acepta su petición y juntos, Felipo y tú, abandonáis la sala del trono. Cuando estáis solos Felipo se disculpa por haber intentado matarte.</p>\
        <p>―Mis mas sinceras disculpas, no sabía que aún habia caballeros con bondad, pero era necesario acabar con este reinado. El rey Astorias es un despreciable gusano que\
        sólo piensa en si mismo, mientras su pueblo muere ante sus ojos.</p>\
        <p>―¿Qué podemos hacer? ― preguntas al instante</p>\
        <p>―Debemos deshacernos de esta monarquía podrida y repartir la remolacha por todo el pueblo para así curar a mi gente.</p><br>\
        <p>Juntos volvéis a la sala del trono y hacéis frente al rey como nunca nadie se atrevió. Sus guardas, hartos de él, deciden ayudaros así que no os es difícil encarcelar a los reyes. \
        Felipo será el nuevo rey de DragonBorn. Su primer acto como rey es elaborar una cura con la remolacha y repartirla a todos los habitantes enfermos de DragonBorn.</p><br>\
        <p><b>FIN</b></p>"
    ),
    }

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "seleccion_personaje";

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
		"Defensa", {priority:"0001", group:'stats'}
	),
	
	sabiduria: new undum.NumericQuality(
		"Sabiduría", {priority:"0001", group:'stats'}
	),
	
	sigilo: new undum.NumericQuality(
		"Sigilo", {priority:"0001", group:'stats'}
	),

    /*
	cuchillo: new undum.OnOffQuality(
        "Cuchillo", {priority:"0003", group:'objetos', onDisplay:"&#10003;"}
    ),
    */

    cuerda: new undum.OnOffQuality(
        "Cuerda", { priority: "0003", group: 'objetos'}
    ),

    monedas_oro: new undum.NumericQuality(
        "Monedas de oro", {priority: "0003", group: 'objetos', onDisplay:"&#10003;"}
    ),

	monedas_pl: new undum.NumericQuality(
        "Monedas de plata", {priority: "0003", group: 'objetos', onDisplay:"&#10003;"}
    ),

    espada_larga: new undum.OnOffQuality(
        "Espada larga", { priority: "0003", group: 'objetos' }
    ),

    hacha: new undum.OnOffQuality(
        "Hacha", { priority: "0003", group: 'objetos' }
    ),
    
    dagas: new undum.OnOffQuality(
        "Dagas", { priority: "0003", group: 'objetos'}
    ),

    espada_corta: new undum.OnOffQuality(
        "Espada corta", { priority: "0003", group: 'objetos'}
    ),

    espada_madera: new undum.OnOffQuality(
        "Espada de madera", { priority: "0003", group: 'objetos'}
    ),

    comida_mal: new undum.OnOffQuality(
        "Comida en mal estado", { priority: "0003", group: 'objetos'}
    ),

    pocion_azul: new undum.OnOffQuality(
        "Poción azul", { priority: "0003", group: 'objetos'}
    ),

    pocion_roja: new undum.OnOffQuality(
        "Poción roja", { priority: "0003", group: 'objetos'}
    ),

	tirada: new undum.NumericQuality(
        "Tirada", {priority:"0002", group:'dado', onDisplay:"&#10003;"}
    ),
    progreso: new undum.NumericQuality(
        "%", {priority:"0004", group:'progreso', onDisplay:"&#10003;"}

    ),
	
    name: new undum.OnOffQuality(
        "Nombre: "+"<b>" + nombre + "</b>",{priority:"0000", group:'stats'}
    ),

	bonf: new undum.OnOffQuality(
        "Bonificación", { priority:"0002", group:'stats', onDisplay:"&#10003;"}
    ),
	
	vulnerable: new undum.OnOffQuality(
        "Vulnerable", { priority:"0002", group:'stats', onDisplay:"&#10003;"}
    ),
	
	vida_adv: new undum.NumericQuality(
		"Vida",{ priority:"0005", group:'enemigo', onDisplay:"&#10003;"}
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
    progreso: new undum.QualityGroup('Progreso', {priority:"0004"}),
	enemigo:  new undum.QualityGroup('Enemigo', {priority:"0005"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
	character.qualities.vida = 20;
    character.qualities.fuerza = 0;
	character.qualities.agilidad = 0;
	character.qualities.defensa = 0;
	character.qualities.sabiduria = 0;
	character.qualities.sigilo = 0;
    character.qualities.monedas_oro = 0;
    character.qualities.monedas_pl = 0;
    character.qualities.cuerda = 0;
    //character.qualities.cuchillo = 0;
    character.qualities.espada_larga = 0;
    character.qualities.hacha = 0;
    character.qualities.dagas = 0;
    character.qualities.espada_corta = 0;
    character.qualities.espada_madera = 0;
    character.qualities.comida_mal = 0;
    character.qualities.pocion_azul = 0;
    character.qualities.pocion_roja = 0;
	character.qualities.tirada = 0;
    character.qualities.progreso = 0;

    system.setQuality("name",true);

	character.qualities.bonf = 0; //Bonificación combate
	character.qualities.vulnerable = 0;
	character.qualities.vida_adv = 0;
	

};
