const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js');
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
module.exports = new Command({
	name: 'eval',
	aliases: ['ev'],
	run: async (client, message, args) => {
		if (message.author.id != process.env.KEY) {
			return message.reply({ content: "Quer me fuder é seu filho da puta? Vai usar eval com a tua mãe", ephemeral: true })
		}
		var row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setCustomId('pc')
				.setEmoji('💻')
				.setStyle('SUCCESS')
			)
			.addComponents(
				new MessageButton()
				.setCustomId('lup')
				.setEmoji('🔎')
				.setStyle('SUCCESS')
			)
		let u = message.author
		let stageone = new Embed(u)
		stageone.setDescription('Escolha o modo de execução do codigo')

		let result = eval(args.join(' '));
		const filter = i => i.user.id === message.author.id;
		const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });

		message.reply({ embeds: [stageone], components: [row] }).then(async message => {
			if (!args[0]) {
				return message.edit(`Insira um valor para executar o eval.`);
			}
			try {
				let beforeRunning = Date.now(); // Define a data de execução
				if (result instanceof Promise) {
					await message.edit('O código retornou uma promise - aguardando ela ser resolvida...')
					await result
				}
				if (typeof result !== 'string') result = require('util').inspect(result);
				let end = (Date.now() - beforeRunning); // Define o final do tempo

				let embd = new Embed(u)
				embd.addField("📥 Entrada", "```js\n" + args.join(' ') + "```")
				embd.addField("📩 Saída", "```js\n" + result.slice(0, 1010) + "```")
				embd.setFooter({
					text: `Time: ${end}ms`,
					IconURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAY24-TSTqg2C9tlU2TpNpRnLW11kx8m4Mzw&usqp=CAU'
				})
				if (result.length > 1010) {
					embd.addField("Continuação", "```js\n" + result.slice(1010, 2020) + "```")
				}
				if (result.length > 2020) {
					embd.addField("Continuação", "```js\n" + result.slice(1010, 2020) + "```")
				}
				if (result.length > 3030) {
					embd.addField("Continuação", "```js\n" + result.slice(2020, 3030) + "```")
				}
				collector.on('collect', async i => {
					if (i.customId === 'lup') {
						let simple = eval(args.join(' '))
						let simpler = new Embed(u)
						simpler.addField("📥 Entrada", "```js\n" + args.join(' ') + "```")
						simpler.addField("📩 Saída", "```js\n" + simpler.slice(0, 1010) + "```")
										if (simpler.length > 1010) {
											embd.addField("Continuação", "```js\n" + result.slice(1010, 2020) + "```")
										}
						simpler.setFooter({
							text: `Time: ${end}ms`,
							IconURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAY24-TSTqg2C9tlU2TpNpRnLW11kx8m4Mzw&usqp=CAU'
						})
						
						await i.update({ embeds: [simpler], components: [] })

					}
					if (i.customId === 'pc') {
						await i.update({ embeds: [embd], components: [] })
					}
				})

			} catch (e) {
				message.edit({ content: 'Toma aqui teu erro seu filho da puta\n```js\n' + e + '```' })
			}
		})
	}
})