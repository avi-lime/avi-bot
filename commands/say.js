const { Role } = require("discord.js");

const prefix = '=';

module.exports = {
    name: 'say',
    description: 'make the bot say something',
    execute(msg) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const mentionedRoles = msg.mentions.roles;
        const says = msg.content.replace(prefix + commandName, " ");
        if (mentionedRoles) {
            const says = msg.content.removeMentions(says);
        }
        if (!args.length) {
            return msg.channel.send('provide an arguement for me to say.');
        }
        msg.delete().then
        msg.channel.send(says);
    },
};