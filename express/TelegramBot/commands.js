const axios = require('axios');

const tiempoFn = ctx => {
    // /tiempo Santiago de compostela
    const ciudad = ctx.message.text.split('/tiempo ')[1];

    // http://api.openweathermap.org/data/2.5/weather?q=Madrid,%20es&appid=04f4f8762b4ce35df1c074d18b1e84ab&units=metric&lang=es
    // 1- ¿Cómo hacer una petición GET con AXIOS? (npm)
    // 2- Obtener la respuesta
    // 3- Responder al usuario con: temperatura, temp máx, temp mín, humedad, descripción
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=04f4f8762b4ce35df1c074d18b1e84ab&units=metric&lang=es`;

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

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=04f4f8762b4ce35df1c074d18b1e84ab&units=metric&lang=es`;

    try {
        const response = await axios.get(url);

        const data = response.data;

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

module.exports = { tiempoFn, tiempoFnAW };