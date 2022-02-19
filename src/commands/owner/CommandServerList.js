const { MessageActionRow, MessageButton } = require('discord.js');
const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
const extra = require('../../extra.js')
module.exports = new Command({
	name: 'list',
	aliases: ['l'],
	description: "4",
	run: async (client, message, args) => {
		if(message.author.id != '539945189901336586') return	
		const guild = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).first(30);
		let u = message.author
		const footer = new Embed(u)
			.setDescription(guild.map((guild, index) => `#**${index + 1}**  \`${guild.name}\` | ${guild.memberCount} Members | \`${guild.id}\``).join('\n'))
		message.reply({ embeds: [footer] })
	}

})