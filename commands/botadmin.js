const Discord = require("discord.js")
const db = require("quick.db")
module.exports.run = async (client, message, args, prefix) => {
	var user = message.author.id
	var botadmincheck = await db.fetch(`botadmin.${user}.name`)
	var mencao = message.mentions.users.first()
	if ((message.author.id == 539945189901336586) && (mencao)) {
		if (!botadmincheck) {
			
			db.set(`botadmin.${mencao.id}`, { name: `${mencao.username}`, id: `${mencao.id}` })
			let embed = new Discord.MessageEmbed()
				.setColor('YELLOW')
				.setDescription(`Sucesso! agora ${mencao} é um administrador`)
				.setFooter(`Acionado por ${message.author.username}`)
			message.reply({ embeds: [embed] })
		} else {

			let embed = new Discord.MessageEmbed()
				.setColor('YELLOW')
				.setDescription(`${mencao} já e um administrador!`)
				.setFooter(`Acionado por ${message.author.username}`)
			message.reply({ embeds: [embed] })

		}
	} else {
		let embed = new Discord.MessageEmbed()
			.setColor('YELLOW')
			.setDescription(`<:no:915054924725882892> | Você não tem permissão para fazer isso!`)
			.setFooter(`Acionado por ${message.author.username}`)
		message.reply({embeds:[embed]})
	}

}