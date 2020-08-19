const prefix = '=';
const Discord = require('discord.js');

module.exports = {
    name: 'linh',
    description: 'gift for my lovely friend linh',
    execute(msg) {
        let allowedUsers = ['629768073414574110', '454307252392951819'];
        if (!allowedUsers.includes(msg.author.id)) return;
        const page1 = new Discord.MessageEmbed()
            .setTitle(`Sorry`)
            .setDescription(`Hi, sorry for the past few days, I've been acting weird and I seem to make you upset alot but I hope you can forgive me for all that.\n ↬ As you know, I wanted to make a website for your birthday but I couldn't finish it and I eventually stopped learning and working on html css stuff and started working on the bot and JS, so I decided to do something with the bot!\n ↬ The idea is the same (to make you happy and) to remind you about the good times we had and yeah just a normal gift..\n ↬ I couldn't recover many pics from discord since uk my phone got reset and we had lots of pics shared throught WhatsApp and Conversations, so yeah, sorry for that too.\n ↬ Oh and I made it interactive, react with '▶' to go to the next page.`)
            .setFooter(`Sorry again, hope you like it`)
            .setColor('#aab5ee')
            .setThumbnail('https://images-ext-2.discordapp.net/external/vNcMbksqxZURxfdtDmN4lYCHPNv_NlVNcXaoUtj7Ljg/https/cdn.discordapp.com/emojis/595733556949680161.gif')
            .setImage('https://media.tenor.com/images/31794b2c2ffe07ad3b0708d0d7232f4d/tenor.gif');
        const page2 = new Discord.MessageEmbed()
            .setTitle(`uh, hey`)
            .setThumbnail('https://images-ext-1.discordapp.net/external/i4liYkydKAiS7PuA5QoBMEJIKvmzrK8AwDv9trOB0uw/https/cdn.discordapp.com/emojis/532402122755538972.gif')
            .setColor('#aab5ee')
            .setImage('https://cdn.discordapp.com/attachments/649152186374291472/745307533207404655/Screenshot_22.png')
            .setDescription(` ↬ So, 6 months ago, on 8th of february (yes i checked), I, ze great Cran, joined your smol cute server, Cutie Gang.\n ↬ Then I slid into your DMs on 10th of february smoothly like a pro, well not really it was only cuz I couldn't talk there and yeah, oop.\n ↬ Well then began our great adventures, we got really close really quick and I absolutely loved it <3\n ↬ Well yeah that's pretty much it and then here we are, fighting everyday like we hate each other, but we don't, right? :D`)
            .setFooter(`I miss those days 😔`);
        const page3 = new Discord.MessageEmbed()
            .setTitle('Pokemon!!')
            .setDescription(` ↬ We can both agree on one thing, Pokemon has been a huge thing for both of us, whether it's pokecord or pokeverse or even myuu, Pokemon has always been there since the start and as much as I dislike the bots, I agree that if it weren't for Pokecord or these Discord bots, We wouldn't have gotten this closer and I mention that almost everytime I write such things for you,, welp!\n ↬ Let's seeeee, what else can I say about this topic, well I will give you a cool gift related to Pokeverse and a few more stuff but you probably already know about it, cuz i can't keep secrets like this for long and i know my big mouth will tell you what it is, so rippo surprise 😬\n ↬ And yeah here's one of my favorite moments on our Pokemon Adventures~`)
            .setThumbnail('https://www.poke-verse.com/sprites/xyani-shiny/xerneas.gif?discord=12')
            .setImage('https://cdn.discordapp.com/attachments/649152186374291472/745534584891899914/Screenshot_24.png')
            .setColor('#aab5ee')
            .setFooter(`We were cute back then kek 🤭`);
        const page4 = new Discord.MessageEmbed()
            .setTitle(`SONGSSSS`)
            .setDescription(` ↬ Well who doesn't like songs, and I am a 107% certain that you of all the people I know, loves a variety of songs and you even know which songs I'd like, that's a big deal to me cuz even I don't know what I like in songs (except for Ed, ed is lub <3)\n ↬ Well so as you know, I made a playlist a while ago, it was unfinished ofcourse, so I added a few more songs, It still doesn't cover all your likes but it's almost there.\n ↬ Here's the link to it, it's a youtube playlist so that your favourite bot Rythm 2 can play it <3\n https://www.youtube.com/playlist?list=PLcI6IPhDBOvBD8I8SmX0zNvQlF8cbXoVN \n ↬ welp, me making a playlist and not adding Ed songs is near to impossible, dw I only added like 4, so Enjoy ^-^`)
            .setColor('#aab5ee')
            .setFooter(`let's listen to it together shall we 👀`)
            .setThumbnail('https://images-ext-2.discordapp.net/external/4pvKvmZt0wwwO4Kiifht0_eBKbc8H1aQxfOziDMfJbQ/https/cdn.discordapp.com/emojis/534815931441086496.gif')
            .setImage(`https://cdn.discordapp.com/attachments/739404372936622113/745546376607432765/hqdefault_2.jpg`);
        const page5 = new Discord.MessageEmbed()
            .setTitle(`Happy Birthday!`)
            .setDescription(` ↬ Yeah well not exactly a birthday gift or anything but I wanted to do something similar for your birthday but I couldn't, so let's keep this as you belated birthday present! (sorry if it's not what you expected or if you don't like it :<)\n ↬ You're also gonna get\n   - Overlordnecrozma (maybe with a skin, idk don't get upset if you don't get that)\n   - All my love and moneyyy (lammmeee but that's all I got :<)\n   - Oh also I'll buy you more stuff like the Xerneas, Blaz, Resh BD and what not cuz wynaut OwO`)
            .setImage(`https://cdn.discordapp.com/attachments/739404372936622113/745548929789329408/bday.jpg`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/739404372936622113/745548944997875822/bts.jpg`)
            .setColor('#aab5ee')
            .setFooter('Sorry for reusing the photos, As you know, I\'m not that creative kek');
        const page6 = new Discord.MessageEmbed()
            .setTitle(`Foooooooood`)
            .setDescription(` ↬ We both love food alot, especially Ice cream and Pizzzaaaaa and I don't have many of the pics that you sent me before But I did ask you for a few pics, So that I can add as thumbnail and Image kek, so yeah.\n ↬ We've shared some great memories related to food, just think about those and it might make you hungry kek\n ↬ Yeah that's all i have to say about food, I don't have much to say and I'm running out of things, welp`)
            .setColor(`#aab5ee`)
            .setImage('https://cdn.discordapp.com/attachments/739404372936622113/745570267111227402/d50674ef-3124-4413-9fe0-c6a1615a44ca.jpg')
            .setThumbnail('https://cdn.discordapp.com/attachments/739404372936622113/745569745968824390/391c722a-156a-4dc8-b447-723b99d42e5b.jpg')
            .setFooter('i got hungry while typing this ._.');
        const page7 = new Discord.MessageEmbed()
            .setTitle(`And that's it...`)
            .setDescription(`That's the most my brain can think of, I'm not that good with thinking so pardon me for that, This message was mostly me saying sorry and stuff and there's not that many memories in this one but yeah I covered almost all of it, right? :pensive:\n ↬ Yeah thanks for reading everything, Sorry for the most parts, I'm not that creative and yeah Hope you liked it <3`)
            .setColor('#aab5ee')
            .setFooter('sorry for using the same color for all the embeds, idk i like this color in embeds')
            .setThumbnail('https://images-ext-1.discordapp.net/external/KFHBNYEcP1cXy2xuOydKDhpIenkqTdkUmDUZZPqVFZ0/https/cdn.discordapp.com/emojis/615196797215965185.png')
            .setImage('https://media1.tenor.com/images/f77d3eadfbba4eb9e16d09790fcb0754/tenor.gif?itemid=15109066');

        page = 1;
        msg.channel.send(page1).then(m => {
            m.react('◀').then
            m.react('▶');
            const forwardsFilter = (reaction, user) => {
                return reaction.emoji.name === '▶' && user.id === msg.author.id;
            }
            const backwardsFilter = (reaction, user) => {
                return reaction.emoji.name === '◀' && user.id === msg.author.id;
            };
            const backwards = m.createReactionCollector(backwardsFilter, { time: 1200000 });
            const forwards = m.createReactionCollector(forwardsFilter, { time: 1200000 });

            backwards.on('collect', r => {
                if (page == 1) return r.users.remove(msg.author.id);
                if (page == 2) {
                    page = 1;
                    m.edit(page1);
                    r.users.remove(msg.author.id);
                    return;
                }
                if (page == 3) {
                    page = 2;
                    m.edit(page2);
                    r.users.remove(msg.author.id);
                    return;
                }
                if (page == 4) {
                    page = 3;
                    m.edit(page3);
                    r.users.remove(msg.author.id);
                    return;
                }
                if (page == 5) {
                    page = 4;
                    m.edit(page4);
                    r.users.remove(msg.author.id);
                    return;
                }
                if (page == 6) {
                    page = 5;
                    m.edit(page5);
                    r.users.remove(msg.author.id);
                    return;
                }
                if (page == 7) {
                    page = 6;
                    m.edit(page6);
                    r.users.remove(msg.author.id);
                    return;
                }
            })

            forwards.on('collect', r => {
                if (page == 1) {
                    page = 2;
                    m.edit(page2);
                    r.users.remove(msg.author.id);
                    return;
                }
                if (page == 2) {
                    page = 3;
                    m.edit(page3);
                    r.users.remove(msg.author.id);
                    return;
                }
                if (page == 3) {
                    page = 4;
                    m.edit(page4);
                    r.users.remove(msg.author.id);
                    return;
                }
                if (page == 4) {
                    page = 5;
                    m.edit(page5);
                    r.users.remove(msg.author.id);
                    return;
                }
                if (page == 5) {
                    page = 6;
                    m.edit(page6);
                    r.users.remove(msg.author.id);
                    return;
                }
                if (page == 6) {
                    page = 7;
                    m.edit(page7);
                    r.users.remove(msg.author.id);
                    return;
                }
                if (page == 7) return r.users.remove(msg.author.id);

            })

        })

    }

}
