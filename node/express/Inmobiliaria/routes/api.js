const router = require('express').Router();

const propertiesApiRouter = require('./api/properties');

router.use('/properties', propertiesApiRouter);

module.exports = router;