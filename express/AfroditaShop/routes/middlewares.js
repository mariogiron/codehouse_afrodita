const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');
const { getById } = require('../models/user.model');

const checkToken = async (req, res, next) => {
    // 1 - Comprobación si existe el token dentro de las cabeceras de la petición
    if (!req.headers['authorization']) {
        return res.json({ error: 'Debes incluir la cabecera de autenticación' });
    }

    const token = req.headers['authorization'];

    // 2 - Desencriptar el Token
    let payload;
    try {
        payload = jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        return res.json({ error: 'El token es incorrecto' });
    }

    // 3 - Comprobar si está caducado
    if (payload.expired_at < dayjs().unix()) {
        return res.json({ error: 'El token está caducado' });
    }

    // 4 - Recuperar usuario logged
    const user = await getById(payload.user_id);
    req.user = user;

    next();
}

// checkAdmin
// Si el rol del usuario logado es A, dejar pasar. Si no, devuelve error
// Aplicamos el middleware a todas las rutas de /clients

const checkAdmin = (req, res, next) => {
    if (req.user.role !== 'A') {
        return res.json({ error: 'Para acceder a este recurso debes ser administrador' });
    }
    next();
}

const checkRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.json({ error: 'Tu role no tiene permiso para este recurso' });
        }
        next();
    }
}

module.exports = { checkToken, checkAdmin, checkRole }