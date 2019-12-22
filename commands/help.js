const Discord = require ("discord.js");


exports.run = async (client, message, args, level) => {  
  
  let embed = new Discord.RichEmbed()
  
  .setColor('RANDOM')
  .addField("`💸` **_Gen commands_**", "` cbs, disney, hulu, nordvpn, origin, shein, spotify, stock`")
  return message.channel.send(embed)
  }

module.exports.help = {
  name: 'help'
}