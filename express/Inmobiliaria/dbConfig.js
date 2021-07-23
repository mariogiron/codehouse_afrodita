const mongoose = require('mongoose');

// mongodb://USER.PASS@HOST:PORT/DBNAME

const mongoUrl = 'mongodb://127.0.0.1/inmobiliaria';

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// TODO: Fichero de entorno
// TODO: Heroku