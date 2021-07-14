const router = require('express').Router();

// TODO: Extraer solo las funciones que vamos a usar (destructuring)
const productModel = require('../../models/product.model');

router.get('/', (req, res) => {
    // 1 - Recuperar los productos de la base de datos
    // TODO: opción async-await
    productModel.getAll()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err.message);
        });
    // 2 - Enviar en formato JSON los productos al cliente
});

















router.post('/', (req, res) => {
    res.end('Ruta POST /api/products');
});

router.put('/', (req, res) => {
    res.end('Ruta PUT /api/products');
});

router.delete('/', (req, res) => {
    res.end('Ruta DELETE /api/products');
});

module.exports = router;