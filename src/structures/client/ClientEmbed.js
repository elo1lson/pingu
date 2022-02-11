const Discord = require("discord.js");

module.exports = class Embed extends(
	Discord.MessageEmbed
) {
	constructor(user, data = {}) {
		super(data);
		this.setColor(process.env.COLOR);
		this.setFooter({
			text: `${user.tag}`,
			url: `${client.user.displayAvatarURL()}`
		})
	}
};
