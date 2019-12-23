const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField('DISNEY ACCOUNTS', 'Available: 700 | $disney')
    .addField('SPOTIFY ACCOUNTS', 'Available: 600 | $spotify')
    .addField('FORTNITE ACCOUNTS', 'Available: 0 | $fortnite')
    .addField('MINECRAFT ACCOUNTS', 'Available: 996 | $minecraft')
    .addField('ORIGIN ACCOUNTS', 'Available: 913 | $origin')
    .addField('PROXY IPS', 'Available: 4547 | $proxy')
    .addField('NORDVPN ACCOUNTS', 'Available: 942 | $nordvpn')
   .addField('SHEIN ACCOUNTS', 'Available: 445 | $shein')
   .addField('CBS ACCOUNTS', 'Available: 1160 | $cbs')
  .setFooter('GENESIS GEN STOCK')
   .setTimestamp();
 return message.channel.send(embed)
}
module.exports.help = {
    name: `stock`,
    description: `Stock accounts`
};