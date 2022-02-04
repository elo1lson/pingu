const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
module.exports = new Command({
	category: 'Fun',
	name: 'say',
	description: 'Me faça falar!',
	aliases: ['falar', 'fale'],
	usage: {
		op: 'none',
		ob: '<texto>'
	},
	author: 'tomori',
	run: async (client, message, args, prefix) => {
		let u = message.author
		let embed = new Embed(u)
			.setTitle(`Sintaxe da ${client.user.username}`)
			.setDescription(`\`\`${prefix}say\`\` => Faça eu falar alguma coisa!`)
			.addFields(
			{
				name: ':grey_question: Como usar?',
				value: `\`\`${prefix}say\`\` <texto>`
			},
			{
				name: `:pencil: Exemplo:`,
				value: `\`\`${prefix}say\`\` a ${client.user.username} é minha amiga❤\n\`\`${prefix}say\`\` Eu gosto de batatas🍟`
			},
			{
				name: ':compass: Aliases:',
				value: `\`\`falar, fale\`\``
			})
		if (!args[0]) {
			return message.reply({ embeds: [embed] }).then(msg => {
				msg.react('❓')
			})
		}
		if (args.length > 0) {
			try {
				message.delete()
				message.channel.send(`${args.join(" ")}\n\N __Pedido por:__ ${message.author}`)
			} catch (e) {
				message.reply({ content: '❌ Ocorreu um erro ao tentar executar esse comando' })
				console.log('Erro no comando Say: ' + e)
			}
		}
	}
})