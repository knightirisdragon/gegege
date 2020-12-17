// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});


const {Client, RichEmbed } = require('discord.js')

const Discord = require("discord.js");
 
const client = new Client()
 
const PREFIX = '!'



client.on('ready',() => {    
    let myGuild = client.guilds.get('689139264960856101');
    let memberCount = myGuild.memberCount;
    client.user.setActivity(memberCount + ` אנשים בשרת `, {type: "WATCHING"})
    console.log(`${client.user.tag} is online`)
})


client.on('guildMemberAdd', member => {
  let bicon = member.user.displayAvatarURL;
  let myGuild = client.guilds.get('689139264960856101')
  let membercount = myGuild.memberCount;
  const channel = member.guild.channels.find(ch => ch.id === '788543692411109416');
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(bicon)
      .setDescription(`ברוכים הבאים לשרת ${member}, אתה משתמש מספר, ${membercount} `);
    channel.send(embed);
  }
)


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
 

client.on('guildMemberAdd', member => {
        let bicon = member.user.displayAvatarURL;
        const channel = member.guild.channels.find(ch => ch.id === '689139264960856101');
          const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(bicon)
            .setDescription(`**Welcome to GOV-RP | Auditions**`);
          member.send(embed);
        }
      )


client.login('Nzg4NTUxNTg0NDE3NDQ3OTY3.X9lJ5A.Xt5qGOSBiCb2iVGD00aBehSp-K4');//token