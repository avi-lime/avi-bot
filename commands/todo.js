const prefix = '=';
const Discord = require('discord.js');
var list = [];

module.exports = {
    name: 'todo',
    description: 'to-do list for owner, admins and mods',
    execute(message) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const subCommand = args[0];

        if (subCommand === 'add') {
            const toadd = message.content.replace(prefix + commandName + ' ' + subCommand, '');
            if (!toadd) return message.channel.send(`give something to add to list`);
            list.push(toadd);
            message.channel.send(`added to list!`);
        }
        if (subCommand === 'show') {
            const show = new Discord.MessageEmbed()
                .setTitle(`To-do list!`)
                .setDescription(list)
                .setColor(message.member.displayHexColor);
            message.channel.send(show);
        }
        if (subCommand === 'delete' || subCommand === 'clear') {
            list = [];
            message.channel.send(`list cleared!`);
        }
        if (subCommand === 'remove') {
            const toremove = parseInt(args[1]) + 1;
            list.splice(toremove);
            message.channel.send(`item removed!`);
        }
    }
}