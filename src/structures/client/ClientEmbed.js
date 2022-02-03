const Discord = require("discord.js");

module.exports = class ClientEmbed extends(
	Discord.MessageEmbed
) {
	constructor(bot, user, data = {}) {
		super(data);
		var link = user.avatarURL({dinamyc: true})
		if (link === null) {
		link = bot.avatarURL({dinamyc: true})
		}
		this.setTimestamp();
		this.setColor(process.env.COLOR);
		this.setFooter({
			text: `${user.tag}`,
			iconURL: `${link}`
		})
	}
};