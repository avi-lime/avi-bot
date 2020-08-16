require('dotenv').config();

const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client({
    disableMentions: "everyone"
});
const prefix = "=";

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    client.user.setPresence({
        status: 'idle',
        activity: {
            name: 'with discord.js',
            type: 'PLAYING'
        }
    });
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content.match(/^(𝗰𝗵𝗼𝗰𝗼𝗹𝗮𝘁𝗲|𝗽𝗹𝘂𝘁𝗼) Please type \`\!captcha \[Text From Image\]\` to continue\.\nGet a different captcha by typing any command\.$/) && message.author.id === '432616859263827988') {
        const chan = message.guild.channels.cache.get('688109298852692055');
        if (message.content.startsWith('𝗽𝗹𝘂𝘁𝗼')) {
            const pluto = new Discord.MessageEmbed()
                .setImage(message.attachments.url)
                .setColor('RED');
            chan.send(`<@629768073414574110> captcha in ${message.channel}`);
            chan.send(pluto);
        }
        if (message.content.startsWith('𝗰𝗵𝗼𝗰𝗼𝗹𝗮𝘁𝗲')) {
            const chocolate = new Discord.MessageEmbed()
                .setImage(message.attachments.url)
                .setColor('ORANGE');
            chan.send(`<@454307252392951819> captcha in ${message.channel}`);
            chan.send(chocolate);
        }

    }
});

client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    try {
        command.execute(msg, args);
    } catch (error) {
        console.error(error);
        msg.reply('there was an error trying to execute that command!');
    }
});



client.login(process.env.token);

