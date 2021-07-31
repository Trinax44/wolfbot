const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");

bot.on('ready', () => {
    bot.user.setPresence({game: {name : '/help |WolfBot'}})
    console.log("Bot Prêt !");
});

bot.login('');

bot.on('message', message => {
    if (message.content === "ping"){
        message.reply("pong");
        console.log('ping pong');
    }

    if (message.content === prefix + "help"){
        message.channel.sendMessage("Voici Les commandes du bot : \n -/help pour Afficher les commandes");
        console.log("Commande Help demandée !");
    }

});
