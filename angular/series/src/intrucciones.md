## Instrucciones

  - Rutas:

  /series -> listaSeries  (Ojo! en este componente también va haber estar el componente filtros donde van a estar los filtros que hemos dispuesto en el dibujo.)
  
  /series/IDSERIE -> DetalleSeries

  1 - Creación de rutas y componentes (hasta descritos, a lo mejor creamos más).

  2 - ¿Necesitamos interfaces ? ¿Dónde las genero? ¿Como los relaciono con los datos?

  3 - Generamos un servicio con un metodo que nos recupere todas las series.

  4 - En la listaSeries recuperamos todas las series y las mostramos de manera BONITA.

  5 - generamos el componente filtros y pensamos en la comunicacion de dicho componente.

//-- para finde --//

/series/8
/series/1
/series/3

Voy a cargar DetalleSeries 

  1 - Recuperar el valor de la ruta variable URL (ActivatedRoute)

  2 - Crear en el servicio un metodo que me retorne UNA UNICA sere por ID.

  3 - Dentro del detalle mostrar dicha serie con la maquetacion que querais.

  4 - Desde listado de series poner un boton que nos permita navegar hasta al ruta de series por id, cada card tendra su boton y su id.

  5 - Crear componente temporadas, con texto plano y generar un par de botones que permitan navegar entre temporas y personajes dentro del detalle serie.


-------

/series/1/personajes
/series/8/personajes
/series/3/personajes


  1 - creamos el componente listaPersonajes

  2 - Generamos un ruta hija a partir de /series/:idserie

  3 - Creeis un nuevo servicio para los personajes y separarlo del de series.
  
  4 -  Metodo en el servicicio para obtener los personajes por id de serie. Los personajes de cada serie

  5 - Dentro de listapersonajesComponent necesito recuperar el ID de la serie 
(ActivatedRoute  + parent)


//filtros


