const Discord = require("discord.js");
const fs = require("fs");
const cooldown = new Set();

module.exports.run = async (client, msg, args, config) => {
  if (cooldown.has(msg.author.id)) {
    msg
      .reply(
        `Bu komudu kullanmak için ${config.COOLDOWN} Dakika beklemelisiniz.!`
      )
      .then(m => {
        msg.delete();

        setTimeout(() => {
          m.delete();
        }, 5000);
      });
  } else {
    fs.readFile("./accounts/spotify.txt", "utf8", function(err, data) {
      if (err) throw err;

      data = data + "";
      var lines = data.split("\n");
      let account = lines[Math.floor(Math.random() * 1)];

      fs.writeFile(
        "./accounts/spotify.txt",
        lines.slice(1).join("\n"),
        function(err) {
          if (err) throw err;
        }
      );

      let embed = new Discord.RichEmbed()
        .addField("Support Server", `https://discord.gg/ZDMgxF`)
        .addField("Spotify account", `\n**${account}**`)
        .setThumbnail(
          "https://www.google.ro/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjPtNDLt43nAhXKAewKHYh4D08QjRx6BAgBEAQ&url=https%3A%2F%2Fdotesports.com%2Fcounter-strike%2Fnews%2Fcomplexitys-straightline-decline-11692&psig=AOvVaw3pfBs1U93XQFV2aa4IeJ7h&ust=1579446668668487"
        )
        .setColor("#363940")
        .setFooter("Narcos Gen")
        .setTimestamp();

      msg.author.send(embed);

      msg
        .reply("Ben sana hesabı gönderdim! Lütfen DM nizi kontrol edin!")
        .then(m => {
          setTimeout(() => {
            m.delete();
          }, 900000);
        });

      cooldown.add(msg.author.id);
      setTimeout(() => {
        cooldown.delete(msg.author.id);
      }, config.COOLDOWN * 60 * 1000);
    });
  }
};

module.exports.help = {
  name: `spotify`,
  description: `Sends you a Spotify account!`
};
