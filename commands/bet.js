const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (client, message, args, prefix) => {	content = args[0]
	user = message.author.id
	balance = await db.fetch(`bank.${user}.money`) //Variável do banco de dados
	if (!db.fetch(`bank.${user}`)) {
		db.set(`bank.${user}`, { money: 1000, lotto: 0 })
	}
	value = args[0]
	content = (content >= 0) && (content <= balance)
	console.log(content)
	if (content = true){
		let aray = ["+", "-"]
		let i = 0
		i = Math.floor(Math.random() * aray.length)
	  if (value < 0) {
		negative = new Discord.MessageEmbed()
			.setDescription("Acho que você faltou as aulas de matemática ne? Você não pode apostar valores negativos")
		return message.reply({ embeds: [negative] })
	}
 	if (!value) {
 		none = new Discord.MessageEmbed()
			.setDescription(`${message.author} use \`\`${prefix}\`\` <valor> para fazer uma aposta`)
		return message.reply({ embeds: [none] })
 	}
		if (value > balance) {
		balanceout = new Discord.MessageEmbed()
			.setDescription("Você nao possui esse saldo pra poder apostar!")
		return message.reply({ embeds: [balanceout] })
			
		}
		if(value == 0){
			zero = new Discord.MessageEmbed()
			.setDescription(`${message.author} Sério isso? Acho melhor você apostar mais de \`\`O\`\``)
			message.reply({embeds: [zero]})
		}
		if ((i == 0) && (value >= 1)) {
			result = await db.add(`bank.${user}.money`, `${value}`)
			balance = await db.fetch(`bank.${user}.money`)
			win = new Discord.MessageEmbed()
				.setDescription(`🥳Parabéns ${message.author} vocês ganhou essa aposta e agora tem ${balance} moedas`)
			message.reply({ embeds: [win] })
		} else if((i == 1) && (value >= 1)){
			result = await db.subtract(`bank.${user}.money`, `${value}`)
			balance = await db.fetch(`bank.${user}.money`)
			lost = new Discord.MessageEmbed()
				.setDescription(`😥${message.author} Infelizmente vocês perdeu essa aposta e agora tem ${balance} moedas`)
			return message.reply({ embeds: [lost] })
		}else{
			a = undefined
		}
		if(value === "all"){
			let aray = ["+", "-","-"]
			let i = 0
		i = Math.floor(Math.random() * aray.length)

			if(i == 0){
				ganhou = await db.fetch(`bank.${user}.money`)
				result = db.add(`bank.${user}.money`, `${ganhou}`)
				balance = await db.fetch(`bank.${user}.money`)
				win = new Discord.MessageEmbed()
				.setDescription(`🥳Parabéns ${message.author} vocês ganhou essa aposta e agora tem ${balance} moedas`)
				return message.reply({embeds :[win]})	
			}else if(i == 1){
				total = await db.fetch(`bank.${user}.money`)
				result = db.subtract(`bank.${user}.money`, `${total}`)
				balance = await db.fetch(`bank.${user}.money`)
				lost = new Discord.MessageEmbed()
				.setDescription(`😥${message.author} Infelizmente vocês perdeu essa aposta e agora tem ${balance} moedas`)
				return message.reply({embeds: [lost]})
			}else{
				total = await db.fetch(`bank.${user}.money`)
				result = db.subtract(`bank.${user}.money`, `${total}`)
				balance = await db.fetch(`bank.${user}.money`)
				lost = new Discord.MessageEmbed()
				.setDescription(`😥${message.author} Infelizmente vocês perdeu essa aposta e agora tem ${balance} moedas`)
				return message.reply({embeds: [lost]})
			}
		}
	}
}