const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField('DISNEY ACCOUNTS', 'Available: 1750 | $disney')
    .addField('MINECRAFT ACCOUNTS', 'Available: 1124 | $minecraft')
    .addField('SPOTIFY ACCOUNTS', 'Available: 774 | $spotify')
    .addField('HULU ACCOUNTS', 'Available: 2120 | $hulu')
    .addField('NORDVPN ACCOUNTS', 'Available: 1005 | $nordvpn')
   .addField('SHEIN ACCOUNTS', 'Available: 462 | $shein')
  .setFooter('SHADEGEN STOCK')
   .setTimestamp();
 return message.channel.send(embed)
}
module.exports.help = {
    name: `stock`,
    description: `Stock accounts`
};