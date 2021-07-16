const router = require('express').Router();

const apiProductsRouter = require('./api/products');
const apiClientsRouter = require('./api/clients');
const apiUsersRouter = require('./api/users');

router.use('/products', apiProductsRouter);
router.use('/clients', apiClientsRouter);
router.use('/users', apiUsersRouter);

module.exports = router;