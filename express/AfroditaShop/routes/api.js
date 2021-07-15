const router = require('express').Router();

const apiProductsRouter = require('./api/products');
const apiClientsRouter = require('./api/clients');

router.use('/products', apiProductsRouter);
router.use('/clients', apiClientsRouter);

module.exports = router;