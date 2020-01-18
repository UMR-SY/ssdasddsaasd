const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  let ree = new Discord.RichEmbed()
  .setTitle('Invite me')
  .setColor("#363940")
  .setDescription('Press"invite me" so you can invite the bot!') 
  .setURL('https://discord.gg/ar9eJyM')
  
  message.channel.send(ree)
  
}
module.exports.help = {
  name: "invite",
}  
  