const router = require('express').Router();

const apiProductsRouter = require('./api/products');

router.use('/products', apiProductsRouter);

module.exports = router;