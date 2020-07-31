require('dotenv').config();

const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "=";

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    client.user.setActivity("Join the event ✔", {
        type: "STREAMING",
        url: 'http://twitch.tv/avibot'
    });
    console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot || msg.author.id === '446220589045252096') return;

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
        if (team != 'avi' && team != 'angi') {
            return msg.channel.send('mention a valid team to join, either `angi` or `avi`');
        }
        if (msg.member.roles.cache.some(r => ["アビ 分隊 — avi's squad", "天使 分隊 — angi's squad"].includes(r.name))) {
            return msg.channel.send('you\'re already in a team, you `leave` command to leave your team');
        }
        if (team === 'avi') {
            const role = msg.guild.roles.cache.find(role => role.name === "アビ 分隊 — avi's squad");
            const avi = new Discord.MessageEmbed()
                .setTitle(`Team Avi`)
                .setThumbnail(msg.author.displayAvatarURL())
                .setDescription(`You've chosen Team Avi! \n Good Luck!`)
                .setColor('ORANGE');
            msg.member.roles.add(role).then(msg.channel.send(avi));
        }
        if (team === 'angi') {
            const role = msg.guild.roles.cache.find(role => role.name === "天使 分隊 — angi's squad");
            const angi = new Discord.MessageEmbed()
                .setTitle(`Team Angi`)
                .setThumbnail(msg.author.displayAvatarURL())
                .setDescription(`You've chosen Team Angi! \n Good Luck!`)
                .setColor('RED');
            msg.member.roles.add(role).then(msg.channel.send(angi));
        }
    }
    else if (command === 'leave') {
        if (msg.member.roles.cache.has('735606747481374770'))
            msg.member.roles.remove(['735606747481374770']).then(msg.channel.send('you left team Angi!'));
        if (msg.member.roles.cache.has('735608688441557055'))
            msg.member.roles.remove(['735608688441557055']).then(msg.channel.send('you left team Avi!'));
    }

    // giveaway ping

    if (command === 'gw') {

    }

});



client.login(process.env.token);

