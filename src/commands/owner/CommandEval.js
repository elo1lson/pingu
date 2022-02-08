
const Discord = require('discord.js')
const { MessageActionRow, MessageSelectMenu } = require('discord.js');
const Command = require('../../structures/command/command.js')
module.exports = new Command({
	name: 'sr',
	aliases: ['mn'],
	author: 'tomori',
	run: async (client, message, args, prefix, cor) => {
		if (!args[0]) {
			return message.channel.send(`**|** ${message.author}, insira um valor para executar o eval.`);
		}
		await message.channel.send(`**|** Executando...`)
			try {
				let beforeRunning = Date.now(); // Define a data de execução
				let result = eval(args.join(' ')); // Gera os argumentos do eval
		//		message.reply({content: '```js\n' + result + '```'})
				if (result instanceof Promise) {
					message.edit('O código retornou uma promise - aguardando ela ser resolvida...')
					await result
				}; // Se retorna Promise, ele enviará o recado

				if (typeof result !== 'string') result = require('util').inspect(result); // Se retornar uma string, ele enviará o recado
				let end = (Date.now() - beforeRunning); // Define o final do tempo

				let embed = new Discord.MessageEmbed()
					.setTimestamp()
					.setColor(cor)
					.addField('📩 Entrada', `\`\`\`js\n${args.join(" ")}\`\`\``)
					.addField('🚩 Saída', `\`\`\`js\n${result.slice(0, 1010)}\n\`\`\``)

				if (result.length > 1010) embed.addField('🚩 Continuação do Resultado', `\`\`\`js\n${result.slice(1010, 2020)}\n\`\`\``); // Se o eval for maior que os 1010 de caracteris, ele adicionará um field

				message.edit({embeds: embed }); // Notificará ao usuário sobe o eval
			} catch (e) {
				let embed = new Discord.MessageEmbed()
					.setTimestamp()
					.setDescription('```js\n' + e.stack.slice(0, 2000) + '```')
					.setColor(cor)
				message.edit({embeds: embed}); // Notificará ao usuário sobre o erro no eval
			}; // Caso ocorra um erro, ele irá retornar essa ação
	} // Executa p código do comando // Exporta o comando com todas as configurações e informações
})

