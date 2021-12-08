const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (client, message, args, prefix) => {	content = args[0]
	user = message.author.id
	mencao = message.mentions.users.first()
	balance = await db.fetch(`bank.${user}.money`) //Variável do banco de dados
	if (!db.fetch(`bank.${user}`)) {
		db.set(`bank.${user}`, { money: 1000, lotto: 0, name: `${message.author.username}`})
		a = db.fetch(`bank`)
		console.log(a)
	}
	value = args[0]
	content = (content >= 0) && (content <= balance)
	console.log(content)
	if(mencao){
		mencao = mencao.id
		value = await db.fetch(`bank.${user}.money`)
		one = await db.subtract(`bank.${user}.money`,`args[1]`)
		two = await db.add(`bank.${mencao}.money`,`args[1]`)
		message.channel.send(`Você pagou ${args[1]} para ${mencao}`)
	}else{
		message.reply("Marque alguem para pagar")
	}
}