require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "=";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (!msg.content.startsWith === prefix) return;
    const command = msg.content.slice(prefix.length);
    if (command === 'ping') {
        msg.reply('pong!');
    }

});

client.login(process.env.token);

