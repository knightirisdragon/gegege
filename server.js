const express = require("express");
const app = express();
const { Client, RichEmbed } = require("discord.js");
const Discord = require("discord.js");
const client = new Client();
const { MessageEmbed } = require("discord.js");
const PREFIX = "!";
const bot = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;
const botname = "GalackGen";
const prefix1 = "+";
var fs = require("fs");
var lineReader = require("line-reader");
var async = require("async");
const firstline = require("firstline");
const generated = new Set();
var os = require("os");
const chalk = require('chalk');

  bot.on('ready', msg => {
  console.log("");                                   
  console.log((chalk.cyan(`                                            #####                                      #####                `)));
  console.log((chalk.cyan(`                                           #     #   ##   #        ##    ####  #    # #     # ###### #    # `)));
  console.log((chalk.cyan(`                                           #        #  #  #       #  #  #    # #   #  #       #      ##   # `)));
  console.log((chalk.cyan(`                                           #  #### #    # #      #    # #      ####   #  #### #####  # #  # `)));
  console.log((chalk.cyan(`                                           #     # ###### #      ###### #      #  #   #     # #      #  # # `)));
  console.log((chalk.cyan(`                                           #     # #    # #      #    # #    # #   #  #     # #      #   ## `)));
  console.log((chalk.cyan(`                                            #####  #    # ###### #    #  ####  #    #  #####  ###### #    # `)));
  console.log("");                                  
  console.log((chalk.yellow(`                                                               Crée par GalackQSM#7926 !`)));  
  console.log((chalk.yellow(`                                                                © 2020 GalackQSM, Inc.`))); 
  console.log("");                                   
  console.log((chalk.red(`                                                         Discord: https://discord.gg/XH7zQ8s`)));   
  console.log((chalk.red(`                                                       Twitter: https://twitter.com/Galack_QSM`)));   
  console.log((chalk.red(`                                                        Github: https://github.com/GalackQSM`)));   
  console.log((chalk.red(`                                                        Youtube: https://youtube.com/GalackQSM`)));   
  console.log("");                                  

  console.log(`Statistiques globales : \n\nLe bot a un total de ${bot.guilds.cache.size} serveurs. \nPour un total de ${bot.users.cache.size} membres.`)
  console.log("Connecté en tant que " + bot.user.id + " | Prefix : " + prefix1 + " | Nombre de Serveurs "+ bot.guilds.cache.size +" | Nombres de salons "+ bot.channels.cache.size +" | Utilisateur totaux "+ bot.users.cache.size +" | Nombre d'emojis totaux "+ bot.emojis.cache.size +'');
  bot.user.setActivity("+help - GalackGen");
});

