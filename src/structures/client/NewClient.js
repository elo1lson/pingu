	//Por favor, não meixa nesse código
//Instanciando o client
const fs = require('fs')
const path = require('path');

const BaseClient = require('./BaseClient.js')
const NewClient = new BaseClient({
	intents: 32767,
	allowedMentions: {
		parse: ["users", "roles"],
		repliedUser: false
	}
})

const commands_path = path.join(__dirname, "..", "..", "commands");

fs.readdirSync(commands_path).forEach(local => {
	const files = fs.readdirSync(path.join(commands_path, local));

	let command;
	for (let file of files) {
		if (file.endsWith(".js")) {
			command = require(path.join(commands_path, local, file));

			NewClient.commands.set(command.name, command);
			for (let aliase of command.aliases)
				NewClient.aliases.set(aliase, command.name);
		}
	}

});

module.exports = NewClient
