const db = require('quick.db');
const embed = require('../assets/embed.js');
const daysBetween = function( date1, date2 ) {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;
  var difference_ms = date2 - date1;
  // Convert back to days and return
  return Math.round(difference_ms/one_day); 
}

module.exports = async (client, member) => {
    client.user.setPresence({ game: { name: `${client.users.size} members | ${client.config['prefix']}help`, type: 'WATCHING' }, status: 'online' });
    const channel = member.guild.channels.find(ch => ch.name.includes('welcome'));
    if (!channel) return;
    let d = daysBetween(member.user.createdTimestamp,new Date().getTime());
   channel.send(`**Welcome ${member} To ${member.guild.name} Enjoy Your Time!! We Now Have __${member.guild.members.size}__ Member's :heart_eyes::tada: Your Account Created: __${d}__ Days Ago!** :grin: `);
  member.addRole('658325774927003668');
  const roles = await db.fetch(`roles_${member.id}`);
  if (roles && roles !== 658325774927003668) {
    member.addRoles(roles);
};
};