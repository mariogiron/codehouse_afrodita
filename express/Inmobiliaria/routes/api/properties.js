const router = require('express').Router();

const Property = require('../../models/property.model');

router.get('/', (req, res) => {
    Property.find()
        .then(properties => res.json(properties))
        .catch(error => res.json({ error: error.message }));
});

router.get('/:propertyId', (req, res) => {
    Property.findById(req.params.propertyId)
        .then(property => res.json(property))
        .catch(error => res.json({ error: error.message }));
});

router.post('/', (req, res) => {
    Property.create(req.body)
        .then(newProperty => res.json(newProperty))
        .catch(error => res.json({ error: error.message }));
});

module.exports = router;