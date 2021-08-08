const axios = require('axios');
const parser = require('fast-xml-parser');

require('console-png').attachTo(console);
// const convert = require('xml-js');

module.exports = async (args, callback) => {
    const { data } = await axios.get('https://datos.madrid.es/egob/catalogo/202088-0-trafico-camaras.kml');

    // TRANFORMACION
    const { kml: { Document: { Placemark: arrPlacemarks } } } = parser.parse(data);
    // const dataTransformado = convert.xml2js(data);

    console.log(arrPlacemarks.length);
    // console.log(dataTransformado.kml.Document.Placemark);

    // 1 - Recuperar del array una cámara aleatoria
    // 2 - EXTRAER la url de la imagen
    // 3 - Mostrar por consola el nombre de la cámara y la url

    const numAleatorio = Math.floor(Math.random() * arrPlacemarks.length);
    const camSelected = arrPlacemarks[numAleatorio];

    // substring
    const inicio = camSelected.description.indexOf('src=') + 4;
    const final = camSelected.description.indexOf(' ', inicio);
    const urlImg = camSelected.description.substring(inicio, final);

    const nombre = camSelected.ExtendedData.Data[1].Value;

    console.log(urlImg);
    console.log(nombre);

    // const { dataImg } = await axios.get({
    //     method: 'get',
    //     url: urlImg.toString(),
    //     responseType: 'arraybuffer'
    // });

    // console.png(dataImg);

    callback();
}
