
const prefix = '=';

module.exports = {
    name: 'say',
    description: 'make the bot say something',
    execute(msg, args) {

        if (!args.length) {
            return msg.channel.send('provide an arguement for me to say.');
        }
        msg.delete().then
        msg.channel.send(msg.content.replace(prefix + command.name, " "));
    },
};