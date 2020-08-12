const { Role } = require("discord.js");

const prefix = '=';

module.exports = {
    name: 'say',
    description: 'make the bot say something',
    execute(msg) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        if (msg.content.match(/\<\@\&?([0-9]|everyone|here)\>/)) {
            return msg.content.send('remove the mentions from the message, this is to prevent spam, sorry');
        }
        const says = msg.content.replace(prefix + commandName, " ");
        if (!args.length) {
            return msg.channel.send('provide an arguement for me to say.');
        }
        msg.delete();
    },
};
