const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;
const botname = "Generator";
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

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
const http = require("http");
setInterval(() => {
  http.get(`https://account-generator2.glitch.me/`);
}, 224000);

  bot.on('ready', msg => {
  console.log("");                                   
           

  console.log(`Global stats : \n\nThe bot has a total of ${bot.guilds.cache.size} serveurs. \nFor a total of ${bot.users.cache.size} membres.`)
  console.log("Generator " + bot.user.id + " | Prefix : " + prefix1 + " | Number of Servers "+ bot.guilds.cache.size +" | User totals "+ bot.users.cache.size +'');
  bot.user.setActivity("!help - J0N7TH7N#0894");
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
                const filePath = __dirname + "/accounts/" + args[0] + ".txt";

                const embed = {
                    title: "Out of stock!",
                    description: "The service you requested is currently out of stock!",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png",
                        text: "Generator MADE BY J0N7TH7N#0894"
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
                                        text: "J0N7TH7N#0894"
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
                                text: "J0N7TH7N#0894"
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
                    title: "Stats " + botname,
                    description: "Total number of users : `" + bot.users.cache.size + " membres`\nTotal number of servers : `" + bot.guilds.cache.size+ " server(s)`",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png",
                        text: "DryZex Generator"
                    },
                    image: {url:"https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png"},
                    author: {
                         name: botname + " - account generator",
                        icon_url: bot.displayAvatarURL
                    },
                    fields: []
                };
                message.channel.send({ embed });
            }
        
            if (command === "help") {

                const embed = {
                    color: 0xff033d,
                    title: botname + ' - account generator',
                    author: {
                        name: 'List of commands',
                    },
                    image: {url:"https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png"},

                    description: '**This is a list of all commands**',
                    fields: [
                        {
                            name: 'Generate accounts',
                            value: "Exemple: `" + prefix1 +"gen <Service name>`",
                        },
                        {
                            name: 'Create a service',
                            value: "Exemple: `" + prefix1 +"create <Service name>`",
                        },
                        {
                            name: 'Notify account restocks',
                            value: "Exemple: `" + prefix1 +"restock <Service name> <Number of accounts>`",
                        },
                        {
                            name: 'Add accounts',
                            value: "Exemple: `" + prefix1 +"add <mail:pass> <Service name>`",
                        },
                        {
                            name: 'View bot stats ' + botname,
                            value: "Exemple: `" + prefix1 +"stats`",
                        },
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: 'DryZex Generator',
                        icon_url: 'https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png',
                    },
                };
                message.channel.send({ embed });
            }

        if (command === "add") {
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.reply("You not have the permissions to do this!");
            var fs = require("fs");
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            var account = args[0]
            var service = args[1]
            if(!account) return message.reply("Provide a formatted account string first!")
            if(!service) return message.reply("Provide service first!")
            const filePath = __dirname + "/accounts/" + args[1] + ".txt";
            fs.appendFile(filePath, os.EOL + args[0], function (err) {
                if (err) return console.log(err);
                const embed = {
                    title: "Account added!",
                    description: "Account successfully added to `" + service + "`!",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png",
                        text: "DryZex Generator"
                    },
                    image: {url:"https://cdn.discordapp.com/attachments/755771975946862722/790696237808353290/16085870538602755590204772825719.gif"},
                    author: {
                        name: botname + " - account generator",
                        icon_url: bot.displayAvatarURL
                    },
                    fields: []
                };
                message.channel.send({ embed });
            });


        }
        if (command === "create") {
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.reply("You don't have the permissions to do this!");
            var fs = require("fs");
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            const filePath = __dirname + "/accounts/" + args[0] + ".txt";
            fs.writeFile(filePath, 'email:password', function (err) {
                if (err) throw err;
                const embed = {
                    title: "Service created!",
                    description: "Service created successfully `" + args[0] + "`!",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png",
                        text: "DryZex Generator"
                    },
                    image: {url:"https://cdn.discordapp.com/attachments/755771975946862722/790696237808353290/16085870538602755590204772825719.gif"},
                    author: {
                        name: botname + " - account generator",
                        icon_url: bot.displayAvatarURL
                    },
                    fields: []
                };
                message.channel.send({ embed });
            });
        }
        if (command === "restock") {
            const embed = {
                title: "Thank you for putting a service!",
                description: "Please provide the name of the replenished service!",
                color: 0xff033d,
                timestamp: new Date(),
                footer: {
                    icon_url:
                        "https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png",
                    text: "DryZex Generator"
                },
                 image: {url:"https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png"},
                author: {
                    name: botname + " - account generator ",
                    icon_url: bot.displayAvatarURL
                },
                fields: []
            };
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.reply("You don't have the permissions to do this!");
            if (!args[0])
            {
                return message.channel.send({ embed });
            }
            if (!args[1])
            {
                return message.channel.send({ embed });
            }
            else {
            message.channel.send("@everyone\n● Account restock: **" + args[0] + "**\n● Number of restock accounts: **" + args[1] + " account(s)**\n● Restock by: " + "<@" + message.author.id +">");
            }
        }
    }
});

bot.login(config.token);
