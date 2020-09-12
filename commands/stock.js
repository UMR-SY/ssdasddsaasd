const Discord = require("discord.js");

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
    .setColor("#363940")
    .setFooter("©️ Narcos Gen™️")
    .addField(
      "__STOCK__",
      "__**Narcos Gen Stokları**__\n\n`!spotify`: 3203 .\n`!cbs`: 1459 .\n`!disney`: 1001.\n`!hulu`: 650 .\n`!minecraft`: 0 .\n`!nitro`: unlimited .\n`!nordvpn`: 1200.\n`!origin` 5600.\n`!proxy`: unlimited .\n`!shein`: 500 .\n\n **✩** Ücretsiz oluşturucuyu kullandığınızı unutmayın, bu hesaplar çalışmayabilir!"
    );
  message.channel.send(embed);
};
module.exports.help = {
  name: "help"
};
