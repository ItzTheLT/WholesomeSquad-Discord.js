const cmd_info = require("../lib/commands_info.json");
module.exports.config = {
	name: "kiss",
	aliases: [],
    type: "Fun",
    argument: cmd_info.kiss.argument,
    description: cmd_info.kiss.description,
}

const Discord = require("discord.js");
const Neko = require("nekos.life");
const neko = new Neko();
const config = require("../config.json");
const prefix = config.prefix;

module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
    if (!args[0] || !user) return message.reply("who do you want to kiss? :heart:")
    var body = await neko.sfw.kiss();
    var reply;
    if (user.id == client.user.id) { reply = `${message.author} kissed me! :smiling_face_with_3_hearts:` } else { reply = `${message.author} kissed ${user}! Awww cute :heart_eyes:` }
    const embed = new Discord.MessageEmbed()
    .setColor(config.main_color)
    .setDescription(reply)
    .setImage(body.url);
    message.channel.send(embed);
}