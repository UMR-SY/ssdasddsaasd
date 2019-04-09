const Discord = require("discord.js"); // use discord.js

const PREFIX = "," // bot's prefix


var eightball = [ // sets the answers to an eightball
  "True",
  "False",
  "Idfk",
]

var bot = new Discord.Client(); // sets Discord.Client to bot

bot.on("ready", function() { // when the bot starts up, set its game to Use *help and tell the console "Booted up!"
bot.user.setStatus("dnd")
bot.user.setActivity(",help",   { type: "Listening"});
    console.log("pornit gata,gata noob") // messages the console Booted up!
});

bot.on("message", function(message) { // when a message is sent
    if (message.author.equals(bot.user)) return; // if the message is sent by a bot, ignore

    if (!message.content.startsWith(PREFIX)) return; // if the message doesn't contain PREFIX (*), then ignore

    var args = message.content.substring(PREFIX.length).split(" "); // removes the prefix from the message
    var command = args[0].toLowerCase(); // sets the command to lowercase (making it incase sensitive)
    var mutedrole = message.guild.roles.find("name", "Muted");
	
    if (command == "help") { // creates a command *help
        var embedhelpmember = new Discord.RichEmbed() // sets a embed box to the variable embedhelpmember
            .setTitle("**:lock: Lista Comenzi**\n") // sets the title to List of Commands
            .addField(" - ,ban", "Interzice accesul unui membru ") // sets the first field to explain the command *help
            .addField(" - ,kick", "Kick unui membru dorit cu un motiv ") // sets the field information about the command *info
            .addField(" - ,unmute", "Unmute unui membru")
            .addField(" - ,mute","Mute un membru dorit cu un motiv ")
            .addField(" - ,say" , "Face botul sa spuna ce vrei tu") // sets the second field to explain the command *ping
            .addField(" - ,serverinfo", "Vezi informatiile server-ului!  ") // sets the third field to explain the command *cookie
            .addField(" - ,servers", "Arata serverele mele ") // sets the field to the 8ball command
			.addField(" - ,avatar", "iti arata avatarul care il ai!")			// arata avatarul care il ai
      .addField(" - ,invite", "Poti sa ma inviti pe Serverul tau!")
      .addField(" - ,stats ", "Iti arata informatiile mele")
      .addField(" - ,suggest", "Scrii o sugestie server-ului")
      .addField(" - ,8ball","Raspunde la toate intrebarile dvs. !")
      .addField(" - ,ping", "Tasteaza ping-ul bot-ului")
      .addField(" - ,info", "Spune informatii despre mine ")
      .setColor("000000")
            .setFooter("Creatorul acestui bot este Skrib#0008") // sets the footer to "You need help, do you?"
            //.addField(" - ,say", "Face botul sa spuna ce vrei  ")
            //.addField(" - ,mute", "Mute un membru dorit cu un motiv ") // sets a field
           // .addField(" - ,ban", "Interzice accesul unui membru ")
            //.addField(" - ,kick", "Kick unui membru dorit cu un motiv ") //sets a field
            //.addField(" - ,stats", "Arata informatiile mele")
	   // .addField(" - ,unmute", "Unmute unui membru") //sets a field
      //.addField(" - ,suggest" , "Scrie o sugestie server ului")
      .addField(" - ,servers" , "Iti arata serverele mele ")
			.setColor("000000")
            .setFooter("Comanda executata de " + message.author.username, message.author.avatarURL);
        message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
		
	}

    if (command == "info") { // creates the command *info
	var embedhelpmember = new Discord.RichEmbed()
	.setTitle("**INFORMATII**")
        .setColor(1337)
	.addField("Buna!Numele meu este Tudorel si sunt aici pentru a va ajuta! Puteti utiliza comanda /help  pentru a vedea toate comenzile mele! Daca aveti probleme cu mine, puteti contacta un administrator! :smile:", "Acestea sunt informatiile mele!")
	message.channel.send(embedhelpmember);
	
    }
  


    if (command == "ping") { // creates a command *ping
      var pula = new Discord.RichEmbed()
        message.channel.send(`🏓 Pong! | Ping: \`${bot.pings[0]} tick/ms\` `)
    
	}
	  if (command == "avatar") {
        message.channel.send(message.author.avatarURL)
	
	  }
	  
  if (command == "invite") {
    message.channel.send(`https://discordapp.com/api/oauth2/authorize?client_id=547815760660004870&permissions=8&scope=bot`);
  
    }
	
	 if (command == "ban") {

  let logs = message.guild.channels.find("name", "logs");
  if(!logs) return message.channel.send("Could not find a logs channel.");

  let user = message.mentions.users.first();
  if(!user) return message.reply("Va rugam sa mentionati un username pentru a da ban!");

  let reason = args.join(" ");
  if(!reason) reason = "No reason given";

  message.guild.member(user).ban(reason);

  let logsEmbed = new Discord.RichEmbed() // Master is MessageEmbed
  .setTitle("User Banned")
  .setFooter("User Ban Logs")
  .setColor("RANDOM")
  .setTimestamp()
  .addField("Banned User:", `${user}, ID: ${user.id}`)
  .addField("Reason:", reason)
  .addField("Moderator:", `${message.author}, ID: ${message.author.id}`)
  .addField("Time:", message.createdAt)
  .addField("Channel:", message.channel)

  logs.send(logsEmbed);

    }  
  
if (command == "suggest") {
       var suggest = args.join(" ")
    if(!suggest) return message.reply("Scrie sugestia pe care vrei sa o spui")
   let logs = message.guild.channels.find("name", "sugestii").send(`\`\`\`${suggest}\`\`\`\nSugestia a fost scrisa de ${message.author.tag}`).then(msg => {
   msg.react("✅")
   msg.react("❎")
   }) 
  
  
    
    message.delete(); 
}
if (command == "unmute") { // creates the command unmute
        var unmutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
        if (!unmutedmember) return message.reply("Va rugam sa mentionati un membru valabil al acestui server!") // if there is no kickedmmeber var
        unmutedmember.removeRole(mutedrole) //if reason, kick
            .catch(error => message.reply(`Scuze ${message.author} Nu puteam sa-mi pierd  din cauza : ${error}`)); //if error, display error
        message.reply(` ia dat unmute lui ${unmutedmember.user}!`); // sends a message saying he was kicked
          
        }

	 if (command == "serverinfo") {
        let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
        let day = message.guild.createdAt.getDate()
        let month = 1 + message.guild.createdAt.getMonth()
        let year = message.guild.createdAt.getFullYear()
         let sicon = message.guild.iconURL;
         var pula = new Discord.RichEmbed()
         .setAuthor(message.guild.name, sicon)
         .setField(`Server Creat pe • ${day}.${month}.${year}`)
         .setColor("000000")
         .setThumbnail(sicon)
         .addField("ID Server", message.guild.id, true)
         .addField("Nume Server", message.guild.name, true)
         .addField("Detinator", message.guild.owner.user.tag, true)
         .addField("Regiune", message.guild.region, true)
         .addField("Canale", message.guild.channels.size, true)
         .addField("Membrii", message.guild.memberCount, true)
         .addField("Boti", message.guild.members.filter(m => m.user.bot).size, true)
         .addField("Online", online.size, true)
         .addField("Roluri", message.guild.roles.size, true);
    message.channel.send(pula);
  
    }  
   if (command == "servers") {

          let bicon = bot.user.displayAvatarURL;
    let string = '';
    bot.guilds.forEach(guild => {
    string += guild.name + '\n';})
    let bt = bot.user.username;
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("Tudorel este in serverele:", string)
        .setTimestamp()
        .setFooter("Comanda executata de: " + message.author.username, message.author.avatarURL);
    message.channel.send(botembed);
}
    
    if (command == "helos") { // creates the command cookie
        if (args[1]) message.channel.send(message.author.toString() + " i-ai trimis lui " + args[1].toString() + " un helos :ok_hand::skin-tone-1: ") // sends the message saying someone has given someone else a cookie if someone mentions someone else
        else message.channel.send("**Cui vrei sa trimiti un helos?**") // sends the error message if no-one is mentioned
    }

    if (command == "8ball") { // creates the command 8ball
        if (args[1] != null) message.reply(eightball[Math.floor(Math.random() * eightball.length).toString(16)]); // if args[1], post random answer
        else message.channel.send("Ummmm, care e intrebarea ta? :rolling_eyes: (Correct usage: *8ball [question])"); // if not, error
    }

    if (command == "say") { // creates command say
     var sayMessage = message.content.substring(4)
        message.channel.send(sayMessage);

    }

    if (command === "stats") {
   var drq = new Discord.RichEmbed()
  .addField("Proceses", `**NodeJS**: ${process.version}\n**Discord.JS**: ${require('discord.js').version}`)
   .setColor(1337)
  .addField("Servers and Users", `**Servers**: ${bot.guilds.size} **Users**: ${bot.users.size}`)
  .addField("Ram Usage" , Math.round(process.memoryUsage().heapUsed /4000/4000) + "/4000 MB", true)
  .addField("Ping" , `${bot.pings[0]}`)
  .setFooter("Comanda executata de " + message.author.username, message.author.avatarURL)
  return message.channel.send(drq)

	}
	
 
	 if (command == "mute") { // creates the command mute
        var mutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
        if (!mutedmember) return message.reply("Va rugam sa mentionati un membru al acestui server!") // if there is no kickedmmeber var
        if (mutedmember.hasPermission("ADMINISTRATOR")) return message.reply("Nu pot dezactiva acest membru!") // if memebr is an admin
        var mutereasondelete = 10 + mutedmember.user.id.length //sets the length of the kickreasondelete
        var mutereason = message.content.substring(mutereasondelete).split(" "); // deletes the first letters until it reaches the reason
        var mutereason = mutereason.join(" "); // joins the list kickreason into one line
        if (!mutereason) return message.reply("Indicati un motiv pentru mute!") // if no reason
        mutedmember.addRole(mutedrole) //if reason, kick
		message.reply(`ia dat mute lui ${mutedmember.user} din Motivul: ${mutereason}`); // sends a message saying he was kicked
		
	 }

	if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) )
      return message.reply("Ne pare rău, nu aveți permisiuni să utilizați acesta commanda!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Mentioneaza jucatorul cui vrei sa dai kick");
    if(!member.kickable) 
      return message.reply("Nu pot da kick acestui utilizator! Au un rol mai mare");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
     member.kick(reason)
      .catch(error => message.reply(`Scuze${message.author} Nu am putut da kick din cauza : ${error}`));
    message.reply(`${member.user.tag} a luat kick de către ${message.author.tag} din motivul: ${reason}`);
    }
	
});


bot.login('NTQ3ODE1NzYwNjYwMDA0ODcw.D1b0mA.LPIN7lqlGi3oW2r84AXHacSjCfA'); // connects to the bot