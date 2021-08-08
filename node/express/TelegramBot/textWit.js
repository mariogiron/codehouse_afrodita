const { Wit, log } = require('node-wit');
const fs = require('fs');

require('dotenv').config();

const client = new Wit({
    accessToken: process.env.WIT_TOKEN,
    logger: new log.Logger(log.DEBUG)
});

const getResponse = (intent) => {
    const content = fs.readFileSync(`./respuestas/${intent}.txt`, 'utf-8');
    const frases = content.split('\n');
    const random = Math.floor(Math.random() * frases.length);
    return frases[random];
}

module.exports = async (ctx) => {
    const data = await client.message(ctx.message.text)
    if (data.intents.length === 0) {
        ctx.reply('No te entiendo');
    } else {
        if (data.intents[0].confidence > 0.7) {
            ctx.reply(getResponse(data.intents[0].name));
        } else {
            ctx.reply('No te entiendo');
        }
    }
}