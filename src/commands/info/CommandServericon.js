const { MessageActionRow, MessageButton } = require('discord.js')
const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
module.exports = new Command({
	category: 'Info',
	name: 'servericon',
	description: 'Mostra o icone do servidor',
	aliases: ['iconserver'],
	usage: {
		op: 'none',
		ob: 'none'
	},
	author: 'tomori',
	run: async (client, message, args) => {
		if (args.length > 0) return
		let u = message.author
		let pfp = message.guild.iconURL({ dinamyc: true, format: 'png', size: 1024 })
		if (pfp === null) {
			return message.reply('Este servidor não tem uma foto😔 Desculpe por isso')
		}

		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setLabel('Abrir no navegador')
				.setURL(`${pfp}`)
				.setStyle('LINK')
			);

		let embed = new Embed(u)
			.setTitle(`${message.guild.name}`)
			.setImage(`${pfp}`)
		try {
			message.reply({ embeds: [embed], components: [row] })
		} catch (e) {
			console.log('Erro no comando ServerIncon: ' + e)
			message.reply({ content: '❌ Ocorreu um erro ao tentar executar esse comando' })
		}
	}
})