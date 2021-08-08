const fs = require('fs');
const fsPromises = require('fs/promises');

// readdir - Recupera todos los ficheros y directorios de una carpeta concreta
// síncrona

const files = fs.readdirSync('../ejemplomodulos');
console.log(files);

// asíncrona

fs.readdir('../ejemplomodulos', (err, files) => {
    console.log('ERROR', err);
    console.log(files);
});

console.log('FINAL');

// promesas

fsPromises.readdir('../ejemplomodulos')
    .then(files => console.log(files))
    .catch(error => console.log(error));