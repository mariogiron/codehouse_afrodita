const camaras = require('./camaras');
const preguntas = require('./preguntas');

const vorpal = require('vorpal')();

vorpal.delimiter('$🧡 > ').show();

vorpal
    .command('camara', 'Recupera una cámara de la ciudad de Madrid')
    .action(camaras);

vorpal
    .command('preguntas', 'Pequeño cuestionario')
    .action(preguntas)