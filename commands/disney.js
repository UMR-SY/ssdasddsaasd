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
        fs.readFile('./accounts/disney.txt', 'utf8', function(err, data) {
            if (err) throw err;

            data = data + '';
            var lines = data.split('\n');
            let account = lines[Math.floor(Math.random() * 1)];

            fs.writeFile('./accounts/disney.txt', lines.slice(1).join('\n'), function(err) {
                if(err) throw err;
            });

            let embed = new Discord.RichEmbed()
            .addField('Support Server', `https://discord.gg/CDVDzWF`)
            .addField('Disney account',`\n**${account}**`)
            .setThumbnail('https://www.google.ro/url?sa=i&source=images&cd=&ved=2ahUKEwi10LeL0_vlAhVELFAKHRFLDcUQjRx6BAgBEAQ&url=https%3A%2F%2Fvariety.com%2F2019%2Ftv%2Fnews%2Fdisney-appoints-jan-koeppen-to-lead-europe-middle-east-africa-1203354626%2F&psig=AOvVaw3fgIH6_8gzJ1pxWYwUWNaE&ust=1574437549681200')
            .setColor("#363940")
            .setFooter('Bot made by babyyy')
            .setTimestamp();

            msg.author.send(embed);

            msg.reply('I\'ve sent you the account! Please check your DM! __ Official Server Link__: https://discord.gg/ar9eJyM')
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
    name: `disney`,
    description: `Sends you a Disney account!`
};