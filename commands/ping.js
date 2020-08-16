module.exports = {
    name: 'ping',
    description: 'shows ping',
    execute(msg) {
        const ping = Date.now() - msg.createdTimestamp;
        msg.channel.send('Pinging...').then(m => {
            setTimeout(() => {
                m.edit(`Pong! \`${ping}ms\``);
            }, 1500);
        });
    },
};