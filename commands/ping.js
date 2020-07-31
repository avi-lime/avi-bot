module.exports = {
    name: 'ping',
    description: 'shows ping',
    execute(msg) {
        msg.channel.send('Pong: `' + `${Date.now() - msg.createdTimestamp}` + '`ms');
    },
};