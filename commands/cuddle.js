const cmd_info = require("../lib/commands_info.json");
module.exports.config = {
	name: "cuddle",
	aliases: [],
    type: "Fun",
    argument: cmd_info.cuddle.argument,
    description: cmd_info.cuddle.description,
}

const Discord = require("discord.js");
const Neko = require("nekos.life");
const neko = new Neko();
const config = require("../config.json");
const prefix = config.prefix;

module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
    if (!args[0] || !user) return message.reply("who do you want to cuddle? :hugging:")
    var body = await neko.sfw.cuddle();
    var reply;
    if (user.id == client.user.id) { reply = `${message.author} cuddled me! Woah :blush:` } else { reply = `${message.author} cuddled ${user}! :hugging:` }
    const embed = new Discord.MessageEmbed()
    .setColor(config.main_color)
    .setDescription(reply)
    .setImage(body.url);
    message.channel.send(embed);
}