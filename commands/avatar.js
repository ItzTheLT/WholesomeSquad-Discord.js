const cmd_info = require("../lib/commands_info.json");
module.exports.config = {
	name: "avatar",
    aliases: [],
    type: "Image",
    argument: cmd_info.avatar.argument,
    description: cmd_info.avatar.description,
}

const Discord = require("discord.js");
const config = require("../config.json");
const prefix = config.prefix;

module.exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();
    if (!user) {
        var png = message.author.displayAvatarURL({format : "png"});
        var jpg = message.author.displayAvatarURL({format : "jpg"});
        var webp = message.author.displayAvatarURL({format : "webp"});
        var gif = message.author.displayAvatarURL({dynamic: true});
        const aembed = new Discord.MessageEmbed()
        .setColor(config.main_color)
        .setTitle(`Here is your avatar`)
        .setImage(message.author.displayAvatarURL({dynamic : true, size: 1024}))
        .setFooter(`${message.author.tag}'s avatar`);
        if (gif.endsWith(".gif")) {
            aembed.setDescription(`Download: [PNG](${png}) | [JPG](${jpg}) | [WEBP](${webp}) | [GIF](${gif})`);
        } else {
            aembed.setDescription(`Download: [PNG](${png}) | [JPG](${jpg}) | [WEBP](${webp})`);
        }
        message.channel.send(aembed);
    } else {
        const member = message.guild.member(user);
        if (member) {
            var png = user.displayAvatarURL({format : "png"});
            var jpg = user.displayAvatarURL({format : "jpg"});
            var webp = user.displayAvatarURL({format : "webp"});
            var gif = user.displayAvatarURL({dynamic: true});
            const aembed = new Discord.MessageEmbed()
            .setColor(config.main_color)
            .setTitle(`Here is ${user.tag}'s Avatar`)
            .setImage(user.displayAvatarURL({dynamic : true, size: 1024}));
            if (gif.endsWith(".gif")) {
              aembed.setDescription(`Download: [PNG](${png}) | [JPG](${jpg}) | [WEBP](${webp}) | [GIF](${gif})`);
            } else {
              aembed.setDescription(`Download: [PNG](${png}) | [JPG](${jpg}) | [WEBP](${webp})`);
            }
            message.channel.send(aembed);
        }
    }
}