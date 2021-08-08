const router = require('express').Router();

const Property = require('../models/property.model');

router.get('/', async (req, res) => {
    const properties = await Property.find();
    res.render('properties/index', { properties })
});

router.get('/new', (req, res) => {
    res.render('properties/new');
});

router.post('/create', async (req, res) => {
    req.body.sale = false;
    req.body.created_at = new Date();

    await Property.create(req.body);
    res.redirect('/properties');
})

module.exports = router;