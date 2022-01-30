const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Stats = require('../../modules/index.js')
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
	run: async (client, message, args, prefix, cor) => {
		let output = args.join(' ');
		if (!output)
			return message.reply('Humm.... que tal inserir algo? tipo uma frase.')
		const erro = new Discord.MessageEmbed()
			.setTitle('Ocorreu um erro ao enviar a mensagem.')
			.setColor(cor)
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
			await message.channel.send({content: `${message.author}`})
			await message.channel.send(bigtext_arr.join(''));
			return message.delete()
		} catch (e) {
			return message.reply({embeds: [erro]});
		}


	}

})