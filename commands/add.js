const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
  //Variáveis Globais
  
	var user = message.author.id
	var membro = message.mentions.users.first()
	var mone = await db.fetch(`bank.{user}.money`)
	var autor = message.author.id
	var tomori = 539945189901336586
	var marcacao = args[0] == membro
	
	//Embeds
	
	var embedDev = new Discord.MessageEmbed()
		.setColor('GREEN')
		.setDescription(`Seu saldo agora é: ${balance}`);
	var embed = new Discord.MessageEmbed()
		.setColor('GREEN')
		.setDescription(`${message.author} foi adicionado ${args[1]} moedas para ${membro}`)
		.addField(`Agora ${membro.username} tem:`, `${balance} moedas`)
  var embedErro = new Discord.MessageEmbed()
  	.setColor('GREEN')	
  	.setDescription(`<:no:915054924725882892> | ${message.author.username} você não tem permissão pra fazer isso!`)
	
	//Tomando decisões com IF
	
	if(autor == tomori){
		if(membro){
			var bank = await db.fetch(`bank`)
			var check = await db.fetch(`bank.${membro.id}`);
			var add = db.add(`bank.${membro.id}.money`, `${args[1]}`)
			var balance = await db.fetch(`bank.${membro.id}.money`);
			message.reply({ embeds: [embed] })
		}else{
			var check = await db.fetch(`bank.${user}`);
			var add = db.add(`bank.${user}.money`,`${args[1]}`)
			var balance = await db.fetch(`bank.${user}.money`);
			return message.reply({embeds: [embedDev]})
		}
	}
	//Mensagem que será Retornada caso if retorne falso
	else{
		return message.reply({embeds:[embedErro]})
	}
}
//Finalizado em 08/12/21