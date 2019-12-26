const Discord = require ("discord.js");


exports.run = async (client, message, args, level) => {  
  
  let embed = new Discord.RichEmbed()
  
.setTitle("Stock")
  .setColor('RANDOM')
.addField("**Origin**: `1600`", "")
  
  return message.channel.send(embed)
  }

module.exports.help = {
  name: 'stock'
}