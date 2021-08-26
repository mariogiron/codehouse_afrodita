## breakingBad

 1 - Crear rutas
           - '/home' vamos a cargar la listaPersonajes
           -  'character/1' vamos a cargar la vista individual de personaje. (Single)

 2 - Crear modelo y servicios asociados a los characters.
 3 - Crear un componente para la card (thumbnail) del personaje y pasarle la informacion necesaria desde el componente que se cargue (¿donde se debe cargar este componente? ¿necesita ruta?)
 4 - hacer petición de todos los personajes y pintarlos en compomente listaPersonajes
 5 - boton de ver personaje que me lleve a la ruta correspodiente y pida el servidor los datos de ese personaje.

 // --- //

6 - buscador por nombre en el header
7 - buscador por categoria (Ojo el selector de categorias debe llenarse del los datos de la api ¿que solución podeis aportar para que el selector tenga solo las categorias necesarias?).

// --- //

8 - Montar un paginacion, solo para la vista completa, no para busquedas. Quiero mostrar de 10 en 10 personas (61 personajes).
 Pistas: la consulta getAll me devuelve el total de personajes, con eso puede calcular el numero de paginas por lo tanto el numero de botones, cada boton hará una consulta en el servicio paginando.


