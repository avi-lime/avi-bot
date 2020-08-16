const prefix = '=';
const Discord = require('discord.js');

module.exports = {
    name: 'game',
    description: `I'm bored, so wynaut`,
    execute(message) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const subCommand = args[0].toLowerCase();
        const userArgs = message.content.replace(prefix + commandName + " " + subCommand, '');
        if (subCommand === 'start') {
            message.channel.send(`The game will start in...`).then(sentMessage => {
                setTimeout(() => {
                    sentMessage.edit(`3`)
                }, 2000);
            }).then(sentMessage2 => {
                setTimeout(() => {
                    sentMessage2.edit(`2`)
                }, 1000);
            }).then(sentMessage3 => {
                setTimeout(() => {
                    sentMessage3.edit(`1`)
                }, 1000);
            }).then(sentMessage4 => {
                setTimeout(() => {
                    sentMessage4.edit(`now!`)
                }, 1000);
            });
            setTimeout(() => {
                message.channel.send(`poof idk what to do next... :(`)
            }, 5500);
        }

    }
}