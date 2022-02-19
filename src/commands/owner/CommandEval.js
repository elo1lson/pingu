cons Discord = require('discord.js')
const { MessageActionRow, MessageSelectMenu } = require('discord.js');
const Command = require('../../structures/command/command.js')
module.exports = new Command({
	name: 'eval',
	aliases: ['ev'],
	run: async (client, message, args) => {
		if (message.author.id != process.env.KEY) {
			return message.reply({ content: "Quer me fuder é seu filho da puta? Vai usar eval com a tua mãe", ephemeral: true })
		}
		if (!args[0]) {
			return message.edit(`Insira um valor para executar o eval.`);
		}
		try {
			let beforeRunning = Date.now(); // Define a data de execução
			let result = eval(args.join(' ')); // Gera os argumentos do eval
			if (result instanceof Promise) {
				await message.edit('O código retornou uma promise - aguardando ela ser resolvida...')
				await result
			}
			if (typeof result !== 'string') result = require('util').inspect(result);

			console.log(typeof result)
			let u = message.author
			let end = (Date.now() - beforeRunning); // Define o final do tempo
			let embd = new Embed(u)
			embd.addField("📥 Entrada", "```js\n" + args.join(' ') + "```")
			embd.addField("📩 Saída", "```js\n" + result.slice(0, 1010) + "```")
			embd.setFooter({
				text: `\`\`${end}ms\`\``,
				IconURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAY24-TSTqg2C9tlU2TpNpRnLW11kx8m4Mzw&usqp=CAU'
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
			message.reply({ embeds: [embd] })
		} catch (e) {
			message.edit({ content: 'Toma aqui teu erro seu filho da puta\n```js\n' + e + '```' })
		}
	}
})