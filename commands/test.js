const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.addField('Help','Gen commands\n`$fortnite` To Get A Fortnite Account .\n`$spotify` To Get A Spotify Account .');
message.channel.send(embed)
}
module.exports.help = {
  name: 'test'
}
