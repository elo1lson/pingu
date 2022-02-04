const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
module.exports = new Command({
	caregoty: 'Info',
	name: 'ping',
	description: 'Mostra o ping do Bot',
	aliases: ['pin', 'botping'],
	usage: 'none',
	author: 'tomori',
	run: async (client, message, args) => {
		let u = message.author
		var embed = new Embed(u)
			.setTitle(`Ping!`)
			.setDescription(`Meu ping está em: ${client.ws.ping}`)

		message.reply({ embeds: [embed] }).then(m => {
			var embedtwo = new Embed(u)
				.setTitle('🏓 Pong!')
				.setDescription(`💻 | Api: ${m.createdTimestamp - message.createdTimestamp}ms\n⏱ | Gateway: ${client.ws.ping}ms\n🛰 | Shard: ${client.shards}`)
			m.edit({ embeds: [embedtwo] })
			m.react('🖥')
		})
	}
})