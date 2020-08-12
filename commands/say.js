const { Role } = require("discord.js");

const prefix = '=';

module.exports = {
    name: 'say',
    description: 'make the bot say something',
    execute(msg) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const mentions = /\<\@\!?\&?([0-9]|everyone|here)\>/
        const says = msg.content.replace(prefix + commandName, " ");
        if (!args.length) {
            return msg.channel.send('provide an arguement for me to say.');
        }
        msg.delete();
        msg.channel.send(says.replace(mentions, ""));
    },
};
