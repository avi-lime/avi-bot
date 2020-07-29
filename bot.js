require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "=";

client.on('ready', () => {
    client.user.setActivity("New Updates", {
        type: "STREAMING",
        url: 'http://twitch.tv/avibot'
    });
    console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // Avatar command 

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

    // say command

    if (command === 'say') {
        if (!args.length) {
            return msg.channel.send('provide an arguement for me to say.');
        }
        msg.delete().then
        msg.channel.send(msg.content.replace(prefix + command, " "));
    }

    // ping command

    if (command === 'ping') {
        msg.channel.send('Pong: `' + `${Date.now() - msg.createdTimestamp}` + '`ms');
    }

    // purge command

    if (command === 'purge' || command === 'prune') {
        const amount = parseInt(args[0]) + 1;
        if (!msg.guild.member(msg.author).hasPermission(['MANAGE_MESSAGES'])) {
            return msg.channel.send('you don\'t have manage message perms');
        }
        else if (isNaN(amount)) {
            return msg.channel.send('You need to give me a valid number!');
        }
        else if (amount < 1 || amount > 100) {
            return msg.channel.send('Give me a number between 1 to 100');
        }
        msg.channel.bulkDelete(amount, true);
    }

    // join command 

    if (command === 'join') {
        if (!args[0]) { return msg.channel.send('mention a team to join, currently available teams are `angi` and `avi`!'); }
        const team = args[0].toLowerCase();
        if (team === 'avi') {
            // const role = msg.guild.roles.fetch('735608688441557055');
            msg.author.roles.add(['735608688441557055']).then(msg.channel.send('you joined team avi'));
        }
        if (team === 'angi') {
            // const role = msg.guild.roles.fetch('735606747481374770');
            msg.author.roles.add(['735606747481374770']).then(msg.channel.send('you joined team angi'));
        }
        if (team !== 'avi' || team !== 'angi') {
            msg.channel.send('mention a valid team to join, either `angi` or `avi`');
        }
    }
});



client.login(process.env.token);

