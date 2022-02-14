const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
const Discord = require("discord.js")
module.exports = new Command({
	name: 'dice',
	description: 'Jogue os dados!',
	category: 'Fun',
	aliases: ['dados'],
	usage: {
		ob: "none",
		op: "numero"
	},
	author: 'tomori',
	run: async (client, message, args) => {
		if (args[0]) {
			if (args[0] < 1) return message.reply('Numero de dados inválido.');

			var dices = new Array();
			try {
				dices.length = parseInt(args[0]);
			} catch (e) {
				return message.channel.send('Numero de dados inválido.');
			}

			if (dices.length > 5)
				return message.channel.send('Você só pode jogar no máximo 5 dados por vez.');

			var dice_string = '';
			for (let i = 0; i < dices.length; i++) {
				dices[i] = Math.floor(Math.random() * 6) + 1;
				dice_string += `🎲 Dado ${i + 1}: **${dices[i]}**\n`;
			}
			let u = message.author
			let values = new Embed(u)
			embed.addField('🏆 Resultado dos dados jogados', `**${dice_string}**`)
			return message.reply({ embeds: [values] })

		} else {
			var dice = Math.floor(Math.random() * 6) + 1;
			return message.reply({content: `Você jogou o dado e parou em **${dice}**`});
		}
	}

})