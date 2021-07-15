const router = require('express').Router();

const { getAll, getById } = require('../../models/product.model');

router.get('/', (req, res) => {
    // 1 - Recuperar los productos de la base de datos
    // 2 - Enviar en formato JSON los productos al cliente
    getAll()
        .then(result => res.json(result))
        .catch(err => res.json({ error: err.message }));
});

router.get('/v2', async (req, res) => {
    try {
        const result = await getAll();
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.get('/:productId', async (req, res) => {
    try {
        const result = await getById(req.params.productId);
        if (result) {
            res.json(result);
        } else {
            res.json({ error: 'El producto no existe en la base de datos' });
        }
    } catch (error) {
        res.json({ error: error.message });
    }
});

router.get('/:productId/v2', (req, res) => {
    getById(req.params.productId)
        .then(result => {
            if (result) {
                res.json(result);
            } else {
                res.json({ error: 'El producto no existe en la base de datos' });
            }
        })
        .catch(error => res.json({ error: error.message }));
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