const Discord = require('discord.js');

module.exports.run = async (client, msg, args, config) => {
    let embed = new Discord.RichEmbed()
        .setColor("#363940")
        .setTitle('Stock')
        .setURL('https://discordapp.com/api/oauth2/authorize?client_id=659451089266933760&permissions=8&scope=bot')
        .setDescription(`
__**Stock Accounts**__`)
        .addField('⠀', "⠀")
        .addField('**✩** `$minecraft` 1500 **.**', "⠀")
        .addField('**✩** `$disney` 800**.**', "⠀")
        .addField('**✩** `$hulu`  1000**.**', "⠀")
        .addField('**✩** `$origin` 900 **.**', "⠀")
        .addField('**✩** `$cbs` 1000 **.**', "⠀")
        .addField('**✩** `$nitro`  unlimited**.**', "⠀")
        .addField('**✩** `$nordvpn` 1500 **.**', "⠀")
        .addField('**✩** `$proxy` unlimited**.**', "⠀")
        .addField('**✩** `$shein`  1200**.**', "⠀")
        .addField('**✩** `$fortnite`  0**.**', "⠀")
        .addField('**✩** `$spotify`  3945**.**', "⠀")
        .setTimestamp();

        if(!args.join(' ')) return msg.channel.send(embed);

        let searchCmd = args.join(' ');
        if(client.commands.has(searchCmd)) {
            searchCmd = client.commands.get(searchCmd);

            let helpEmbed = new Discord.RichEmbed()
            .setColor("#363940")
            .setDescription(`
**Name:** ${searchCmd.help.name}
**Description:** ${searchCmd.help.description}`);

            msg.channel.send(helpEmbed);
        } else {
            msg.reply('This command doesn\'t exists.');
        }
};

module.exports.help = {
    name: `stock`,
    description: `Stock accounts`
};