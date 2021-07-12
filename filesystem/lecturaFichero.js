const fs = require('fs');
const fsPromises = require('fs/promises');

// readFile
// Lee el contenido de un fichero

// síncrona
const contenido = fs.readFileSync('./ficheros/primero.md', 'utf-8');
console.log(contenido);

// asíncrona
fs.readFile('./ficheros/primero.md', 'utf-8', (err, data) => {
    console.log('ERROR', err);
    console.log(data);
});

//promesa
fsPromises.readFile('./ficheros/primero.md', 'utf-8')
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Promesa async-await
(async () => {
    const data = await fsPromises.readFile('./ficheros/primero.md', 'utf-8');
    console.log(data);
})();

