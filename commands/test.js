const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#363940")
.setFooter('©️ CopyRight Genesis™️')
.addField('__Stock__','__**STOCK ACCOUNTS**__\n\n`$fortnite`: 0 .\n`$spotify`: 1975 .\n`$cbs` To Get A cbs Account .\n`$disney` To Get A Disney Account.\n`$hulu` To Get A Hulu Account .\n`$minecraft` To Get A Minecraft Account .\n`$nitro` To Get A Nitro Code .\n`$nordvpn` To Get A NordVPN Account .\n`$origin` To Get A Origin Account .\n`$proxy` To Get A Proxy .\n`$shein` To Get A Shein Account .\n\n **✩** Remember that you are using the free generator, this accounts may not work !');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
