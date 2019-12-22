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
        fs.readFile('./accounts/origin.txt', 'utf8', function(err, data) {
            if (err) throw err;

            data = data + '';
            var lines = data.split('\n');
            let account = lines[Math.floor(Math.random() * 1)];

            fs.writeFile('./accounts/origin.txt', lines.slice(1).join('\n'), function(err) {
                if(err) throw err;
            });

            let embed = new Discord.RichEmbed()
            .addField('Support Server', `https://discord.gg/CDVDzWF`)
            .addField('Origin account',`\n**${account}**`)
            .setThumbnail('data:image/jpeg;base64,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')
            .setColor('#FFFFFF')
            .setFooter('Bot made by Norkez')
            .setTimestamp();

            msg.author.send(embed);

            msg.reply('I\'ve sent you the account! Please check your DM!')
                .then(m => {
                    setTimeout(() => {
                        m.delete();
                    }, 5000);
                });

            cooldown.add(msg.author.id);
            setTimeout(() => {
                cooldown.delete(msg.author.id);
            }, config.COOLDOWN * 60 * 1000);
        });
    }
};

module.exports.help = {
    name: `minecraft`,
    description: `Sends you a Minecraft account!`
};