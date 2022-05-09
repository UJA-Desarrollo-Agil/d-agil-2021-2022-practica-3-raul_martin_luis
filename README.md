# Desarrollo Ágil - Práctica 3 <a name="inicio"></a>
 - Alumnos: 
    - Luis René Domínguez Fuentes - 77689949C
    - Raúl Fernández Cobo - 49236738V
    - Martín Ángel Martín Caño - 77374371W
 - Curso: 3º Ingeniería Informática - Ingeniería del Software
 - Marzo de 2022

## Indice
* 1 [Descripción](#descripcion)
  * 1.1 [Introducción](#introduccion)
  * 1.2 [Argumento](#argumento)
  * 1.3 [Atributos del Personaje](#atributos)
  * 1.4 [Lista de situaciones](#situaciones)
* 2 [Trello](#trello)
  * 2.1 [Historias de usuario](#historias)
  * 2.2 [Historias primer sprint](#sprint1)
* 3 [Flujo Historia](#flujo)
* 4 [Sprint 1](#sprint1)
  * 4.1 [Sprint Review](#review)
  * 4.2 [Sprint Retrospective](#retrospective)
* 5 [Sprint 2](#sprint2)
  * 5.1 [Product Backlog Refinement](#pbr)
  * 5.2 [Sprint Review](#review2)
  * 5.3 [Sprint Retrospective](#retrospective2)

## 1 Descripción <a name="descripcion"></a>

### 1.1 Introducción <a name="introduccion"></a>

El objetivo de este proyecto es utilizar la metodología Scrum para crear una aventura conversacional. Para ello emplearemos distintas herramientas, como son Telegram, Trello y GitHub.historias

### 1.2 Argumento <a name="argumento"></a>

El Rey Artorias de la familia Dragonborn es el gobernante de una importante ciudad. Él y su esposa Jera Mug están terriblemente preocupados por la salud de su hijo Alduino, futuro heredero al trono. Llamó a todos los sabios de su territorio para encontrar una solución al problema, después de unos meses de búsqueda se encontró que una planta llamada Remolacha que tenía las propiedades curativas para sanar a su hijo. Pero era muy difícil de encontrar por lo que Artorias ha puesto una recompensa a quien vaya al templo de Ver-dulería, donde residen unos monjes expertos en hierbas y luego traer la planta al palacio. El mayor problema es que el hermano menor del rey, el Duque Paul Married quiere que su hermano no obtenga la preciada planta, para cortar su linaje y así ocupar el trono, por eso está poniendo todos los medios para parar a los que busquen la planta.

Tú, como intrépido aventurero, decides aceptar el encargo de su majestad e ir en busca de la famosa Remolacha.

### 1.3 Atributos del Personaje <a name="atributos"></a>

Atributos del personaje
* Fuerza
* Agilidad
* Defensa
* Sabiduría
* Sigilo

El valor de estos atributos estará establecido con valores del 1 al 5 y vendrán predefinidos según el arquetipo del personaje que elija el usuario al usuario al comienzo de la partida. Estos influirán cuando se realicen acciones. 

En las acciones se harán “tiradas de suerte”, en las que se generará un número aleatorio entre 1 y 10 o entre 1 y 20 (aún por definir), y se le sumará la puntuación de un atributo en concreto. Por ejemplo, si el jugador tiene que saltar de una plataforma a otra, el resultado de esta acción dependerá del número aleatorio más el valor del atributo “Agilidad” de su personaje. Cuanto más alto sea el resultado final, más probable es que realice la acción con éxito.

Por otro lado, los combates dependen de “Fuerza” y “Defensa”. O si el jugador quiere averiguar si le están engañando, entrará en juego la “Sabiduría”.

### 1.4 Lista de situaciones <a name="situaciones"></a>
A continuación se muestra un listado inicial de situaciones que se nos han ocurrido. Es posible que varíen a lo largo del desarrollo.
* Palacio
* Viaje
* Templo
* Caverna
   * Entrada
   * Gruta
   * Foso
   * Riada
   * Lago
   * Cementerio
   * Guarida monstruo
* Ataque final
* Final
   * Bueno
   * Malo

## 2 Trello <a name="trello"></a>
Nuestro [tablero](https://trello.com/b/TORt52NH/practica3) de Trello.

### 2.1 Historias de Usuario <a name="historias"></a>
Por último, se muestran las historias de usuario que inicialmente hemos añadido para la primera iteración.

![trello1](https://user-images.githubusercontent.com/99320995/159535722-0d942cf2-cfaa-4caa-b388-25a84a8f10c0.jpg)

![trello2](https://user-images.githubusercontent.com/99320995/159535854-c427441e-cdd0-49e3-ad62-4b8a91c14773.jpg)

![trello3](https://user-images.githubusercontent.com/99320995/159535915-0acce79f-f77d-49a2-bef7-9e6e0ba95f08.jpg)

![trello4](https://user-images.githubusercontent.com/99320995/159535937-1cb8006d-7039-48be-b8e8-c41f2ee90308.jpg)

![trello5](https://user-images.githubusercontent.com/99320995/159535971-fce8b026-4632-40ba-a9c7-7046a92ffecb.jpg)

![trello6](https://user-images.githubusercontent.com/99320995/159535987-4a33d6ce-987c-4b2c-b30d-2721e8aaf5e3.jpg)

![trello7](https://user-images.githubusercontent.com/99320995/159536015-a0ef701f-41f1-4b91-9440-6005dfee5394.jpg)

![trello8](https://user-images.githubusercontent.com/99320995/159536033-494ef07f-5312-4222-8f0d-8cbbe9eba8e5.jpg)

![trello9](https://user-images.githubusercontent.com/99320995/159536048-ab3deda4-cd64-4000-b3c4-1f33c1b93fd6.jpg)

![trello10](https://user-images.githubusercontent.com/99320995/159536061-4f2a36fd-dc66-4a2f-a1f8-f4afa4cc4d00.jpg)

![trello11 (1)](https://user-images.githubusercontent.com/99320995/159536692-4ab95b36-0e53-4e89-8681-9183e5b28f50.jpg)

![trello12 (2)](https://user-images.githubusercontent.com/99320995/159536715-bb5096ff-cd34-4b69-a545-798bb0d0d896.jpg)

### 2.2 Historias primer sprint <a name="sprint1"></a>
Para el primer sprint hemos seleccionado las historias: 1, 2, 3, 4, 8, 11 y 13. Porque son consideradas como innegociables, de ahí que tengan 20 de valor. Queríamos asegurarnos de que estuvieran hechas y en caso de que hubiera algún tipo de dificultad que imposibilitase su realización en el primer stprint, poder tener el segundo sprint para terminarlas. Por suerte no ha sido así y hemos hecho todas ellas.

Las historias que reescribimos en el Refinement fueron las dos primeras. Las modificamos para que tuvueran la lista de partes que debía hacer cada miembro.

![h1](https://user-images.githubusercontent.com/99320995/164040289-c0cf6dc0-06f6-41fa-bcc0-9abfd7c24dcd.png)

![h2](https://user-images.githubusercontent.com/99320995/164040310-5e8cc135-0e82-4097-82b4-cbe4993517db.png)


## 3 Flujo de la historia <a name="flujo"></a>
### 3.1 Introducción e inicio historia (Luis)
![Flujo_Historia](https://user-images.githubusercontent.com/99320995/163836123-e2ef9109-1a8d-4fbb-8fe5-00383e984fab.jpeg)
### 3.2 Continuación historia. Templo (Raúl)
![Copia de Flujo_Historia](https://user-images.githubusercontent.com/67553838/163837059-61336455-0afb-4341-9002-522cd1669907.jpeg)
### 3.3 Continuación historia. Caverna(Martín)
![Diagrama de flujo 3](https://user-images.githubusercontent.com/99320929/163862741-a8730e65-13cc-4d66-ae89-1dca89796179.png)
### 3.4 Continuación historia y fin (Raúl)
![FinalHistoria](https://user-images.githubusercontent.com/67553838/163837614-8da38dce-7318-4ce3-b17b-2c3b5b564c57.jpeg)

## 4 Sprint 1 <a name="sprint1"></a>
### 4.1 Sprint Review <a name="review"></a>
Hemos completado todas las historias de usuario que propusimos para este sprint. A continuación se muestra una tabla con observaciones sobre algunas de ellas.

![sprint_review](https://user-images.githubusercontent.com/67553838/163848492-b23e00ff-c62f-45fe-a465-85bcb2363196.png)

### 4.2 Sprint Retrospective <a name="retrospective"></a>
Las conclusiones a las que hemos llegado en la Sprint Retrospective son las siguientes: 

En esta reunión hemos concluido que la dificultad de escribir una historia por partes entre varias personas y de manera no simultánea, es mucho mayor que hacerlo como proyecto individual. Se complica el hacer que la historia sea coherente cuando no sabes que está escribiendo la otra persona, ni la forma de redactarlo. Y también tener en cuenta la situación del personaje a la hora de retomar la historia de otro compañero. Al final, al juntar las historias, hemos dedicado tiempo para revisar la historia completa y rectificar ciertas partes para que esta sea coherente. Para solucionar este problema creemos que es conveniente abordar la creación de la historia en reuniones conjuntas y luego pasarla a Undum de manera individual.

También hemos coincidido en que la herramienta Telegram, vinculada con Trello y GitHub, es muy útil y facilita mucho la comunicación ya que en todo momento conocíamos el estado del proyecto.

La herramienta Trello también nos ha resultado de mucha utilidad ya que, al tratarse de un proyecto algo más grande de lo habitual, poder dividirlo en distintas tareas y saber en qué estado estaba cada una, nos permitía saber qué era lo próximo que necesitábamos hacer para completar el sprint.

## 5 Sprint 2 <a name="sprint2"></a>

Captura de pantalla del tablero de trello tras acabar el sprint.

![image](https://user-images.githubusercontent.com/67553838/167464811-973a9eed-aa32-499f-ba44-5273f2a07be1.png)


### 5.1 Product Backlog Refinement <a name="pbr"></a>
Cuando surgieron las nuevas historias de usuario del día 27 tomamos notas de los requisitos y evaluamos las tarjetas a través del planning poker:

![hu_7](https://user-images.githubusercontent.com/67553838/167461914-70c5e57f-ea7a-4ea7-9e89-15652c94d7a3.jpg)
![hu_18](https://user-images.githubusercontent.com/67553838/167461931-8fdcebc3-7543-4af4-9ac5-9d8bb4a7049d.jpg)
![hu_19](https://user-images.githubusercontent.com/67553838/167461941-23bfd4e4-a17e-4e82-a413-8d75d6d729ee.jpg)
![hu_20](https://user-images.githubusercontent.com/67553838/167461947-20e96973-bf7f-4681-a831-e2c268871ea2.jpg)

También añadimos la siguiente historia de usuario al sprint

![Nuevo proyecto (17)](https://user-images.githubusercontent.com/67553838/167464144-a99b5bfe-3502-49c7-bf28-5329b44285e6.jpg)


De todas ellas, las únicas que pasaron al Sprint Backlog fueron la 20 y la 14, porque teniendo en cuenta que teníamos que implementar el sistema de combate y la elección de arquetipos al comenzar la partida, no queríamos sobrecargarnos con más trabajo. 

### 5.2 Sprint Review  <a name="review2"></a>

#### Historias de usuario completadas

![Nuevo_proyecto_15](https://user-images.githubusercontent.com/67553838/167462513-5b78aeaf-eacd-42f0-854c-50cd7a3c1a43.jpg)

#### Historias de usuario no completadas
![Nuevo proyecto (16) (1)](https://user-images.githubusercontent.com/67553838/167462838-57f2fd40-84b2-443f-b8cb-cb1e43754cdd.jpg)

En esta imagen se puede observar el menú de selección de personaje. A la izquierda se puede ver el controlador de la música

![Nuevo_proyecto_13](https://user-images.githubusercontent.com/67553838/167462744-a9e25312-d255-4a30-937e-9c44f73dc107.jpg)

En esta otra imagen se puede observar como al seleccionar un personaje se modifican los atributos de acuerdo con este.

![Nuevo_proyecto_14](https://user-images.githubusercontent.com/67553838/167463314-da25ccab-5eb4-402f-b2f9-f1ccba8734e9.jpg)




### 5.3 Sprint Retrospective  <a name="retrospective2"></a>

Las conclusiones a las que hemos llegado en la Sprint Retrospective son las siguientes:

Hemos seguido con la misma metodología. Vigilando más el tablero de Trello y la actividad de cada uno.

Durante este sprint hemos tratado de resolver algunos de los problemas que detectamos en el anterior sprint retrospective. Hemos trabajado individualmente en aquellas tareas que lo permitían y juntos en las que era necesario. Por ejemplo Luis, tras diseñar el sistema de combate, ayudó al resto a implementarlo en sus partes, lo cual aceleró bastante el proceso de desarrollo.

También la selección de personaje influye en el sistema de combate, por lo que Martín y Luis implementaron los respectivos cambios a las acciones de ataque, bloqueo y esquive. También un pequeño sistema para mejorar las cualidades del personaje al ganar una batalla, así se añade cierto grado de dificultad y más jugabilidad e interacción, para que no sea todo leer y cambiar de situaciones.

Hemos añadido música, fotos y otros elementos que mejoran la inmersión del jugador y hacen la experiencia más entretenida.




[Subir](#inicio)
