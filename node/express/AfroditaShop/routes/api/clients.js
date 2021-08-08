const { getAll, create, getByUserId } = require('../../models/client.model');
const { getByClient } = require('../../models/product.model');

const router = require('express').Router();

// GET
router.get('/', async (req, res) => {
    try {
        const clients = await getAll();

        for (let client of clients) {
            const products = await getByClient(client.id);
            client.products = products;
        }

        res.json(clients);
    } catch (error) {
        res.json({ error: error.message });
    }
});

// POST
router.post('/', async (req, res) => {
    try {
        const result = await create(req.body);
        res.json(result);
    } catch (error) {
        res.json({ error: error.message });
    }
});

// PUT

// DELETE

router.get('/user', async (req, res) => {
    try {
        const clients = await getByUserId(req.user.id);
        res.json(clients);
    } catch (error) {
        res.json({ error: error.message });
    }
});

module.exports = router;