const Discord = require('discord.js')
const { MessageActionRow, MessageSelectMenu } = require('discord.js');
const Command = require('../../structures/command/command.js')
module.exports = new Command({
	name: 'ev',
	aliases: ['eval'],
	author: 'tomori',
	run: async (client, message, args, prefix, cor) => {
		if(message.author.id != '539945189901336586'){
			return message.reply({content: "Quer me fuder é seu filho da puta? Vai usar eval com a tua mãe"})
		}
		if (!args[0]) {
			return message.reply(`Insira um valor para executar o eval.`);
		}
		try {
			let beforeRunning = Date.now(); // Define a data de execução
			let result = eval(args.join(' ')); // Gera os argumentos do eval
			message.reply({content: 'Toma aqui teu eval seu filho da puta\n```js\n' + result + '```'})
			//		message.reply({content: '```js\n' + result + '```'})
	//		if (result instanceof Promise) {
	//			message.reply('O código retornou uma promise - aguardando ela ser resolvida...')
	//			await result
	//		}; // Se retorna Promise, ele enviará o recado

		//	if (typeof result !== 'string') result = require('util').inspect(result); // Se retornar uma string, ele enviará o recado
		//	let end = (Date.now() - beforeRunning); // Define o final do tempo

	//5	let embed = new Discord.MessageEmbed()
			//	.setTimestamp()
		//		.setColor(cor)
			//	.addField('📩 Entrada', `\`\`\`js\n${args.join(" ")}\`\`\``)
			//	.addField('🚩 Saída', `\`\`\`js\n${result.slice(0, 1010)}\n\`\`\``)

		//	if (result.length > 1010) embed.addField('🚩 Continuação do Resultado', `\`\`\`js\n${result.slice(1010, 2020)}\n\`\`\``); // Se o eval for maior que os 1010 de caracteris, ele adicionará um field

		//	message.reply({ embeds: embed }); // Notificará ao usuário sobe o eval
		} catch (e) {
						message.reply({content: 'Toma aqui teu eval seu filho da puta\n```js\n' + result + '```'})
		//	let embed = new Discord.MessageEmbed()
			//	.setTimestamp()
		//		.setDescription('```js\n' + e.stack.slice(0, 2000) + '```')
		//		.setColor(cor)
	//		message.reply({ embeds: embed }); // Notificará ao usuário sobre o erro no eval
		}; // Caso ocorra um erro, ele irá retornar essa ação
	} // Executa p código do comando // Exporta o comando com todas as configurações e informações
})
/*
const Discord = require('discord.js')
const c = require("../../infs.js")


const currencyFormatter = require('currency-formatter');

function clean(text) { if (typeof(text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
	else return text; };

let buzina = require("../../handler/index.js")

module.exports = {
		name: "eval",
		description: "🔮 ┊ Run JavaScript code",
		type: 'CHAT_INPUT',
		options: [{
			name: 'text',
			type: 'STRING',
			description: 'Code.',
			required: true,
}],
		run: async (client, interaction, args) => {


			const firebase = require('firebase');
			const database = firebase.database();


			if (interaction.user.id !== '857360582158974987' && interaction.user.id !== "905896087783604305") return interaction.followUp(`> **:erro: ❱ Somente meu criador (\`JeffinBR#7203\`) pode usar esse comando.**`)


			const msg = interaction;


			try {
				const code = interaction.options.getString('text')
				let evaled = eval(code)

				if (typeof evaled !== "string")
					evaled = require("util").inspect(evaled);
				const embed = new Discord.MessageEmbed()
					.setTitle("✅ Executado!")
					.setColor("#FF0C00")
					.addField(`📥 Entrada`, ' 
						' + (code) + '
						')
						.addField(`📤 Saida:`, '' + clean(evaled) + '') msg.followUp({ embeds: [embed] })
					}
				catch (err) {
					var code = interaction.options.getString("text")
					const embed = new Discord.MessageEmbed()
						.setTitle("❎ Erro")
						.setColor(c.color)
						.addField(`📥 Entrada`, '' + (code) + '')
						.addField(`📤 Saida:`, '' + clean(err) + '')
					msg.followUp({ embeds: [embed] })
				}
			}
		}*/