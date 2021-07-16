const router = require('express').Router();
const bcrypt = require('bcryptjs');

const { create, getByEmail } = require('../../models/user.model');

router.post('/register', async (req, res) => {
    // TODO: Validaciones sobre req.body

    const user = await getByEmail(req.body.email);
    if (user) {
        return res.json({ error: 'Error en el registro. Revisa los datos' });
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);

    const result = await create(req.body);
    res.json(result);
});

module.exports = router;