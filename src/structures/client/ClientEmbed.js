const Discord = require("discord.js");

module.exports = class Embed extends(
	Discord.MessageEmbed
) {
	constructor(user, data = {}) {
		super(data);
		this.setTimestamp();
		this.setColor(process.env.COLOR);
		this.setFooter({
			text: `${user.tag}`
		})
	}
};
