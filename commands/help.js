const Discord = require('discord.js');

module.exports.run = async (client, msg, args, config) => {
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Help')
        .setURL('https://discordapp.com/api/oauth2/authorize?client_id=659451089266933760&permissions=8&scope=bot')
        .setDescription(`
__**GENERATOR COMMANDS**__`)
        .addField('⠀', "⠀")
        .addField('**✩** `$minecraft` To Get A Minecraft Account **.**', "⠀")
        .addField('**✩** `$disney` To Get A Disney Account **.**', "⠀")
        .addField('**✩** `$hulu` To Get A Hulu Account **.**', "⠀")
        .addField('**✩** `$origin` To Get A Origin Account **.**', "⠀")
        .addField('**✩** `$cbs` To Get A Cbs Account **.**', "⠀")
        .addField('**✩** `$nitro` To Get A Unchecked Code Account **.**', "⠀")
        .addField('**✩** `$nordvpn` To Get A NordVPN Account **.**', "⠀")
        .addField('**✩** `$proxy` To Get A Proxy **.**', "⠀")
        .addField('**✩** `$shein` To Get A Shein Account **.**', "⠀")
        .addField('**✩** `$spotify` To Get A Spotify Account **.**', "⠀")
        .setFooter(`Bot made by Norkez | Ping: ${client.ping}`)
        .setTimestamp();

        if(!args.join(' ')) return msg.channel.send(embed);

        let searchCmd = args.join(' ');
        if(client.commands.has(searchCmd)) {
            searchCmd = client.commands.get(searchCmd);

            let helpEmbed = new Discord.RichEmbed()
            .setColor('#E09099')
            .setDescription(`
**Name:** ${searchCmd.help.name}
**Description:** ${searchCmd.help.description}`);

            msg.channel.send(helpEmbed);
        } else {
            msg.reply('This command doesn\'t exists.');
        }
};

module.exports.help = {
    name: `help`,
    description: `Bot's commands`
};