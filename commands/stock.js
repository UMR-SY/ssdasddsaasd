const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField('DISNEY ACCOUNTS', 'Available: 1800 | !disney')
    .addField('MINECRAFT ACCOUNTS', 'Available: 258 | !minecraft')
    .addField('SPOTIFY ACCOUNTS', 'Available: 320 | !spotify')
    .addField('HULU ACCOUNTS', 'Available: 2320 | !hulu')
    .addField('NORDVPN ACCOUNTS', 'Available: 1850 | !nordvpn')
  .setFooter('D-GEN STOCK')
   .setTimestamp();
 return message.channel.send(embed)
}
module.exports.help = {
    name: `stock`,
    description: `Stock accounts`
};