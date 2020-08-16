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
    if (message.content.match(/^𝗰𝗵𝗼𝗰𝗼𝗹𝗮𝘁𝗲 Please type \!captcha \[Text From Image\] to continue\.\nGet a different captcha by typing any command\.$/) || message.author.id === '432616859263827988') {
        message.guild.channels.cache.get('688109298852692055').send(`<@454307252392951819> catcha in ${message.channel}`);
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