bot.on("message", message => {
    if (message.channel.id === config.botChannel) { 
        if (message.author.bot) return;
        var command = message.content
            .toLowerCase()
            .slice(prefix.length)
            .split(" ")[0];

        if (command === "gen") {
            if (generated.has(message.author.id)) {
                message.channel.send(
                    "Vous avez un temps de récupération de 15 minutes! - " +
                    message.author.tag
                );
            } else {
                let messageArray = message.content.split(" ");
                let args = messageArray.slice(1);
                if (!args[0])
                    return message.reply("Veuillez fournir un service!");
                var fs = require("fs");
                const filePath = __dirname + "/comptes/" + args[0] + ".txt";

                const embed = {
                    title: "En rupture de stock!",
                    description: "Le service que vous avez demandé est actuellement en rupture de stock!",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://i.imgur.com/Bl8zjHy.png",
                        text: "Développé par GalackQSM#7926"
                    },
                    image: {url:"https://i.imgur.com/XuVrWQh.png"},
                    author: {
                        name: botname + " - générateur de compte",
                        url: "https://discord.gg/XH7zQ8s",
                        icon_url: bot.displayAvatarURL
                    },
                    fields: []
                };

                fs.readFile(filePath, function (err, data) {
                    if (!err) {
                        data = data.toString();
                        var position = data.toString().indexOf("\n");
                        var firstLine = data.split("\n")[0];
                        if(position == -1)
                        return message.channel.send({ embed });
                        message.author.send(firstLine);
                        if (position != -1) {
                            data = data.substr(position + 1);
                            fs.writeFile(filePath, data, function (err) {
                                const embed = {
                                    title: "Compte " + args[0] + " généré!",
                                    description: "Le compte de votre service demandé a été envoyé en tant que DM!",
                                    color: 0xff033d,
                                    timestamp: new Date(),
                                    footer: {
                                        icon_url: "https://i.imgur.com/Bl8zjHy.png",
                                        text: "Développé par GalackQSM#7926"
                                    },
                                    image: {
                                        url:
                                            "https://i.imgur.com/X1QIYyS.gif"
                                    },
                                    author: {
                                        name: botname + " - générateur de compte",
                                        url: "https://discord.gg/XH7zQ8s",
                                        icon_url: bot.displayAvatarURL
                                    },
                                    fields: []
                                };
                                message.channel.send({ embed });
                                generated.add(message.author.id);
                                setTimeout(() => {
                                    generated.delete(message.author.id);
                                }, 150000); // 86400000 = 24 H , 150000 = 15 Min
                                if (err) {
                                    console.log(err);
                                }
                            });
                        } else {
                            message.channel.send("En rupture de stock!");
                        }
                    } else {
                        const embed = {
                            title: "Service non trouvé!",
                            description: "Le service demandé est introuvable!",
                            color: 0xff033d,
                            timestamp: new Date(),
                            footer: {
                                icon_url:
                                    "https://i.imgur.com/Bl8zjHy.png",
                                text: "Développé par GalackQSM#7926"
                            },
                            image: {url:"https://i.imgur.com/XuVrWQh.png"},
                            author: {
                                     name: botname + " - générateur de compte",
                                     url: "https://discord.gg/XH7zQ8s",
                                icon_url: bot.displayAvatarURL
                            },
                            fields: []
                        };
                        message.channel.send({ embed });
                        return;
                    }
                });
            }
        }
        else
            if (command === "stats") {
                const embed = {
                    title: "Stats de " + botname,
                    description: "Nombre total d'utilisateurs: `" + bot.users.cache.size + " membres`\nNombre total de salon: `" + bot.channels.cache.size+ " salons`\nNombre total d'émoji: `" + bot.emojis.cache.size+ " émojis`\nNombre total de serveur: `" + bot.guilds.cache.size+ " serveur(s)`",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://i.imgur.com/Bl8zjHy.png",
                        text: "Développé par GalackQSM#7926"
                    },
                    image: {url:"https://i.imgur.com/XuVrWQh.png"},
                    author: {
                         name: botname + " - générateur de compte",
                         url: "https://discord.gg/XH7zQ8s",
                        icon_url: bot.displayAvatarURL
                    },
                    fields: []
                };
                message.channel.send({ embed });
            }
        
            if (command === "help") {

                const embed = {
                    color: 0xff033d,
                    title: botname + ' - générateur de compte',
                    url: 'https://discord.gg/XH7zQ8s',
                    author: {
                        name: 'Liste des commandes',
                        url: 'https://discord.gg/XH7zQ8s',
                    },
                    image: {url:"https://i.imgur.com/XuVrWQh.png"},

                    description: '**Ceci est une liste de toutes les commandes**',
                    fields: [
                        {
                            name: 'Générer des comptes',
                            value: "Exemple: `" + prefix1 +"gen <Nom du service>`",
                        },
                        {
                            name: 'Créer un service',
                            value: "Exemple: `" + prefix1 +"create <Nom du service>`",
                        },
                        {
                            name: 'Notifier les restocks de compte',
                            value: "Exemple: `" + prefix1 +"restock <Nom du service> <Nombre de compte>`",
                        },
                        {
                            name: 'Ajouter des comptes',
                            value: "Exemple: `" + prefix1 +"add <mail:pass> <Nom du service>`",
                        },
                        {
                            name: 'Afficher les statistiques du bot ' + botname,
                            value: "Exemple: `" + prefix1 +"stats`",
                        },
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: 'Développé par GalackQSM#7926',
                        icon_url: 'https://i.imgur.com/Bl8zjHy.png',
                    },
                };
                message.channel.send({ embed });
            }

        if (command === "add") {
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.reply("Vous n'avez pas les autorisations pour faire cela!");
            var fs = require("fs");
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            var account = args[0]
            var service = args[1]
            if(!account) return message.reply("Fournissez d'abord une chaîne de compte formatée!")
            if(!service) return message.reply("Fournir d'abord un service!")
            const filePath = __dirname + "/comptes/" + args[1] + ".txt";
            fs.appendFile(filePath, os.EOL + args[0], function (err) {
                if (err) return console.log(err);
                const embed = {
                    title: "Compte ajouté!",
                    description: "Compte ajouté avec succès à `" + service + "`!",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://i.imgur.com/Bl8zjHy.png",
                        text: "Développé par GalackQSM#7926"
                    },
                    image: {url:"https://i.imgur.com/XuVrWQh.png"},
                    author: {
                        name: botname + " - générateur de compte",
                        url: "https://discord.gg/XH7zQ8s",
                        icon_url: bot.displayAvatarURL
                    },
                    fields: []
                };
                message.channel.send({ embed });
            });


        }
        if (command === "create") {
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.reply("Vous n'avez pas les autorisations pour faire cela!");
            var fs = require("fs");
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            const filePath = __dirname + "/comptes/" + args[0] + ".txt";
            fs.writeFile(filePath, 'GalackQSM:GalackQSM', function (err) {
                if (err) throw err;
                const embed = {
                    title: "Service créé!",
                    description: "Service créé avec succès `" + args[0] + "`!",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://i.imgur.com/Bl8zjHy.png",
                        text: "Développé par GalackQSM#7926"
                    },
                    image: {url:"https://i.imgur.com/XuVrWQh.png"},
                    author: {
                        name: botname + " - générateur de compte",
                        url: "https://discord.gg/XH7zQ8s",
                        icon_url: bot.displayAvatarURL
                    },
                    fields: []
                };
                message.channel.send({ embed });
            });
        }
        if (command === "restock") {
            const embed = {
                title: "Merci de mettre un service!",
                description: "Veuillez fournir le nom du service réapprovisionné!",
                color: 0xff033d,
                timestamp: new Date(),
                footer: {
                    icon_url:
                        "https://i.imgur.com/Bl8zjHy.png",
                    text: "Développé par GalackQSM#7926"
                },
                 image: {url:"https://i.imgur.com/XuVrWQh.png"},
                author: {
                    name: botname + " - générateur de compte ",
                    url: "https://discord.gg/XH7zQ8s",
                    icon_url: bot.displayAvatarURL
                },
                fields: []
            };
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.reply("Vous n'avez pas les autorisations pour faire cela!");
            if (!args[0])
            {
                return message.channel.send({ embed });
            }
            if (!args[1])
            {
                return message.channel.send({ embed });
            }
            else {
            message.channel.send("@everyone\n● Restock de compte: **" + args[0] + "**\n● Nombre de compte restock: **" + args[1] + " compte(s)**\n● Restock par: " + "<@" + message.author.id +">");
            }
        }
    }
});




client.on("ready", () => {
  let myGuild = client.guilds.cache.get("756700317818683454");
  let memberCount = myGuild.memberCount;
  client.user.setActivity(memberCount + ` אנשים בשרת `, { type: "WATCHING" });
  console.log(`${client.user.tag} is online`);
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
  let myguild = client.guilds.cache.get("730070360124555277");
  let channel = myguild.channels.cache.get("789258184078393345");

  const command = args.shift().toLowerCase();
  if (command === "hm") {
    const sayMessage = args.join(" ");
    let embed = new Discord.MessageEmbed()
      .setColor("#FCFCFC")
      .setAuthor(message.author.tag + " המלצה זאת נפתחה על ידי")
      .setTitle("מערכת המלצות על שחקנים")
      .setDescription(`${sayMessage}`);
    message.delete().catch(O_o => {});
    channel.send(embed).then(messageReaction => {
      messageReaction.react("✅");
      messageReaction.react("❌");
    });
  }
});

client.login("NzY0NDg1OTY5NjQyMzg5NTE1.X4G9Cg.4krx0IrD87rDOWLXiVjYkPaP-_M");
