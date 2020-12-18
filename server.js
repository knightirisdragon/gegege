const express = require("express");
const app = express();
const { Client, RichEmbed } = require("discord.js");
const Discord = require("discord.js");
const client = new Client();
const { MessageEmbed } = require("discord.js");
const PREFIX = "!";

client.on("ready", () => {
  let myGuild = client.guilds.cache.get("689139264960856101");
  let memberCount = myGuild.memberCount;
  client.user.setActivity(memberCount + ` אנשים בשרת `, { type: "WATCHING" });
  console.log(`${client.user.tag} is online`);
});

client.on("guildMemberAdd", member => {
  let bicon = member.user.displayAvatarURL;
  let myGuild = client.guilds.cache.get("689139264960856101");
  let membercount = myGuild.memberCount;
  const channel = member.guild.channels.cache.find(
    ch => ch.id === "788543692411109416"
  );
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setThumbnail(member.user.avatarURL())
    .setDescription(
      `ברוכים הבאים לשרת ${member}, אתה משתמש מספר, ${membercount} `
    );
  channel.send(embed);
});

client.on("message", message => {
  let args = message.content.substring(PREFIX.length).split(" ");
  switch (args[0]) {
    case "verify":
      const embed = new Discord.RichEmbed()
        .setFooter("Dev By RoTeX_YT#5719")
        .addField("**בשביל לראות את כול החדרים תלחצו על האימוגי**", ` ✅`)
        .setColor("RANDOM")

        .message.channel.send(embed);
      message.delete();
  }
});

client.on("guildMemberAdd", member => {
  let bicon = member.user.displayAvatarURL;
  const channel = member.guild.channels.cache.find(
    ch => ch.id === "689139264960856101"
  );
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setThumbnail(bicon)
    .setDescription(`**Welcome to GOV-RP | Auditions**`);
  member.send(embed);
});

client.on("message", message => {
  const args = message.content.split(" ").slice(1);
  if (message.content.startsWith(".say")) {
    message.delete();
    var saytext = args.join(" ");
    let embed = new Discord.MessageEmbed()
      .setDescription("**" + saytext + "**")
      .setColor("BLUE");
    message.channel.send("@everyone");
    message.channel.send(embed);
  }
});


client.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'ip':
    let embed = new Discord.MessageEmbed()
    .setTitle('**האייפי**')
    .addField('IP',` fivem.gamecenter1.com:30120`)
    .addField('TS',` GOVpublic`)
    .setColor("RANDOM")
  message.channel.send(embed);
  message.delete()
  }}
  );



client.login("Nzg4NTUxNTg0NDE3NDQ3OTY3.X9lJ5A.Xt5qGOSBiCb2iVGD00aBehSp-K4"); //token
