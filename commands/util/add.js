//55 lines, 1 author
const Discord = require("discord.js")
const db = require("quick.db")
	
module.exports.run = async (client, message, args) => {

//Variáveis Globais
	var user = message.author.id
	var membro = message.mentions.users.first()
	var money = await db.fetch(`bank.{user}.money`)
	let bank = db.get(`bank`)
	var autor = message.author.id
	var tomori = 539945189901336586
	var execute = undefined
	var marcacao = args[0] == membro

//Embed	
	let not = new Discord.MessageEmbed()
	.setColor('BLUE')
	.setAuthor(`Banco ${client.user.username}`, `https://logospng.org/download/pix/logo-pix-icone-512.png`, `https://himikobot.github.io`)
	.setDescription(`😬Xii, eu não posso fazer isso pra você, se meu desenvolvedor souber que eu tô fazendo isso pra você, ele pode ate me desativar, foi mal amiguinho(a)`)
	.setFooter(`By ${message.author.username}`)
	
//Tomando decisões com IF
	if (autor == tomori) {
		if (membro && args[1]) {
			let oldbalance = await db.get(`bank.${membro.id}.money`)
			let add = await db.add(`bank.${membro.id}.money`, `${args[1]}`)
			let newbalance = await db.get(`bank.${membro.id}.money`)
	
			let addmember = new Discord.MessageEmbed()
			.setColor('BLUE')
			.setAuthor(`Banco ${client.user.username}`, `https://logospng.org/download/pix/logo-pix-icone-512.png`, `https://himikobot.github.io`)
			.setDescription(`**Fiz um pix para ${membro} no valor de \`\`${args[1]}\`\` moedas\n\n:dollar: | Saldo anterior: ${oldbalance}\n:dollar: | Saldo atual: ${newbalance}**`)
			.setFooter(`By ${message.author.username}`)
	
			return message.reply({ embeds: [addmember] })
		}
		if (!membro && (args[0] > 0)) {
			let add = db.add(`bank.${user}.money`, `${args[0]}`)
			let newbalance = await db.get(`bank.${user}.money`)
	
			let adddev = new Discord.MessageEmbed()
			.setColor('BLUE')
			.setAuthor(`Banco ${client.user.username}`, `https://logospng.org/download/pix/logo-pix-icone-512.png`, `https://himikobot.github.io`)
			.setDescription(`**Fiz um pix no valor de \`\`${args[0]}\`\` moedas pra você chefinho 😄\nAgora você tem: ${newbalance}**`)
			.setFooter(`By ${message.author.username}`)
			return message.reply({ embeds: [adddev] })
		}
	} else {
		return message.reply({ embeds: [not] })
	}
}
//Finalizado em 08/12/21
//03/01/22 - Alterações nas embeds e reformulação das condicionais
//tomorii