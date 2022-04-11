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
    templo: new undum.SimpleSituation(
        "<h1>EL TEMPLO</h1>\
        <p>Tras día y medio de travesía, el templo de Ver-duleria se deja ver al fin. Este se encuetra en lo alto de una colina\
        rodeado por un bosque de escasos árboles. Distingues un pequeño sendero que parece dirigirse al templo y decides tomarlo. Se trata de un\
        pequeño edificio de dos plantas hecho de piedra marrón desgastada. En la entrada te recibe un monje vestido con un hábito marron y blanco.\
        - Bienvenido joven viajero, a que se debe su visita?</p>\
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
        "<h1>EL TEMPLO</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>Tras explicar la situacción con gusto el monje accede a llevarte hacia \
        donde se encuentra la Remolacha, en un sendero que rodea el templo. A mitad de camino\
        el monje se detiene y parece no saber el camino a tomar, desconcertado le preguntas:\
        - ¿Sabe usted por donde ir?\
        - Sí, disculpa, mi memoria ya no es lo que era, es por aquí\
        El camino es algo laberíntico, y trás un rato detrás del monje empiezas a sospechar\
        que estáis caminando en círculos. De pronto el monje se agacha y arranca una hierba.\
        - Al fin, aquí está la preciada Remolacha\
        El monje te entrega la planta.\
        <a href ='./examinar'>Examinar planta(Hacer tirada)</a>\
        (Si tienes la sabiduria necesaria )Al examinar la planta te das cuenta de que es una planta común y la has visto varias veces\
        en el camino, el monje te está engañando, ¡quizás sea un impostor!\
        No te queda otra que <a href = 'combatemonje'> atacarle </a> </p>",
        {
            actions: 
            {
                'examinar':function(character, system, action){
                    system.write("<p>xxx</p>");
                    var dado = jsRandom.get(1,10);
                    
									if ((dado+character.qualities.sabiduria) > 0){
										system.setQuality("tirada", dado);
										system.write("<p>xxx</p>");
									}else{
										system.setQuality("stamina", dado);
										system.write("<p>xxx</p>");
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
       que has traído no es la Remolacha sino una planta muy común. El enfado del Duque es tal, que ordena tu decapitación pública inmediatamente... FIN DEL JUEGO  \ </p>"

    ),
        //Situación en la que no le explicas al monje y decides pasar
    noexplicar: new undum.SimpleSituation(
        "<h1>EL TEMPLO</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>Decides entrar en el templo sin el consentimiento del monje, \
        no te fías ni un pelo de él. Este se ve reacio a dejaros entrar y de pronto\
        saca una larga y afilada espada. Al moverse bruscamente, un colgante asoma de su hábito. LLeva \
        la marca de la flor Lis. La misma que llevaba Felipo. Te enzarzas en un duro <a href='combatemonje'>combate</a> con él, resulta ser un asesino bien entrenado</p>"
    ),

    //Combate con el monje(falta escribirlo)
    combatemonje: new undum.SimpleSituation(
        "<h1>COMBATE</h1>\
        <img src='media/games/tutorial/woodcut1.png' class='float_right'>\
        <p>(pelea_monje)El monje se deshace de su vestimenta, resulta ser un asesino contratado por Felipo para evitar que consigas la planta. Es musculoso y maloliento asesino desenvaina su larga espada y espera tu ataque.\
         (vives) Le arrojas tu cuchillo al brazo que sujeta la espada consiguiendo que este la suelte. Corres a cogerla y consigues esquivar un puñetazo. Ya tienes su espada, él se arranca el \
         cuchillo que le has lanzado del brazo y te lo lanza rápidamente. Recibes un corte en el brazo pero cuando menos se lo espera su vientre es atravesado por su propia espada empuñada por ti.\
         (mueres) Le arrojas tu cuchillo al brazo que sujeta la espada consiguiendo que este la suelte. Corres a cogerla pero el asesino te derriba de un puñetazo. Acto seguido recoge su espada y la clava en tu pecho. \
        <a href='aftercombate'>Siguiente pagina</a></p>",
        {
			enter:function(character, system, action) {
				system.write($("#pelea_monje").html());
                var dado = jsRandom.get(1,10);
					if(dado + character.qualities.cuchillo > 5){
						system.write($("#vives").html());
                        system.write("<p><a href='aftercombate'>Siguiente pagina</a></p>");
						system.setQuality("cuchillo", character.qualities.cuchillo-1);
						system.setQuality("vida", character.qualities.vida-3);
						
					}else{
						system.write($("#mueres").html());
					}
				}
		}
    ),

    aftercombate: new undum.SimpleSituation(
        "<h1>EL TEMPLO</h1>\
        <p>Tras derrotar al asesino, observas una columna de humo proveniente del interior del templo. Se trata de unos hombres que están\
        quemando toda la información relacionada con la planta. Te apresuras pero para cuando llegas los hombres han huido. La sala resulta ser una biblioteca antigua\
        con una gran fogata en el centro donde están quemándose <a href= './libros'>los libros</a>. Observas una <a href ='./ventana'>ventana</a> en la parte derecha de la sala. </p>\
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
        "<p>Al salir de la caverna te encuentras con GAL, el asesino que contrató Felipo para impedirte lograr tu misión. En su rostro contemplas el miedo, como de haber observado tu enfrentamiento con la bestia. </p>\
        De pronto se da la vuelta y ante tu sorpresa se quita de su sucio dedo un anillo de tres rubíes. Es el mismo anillo que lleva Felipo. Es imprescindible conseguirlo, pues es una prueba contra él. \
        GAL lanza el anillo a un lodazal para que se hunda en él y dice : \
        - Jamás conseguiras el anillo\
        <p>Acto seguido se lanza al ataque. Es tan veloz que no tienes tiempo de reaccionar y y consigue hacerle un corte en el brazo. Desenvainas tu espada mientras observas como el anillo, la única prueba contra\
         Felipo, se hunde en el lodo. El combate es trepidante, es sin duda el mejor de los asesinos contratados por Felipo, y tu te encuentras exhausto tras el combate con la bestia. Decides desequilibrarlo \
        y zambullarte en el lodazal para tratar de coger el anillo pero justo cuando un palmo separa tu dedo de este GAL agarra tu pierna y tira con fuerza. El lodo es denso y espeso y aprovechas que tu enemigo  \
        ha perdido su arma en él para darle una última oportunidad de vivir, con tu espada rozando su cuello. GAL desvía su mirada de la tuya para observar el anillo. Tu te giras para contemplarlo también y en ese despiste\
        aprovecha para coger su espada y blandirla contra ti. Consigues esquivarla y esta vez no concedes ninguna oportunidad. Le das muerte a tu enemigo. Rápidamente sumerges bien tu brazo en el lodo para sacar el anillo.</p>\
        <br>\
		<p class='transient'><a href='vueltacastillo'>Siguiente Página</a></p>",
    ),
    vueltacastillo: new undum.SimpleSituation(
        "<p>Regresas al castillo por fin para entregarle la hierba al Duque y obtener tu recompensa. Una vez allí eres muy bien recibido. En la sala del trono, un perplejo Felipo observa como entras con elegancia.\
        <a href= 'noperdonar'>Decides mostrar el anillo para acusar a Felipo de intentar matarte</a>\
        <a href='perdonar'>Decides perdonarlo y guardar el anillo para venderlo por una gran cantidad de dinero</a>"
    ),
    noperdonar: new undum.SimpleSituation(
        "<p>Al mostrar el anillo Felipo coge a su hermano y le pone una daga en el cuello para intentar escapar con su guardia personal. \
        Sin embargo sus deseos se ven frustrados cuando de una patada de su esposa en los miembros inferiores este cae al suelo y comienza a llorar. Mas tarde es encerrado por traidor.\
        El Duque Agnar te da las gracias por tu labor y te entrega tu merecida recompensa.<p><b>FIN</b></p>",
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
    perdonar: new undum.SimpleSituation(
        "<p>El Duque Agnar te da las gracias por tu labor y te entrega una merecida recompensa. Felipo, \
        que aún desconfía de ti, ordena que te maten nada mas salir del castillo. Allí, sus guardias te pillan desprevenido\
        y consiguen derrotarte sin mucho esfuerzo.</p> <p><b>FIN DEL JUEGO</b></p>"
    ),
    }

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "templo";

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
        "", {priority:"0004", group:'progreso', onDisplay:"&#10003;"}
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
