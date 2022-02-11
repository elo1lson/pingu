const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
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
		if (args[2]) return
		let m = message.mentions.users.first()

		let embed = new Discord.MessageEmbed()
		embed.color = "GREEN"

		let p = Math.floor(Math.random() * 100)
		if(m.id == '539945189901336586'){
			embed.description = 'Esse cara é muitho matcho💪'
			return message.reply({embeds: [embed]})
		}
		if (p == 100) {
			if (m) {
				embed.description = `${m} é ${p}% gay		`
			} else {
				embed.description = "Cara, você é completamente gay kkkj"
			}
		} else {
			if (m) {
				embed.description = `${m} é ${p}% gay d+}`
			} else {
				embed.description = `Cara, você é ${p}% gay`
			}
		}
		try {
			message.reply({ embeds: [embed] })
		} catch (e) {
			console.log('Erro no comando Gay ' + e)
			message.reply({ content: '❌ Ocorreu um erro ao tentar executar esse comando' })
		}
	}
})
