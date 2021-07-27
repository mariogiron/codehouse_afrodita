const express = require('express');
const { Telegraf } = require('telegraf');
const { tiempoFn, tiempoFnAW, dondeFn, dimeFn } = require('./commands');

require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Comandos BOT
bot.command('test', (ctx) => {
    ctx.reply('Hola amigui ❤️');
});

bot.command('tiempo', tiempoFnAW);
bot.command('donde', dondeFn);
bot.command('dime', dimeFn);
// Fin Comandos BOT

const app = express();

// Config
app.use(bot.webhookCallback('/secreta'));
// La URL debe estar ONLINE
bot.telegram.setWebhook(process.env.BOT_URL + '/secreta');

app.post('/secreta', (req, res) => {
    res.send('Funciona');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server escuchando en puerto ' + PORT);
});