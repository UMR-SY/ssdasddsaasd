const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#363940")
.setFooter('©️ CopyRight Discord Gen™️')
.addField('__STOCK__','__**STOCK COMMANDS**__\n\n`$spotify`: 1450 .\n`$cbs`: 1705 .\n`$disney`: 948.\n`$hulu`: 2049 .\n`$minecraft`: 200 .\n`$nitro`: unlimited .\n`$nordvpn`: 2602.\n`$origin` 863.\n`$proxy`: unlimited .\n`$shein`: 1592 .\n\n **✩** Remember that you are using the free generator, this accounts may not work !');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
