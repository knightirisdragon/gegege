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


client.on('guildMemberAdd', async(member) => { // this event gets triggered when a new member joins the server!

    const Channel = member.guild.channels.cache.get('788543692411109416') //insert channel id that you want to send to
    
    const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('New Member')
        .setDescription(`**${member.displayName}** welcome to ${member.guild.name}, we now have ${member.guild.memberCount} members!`)
    
    Channel.send(embed)
})



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
