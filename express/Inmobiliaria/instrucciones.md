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

GET localhost:3000/api/properties/PROPERTY_ID
    - Recuperar una property a través de su ID (findById)
    - Devolver un JSON con la property seleccionada 