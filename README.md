Evaluacion final del módulo 2

El ejercicio consiste en desarrollar una aplicación web que contiene un listado de personajes de Disney todo el
planeta, que nos permite marcar y desmarcar los personajes como favoritos y guardarlos en localStorage.
La página también tiene una parte de maquetación con HTML y Sass, pero os recomendamos dedicar el
esfuerzo a la maquetación una vez terminada la parte de JavaScript, ya que los criterios de evaluación están
relacionados con esta última.
Vamos de definir los distintos hitos del ejercicio:
1. Estructura básica
En primer lugar hay que realizar una estructura básica del HTML sobre este modelo. No hay que preocuparse
por las medidas, colores ni tipografía hasta un hito posterior.
La aplicación de búsqueda de personajes de Disney consta de dos partes:
+ Un listado de resultados de búsqueda donde aparece la imagen del personaje de Disney y el nombre.
+ Un campo de texto y un botón para buscar un personajes de Disney por su título.
2. Mostrar listado
Mostraremos una lista de tarjetas con los resultados de los personajes de Disney que obtendremos del API de
la página disneyapi (si quieres, puedes consultar la documentación del API en esta otra página).
Os recordamos los pasos para mostrar un listado:
+. Comenzaremos copiandonos los datos del API (el array de objetos) a una variable de nuestro código
JavaScript y generando el HTML para un único personaje.
+ Después, añadiremos un bucle para que se genere el HTML de cada personaje que hay en el array.
+ Implementamos el código necesario para obtener el array de personajes desde el API con un fetch().
Tener en cuenta lo siguiente:
En el caso de que alguno de los personajes de Disney que devuelve el API no tenga imagen, hay que
mostrar una imagen de relleno. Podemos crear una imagen de relleno con el servicio de
placeholder.com donde en la propia URL indicamos el tamaño, colores, texto:
https://via.placeholder.com/210x295/ffffff/555555/?text=Disney
Para pintar la información en la página se puede elegir entre hacerlo de forma básica con innerHTML o
manipulando de forma avanzada el DOM.
3.Favoritos
Una vez aparecen los resultados, la usuaria puede indicar cuáles son sus personajes de Disney favoritos. Para
ello, al hacer clic sobre la tarjeta de un personaje animado debe pasar lo siguiente:
El color de fondo y el del texto se intercambian, indicando que es un personaje favorito.
Hay que mostrar otro listado en la parte izquierda de la pantalla, debajo del formulario de búsqueda,
con los personajes favoritos. Os recomendamos crear un variable o constante de tipo array en JS
para almacenar los personajes favoritos.
Almacenamiento local
Hay que almacenar el listado de favoritos en el localStorage. De esta forma, al recargar la página el listado de
favoritos se debe mostrarse.
5. BONUS: Búsqueda
Al hacer clic sobre el botón de Buscar, la aplicación debe conectarse a Disney API y puedes consultar
su documentación aquí.
Os recomendamos echar un vistazo al JSON que devuelve una petición de búsqueda para ver
qué datos son los que necesitamos: https://api.disneyapi.dev/character?
pageSize=50&name=Mickey Mouse
Por cada personaje de Disney contenido en el resultado de la búsqueda hay que pintar una tarjeta
donde mostramos una imagen del personaje y el nombre (igual que en el listado inicial).
Los personajes favoritos deben seguir apareciendo a la izquierda aunque la usuaria realice otra
búsqueda. Es decir, el listado de favoritos se debe mantener entre búsquedas.
6.BONUS: Borrar favoritos
Como bonus, os proponemos la opción de borrar favoritos. Al hacer clic sobre el icono de una 'x' al lado de
cada favorito, hay que borrar el favorito clicado de la lista y del localStorage.
Para terminar de rematar nuestra app de personajes de Disney, nos gustaría poder añadir/quitar como
favorito al hacer clic sobre un personaje del lado de la derecha. Y que, si realizamos una nueva búsqueda y
sale un personaje que ya es favorito, aparezca ya resaltado en los resultados de búsqueda (con colores de
fondo y texto intercambiados).
Y ya sería fantástico si al final de la lista de favoritos hay un botón para borrar todos los favoritos a la vez.
7. BONUS: Afinar la maquetación
Una vez terminada la parte de la interactividad de la página, podemos centrarnos en la parte de maquetación
donde tenéis libertad para decidir los estilo. En cualquier caso os dejamos una propuesta gráfica en los
screenshots anteriores
