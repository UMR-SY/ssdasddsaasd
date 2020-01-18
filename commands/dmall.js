const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if (message.author.id !== '659038301331783680') return message.channel.send("Only My Owner Can Use This Command!").then(x=>x.delete(3000))
message.guild.members.map(x=>x.sendMessage(args.join(" ")))
  message.channel.send('')

  }

module.exports.help = {
  name:"dmall"
}
