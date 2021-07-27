const express = require('express');
const { Telegraf } = require('telegraf');
const { tiempoFn, tiempoFnAW } = require('./commands');

const bot = new Telegraf('111388597:AAG6B63gdhj7O17t_bw3ZApYkPu_teDv7EU');

// Comandos BOT
bot.command('test', (ctx) => {
    ctx.reply('Hola amigui ❤️');
});

bot.command('tiempo', tiempoFnAW);
// Fin Comandos BOT

const app = express();

// Config
app.use(bot.webhookCallback('/secreta'));
// La URL debe estar ONLINE
bot.telegram.setWebhook('https://f1ea30773e4f.ngrok.io/secreta');

app.post('/secreta', (req, res) => {
    res.send('Funciona');
});

app.listen(3000, () => {
    console.log('Server escuchando en puerto 3000');
});