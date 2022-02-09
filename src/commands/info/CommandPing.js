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
		if(args.lenght > 0) return
		let u = message.author
		var embed = new Embed(u)
			.setTitle(`Ping!`)
			.setDescription(`Meu ping está em: ${client.ws.ping}`)
		try {
			message.reply({ embeds: [embed] }).then(m => {
				var embedtwo = new Embed(u)
					.setTitle('🏓 Pong!')
					.setDescription(`💻 | Api: ${m.createdTimestamp - message.createdTimestamp}ms\n⏱ | Gateway: ${client.ws.ping}ms\n🛰 | Shard: ${client.cluster.id}`)
				m.edit({ embeds: [embedtwo] })
				m.react('🖥')
			})
		} catch (e) {
			console.log('Erro no comando Ping: ' + e)
			message.reply({ content: '❌ Ocorreu um erro ao tentar executar esse comando' })
		}
	}
})
