const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
	
	user = message.author.id
	membro = message.mentions.users.first()
  mone = await db.fetch(`bank.{user}.money`)
		
	if (!membro){
		membro = message.author
		mone = await db.fetch(`bank.{user}.money`)
		db.add(`bank.${user}.money`, `${args[0]}`)
		
	}else{
		db.add(`bank.${membro}.money`,`10000`)
		message.reply(`Foi adicionado 10000 moedas a ${membro}`)
	}
}