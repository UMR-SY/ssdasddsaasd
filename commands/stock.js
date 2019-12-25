const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField('DISNEY ACCOUNTS', 'Available: 1002 | $disney')
    .addField('SPOTIFY ACCOUNTS', 'Available: 213 | $spotify')
    .addField('MINECRAFT ACCOUNTS', 'Available: 632 | $minecraft')
    .addField('ORIGIN ACCOUNTS', 'Available: 413 | $origin')
    .addField('FORTNITE ACCOUNTS', 'Available: 0 | $fortnite')
    .addField('HULU ACCOUNTS', 'Available: 4995 | $hulu')
    .addField('PROXY IPS', 'Available: 1547 | $proxy')
    .addField('NORDVPN ACCOUNTS', 'Available: 532 | $nordvpn')
   .addField('SHEIN ACCOUNTS', 'Available: 245 | $shein')
   .addField('CBS ACCOUNTS', 'Available: 1032 | $cbs')
  .setFooter('GENESIS GEN STOCK')
   .setTimestamp();
 return message.channel.send(embed)
}
module.exports.help = {
    name: `stock`,
    description: `Stock accounts`
};