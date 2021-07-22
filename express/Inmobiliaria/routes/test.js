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
        name: 'Marta',
        surname: 'García',
        age: 48,
        active: false
    }).then(nuevaPersona => console.log(nuevaPersona))
        .catch(error => console.log(error));
    res.send('create_v2');
});

router.get('/find', async (req, res) => {
    const personas = await Persona.find();
    res.json(personas);
});

router.get('/fullnames', async (req, res) => {
    const personas = await Persona.find();
    const fullnames = personas.map(persona => ({ fullname: persona.full_name, age: persona.age }));
    res.json(fullnames);
});

router.get('/find_v2', (req, res) => {
    // Opción antigua con callback
    // Persona.find({ age: 25 }, (err, personas) => {
    //     if (err) return res.json(err);
    //     res.json(personas);
    // })
    // Select * from personas where age > 30 and age < 70 and active = 1
    const filters = {
        age: { $gt: 20, $lt: 70 },
        active: true
    }
    Persona.find(filters)
        .then(personas => res.json(personas))
        .catch(error => res.json({ error: error.message }));
});

router.get('/update', async (req, res) => {
    const pers = await Persona.findById('60f9484785dd63627a223280');
    pers.active = false;
    await pers.save();
    res.json(pers);
});

router.get('/update_v2', async (req, res) => {
    const result = await Persona.updateMany(
        { active: true },
        { $set: { active: false } }
    );
    res.json(result);
});

router.get('/update_v3', async (req, res) => {
    const pers = await Persona.findByIdAndUpdate(
        '60f9484785dd63627a223280',
        { name: 'Alfredo' },
        { new: true }
    );
    res.json(pers);
});

module.exports = router;