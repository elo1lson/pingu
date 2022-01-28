const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')

module.exports = new Command({
	category: 'util',
	name: 'ping',
	description: 'Mostra o ping do Bot',
	aliases: ['pin', 'botping'],
	usage: 'none',
	author: 'tomori',
	run: async (client, message, args) => {
		var user = message.author
		var footer = user.avatarURL({
			dinamyc: true
		})

		if (footer === null) footer = client.user.displayAvatarURL({
			dinamyc: true
		})

		var embed = new Discord.MessageEmbed()
			.setTitle(`Ping!`)
			.setColor('#FF0000')
			.setDescription(`Meu ping está em: ${client.ws.ping}`)
			.setFooter(`By toto`, `${footer}`)
		console.log(message.channel.type)
		message.reply({ embeds: [embed] }).then(m => {
			var embedtwo = new Discord.MessageEmbed()
				.setTitle('🏓 Pong!')
				.setColor('#FF0000')
				.setDescription(`💻 | Api: ${m.createdTimestamp - message.createdTimestamp}ms\n⏱ | Gateway: ${client.ws.ping}ms\n🛰 |  Shard: ${client.cluster.id}`)
				.setFooter(`${message.author}`, `${footer}`)
				.setTimestamp()
			m.edit({ embeds: [embedtwo] })
			m.react('🖥')
		})
	}
})