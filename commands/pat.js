const cmd_info = require("../lib/commands_info.json");
module.exports.config = {
	name: "pat",
	aliases: [],
    type: "Fun",
    argument: cmd_info.pat.argument,
    description: cmd_info.pat.description,
}

const Discord = require("discord.js");
const Neko = require("nekos.life");
const neko = new Neko();
const config = require("../config.json");
const prefix = config.prefix;

module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
    if (!args[0] || !user) return message.reply("who do you want to pat?")
    var body = await neko.sfw.pat();
    var reply;
    if (user.id == client.user.id) { reply = `${message.author} patted me! UwU` } else { reply = `${message.author} patted ${user}! Awww` }
    const embed = new Discord.MessageEmbed()
    .setColor(config.main_color)
    .setDescription(reply)
    .setImage(body.url);
    message.channel.send(embed);
}