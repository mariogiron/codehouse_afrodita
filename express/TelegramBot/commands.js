const axios = require('axios');
const NodeGeocoder = require('node-geocoder');
const googleTTS = require('google-tts-api');

const tiempoFn = ctx => {
    // /tiempo Santiago de compostela
    const ciudad = ctx.message.text.split('/tiempo ')[1];

    // http://api.openweathermap.org/data/2.5/weather?q=Madrid,%20es&appid=04f4f8762b4ce35df1c074d18b1e84ab&units=metric&lang=es
    // 1- ¿Cómo hacer una petición GET con AXIOS? (npm)
    // 2- Obtener la respuesta
    // 3- Responder al usuario con: temperatura, temp máx, temp mín, humedad, descripción
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.OPENWEATHER_APIKEY}&units=metric&lang=es`;

    axios.get(url)
        .then(response => {
            const data = response.data;

            ctx.replyWithHTML(`<u>El tiempo en <b>${ciudad}</b></u>:
Temperatura: ${data.main.temp}.
Míx: ${data.main.temp_min}.
Máx: ${data.main.temp_max}.
Humedad: ${data.main.humidity}.
Descripción: ${data.weather[0].description}`);
        })
        .catch(error => console.log(error));
}

/**
 * 
 * Método que responde al comando /tiempo
 * Realiza la petición a OpenWeatherMap Api y devuelve el resultado
 * 
 * @param ctx Contexto del bot
 * 
 */
const tiempoFnAW = async ctx => {
    const ciudad = ctx.message.text.split('/tiempo ')[1];

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.OPENWEATHER_APIKEY}&units=metric&lang=es`;

    try {
        const response = await axios.get(url);

        const data = response.data;

        console.log(data);

        ctx.replyWithHTML(`<u>El tiempo en <strong>${ciudad}</strong></u>:
Temperatura: ${data.main.temp}.
Míx: ${data.main.temp_min}.
Máx: ${data.main.temp_max}.
Humedad: ${data.main.humidity}.
Descripción: ${data.weather[0].description}`);
    } catch (error) {
        ctx.reply('La ciudad no existe 🤷. Vuelve a intentarlo');
    }

}

const dondeFn = async ctx => {
    const options = {
        provider: 'google',
        apiKey: process.env.GOOGLE_APIKEY,
        formatter: null
    };

    const geocoder = NodeGeocoder(options);

    const direccion = ctx.message.text.split('/donde ')[1];
    const res = await geocoder.geocode(direccion);

    const latitude = res[0].latitude;
    const longitude = res[0].longitude;

    const urlMap = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=17&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:A%7C${latitude},${longitude}&key=${process.env.GOOGLE_APIKEY}`;

    ctx.replyWithLocation(latitude, longitude);
    ctx.replyWithPhoto(urlMap);
}

const dimeFn = ctx => {
    const mensaje = ctx.message.text.split('/dime ')[1];

    const url = googleTTS.getAudioUrl(mensaje, {
        lang: 'es',
        slow: true,
        host: 'https://translate.google.com'
    });

    ctx.replyWithAudio(url);
}

module.exports = { tiempoFn, tiempoFnAW, dondeFn, dimeFn };