
const prefix = '=';

module.exports = {
    name: 'say',
    description: 'make the bot say something',
    execute(msg) {
        const allowedUsers = ['454307252392951819', '629768073414574110'];
        if (!allowedUsers.includes(msg.author.id)) return;
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const says = msg.content.replace(prefix + commandName, " ");
        if (!args.length) {
            return msg.channel.send('provide an arguement for me to say.');
        }
        msg.delete();
        msg.channel.send(says);
    },
};
