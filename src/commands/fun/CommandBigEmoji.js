const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')

module.exports = new Command({
	name: 'bigemoji',
	category: 'Fun',
	description: 'Envia um emoji como foto',
	aliases: ['big-emoji', 'baixaremoji'],
	usage: {
		op: 'none',
		ob: '<emoji>'
	},
	author: 'tomori',
	run: async (client, message, args, prefix) => {
		let u = message.author
		let erro = new Embed(u)
			.setTitle(`Sintaxe da ${client.user.username}`)
			.setDescription(`\`\`${prefix}bigemoji\`\` => Sabe aqueles emojis do servidor? Sabia que eu posso aumentar o tamanho dele e você pode baixa-lo?`)
			.addFields(
			{
				name: ':grey_question: Como usar?',
				value: `\`\`${prefix}bigemoji\`\` <emoji>`
			},
			{
				name: `:pencil: Exemplo:`,
				value: `\`\`${prefix}bigemoji\`\` <:toto:934042191414833173> n\`\`${prefix}bigemoji\`\` <:toto_cam:934042636585676842> `
			},
			{
				name: ':compass: Aliases:',
				value: `\`\`big-emoji, baixaremoji\`\``
			})
		if (!args[0]) {
			return message.reply({ embeds: [erro] })
		}
		let emoji = message.guild.emojis.cache.find(emoji => emoji.name === args[0].split(":")[1]);
		let embed = new Embed(u)
			.setTitle(`Emoji ${args[0].split(":")[1]}`)
			.setImage(`${emoji.url}`)

		if (!emoji) {
			return message.reply({ content: `🚫** |** O emoji ***${args[0]}*** não é um emoji do servidor` });
		}
		try {
			message.reply({ embeds: [embed] })
		} catch (e) {
			message.reply({ content: '❌ Ocorreu um erro ao tentar executar esse comando' })
			console.log('Erro no comando BigEmoji: ' + e)
		}
	}
})
