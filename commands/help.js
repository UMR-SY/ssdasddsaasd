const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#363940")       
.setThumbnail('https://cdn.discordapp.com/attachments/668055807857786891/668110267804286986/bb4eac1d-40b0-406f-996a-7e8bc3d3fbda.png')
.setFooter('©️ CopyRight Omega™️')
.addField('__Help__','__**GENERATOR COMMANDS**__\n\n`$spotify` To Get A Spotify Account .\n`$cbs` To Get A cbs Account .\n`$disney` To Get A Disney Account.\n`$hulu` To Get A Hulu Account .\n`$minecraft` To Get A Minecraft Account .\n`$nitro` To Get A Nitro Code .\n`$nordvpn` To Get A NordVPN Account .\n`$origin` To Get A Origin Account .\n`$proxy` To Get A Proxy .\n`$shein` To Get A Shein Account .\n\n **✩** Remember that you are using the free generator, this accounts may not work !');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
