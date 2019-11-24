const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
  .setTitle('D-GEN STOCKS')
  .setCOLOR('R')
  .addField("DISNEY ACCOUNTS")
  .addField("Available: 1800 | !disney")
    .addField("MINECRAFT ACCOUNTS")
  .addField("Available: 258 | !minecraft")
    .addField("SPOTIFY ACCOUNTS")
  .addField("Available: 320 | !spotify")
    .addField("HULU ACCOUNTS")
  .addField("Available: 2320 | !hulu")
    .addField("NORDVPN ACCOUNTS")
  .addField("Available: 1850 | !nordvpn")
  .setFooter('D-GEN')
message.channel.send(embed)
}
module.exports.help = {
    name: `stock`,
    description: `Stock accounts`
};