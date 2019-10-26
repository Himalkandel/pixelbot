var Discord = require("discord.js");
var bot = new Discord.Client();

const toTime = require('to-time');
const token = "NjM2NzM0NjQ0NzY2NzY5MTYy.XbN96A.1ApTSah_v8FwXN-rdvA0OFf7yGI";
const prefix = "!"

bot.on('ready', () => {
    console.log('This bot is now online!')
}); 


bot.on("message", (msg) => {
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    function cmd(command) {
        if (!msg.content.toLowerCase().startsWith(command)) { return false; }
        return true
    }
    function sendmsg(text) {
        msg.channel.send(text)
    }
    if(msg.content.startsWith(prefix) == 0) {
        // non-prefix commands
        if (cmd("hi")) {
            sendmsg("Hello, how are you?");
        }
        if (cmd("who made you?")) {
            sendmsg("pixelatedcontent / himal!");
        }
        if (cmd("im good how are you?")) {
            sendmsg("im good!");
        }
        if (cmd("wanna talk?")) {
            sendmsg("sure! but I am limited!");
        }
        if (cmd("what do you do?")) {
            sendmsg("well I am currently being developed right now!");
        }
        if (cmd("bye")) {
            sendmsg("ok cya!");
        }
        if (cmd("what is your prefix")) {
            sendmsg("my prefix is !");
        }
        if (cmd("who created this?")) {
            sendmsg("bluntboomer - youtuber and pixelatedcontent - youtuber")
        }
    } else {
        //prefix commands start here
        if (command === "ping") {
            sendmsg("pong!");
        }
        if (command === "info") {
            sendmsg("I am currently being set up, sorry!");
        }
        if (command === "dab") {
            sendmsg("le epic dab");
        }
        if (command === "settimer") {
            try {
            sendmsg(`Timer: "${args[0]}" has been created for ${toTime(args[1]).humanize().toLowerCase()}.`);
            setTimeout(() => {
                sendmsg(`@everyone Timer: "${args[0]}" has finished after ${toTime(args[1]).humanize().toLowerCase()}.`);
            }, toTime(args[1]).ms());
            } catch(e) {
                return sendmsg(`error: ${e.message}`);
            }
        }
    }
});

bot.login(process.env.BOT_TOKEN);
