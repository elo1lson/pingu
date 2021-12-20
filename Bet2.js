const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (client, message, args, prefix) => {
	let user = `${message.author.id}`
	let mencao = message.mentions.users.first()
	let argsZero = args[0]
	let admin = `<@539945189901336586>`
	
	if (message.author.id == admin) {
		message.reply("Em quem você quer dar ban?")
	} else {
		message.reply("Voce não tem permissão pra fazer isso!")
	}
}