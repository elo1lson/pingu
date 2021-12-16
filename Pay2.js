const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (client, message, args, prefix) => {
	let mencao = message.mentions.users.first()
	let argsZero = args[0]
	let argsOne = args[1]
	let user = `${message.author.id}`
	let database = db.fetch(`bank.${user}`)
	let bank = db.fetch(`bank.${user}.money`)
	if (!database) {
		message.reply("Voce nao tem uma conta no banco tomorii!")
	}
	console.log(argsOne < bank)
	if (argsZero && argsOne) {
		if (mencao && ((argsOne > 0) && (argsOne <= bank))) {
			message.channel.send("Mais de 0")
		} else if (mencao && (argsOne <= 0)) {
			message.reply("Menos de 0")
		} else if (mencao && (!argsOne)) {
			message.reply("Sem 2")
		}else{
			a = 4
		}
	}
}