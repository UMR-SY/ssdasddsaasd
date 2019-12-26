    
const Discord = require('discord.js');

const cooldown = new Set();
exports.run = (client, message) => {
  
  if (message.author.id !== '659038301331783680') return message.channel.send("Only yungbaby. Can Use This Command!").then(x=>x.delete(3000))

    let args = message.content.split(' ').slice(1).join(' ');
   
    let guild = message.guild;
    const cnl = client.channels.get('561196726153641984');
    message.reply('YOU RESTOCKED THE GEN RIGHT NOW GG');
    
    cnl.send(`${args}`)
};

module.exports.help = {
    name: 'add'
}; 