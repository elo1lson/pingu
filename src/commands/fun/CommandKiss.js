const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')

module.exports = new Command({
	name: 'kiss',
	category: 'Fun',
	description: 'Que tal dar um dar um beijinho naquele seu amigo?',
	aliases: ['beijar'],
	usage: {
		op: 'none',
		ob: '<usuario>'
	},
	author: 'tomori',
	run: async (client, message, args, prefix) => {
		let mencao = message.mentions.users.first()
		let array = [

			]
		let u = message.author
		let embed = new Embed(u)
		.setDescription(`${message.author} fez Kiss Kiss`)
		try {
			message.reply({ content: [embed] })
		} catch (e) {
			console.log('Erro no comando Hug: ' + e)
			message.reply({ content: '❌ Ocorreu um erro ao tentar executar esse comando' })
		}
	}
})
