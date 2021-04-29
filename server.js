const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;
const botname = "DS - GENERATOR";
const prefix1 = "--";
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
const http = require("https");
setInterval(() => {
  http.get(`https://account-generator2.glitch.me/`);
}, 22400);

  bot.on('ready', msg => {
  console.log("");                                   
           

  console.log(`Global stats : \n\nThe bot has a total of ${bot.guilds.cache.size} serveurs. \nFor a total of ${bot.users.cache.size} membres.`)
  console.log("Generador " + bot.user.id + " | Prefijo : " + prefix1 + " | Numero de servers "+ bot.guilds.cache.size +" | Usuarios Totales "+ bot.users.cache.size +'');
  bot.user.setActivity("Made by DenSiTyMoDzZ#0055");
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
                    "Tienes un tiempo de recuperación de 15 minutos! - " +
                    message.author.tag
                );
            } else {
                let messageArray = message.content.split(" ");
                let args = messageArray.slice(1);
                if (!args[0])
                    return message.reply("Proporcione un tipo de cuenta!");
                var fs = require("fs");
                const filePath = __dirname + "/accounts/" + args[0] + ".txt";

                const embed = {
                    title: "¡Agotado!",
                    description: "El servicio que solicitaste está agotado actualmente!",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://cdn.discordapp.com/avatars/376400173238190080/a_0f1ed2962460781c4fe44c6a013d981f.gif?size=1024",
                        text: "Bot made by BIBIL#0001"
                    },
                    image: {url:"https://cdn.discordapp.com/avatars/376400173238190080/a_0f1ed2962460781c4fe44c6a013d981f.gif?size=1024"},
                    author: {
                        name: botname + " - PREMIUM BOT",
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
                                    title: "Cuenta " + args[0] + " --gen",
                                    description: "La cuenta del servicio solicitado se ha enviado como DM.!",
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
                                        name: botname + " - PREMIUM BOT",
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
                            message.channel.send("¡Agotado!");
                        }
                    } else {
                        const embed = {
                            title: "Servicio no encontrado!",
                            description: "No se puede encontrar el servicio solicitado!",
                            color: 0xff033d,
                            timestamp: new Date(),
                            footer: {
                                icon_url:
                                    "https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png",
                                text: "J0N7TH7N#0894"
                            },
                            image: {url:"https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png"},
                            author: {
                                     name: botname + " - PREMIUM BOT",
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
                    title: "Estadisticas " + botname,
                    description: "Un total de : `" + bot.users.cache.size + " miembro(s)`\nUn total de : `" + bot.guilds.cache.size+ " server(s)`",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png",
                        text: "Generator - MADE BY DenSiTyMoDzZ#0055"
                    },
                    image: {url:"https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png"},
                    author: {
                         name: botname + " - PREMIUM BOT",
                        icon_url: bot.displayAvatarURL
                    },
                    fields: []
                };
                message.channel.send({ embed });
            }
        
            if (command === "help") {

                const embed = {
                    color: 0xff033d,
                    title: botname + ' - PREMIUM BOT',
                    author: {
                        name: 'Lista de Comandos',
                    },
                    image: {url:"https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png"},

                    description: '**Esta es una lista de todos los comandos**',
                    fields: [
                        {
                            name: 'Generar cuentas',
                            value: "Ejemplo: `" + prefix1 +"gen <Nombre Cuenta>`",
                        },
                        {
                            name: 'Crea un servicio',
                            value: "Ejemplo: `" + prefix1 +"create <Nombre Cuenta>`",
                        },
                        {
                            name: 'Notificar reabastecimientos de cuentas',
                            value: "Ejemplo: `" + prefix1 +"restock <Nombre Cuenta> <Número de Cuentas>`",
                        },
                        {
                            name: 'Añadir Cuentas',
                            value: "Ejemplo: `" + prefix1 +"add <mail:pass> <Nombre Cuenta>`",
                        },
                        {
                            name: 'Ver estadísticas de bot ' + botname,
                            value: "Ejemplo: `" + prefix1 +"stats`",
                        },
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: 'Generator - MADE BY DenSiTyMoDzZ#0055',
                        icon_url: 'https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png',
                    },
                };
                message.channel.send({ embed });
            }

        if (command === "add") {
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.reply("No tienes los permisos para hacer esto!");
            var fs = require("fs");
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            var account = args[0]
            var service = args[1]
            if(!account) return message.reply("¡Primero proporcione una cadena de cuenta formateada!")
            if(!service) return message.reply("Brindar servicio primero!")
            const filePath = __dirname + "/accounts/" + args[1] + ".txt";
            fs.appendFile(filePath, os.EOL + args[0], function (err) {
                if (err) return console.log(err);
                const embed = {
                    title: "Cuenta agregada!",
                    description: "Cuenta agregada correctamente a `" + service + "`!",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png",
                        text: "Generator - MADE BY DenSiTyMoDzZ#0055"
                    },
                    image: {url:"https://cdn.discordapp.com/attachments/755771975946862722/790696237808353290/16085870538602755590204772825719.gif"},
                    author: {
                        name: botname + " - PREMIUM BOT",
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
                    title: "Servicio Creado",
                    description: "Servicio creado con éxito `" + args[0] + "`!",
                    color: 0xff033d,
                    timestamp: new Date(),
                    footer: {
                        icon_url:
                            "https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png",
                        text: "Generator - MADE BY DenSiTyMoDzZ#0055"
                    },
                    image: {url:"https://cdn.discordapp.com/attachments/755771975946862722/790696237808353290/16085870538602755590204772825719.gif"},
                    author: {
                        name: botname + " - PREMIUM BOT",
                        icon_url: bot.displayAvatarURL
                    },
                    fields: []
                };
                message.channel.send({ embed });
            });
        }
        if (command === "restock") {
            const embed = {
                title: "Gracias por poner un servicio!",
                description: "Proporcione el nombre del servicio reabastecido.",
                color: 0xff033d,
                timestamp: new Date(),
                footer: {
                    icon_url:
                        "https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png",
                    text: "Generator - MADE BY J0N7TH7N#0894"
                },
                 image: {url:"https://cdn.discordapp.com/attachments/755771975946862722/774016941948928010/Huskey_Logo.png"},
                author: {
                    name: botname + " - PREMIUM BOT ",
                    icon_url: bot.displayAvatarURL
                },
                fields: []
            };
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            if (!message.member.hasPermission("ADMINISTRATOR"))
                return message.reply("No tienes los permisos para hacer esto!");
            if (!args[0])
            {
                return message.channel.send({ embed });
            }
            if (!args[1])
            {
                return message.channel.send({ embed });
            }
            else {
            message.channel.send("@everyone\n● Reabastecimiento de cuenta: **" + args[0] + "**\n● Número de cuentas de reabastecimiento: **" + args[1] + " cuenta(s)**\n● Restablecido por: " + "<@" + message.author.id +">");
            }
        }
    }
});

bot.login(config.token);
