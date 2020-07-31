module.exports = {
    name: 'ping',
    description: 'shows ping',
    execute(msg, args) {
        if (!args.length) {
            return msg.channel.send('provide an arguement for me to say.');
        }
        msg.delete().then
        msg.channel.send(msg.content.replace(prefix + command, " "));
    }
}