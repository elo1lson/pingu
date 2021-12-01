const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
	let embd = new Discord.MessageEmbed()
		.setAuthor(`${message.guild.name} - Pegue seu cargo`)
		.setColor('RED')
		.setTimestamp()
		.setDescription(`\n\n`)
		.addField(`Finalize o seu registro:`,`\n\nClique em :star: para receber o cargo de <@&912881598981103636> e poder usufruir do servidor\n\n `)
		.setFooter(`\nLembrando que para remover um cargo, basta remover a reação \nAtenciosamente ${message.author.username} | ${message.guild.name}`)

	message.channel.send({ embeds: [embd] })
}