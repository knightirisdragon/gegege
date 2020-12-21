const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;
const botname = "DryZex Generator";
const prefix1 = "!";
var fs = require("fs");
var lineReader = require("line-reader");
var async = require("async");
const firstline = require("firstline");
const generated = new Set();
var os = require("os");
var express = require('express');
var app = express();
const chalk = require('chalk');

  bot.on('ready', msg => {
  console.log("");                                   
                                

  console.log(`Global stats : \n\nThe bot has a total of ${bot.guilds.cache.size} serveurs. \nFor a total of ${bot.users.cache.size} membres.`)
  console.log("DryZex Generator " + bot.user.id + " | Prefix : " + prefix1 + " | Number of Servers "+ bot.guilds.cache.size +" | User totals "+ bot.users.cache.size +'');
  bot.user.setActivity("!help - DryZex Generator");
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
                    "You have a 15 minute recovery time! - " +
                    message.author.tag
                );
            } else {
                let messageArray = message.content.split(" ");
                let args = messageArray.slice(1);
                if (!args[0])
                    return message.reply("Please provide a service!");
                var fs = require("fs");
                const filePath = __dirname + "/comptes/" + args[0] + ".txt";

                const embed = {
                    title: "Out of stock!",
                    description: "The service you requested is currently out of stock!",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png",
                        text: "DryZex Generator"
                    },
                    image: {url:"https://images.app.goo.gl/G8LCDcWGqpFguHgi9"},
                    author: {
                        name: botname + " - account generator",
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
                                    title: "Account " + args[0] + " !gen",
                                    description: "The account for your requested service has been sent as DM!",
                                    color: 0xff033d,
                                    timestamp: new Date(),
                                    footer: {
                                        icon_url: "https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png",
                                        text: "DryZex Generator"
                                    },
                                    image: {
                                        url:
                                            "https://cdn.discordapp.com/attachments/755771975946862722/790696237808353290/16085870538602755590204772825719.gif"
                                    },
                                    author: {
                                        name: botname + " - account generator",
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
                            message.channel.send("Out of stock!");
                        }
                    } else {
                        const embed = {
                            title: "Service not found!",
                            description: "The requested service cannot be found!",
                            color: 0xff033d,
                            timestamp: new Date(),
                            footer: {
                                icon_url:
                                    "https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png",
                                text: "DryZexGenerator"
                            },
                            image: {url:"https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png"},
                            author: {
                                     name: botname + " - account generator",
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

bot.login(config.token);