const simplydjs = require("simply-djs")
const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js')
const Command = require('../../structures/command/command.js')

//| Instanciando a classe
module.exports = new Command({
	category: 'fun',
	name: 't',
	description: 'Mostra sua foto de perfil',
	aliases: ['avt', 'pfp'],
	usage: {
		op: '<@usuario>',
		ob: 'none'
	},
	author: 'tomori',
	run: async (client, message, args) => {
// messageCreate Event

simplydjs.chatbot(client, message, {
  chid: 912886408778236005
});
	}
})