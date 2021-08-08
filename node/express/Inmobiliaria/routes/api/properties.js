const router = require('express').Router();

const Property = require('../../models/property.model');

router.get('/', (req, res) => {
    Property.find()
        .then(properties => res.json(properties))
        .catch(error => res.json({ error: error.message }));
});

router.get('/range/:minPrice/:maxPrice', (req, res) => {
    Property.range(req.params.minPrice, req.params.maxPrice)
        .then(properties => res.json(properties))
        .catch(error => res.json(error));
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

router.put('/:propertyId', (req, res) => {
    Property.findByIdAndUpdate(req.params.propertyId, req.body, { new: true })
        .then(updatedProperty => {
            const response = {
                message: 'Se ha actualizado la propiedad',
                property: updatedProperty
            }
            res.json(response);
        })
        .catch(error => res.json({ error: error.message }));
});

router.delete('/:propertyId', (req, res) => {
    Property.findByIdAndRemove(req.params.propertyId)
        .then(result => res.json({
            message: 'Se ha borrado la propiedad',
            property: result
        }))
        .catch(error => res.json({ error: error.message }));
})

module.exports = router;