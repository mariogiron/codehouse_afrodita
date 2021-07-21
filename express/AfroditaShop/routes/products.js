const router = require('express').Router();

const { getAll, create, getById, update, remove } = require('../models/product.model');

router.get('/', (req, res) => {
    // 1 - Recuperar todos los productos de la BD X
    // 2 - Pasar los productos recuperados a la vista
    // 3 - Dentro de la vista iterarlos para mostrarlos

    const page = req.query.page || 1;

    getAll(page, 5)
        .then(products => res.render(
            'products/index',
            { products, page: parseInt(page), message: req.flash('message') }
        ))
        .catch(error => console.log(error));
});

router.get('/new', (req, res) => {
    res.render('products/new');
});

router.get('/edit/:productId', (req, res) => {
    getById(req.params.productId)
        .then(product => {
            res.render('products/edit', { product });
        })
        .catch(error => console.log(error));
});

router.get('/remove/:productId', (req, res) => {
    remove(req.params.productId)
        .then(result => res.redirect('/products'))
        .catch(error => console.log(error));
});

router.get('/:productId', (req, res) => {
    getById(req.params.productId)
        .then(product => res.render('products/view', { product }))
        .catch(error => console.log(error));
});

router.post('/create', (req, res) => {
    create(req.body)
        .then(result => {
            req.flash('message', 'Se ha creado correctamente el nuevo producto');
            res.redirect('/products')
        })
        .catch(error => console.log(error));
});

router.post('/update', (req, res) => {
    // ¿Qué vamos a hacer aquí? ejecutar método update del modelo
    // ¿Qué datos tengo disponibles? req.body(name, description, price, category, productId)
    // ¿Qué datos necesito? {name, description, price, category} + id
    update(req.body.productId, req.body)
        .then(result => res.redirect('/products'))
        .catch(error => console.log(error));
});

module.exports = router;

// TODO: fetch sobre el API