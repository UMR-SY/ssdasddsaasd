    
const Discord = require('discord.js');

const cooldown = new Set();
exports.run = (client, message) => {
  
  if (message.author.id !== '544880141227130890') return message.channel.send("Only Not#0001 Can Use This Command!").then(x=>x.delete(3000))

    let args = message.content.split(' ').slice(1).join(' ');
   
    let guild = message.guild;
    const cnl = client.channels.get('658334455769071640');
    message.reply('YOU RESTOCKED THE GEN RIGHT NOW GG');
    
    cnl.send(`${args}`)
// In your command
};

module.exports.help = {
    name: 'add'
}; 