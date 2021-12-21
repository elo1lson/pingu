const Discord = require("discord.js")
const db = require("quick.db")
const capture = require("../libs/args/args.js")
module.exports.run = async (client,  message,  args, prefix) => {
	var user = `${message.author.id}`
//	a = db.set(`botadmin.${user}`,{name: 0})
	//console.log(a)
	var botadmin = await db.fetch(`botadmin.${user}`)
	var mencao = message.mentions.users.first()

	if (mencao && args[1]) {
		if (botadmin) {
			var blacklist = db.get(`blacklist.${mencao.id}`)
			if (blacklist) {
				let blacklistEmbed = new Discord.MessageEmbed()
					.setColor('YELLOW')
					.setDescription(`${mencao} já esta na blacklist!`)
				
				message.reply({embeds:[blacklistEmbed]})
			}else{
				args.shift()
				myargs = args.toString();
				var newStr = myargs.replace(/,/g, ' ');
				db.set(`blacklist.${mencao.id}`, {motivo: `${newStr}`, adminID: `${message.author.id}`, adminName: `${message.author.username}`})
				var embed = new Discord.MessageEmbed()
					.setTitle('Lista negra')
					.setColor('YELLOW')
					.setDescription(`${mencao} agora está na blacklist!`)
					.addFields(
						{name: `Adicionado por`, value: `${message.author.username}`},
						{name: `Motivo:`, value:`${newStr}`}
						)
				
				message.reply({embeds:[embed]})
				
			}
		}else{
			message.reply("Você não possui permissão para fazer isso!")
		}
		
	}else if(mencao && !args[1]) {
		
		let embedNotArgsOne = new Discord.MessageEmbed()
			.setColor('YELLOW')
			.setDescription(`Parece que você se esqueceu de especificar o motivo pelo o qual está adicionando este usuário a lista negra!`)
		message.reply({embeds: [embedNotArgsOne]})
		
	}else{
		let embedNull = new Discord.MessageEmbed()
			.setColor('YELLOW')
			.setDescription(`Use \`\`${prefix}\`\`blacklist <@usuarios> [motivo] para adicionar um usuário na lista negra`)
		message.reply({embeds:[embedNull]})
	}
}