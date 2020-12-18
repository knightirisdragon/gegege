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
      .setTimestamp()
      .setColor("BLUE");
    message.channel.send("@everyone");
    message.channel.send(embed);
  }
});

client.on("message", async message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    let myguild = client.guilds.cache.get('730070360124555277')
    let channel = myguild.channels.cache.get('789258184078393345')
  
    const command = args.shift().toLowerCase();
    if(command === "hm") {
      const sayMessage = args.join(" ");
      let embed = new Discord.MessageEmbed()
      .setColor("#FCFCFC")
      .setAuthor(message.author.tag + " המלצה זאת נפתחה על ידי")
      .setTitle('מערכת המלצות על שחקנים')
      .setDescription(`${sayMessage}`)
      message.delete().catch(O_o=>{}); 
      channel.send(embed).then(messageReaction => {
        messageReaction.react('✅')
        messageReaction.react('❌')
      })
    }})


client.login("Nzg4NTUxNTg0NDE3NDQ3OTY3.X9lJ5A.wzXA6BMMiWVXeZakJWaH-z55MKE"); //token
