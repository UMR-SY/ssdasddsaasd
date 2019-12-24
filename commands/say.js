const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    message.delete();

if(!args.join(" ")){
  if(message.author.id !== '659038301331783680') return message.channel.send("Sorry, Only my owner can use this!")

}
let sayembed = new Discord.RichEmbed({
disabelEveryone: true})
.setColor('invisible')
.addField(`${message.author.tag} wanted me to say:`, args.join(" "))
.setTimestamp(message.createdAt)

message.channel.send(sayembed);
}

exports.config = {
    aliases: [  ]
};

module.exports.help = {
    name: "say"
}