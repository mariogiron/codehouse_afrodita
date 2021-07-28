// TODO: Recuperar productos

const express = require('express');
const { Telegraf } = require('telegraf');
const { tiempoFn, tiempoFnAW, dondeFn, dimeFn, productsFn, productsFnPro } = require('./commands');
const textWit = require('./textWit');

require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// Comandos BOT
bot.use((ctx, next) => {
    console.log(ctx.message);
    next();
});

bot.command('test', (ctx) => {
    ctx.reply('Hola amigui ❤️');
});

bot.command('tiempo', tiempoFnAW);
bot.command('donde', dondeFn);
bot.command('dime', dimeFn);
bot.command('productos', productsFnPro);
// Fin Comandos BOT

bot.on('text', textWit);

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