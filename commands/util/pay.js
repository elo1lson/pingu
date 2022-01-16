const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (client, message, args, prefix) => {	content = args[0]
	user = message.author.id
	mencao = message.mentions.users.first()
	if (!db.fetch(`bank.${user}`)){
		db.set(`bank.${user}`, { money: 1000, lotto: 0, name: `${message.author.username}`, doado: 0})
		a = db.fetch(`bank`)
		console.log(a)
	}
	value = args[1]
	men = args[0]
	content = value
	contentCoin = content
	balance = await db.fetch(`bank.${user}.money`)
	content = (content >= 0) && (content <= balance)
	out = (contentCoin >= balance)
	console.log(content)
	
	let embedNull = new Discord.MessageEmbed()
		.setColor('BLACK')
		.setTitle(`:bank: Banco ${client.user.username}`)
		.setDescription(`<:no:915054924725882892> | Use \`\`${prefix}\`\`pay <@usuario> <valor> para pagar alguém`)
	let embedCheck = new Discord.MessageEmbed()
		.setColor('BLACK')
		.setTitle(`:bank: Banco ${client.user.username}`)
		.setDescription(`Você acaba de pagar ${args[1]} para ${args[0]}`)
	console.log('1 e ' +(args[1] >= 0))
	console.log('2 e ' +(args[0] == mencao))
	if(content == true){
		if(mencao && value){
			value = await db.fetch(`bank`)
			db.subtract(`bank.${user}.money`,`${args[1]}`)
			db.add(`bank.${mencao.id}.money`,`${args[1]}`)
			message.reply({embeds:[embedCheck]})
		}else{
			message.reply("Marque alguem para pagar")
		}
		
	}else if(value <= 0){
		message.reply("Hey, isso nao e pouco?")
	}else{
		message.channel.send({embeds:[embedNull]})
	}
}