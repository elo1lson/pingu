//18/01/2022 - tomorii
//38 linhas
//Github: elo1lson
//Discord: tomorii#8894
//Sinta-se a vontade para usar esse código

//Constantes para uso
const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Stats = require('../../modules/index.js')

const num_conv = require('number-to-words');
//Instanciando a classe
module.exports = new Command({
	name: 'bit',
	description: 'Mostra o ping do Bot',
  category: "discord",
	aliases: ['pin', 'botping'],
	usage: 'none',
	author: 'tomori',
	run: async (client, message, args, prefix) => {
		let output = args.join(' ');
		if (!output)
			return message.reply("Nao")

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
			await message.channel.send(bigtext_arr.join(''));
			return message.delete()
		} catch (e) {
			return message.channel.send(new Discord.MessageEmbed()
				.setTitle('Ocorreu um erro ao enviar a mensagem.')
				.setColor('#FF0000'));
		}


	}

})