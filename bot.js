require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "=";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        msg.reply('pong!');
    }

    if (command === 'avatar' || command === 'av') {
        if (!msg.mentions.users.size) {
            const av = new Discord.MessageEmbed()
                .setTitle(msg.author.username + '\'s avatar!')
                .setImage(msg.author.displayAvatarURL({ dynamic: true, format: "png", size: 4096 }))
                .setColor('ORANGE');
            return msg.channel.send(av);
        }
        const mentionedUser = msg.mentions.users.first();
        const userav = new Discord.MessageEmbed()
            .setTitle(`${mentionedUser.username}` + '\'s avatar!')
            .setImage(mentionedUser.displayAvatarURL({ dynamic: true, format: 'png', size: 4096 }))
            .setColor('ORANGE');
        return msg.channel.send(userav);
    }

    if (command === 'say') {
        if (!args.length) {
            return msg.channel.send('provide an arguement for me to say.');
        }
        msg.delete().then
        msg.channel.send(msg.content.replace(prefix + command, " "));
    }

    if (command === 'ping') {
        msg.channel.send('Pong: ' + `${Date.now() - msg.createdTimestamp}` + 'ms');
    }
});

client.login(process.env.token);

