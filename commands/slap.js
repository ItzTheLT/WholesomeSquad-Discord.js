const cmd_info = require("../lib/commands_info.json");
module.exports.config = {
	name: "slap",
	aliases: [],
    type: "Fun",
    argument: cmd_info.slap.argument,
    description: cmd_info.slap.description,
}

const Discord = require("discord.js");
const Neko = require("nekos.life");
const neko = new Neko();
const config = require("../config.json");
const prefix = config.prefix;

module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
    if (!args[0] || !user) return message.reply("who do you want to slap?")
    var body = await neko.sfw.slap();
    var reply;
    if (user.id == client.user.id) { reply = `${message.author} slapped me! Ouch!` } else { reply = `${message.author} slapped ${user}! OOF` }
    const embed = new Discord.MessageEmbed()
    .setColor(config.main_color)
    .setDescription(reply)
    .setImage(body.url);
    message.channel.send(embed);
}