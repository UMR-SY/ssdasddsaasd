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
        fs.readFile('./accounts/mc.txt', 'utf8', function(err, data) {
            if (err) throw err;

            data = data + '';
            var lines = data.split('\n');
            let account = lines[Math.floor(Math.random() * 1)];

            fs.writeFile('./accounts/mc.txt', lines.slice(1).join('\n'), function(err) {
                if(err) throw err;
            });

            let embed = new Discord.RichEmbed()
            .addField('Support Server', `https://discord.gg/xAQPrGc`)
            .addField('Minecraft account',`\n**${account}**`)
            .setThumbnail('https://cdn.vox-cdn.com/thumbor/qpJp9bhRRTybHADfW_aphIp7W_o=/0x0:1024x576/1200x800/filters:focal(431x207:593x369)/cdn.vox-cdn.com/uploads/chorus_image/image/65289065/WiiU_MinecraftWiiUEdition_screenshot_01.0.0.jpg')
            .setColor('#FFFFFF')
            .setFooter('Bot made by MRLIT_')
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