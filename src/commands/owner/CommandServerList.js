const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
module.exports = new Command({
	name: 'topservers',
	aliases: ['tops'],
	run: async (client, message, args) => {
		if(message.author.id != '539945189901336586') return	
		let guild = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).first(30);
		let u = message.author
		let embed = new Embed(u)
		embed.setDescription(guild.map((guild, index) => `🏴 **${index + 1}**  \`${guild.name}\`  (${guild.memberCount})`).join('\n'))
		message.reply({ embeds: [embed] }).then(m =>{
			m.react('👌')
		})
	}
})
	
