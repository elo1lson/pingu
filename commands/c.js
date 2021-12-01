const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
	let embd = new Discord.MessageEmbed()
		.setAuthor(`${message.guild.name} - Pegue seu cargo`)
		.setColor('RED')
		.setTimestamp()
		.setDescription(`No fim da mensagem selecione o emoji que  corresponde a sua resposta`)
		.addField(`Você é:`,`\n\n💙 | Homem\n💜 | Mulher\n🤍 | Panela de pressão`)
		.setFooter(`Atenciosamente ${message.author.username} | ${message.guild.name}`)

	message.channel.send({ embeds: [embd] })
}