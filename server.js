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



client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(
    ch => ch.id === "788543692411109416"
  );

    const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('New Member')
        .setDescription(`**${member.displayName}** welcome to ${member.guild.name}, we now have ${member.guild.memberCount} members!`)
    
    channel.send(Embed);
});


bot.on("guildMemberAdd", member => {
  const channel = member.guild.channels.cache.find(
    ch => ch.id === "755494710113599498"
  );
  if (!channel) return;
  console.log(channel);
  let joinEmbed = new Discord.MessageEmbed()
    .setTitle("**Member Joined**")
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`Dev: DryZex`)
    .setThumbnail(member.user.avatarURL())
    .setDescription(
      `**${member}** ברוך הבא לשרת שלנו!\nמקווים שתהנה.\nעכשיו אנחנו **${member.guild.memberCount}** משתמשים בשרת`
    );
  channel.send(joinEmbed);
});



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
