const operaciones = require('./operaciones');
const mensaje = require('./mensaje');
const avisos = require('./avisos');
const Persona = require('./persona');

// operaciones = {
//     sumar: function (a, b) {
//         return a + b;
//     },
//     mult: function (a, b) {
//         return a * b;
//     }
// }

const res = operaciones.sumar(3, 4);
console.log(res);

const res2 = operaciones.mult(78, 9);
console.log(res2);

console.log(mensaje);

console.log(avisos.bienvenida);
console.log(avisos.despedida);

const pers = new Persona('Mario', 'Girón');
console.log(pers.nombre);

console.log(__dirname);
console.log(__filename);

console.log(process.argv[3]);

// const exec = require('child_process').exec;

// // RECUPERO DE LA BASE DE DATOS LOS LINKS A LOS vídeos

// for () {
//     exec('ffmpeg -i input.mp4 output.avi');
// }