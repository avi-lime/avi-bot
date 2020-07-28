require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "=";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (!msg.content.startsWith === prefix || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        msg.reply('pong!');
    }

    if (command === 'avatar' || command === 'av') {
        const ment = msg.mentions.users;
        if (!ment.size) {
            const av = new Discord.MessageEmbed()
                .setTitle(msg.author.name + '\'s avatar!')
                .setImage(msg.author.displayAvatarURL({ dynamic: true, format: "png", size: 4096 }))
                .setColor(msg.author.displayHexColor())
                .setThumbnail(guild.iconURL());
            msg.channel.send(av);
        }
        const userav = new Discord.MessageEmbed()
            .setTitle(ment.first() + '\'s avatar!')
            .setImage(ment.first.displayAvatarURL({ dynamic: true, format: 'png', size: 4096 }))
            .setColor(ment.first.displayHexColor())
            .setThumbnail(guild.iconURL());
        msg.channel.send(userav);
    }
});

client.login(process.env.token);

