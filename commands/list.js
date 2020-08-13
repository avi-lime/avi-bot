const prefix = "-";
const Discord = require("discord.js");
const list = [];

module.exports = {
    name: 'list',
    description: 'just a list',
    execute(msg) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const sub = args[0];
        const item = msg.content.replace(prefix + commandName + ' ' + sub, '');
        const options = ['add', 'remove', 'clear'];
        if (!options.includes(sub)) {
            msg.channel.send(list);
        }
        if (sub === 'add') {
            list.push(item);
        }
        if (sub === 'clear') {
            list = [];
        }
    }
}