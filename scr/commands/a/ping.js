const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
console.log(Command)
const a = new Command({
  name: 'ping',
	description: 'Mostra o ping',
	aliases: ['pin'],
	run: async(client, message, args) => {
    console.log(client)
    message.reply(`${client.ws.ping}`)
	}
})
module.exports = a