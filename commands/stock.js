const Discord = require ("discord.js");


exports.run = async (client, message, args, level) => {  
  
  let embed = new Discord.RichEmbed()
  
.setTitle("Stock")
  .addField("**Origin**: `1600`", "")// st ca bag eu comanda de dmall pe dal drq tot dau afk:)))))
  
  
  
  
  

  
  .setColor('RANDOM')

  
  return message.channel.send(embed)
  }

module.exports.help = {
  name: 'stock'
}