const Discord = require("discord.js");

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
    .setColor("#363940")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/668055807857786891/668110267804286986/bb4eac1d-40b0-406f-996a-7e8bc3d3fbda.png"
    )
    .setFooter("©️ Narcos Gen™️")
    .addField(
      "__Yardım __ ",
      " __ ** JENERATÖR KOMUTLARI ** __  n  n` $ spotify` Bir Spotify Hesabı Almak İçin.  N` $ cbs` Bir cbs Hesabı Almak İçin.  N` $ disney` Disney Hesabı Almak İçin.  n` $ hulu` Hulu Hesabı Almak İçin.  n` $ minecraft` Minecraft Hesabı Almak İçin.  n` $ nitro` Nitro Kodu Almak İçin.  n` $ nordvpn` NordVPN Hesabı Almak İçin.  n `$ origin` Bir Origin Hesabı Almak İçin.  n` $ proxy` Bir Proxy Almak İçin.  n` $ shein` Bir Shein Hesabı Almak İçin.  n  n ** ✩ ** Ücretsiz oluşturucuyu kullandığınızı unutmayın , bu hesaplar çalışmayabilir!"
    );
  message.channel.send(embed);
};
module.exports.help = {
  name: "yardım"
};
