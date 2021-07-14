const router = require('express').Router();

router.get('/list', (req, res) => {
    console.log(req.query);
    console.log('LIST', req.unixTime);
    res.end('FUNCIONA LIST');
});

router.get('/:productId', (req, res) => {
    console.log(req.params);
    res.end('Recuperamos el producto con ID: ' + req.params.productId);
});

// POST http://localhost:3000/products/edit
router.post('/edit', (req, res) => {
    res.end('Edición de productos');
});

// PUT http://localhost:3000/products
router.put('/', (req, res) => {
    res.end('Petición PUT en products');
});

module.exports = router;