const router = require('express').Router();

const Persona = require('../models/persona.model');

router.get('/create', (req, res) => {
    const pers = new Persona();
    pers.name = 'Luis';
    pers.surname = 'García';
    pers.age = 25;
    pers.active = true;

    pers.save()
    res.send('create');
});

router.get('/create_v2', (req, res) => {
    Persona.create({
        name: 'Alberto',
        surname: 'Martín',
        age: 61,
        active: true
    }).then(nuevaPersona => console.log(nuevaPersona))
        .catch(error => console.log(error));
    res.send('create_v2');
});

router.get('/find', async (req, res) => {
    const personas = await Persona.find();
    res.json(personas);
});

module.exports = router;