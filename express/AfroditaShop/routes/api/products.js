const router = require('express').Router();

const { getAll, getById, create, getByCategory, update, remove } = require('../../models/product.model');

// TODO: Paginado de los products
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

router.get('/cat/:category', (req, res) => {
    getByCategory(req.params.category)
        .then(result => {
            // const names = [];
            // for (let product of result) {
            //     names.push(product.name);
            // }
            // res.json(result.map(product => product.name))
            res.json(result);
        })
        .catch(error => res.json({ error: error.message }));
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

router.post('/', async (req, res) => {
    // Insertar los datos dentro de la BD
    try {
        const result = await create(req.body);
        const product = await getById(result.insertId);
        res.json(product);
    } catch (error) {
        res.json({ error: error.message });
    }
});

router.post('/v2', (req, res) => {
    create(req.body)
        .then(result => {
            getById(result.insertId)
                .then(product => {
                    res.json(product);
                })
                .catch(error => res.json({ error: error.message }));
        })
        .catch(error => res.json({ error: error.message }));
});

router.put('/:productId', (req, res) => {
    const productId = req.params.productId;
    update(productId, req.body)
        .then(result => {
            getById(productId)
                .then(result => res.json(result))
                .catch(error => res.json({ error: error.message }));
        })
        .catch(error => res.json({ error: error.message }));
});

router.put('/:productId/v2', async (req, res) => {
    const productId = req.params.productId;
    const result = await update(productId, req.body);
    const product = await getById(productId);

    res.json(product);
});

router.delete('/:productId', async (req, res) => {
    const productId = req.params.productId;
    try {
        const product = await getById(productId);
        if (!product) {
            return res.json({ error: 'El producto no existe en la BD' });
        }
        const result = await remove(productId);
        res.json({ sucess: 'Se ha borrado correctamente' });
    } catch (error) {
        res.json({ error: error.message });
    }
});

module.exports = router;