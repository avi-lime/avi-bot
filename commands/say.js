const { commands } = require("npm");

const prefix = '=';
const args = msg.content.slice(prefix.length).trim().split(/ +/);
const commandName = args.shift().toLowerCase();

module.exports = {
    name: 'say',
    description: 'make the bot say something',
    execute(msg, args) {
        if (!args.length) {
            return msg.channel.send('provide an arguement for me to say.');
        }
        msg.delete().then
        msg.channel.send(msg.content.replace(prefix + commandName, " "));
    },
};