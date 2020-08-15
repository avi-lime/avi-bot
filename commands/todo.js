const prefix = '=';
const Discord = require('discord.js');
const list = [];

module.exports = {
    name: 'todo',
    description: 'to-do list for owner, admins and mods',
    execute(message) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const subCommand = args[1];

        if (subCommand === 'add') {
            const toadd = message.content.replace(prefix + commandName + ' ' + subCommand, '');
            if (!toadd) return message.channel.send(`give something to add to list`);
            list.push(toadd);
            message.channel.send(`added to list!`);
        }
        if (subCommand === 'show') {
            message.channel.send(list);
        }
        if (subCommand === 'delete' || subCommand === 'clear') {
            list = [];
            message.channel.send(`list cleared!`);
        }

    }
}