const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const express = require("express");
const app = express();
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();
 
 
const PREFIX = '!'



client.on('ready',() => {    
    let myGuild = client.guilds.cache.get('689139264960856101');
    let memberCount = myGuild.memberCount;
    client.user.setActivity(memberCount + ` אנשים בשרת `, {type: "WATCHING"})
    console.log(`${client.user.tag} is online`)
})


client.on("guildMemberAdd",member => {
if(member.guild.id === "748088208427974676"){
const welcomeembed = new MessageEmbed()
.setAuthor("Welcome!", "https://cdn.discordapp.com/avatars/442355791412854784/60e79e40fd23a0deeb22d56e1fa8d8f0.webp?size=512")
.setThumbnail(member.guild.iconURL({dynamic: true, size: 512}))
.setTitle(`Welcome **${member.user.username}** to **${member.guild.name}**`)
.setDescription("join us chatting in <#748095614017077318>!")
.setImage(member.user.displayAvatarURL({dynamic: true, size: 512}))
.setFooter(member.guild.name, member.guild.iconURL({dynamic: true, size: 512}))
.setColor("#0000ff")
.setTimestamp();
    bot.guilds.cache.get("748088208427974676").channels.cache.get("748633941912584333").send(welcomeembed);
}


client.on('message', message => {
  let args = message.content.substring(PREFIX.length).split(" ");
  switch(args[0]){
      case 'verify':
  const embed = new Discord.RichEmbed()
  .setFooter('Dev By RoTeX_YT#5719')
  .addField('**בשביל לראות את כול החדרים תלחצו על האימוגי**',` ✅`)
  .setColor("RANDOM")

.message.channel.send(embed);
message.delete()
}}
);
 

  
client.login(process.env.TOKEN);
