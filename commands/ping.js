module.exports = {
    name: 'ping',
    description: 'shows ping',
    execute(msg, args) {
        msg.channel.send('Pong: `' + `${Date.now() - msg.createdTimestamp}` + '`ms');
    },
};