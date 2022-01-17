const Discord = require('discord.js')
const Command = require('../../structures/command.js')
console.log(Command)
const a = new Command({
  name: 'a',
	description: 'Mostra o ping',
	aliases: ['pin'],
	run: async(client, message, args) => {
		message.reply("oi")
	}
})
module.exports = a