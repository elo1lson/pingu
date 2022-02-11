const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
module.exports = new Command({
	name: 'gay',
	description: 'Quantos % vc é gay?',
	category: 'Fun',
	aliases: ['howgay'],
	usage: {
		ob: "none",
		op: "none"
	},
	author: 'tomori',
	run: async (client, message, args) => {
		let u = message.author
		let embed = new Embed(u)

		let p = Math.floor(Math.random() * 100)
		if (p == 100) {
			embed.description = "Cara, você é completamente gay kkkj"
		} else {
			embed.description = `Cara, você é ${p}% gay`
		}
		try {
			message.reply({ embeds: [embed] })
		} catch (e) {
			console.log('Erro no comando Invite ' + e)
			message.reply({ content: '❌ Ocorreu um erro ao tentar executar esse comando' })
		}
	}
})