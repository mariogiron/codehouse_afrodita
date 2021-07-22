const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('FUNCIONA EL GET DE PROPERTIES');
});

module.exports = router;