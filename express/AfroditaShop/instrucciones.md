GET localhost:3000/api/products/cat/NBCAT
GET localhost:3000/api/products/cat/moda
GET localhost:3000/api/products/cat/oficina

- Recuperar todos los productos con categoria=NBCAT

1 - Generar la RUTA -> ¡Qué funcione!
2 - Método en el modelo para recuperar los productos por categoria
    - Pensar la query - ¡Probar en el workbench!
    - Pensar qué parámetro/s le paso al método
    - Ejecutar la query y resolver con el resultado -> ¿Devuelvo un array o devuelvo un objeto?
3 - Dentro de la ruta llamamos al método generado -> ¡Cómo le paso la categoría!


DELETE localhost:3000/api/products/IDPROD
(El nombre de la función en el modelo no puede ser delete - Usad remove)

# TAREAS 

## Crear las rutas siguientes

GET localhost:3000/products
    VISTA: products/index.pug

GET localhost:3000/products/new
    VISTA: products/new.pug

GET localhost:3000/products/edit/PRODUCTID
    VISTA: products/edit.pug
    1 - Antes de renderizar la vista tenemos que recuperar el producto a editar
    2 - Renderizar la vista y pasarle el producto
    3 - Generar el formulario dentro de la vista
        - Dentro del formulario debemos incorporar los datos del producto a editar

    
GET localhost:3000/products/remove
    VISTA: products/remove.pug