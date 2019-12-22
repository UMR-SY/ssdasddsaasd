const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField('DISNEY ACCOUNTS', 'Available: 613 | $disney')
    .addField('MINECRAFT ACCOUNTS', 'Available: 1124 | $minecraft')
    .addField('SPOTIFY ACCOUNTS', 'Available: 774 | $spotify')
    .addField('ORIGIN ACCOUNTS', 'Available: 925 | $origin')
    .addField('NORDVPN ACCOUNTS', 'Available: 819 | $nordvpn')
   .addField('SHEIN ACCOUNTS', 'Available: 462 | $shein')
   .addField('CBS ACCOUNTS', 'Available: 1166 | $cbs')
  .setFooter('SHADEGEN STOCK')
   .setTimestamp();
 return message.channel.send(embed)
}
module.exports.help = {
    name: `stock`,
    description: `Stock accounts`
};