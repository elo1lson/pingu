const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args, prefix) => {
	var user = `${message.author.id}`
	balanceUser =	await db.get(`bank.${user}`)
	if(!balanceUser){
	
	db.set(`bank.${user}`, {money : 1000, lotto: 0, pay: 0, received: 0, win: 0, lost: 0, server: `${message.guild.name}`})
	bank = await db.get(`bank.${user}`)
	let embed = new Discord.MessageEmbed()
		.setDescription(`Conta criada com sucesso!`)
		.setTitle(`:bank: Banco ${client.user.username}`)
		.addFields(
			{
				name: `Saldo:`,
				value: `\`\`${bank.money}\`\``
			},
			{
				name: `Lotto`,
				value: `\`\`${bank.lotto}\`\``	
			},
			{
				name: `Doado:`,
				value: `${bank.pay}`	
			},
			{
				name: `Recebido:`,
				value: `${bank.received}`	
			},
			{
					name: `N° de vezes que ganhou:`,
				value: `${bank.win}`
			},
			{
				name: `N° de vezes que perdeu:`,
					value: `${bank.lost}`
			}
			)
	message.reply({embeds:[embed]})
	}else{
		message.reply(`${message.author} você ja possui uma conta registrada!`)
	}
}