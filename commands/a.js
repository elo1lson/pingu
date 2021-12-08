const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {

	user = message.author.id
	membro = message.mentions.users.first()
	mone = await db.fetch(`bank.{user}.money`)
	autor = message.author.id
	tomori = 539945189901336586
	let marca = args[0] == membro

	console.log(marca)
	if (autor == tomori) {
		if (membro) {
			var obj = await db.fetch(`bank`)
      console.log(obj)
			check = await db.fetch(`bank.${membro.id}`);
			db.add(`bank.${membro.id}.money`, `${args[1]}`)
			var balance = await db.fetch(`bank.${membro.id}.money`);
			embed = new Discord.MessageEmbed()
				.setColor('GREEN')
				.setDescription(`${message.author} foi adicionado ${args[1]} moedas para ${membro}`)
				.addField(`Agora ${membro.username} tem:`, `${balance} moedas`)
			message.reply({ embeds: [embed] })
		} else {
			var check = await db.fetch(`bank.${user}`);
			db.add(`bank.${user}.money`, `${args[1]}`)
			var balance = await db.fetch(`bank.${membro.id}.money`);
			embed = new Discord.MessageEmbed()
			.setDescription(`Seu saldo agora é: ${balance}`);
			return message.reply({embeds: [embed]})
		}
	} else {
		return message.reply(`<:no:915054924725882892> | ${message.author.username} você não tem permissão pra fazer isso!`)
	}
	console.log(args[1])
}