const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const num_conv = require('number-to-words');
module.exports = new Command({
	category: 'Fun',
	name: 'emojitext',
	description: 'Envia um texto em emojis.',
	aliases: ['textoemoji'],
	usage: {
		op: 'none',
		ob: '<texto>'
	},
	author: 'tomori',
	run: async (client, message, args, prefix) => {
		let output = args.join(' ');
		let u = message.author
		if (!output)
			return message.reply('Humm.... que tal inserir algo? tipo uma frase.')
		let bigtext_arr = new Array();
		for (let i = 0; i < output.length; i++) {
			let isnumber = await parseInt(output[i]);
			if (isnumber >= 0 && isnumber <= 9)
				bigtext_arr.push(`:${num_conv.toWords(output[i])}:`)
			else {
				if (output[i] !== ' ') {
					if (!output[i].match(/^[a-zA-Z]+$/)) // Regex for alphabetical entries
						bigtext_arr.push(`:question:`)
					else
						bigtext_arr.push(`:regional_indicator_${output[i].toLowerCase()}:`)
				} else bigtext_arr.push('   ');
			}
		}
		try {
			await message.channel.send({ content: `${message.author}` })
			await message.channel.send(bigtext_arr.join(''));
			return message.delete()
		} catch (e) {
			message.reply({content: '❌ Ocorreu um erro ao tentar executar esse comando' })
			console.log('Erro no comando TextEmoji: ' + e)
		}
	}
})
