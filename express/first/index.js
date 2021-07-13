const express = require('express');

require('dotenv').config();

const app = express();

// GESTIÓN DE PETICIONES
// GET http://localhost:3000
app.get('/', (req, res) => {
    res.end('Ruta raiz!!');
});

// GET http://localhost:3000/otra
app.get('/otra', (req, res) => {
    res.end('Ruta /otra');
});

// let PORT = 3000;
// if (process.env.PORT) {
//     PORT = process.env.PORT;
// }

// const PORT = process.env.PORT ? process.env.PORT : 3000;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`¡Server escuchando en puerto ${PORT}!`);
});