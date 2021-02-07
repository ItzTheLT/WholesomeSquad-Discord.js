const cmd_info = require("../lib/commands_info.json");
module.exports.config = {
	name: "help",
    aliases: [],
    type: "Ultility",
    argument: cmd_info.help.argument,
    description: cmd_info.help.description,
}

const Discord = require("discord.js");
const config = require("../config.json");
const prefix = config.prefix;
module.exports.run = async (client, message, args) => {
    var commands = client.commands.array();
    var argument;
    if (args[0]) { argument = args[0].toLowerCase(); }
    const embed = new Discord.MessageEmbed()
    .setColor(config.main_color)
    .setTitle(":grey_question: Help");
    if (!args[0]) {
        embed.setDescription("Don't know what to do with me? Don't worry, here is Help!\nYou can use `"+prefix+"help [ group | name ]` to see a group commands list or a command info!");
        embed.addField(':joy: Fun `' + prefix + 'help fun`', 'Some very fun and epic commands to trigger yourself or your friends');
        embed.addField(':frame_photo: Image `' + prefix + 'help image`', 'Give you random image from trusty sources');
        embed.addField(':video_game: Game API `' + prefix + 'help game`', 'Stats checker for games like Minecraft, Hypixel (Minecraft), osu! (Official)');
        embed.addField(':hammer_pick: Moderation `' + prefix + 'help moderation`', 'The power of BAN HAMMER never makes me disappointed.');
        embed.addField(':gear: Ultility `' + prefix + 'help ultility`', 'Ultility commands');
        embed.setTimestamp();
        embed.setFooter(`${config.bot_name} >> Help`, config.bot_logo);
        message.channel.send(embed);
    } else {
        if (argument == "fun") {
            embed.setDescription(":joy: **Fun commands**\nSome very fun and epic commands to trigger yourself or your friends.");
            commands.forEach(async (cmd) => {
                if (cmd.config.type == "Fun") {
                    var aliases;
                    if (cmd.config.aliases.length == 0) { aliases = `*none*`} else { aliases = '`'+cmd.config.aliases+'`'}
                    embed.addField(`${cmd.config.name}`+' `'+prefix+cmd.config.argument+'`',`**>** ${cmd.config.description}\n**>** Aliases: ${aliases}`, true);
                }
            });
            embed.setTimestamp();
            embed.setFooter(`${config.bot_name} >> Help >> Fun`, config.bot_logo);
            message.channel.send(embed);
        } else if (argument == "image") {
            embed.setDescription(":frame_photo: **Image commands**\nGive you random image from trusty sources.");
            commands.forEach(async (cmd) => {
                if (cmd.config.type == "Image") {
                    var aliases;
                    if (cmd.config.aliases.length == 0) { aliases = `*none*`} else { aliases = '`'+cmd.config.aliases+'`'}
                    embed.addField(`${cmd.config.name}`+' `'+prefix+cmd.config.argument+'`',`**>** ${cmd.config.description}\n**>** Aliases: ${aliases}`, true);
                }
            });
            embed.setTimestamp();
            embed.setFooter(`${config.bot_name} >> Help >> Image`, config.bot_logo);
            message.channel.send(embed);
        } else if (argument == "game") {
            embed.setDescription(":video_game: **Game API commands**\nStats checker for games like Minecraft, Hypixel (Minecraft), osu! (Official).");
            commands.forEach(async (cmd) => {
                if (cmd.config.type == "Game API") {
                    var aliases;
                    if (cmd.config.aliases.length == 0) { aliases = `*none*`} else { aliases = '`'+cmd.config.aliases+'`'}
                    embed.addField(`${cmd.config.name}`+' `'+prefix+cmd.config.argument+'`',`**>** ${cmd.config.description}\n**>** Aliases: ${aliases}`, true);
                }
            });
            embed.setTimestamp();
            embed.setFooter(`${config.bot_name} >> Help >> Game API`, config.bot_logo);
            message.channel.send(embed);
        } else if (argument == "moderation") {
            embed.setDescription(":hammer_pick: **Moderation commands**\nThe power of BAN HAMMER never makes me disappointed.");
            commands.forEach(async (cmd) => {
                if (cmd.config.type == "Moderation") {
                    var aliases;
                    if (cmd.config.aliases.length == 0) { aliases = `*none*`} else { aliases = '`'+cmd.config.aliases+'`'}
                    embed.addField(`${cmd.config.name}`+' `'+prefix+cmd.config.argument+'`',`**>** ${cmd.config.description}\n**>** Aliases: ${aliases}`, true);
                }
            });
            embed.setTimestamp();
            embed.setFooter(`${config.bot_name} >> Help >> Moderation`, config.bot_logo);
            message.channel.send(embed);
        } else if (argument == "ultility") {
            embed.setDescription(":gear: **Ultility commands**\nUltility commands");
            commands.forEach(async (cmd) => {
                if (cmd.config.type == "Ultility") {
                    var aliases;
                    if (cmd.config.aliases.length == 0) { aliases = `*none*`} else { aliases = '`'+cmd.config.aliases+'`'}
                    embed.addField(`${cmd.config.name}`+' `'+prefix+cmd.config.argument+'`',`**>** ${cmd.config.description}\n**>** Aliases: ${aliases}`, true);
                }
            });
            embed.setTimestamp();
            embed.setFooter(`${config.bot_name} >> Help >> Ultility`, config.bot_logo);
            message.channel.send(embed);
        } else {
            var loop_break;
            commands.forEach(async (cmd) => {
                if (cmd.config.name == argument) {
                    var aliases;
                    embed.setDescription('**>>** Help for command: '+'`'+cmd.config.name+'`');
                    if (cmd.config.aliases.length == 0) { aliases = `*none*`} else { aliases = '`'+cmd.config.aliases+'`'}
                    embed.addField(`${cmd.config.name}`+' `'+prefix+cmd.config.argument+'`',`**>** ${cmd.config.description}\n**>** Aliases: ${aliases}`, true);
                    embed.setTimestamp();
                    embed.setFooter(`${config.bot_name} >> Help >> ${cmd.config.type}`, config.bot_logo);
                    message.channel.send(embed);
                    loop_break = "break";
                }
            });
            if (loop_break != "break") {
                embed.setDescription(':x: Unable to find this command: '+'`'+args[0]+'`');
                embed.setTimestamp();
                embed.setFooter(`${config.bot_name} >> Help`, config.bot_logo);
                message.channel.send(embed);
            }
        }
    }
}