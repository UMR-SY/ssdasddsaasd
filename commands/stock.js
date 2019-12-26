const Discord = require ("discord.js");


exports.run = async (client, message, args, level) => {  
  
  let embed = new Discord.RichEmbed()
  
.setTitle("Comenzi")
  .setColor('RANDOM')
  .addField("Spotify", "`1600`")
  .addField("Fortnite" , "`1000`")
  .addField("Nitro", "`1500`")
  .addField("Origin", "`500`")
  .addField("")
  return message.channel.send(embed)
  }

module.exports.help = {
  name: 'stock'
}