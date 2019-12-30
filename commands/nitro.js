const Discord = require('discord.js');
const fs = require('fs');
const cooldown = new Set();

module.exports.run = async (client, msg, args, config) => {
    if(cooldown.has(msg.author.id)) {
        msg.reply(`You need to wait ${config.COOLDOWN} minutes to use this command again!`)
            .then((m) => {
                msg.delete();

                setTimeout(() => {
                    m.delete();
                }, 5000);
            });
    } else {
        fs.readFile('./accounts/nitro.txt', 'utf8', function(err, data) {
            if (err) throw err;

            data = data + '';
            var lines = data.split('\n');
            let account = lines[Math.floor(Math.random() * 1)];

            fs.writeFile('./accounts/nitro.txt', lines.slice(1).join('\n'), function(err) {
                if(err) throw err;
            });

            let embed = new Discord.RichEmbed()
            .addField('Support Server', `https://discord.gg/CDVDzWF`)
            .addField('Nitro unchecked',`\n**${account}**`)
            .setThumbnail('https://www.google.ro/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FpsIIWROIvtM%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.pcinvasion.com%2Fdiscord-removes-games-from-nitro-subscription-service%2F&tbnid=nqusegdyPq8KDM&vet=12ahUKEwiq5d_rxtHmAhVLlxoKHSD0BeIQMygAegUIARDlAQ..i&docid=duNTYqQGJXOl9M&w=1280&h=720&q=nitro%20discord%20image%20100x100&client=opera&ved=2ahUKEwiq5d_rxtHmAhVLlxoKHSD0BeIQMygAegUIARDlAQ')
            .setColor("#363940")
            .setFooter('Bot made by Norkez')
            .setTimestamp();

            msg.author.send(embed);

            msg.reply('I\'ve sent you the account! Please check your DM! __ Official Server Link__: https://discord.gg/zVHfvZp')
                .then(m => {
                    setTimeout(() => {
                        m.delete();
                    }, 900000);
                });

            cooldown.add(msg.author.id);
            setTimeout(() => {
                cooldown.delete(msg.author.id);
            }, config.COOLDOWN * 60 * 1000);
        });
    }
};

module.exports.help = {
    name: `origin`,
    description: `Sends you a Origin account!`
};