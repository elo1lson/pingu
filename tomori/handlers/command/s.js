const Command = require('../../handlers/command/command.js')
module.exports = class extends Command{
	name: "ping",
	author: "tomori",
	description: "oi"
	run: async (message, args) => {
		message.reply("oi")
	}
}