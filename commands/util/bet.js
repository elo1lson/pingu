	const Discord = require('discord.js');
	const db = require('quick.db');
	const lib = require("../libs/modules.js")
	
	
	module.exports = {
		name: "bet",
		aliases: ["b","be"],
		run: async (client, message, args, prefix) => {
		let user = `${message.author.id}`
		balance = db.get(`bank.${user}.money`)
	  const a = new lib.blacklist(user)
	  console.log(a)
		let argsZero = args[0]
			
		let argsOne = args[1]
			
		let image = client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })
			
		let nulo = new Discord.MessageEmbed()
			.setTitle(`:bank: Banco ${client.user.username}`)
			.setColor('00ffff')
			.setDescription(`<:no:915054924725882892> | ${message.author} use \`\`${prefix}\`\`bet <valor> para fazer uma aposta`)
			
		let MenosZero = new Discord.MessageEmbed()
			.setTitle(`:bank: Banco ${client.user.username}`)
			.setColor('00ffff')
			.setDescription(`<:no:915054924725882892>  | ${message.author} deixe de ser engraçadinho, você nao pode apostar \`\`${argsZero}\`\``)
			
		let Balanceout = new Discord.MessageEmbed()
			.setTitle(`:bank: Banco ${client.user.username}`)
			.setColor('00ffff')
			.setDescription(`<:no:915054924725882892> | ${message.author} você não possui esse saldo para poder apostar`)
			
		let databaseUser = db.fetch(`bank.${user}`)
		if(!databaseUser){
			message.reply("Parece que você não tem uma conta, use {prefix}bank create")
			return argsZero = false
		}
		if (argsZero) {
			function BetValue() {
				db.add(`bank.${user}.game`,`${argsZero}`)
	}
			if (argsZero <= 0) {
				
			message.reply({embeds: [MenosZero]})
			
				
			}else if(argsZero >= balance){
				
			message.reply({embeds: [Balanceout]})
			
				
			}else if(((argsZero > 0) && (argsZero < balance)) == true){
				
				let arrayOne = ['0','1']
				let i = 0
				i = Math.floor(Math.random() * arrayOne.length)
					if (i == 0) {
						await db.add(`bank.${user}.money`,`${argsZero}`)
							
						newBalance = await db.get(`bank.${user}.money`)	
						balance = await db.get(`bank.${user}.money`)
						let Win = new Discord.MessageEmbed()
							.setTitle(`:bank: Banco ${client.user.username}`)
							.setColor('00ffff')
							.setDescription(`🥳 Parabéns ${message.author} voce ganhou essa aposta, verifique o **extrato** abaixo para mais detalhes`)
							.addField(`Extrato:`, `**💰 | Saldo:** \`\`${newBalance}\`\`\n**🎰 | Resultado:** \`\`${i}\`\`\n**➕ | Você ganhou:** \`\`${argsZero}\`\``)
							
						message.reply({embeds :[Win]})
					} else {
						await db.subtract(`bank.${user}.money`,`${argsZero}`)
						newBalance = await db.get(`bank.${user}.money`)
						
						let lost = new Discord.MessageEmbed()
							.setTitle(`:bank: Banco ${client.user.username}`)
							.setColor('00ffff')
							.setDescription(`😥 Infelizmente você perdeu essa aposta, olhe o extrato para mais detalhes`)
							.addField(`Extrato:`,`**Saldo:** \`\`${newBalance}\`\`\nResultado: \`\`${i}\`\`\n**Você perdeu:** \`\`${argsZero}\`\``)
						
						message.reply({embeds :[lost]})
					}
			}else if(argsZero == 'all'){
				if(balance <= 0){
					let allZero = new Discord.MessageEmbed()
						.setTitle(`:bank: Banco ${client.user.username}`)
						.setColor('00ffff')
						.setDescription(`${message.author} parace que você está sem saldo, peça para alguem lhe doar moedas através do comando \`\`${prefix}\`\`pay`)
					message.reply({embeds:[allZero]})
				}else{
					let arrayTwo = ['0','1','2']
					let i = 0
					i = Math.floor(Math.random() * arrayTwo.length)
					if (i == 0) {
						await db.add(`bank.${user}.money`,`${balance}`)
						newBalance = await db.get(`bank.${user}.money`)
						
						let embedAllWin = new Discord.MessageEmbed()
							.setTitle(`:bank: Banco ${client.user.username}`)
							.setColor('00ffff')
							.setDescription(`🥳 Parabéns ${message.author} voce ganhou essa aposta, verifique o **extrato** abaixo para mais detalhes`)
							.addField(`Extrato:`,`**Saldo:** \`\`${newBalance}\`\`\n**Resultado:** \`\`${i}\`\`\n**Você ganhou:** \`\`${balance}\`\``)
							
						message.reply({embeds: [embedAllWin]})
						
					}else{
						await db.subtract(`bank.${user}.money`,`${balance}`)
							
						newBalance = await db.get(`bank.${user}.money`)
							
						let embedAllLost = new Discord.MessageEmbed()
							.setTitle(`:bank: Banco ${client.user.username}`)
							.setColor('00ffff')
							.setDescription(`😥 ${message.author} Infelizmente você perdeu essa aposta, agora voce tem \`\`${newBalance}\`\` moedas`)
							
						message.reply({embeds: [embedAllLost]})
						
					}	
				}
			}else{
				
				message.reply({embeds: [nulo]})
				
			}
		}else{
			message.reply({embeds:[nulo]})
		}
	}
}