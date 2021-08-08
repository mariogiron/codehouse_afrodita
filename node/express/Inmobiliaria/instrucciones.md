1 - Generar el MODELO
    property (street (STRING), number (NUMBER), cp (NUMBER), floor, rooms, bathrooms, sale (BOOLEAN), price(NUMBER), created_at (DATE))


2 - Creación de las rutas

POST localhost:3000/api/properties
    - Recibe a través del body todos los datos de la nueva casa

    Persona.create(req.body)

    - Inserta a través del método **create** esos datos en la BD
    - Responde con la nueva casa creada

GET localhost:3000/api/properties
    - Recupera todas las casas (FIND)
    - Devuelve un JSON con todas las casas

**¡¡¡Qué las rutas funcionen!!**
**¡¡Qué todas las rutas respondan algo!!**

GET localhost:3000/api/properties/60f9484785dd63627a223280
    - Recuperar una property a través de su ID (findById)
    - Devolver un JSON con la property seleccionada 


PUT localhost:3000/api/properties/60f9484785dd63627a223280
    - Todos los datos de la edición los recibimos en req.body

DELETE localhost:3000/api/properties/60f9484785dd63627a223280

GET localhost:3000/api/properties/rango/20000/50000
    - Función estática que nos devuelva las propiedades entre esos dos precios
        - Hay que cerciorarse que recuperamos bien los params
        - Property.range(MIN, MAX)


GET localhost:3000/properties/new
    - Renderiza la vista new
    - Dentro de la vista mostramos un formulario con los campos
    <form action="URL DONDE LO ENVIAMOS" method="POST">

POST localhost:3000/properties/create
    - req.body