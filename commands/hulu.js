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
        fs.readFile('./accounts/hulu.txt', 'utf8', function(err, data) {
            if (err) throw err;

            data = data + '';
            var lines = data.split('\n');
            let account = lines[Math.floor(Math.random() * 1)];

            fs.writeFile('./accounts/hulu.txt', lines.slice(1).join('\n'), function(err) {
                if(err) throw err;
            });

            let embed = new Discord.RichEmbed()
            .addField('Support Server', `https://discord.gg/CDVDzWF`)
            .addField('Hulu account',`\n**${account}**`)
            .setThumbnail('https://www.google.ro/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjMkrzh1vvlAhVDIMUKHTdmBHsQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.hulu.com%2F&psig=AOvVaw0ROZFwc7lBY_r7zazhhJmO&ust=1574438527052523')
            .setColor('#FFFFFF')
            .setFooter('Bot made by Norkez')
            .setTimestamp();

            msg.author.send(embed);

            msg.reply('I\'ve sent you the account! Please check your DM! __ Official Server Link__: https://discord.gg/BdmWm7U')
                .then(m => {
                    setTimeout(() => {
                        m.delete();
                    }, 9000);
                });

            cooldown.add(msg.author.id);
            setTimeout(() => {
                cooldown.delete(msg.author.id);
            }, config.COOLDOWN * 60 * 1000);
        });
    }
};

module.exports.help = {
    name: `hulu`,
    description: `Sends you a Hulu Premium account!`
};