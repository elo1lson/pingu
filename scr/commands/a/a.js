const Command = require('../../structures/command.js')
module.exports = new Command({
	name: 'ping',
	description: 'Mostra o ping',
	aliases: ['pin'],
	run: async (message, args) => {
		message.reply("oi")
	}
})