const simplydjs = require("simply-djs")
const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')

module.exports = new Command({
	category: 'Fun',
	name: 'calc',
	description: 'Inicia uma calculadora',
	aliases: ['calculadora'],
	usage: {
		op: 'none',
		ob: 'none'
	},
	author: 'tomori',
	run: async (client, message, args, cor) => {
		simplydjs.calculator(message, {
			embedColor: cor,
			credit: false,
			embedFoot: `Use os botões para fazer cálculos matemáticos!`
		})
		simplydjs.nqn(message)
	}

});