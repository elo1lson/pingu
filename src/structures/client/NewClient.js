//Por favor, não meixa nesse código
//Instanciando o client
const fs = require('fs')

const Discord = require('discord.js')
const Command = require('./../command/command.js')

const BaseClient = require('./BaseClient.js')
const NewClient = new BaseClient({
	intents: 32767,
	allowedMentions: {
		parse: ["users", "roles"],
		repliedUser: false
	}
})

fs.readdirSync(`../../commands/`).forEach(local => {

	const commands = fs.readdirSync(`../../commands/${local}`).filter(f => f.endsWith('.js'))

	for (let file of commands) {
		let cmd = require(`../../commands/${local}/${file}`)
		if (cmd.name) {
			NewClient.commands.set(cmd.name, cmd)
		}

		if (cmd.aliases && Array.isArray(cmd.aliases)) {
			cmd.aliases.forEach(x => NewClient.aliases.set(x, cmd.name))
		}

	}
})
module.exports = NewClient
