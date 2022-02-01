const simplydjs = require("simply-djs")
//onsole.log(simplydjs)
const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js')
const Command = require('../../structures/command/command.js')

//| Instanciando a classe
module.exports = new Command({
	name: 'calc',
	description: 'Mostra sua foto de perfil',
	aliases: ['avt', 'pfp'],
	usage: {
		op: '<@usuario>',
		ob: 'none'
	},
	author: 'tomori',
	run: async (client, message, args) => {
		simplydjs.calculator(message, {
			embedColor: '#075FFF',
			credit: false,
			embedFoot: `use os botões para fazer cálculos matemáticos!`
		})
simplydjs.nqn(message)	}

});