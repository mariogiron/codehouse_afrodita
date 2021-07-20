const router = require('express').Router();

const { getAll } = require('../models/product.model');

router.get('/', (req, res) => {
    // 1 - Recuperar todos los productos de la BD X
    // 2 - Pasar los productos recuperados a la vista
    // 3 - Dentro de la vista iterarlos para mostrarlos

    getAll(1, 10)
        .then(products => res.render('products/index', { products }))
        .catch(error => console.log(error));
});

router.get('/new', (req, res) => {
    res.render('products/new');
});

router.get('/edit', (req, res) => {
    res.render('products/edit');
});

router.get('/remove', (req, res) => {
    res.render('products/remove');
});

router.post('/create', (req, res) => {
    console.log(req.body);
    res.send('Creamos el producto');
});

module.exports = router;