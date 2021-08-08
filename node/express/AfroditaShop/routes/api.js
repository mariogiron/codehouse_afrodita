const router = require('express').Router();

const { checkToken, checkAdmin, checkRole } = require('./middlewares');

const apiProductsRouter = require('./api/products');
const apiClientsRouter = require('./api/clients');
const apiUsersRouter = require('./api/users');

router.use('/products', /*checkToken, checkRole('R'),*/ apiProductsRouter);
router.use('/clients', checkToken, checkAdmin, apiClientsRouter);
router.use('/users', apiUsersRouter);

module.exports = router;