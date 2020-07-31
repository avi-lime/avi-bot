module.exports = {
    name: 'ping',
    description: 'shows ping',
    execute(msg, args) {
        if (msg.member.roles.cache.has('735606747481374770'))
            msg.member.roles.remove(['735606747481374770']).then(msg.channel.send('you left team Angi!'));
        if (msg.member.roles.cache.has('735608688441557055'))
            msg.member.roles.remove(['735608688441557055']).then(msg.channel.send('you left team Avi!'));
    }
}