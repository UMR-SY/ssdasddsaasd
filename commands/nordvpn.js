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
        fs.readFile('./accounts/vpn.txt', 'utf8', function(err, data) {
            if (err) throw err;

            data = data + '';
            var lines = data.split('\n');
            let account = lines[Math.floor(Math.random() * 1)];

            fs.writeFile('./accounts/vpn.txt', lines.slice(1).join('\n'), function(err) {
                if(err) throw err;
            });

            let embed = new Discord.RichEmbed()
            .addField('Support Server', `https://discord.gg/CDVDzWF`)
            .addField('Nordvpn account',`\n**${account}**`)
            .setThumbnail('https://www.google.ro/imgres?imgurl=https%3A%2F%2Fs1.nordcdn.com%2Fnordvpn%2Fmedia%2F1.88.0%2Fimages%2Fmeta%2Fnordvpn-default.png&imgrefurl=https%3A%2F%2Fnordvpn.com%2Fpress-area%2F&docid=bQ7SCZle9zDQaM&tbnid=Z8NAezkJcMZvdM%3A&vet=10ahUKEwiN6Kit1fvlAhXCfFAKHRvOB9wQMwhEKAIwAg..i&w=1080&h=1080&bih=625&biw=1360&q=nordvpn%20logo&ved=0ahUKEwiN6Kit1fvlAhXCfFAKHRvOB9wQMwhEKAIwAg&iact=mrc&uact=8')
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
    name: `nordvpn`,
    description: `Sends you a Nordvpn account!`
};