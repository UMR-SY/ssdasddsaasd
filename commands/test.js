const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.addField('Help','__**GENERATOR COMMANDS**__\n\n`$fortnite` To Get A Fortnite Account .\n`$spotify` To Get A Spotify Account .\n`$cbs` To Get A cbs Account .\n`$disney` To Get A Disney Account.\n`$hulu` To Get A Hulu Account .\n`$minecraft` To Get A Minecraft Account .\n`$nitro` To Get A Nitro Code .\n`$NordVPN` To Get A NordVPN Account .\n`$origin` To Get A Origin Account .\n`$proxy` To Get A Proxy .\n`$shein` To Get A Shein Account .\n\n');
message.channel.send(embed)
}
module.exports.help = {
  name: 'test'
}
