//O codigo abaixo toma multiplas decisões a partir de condicionais
//Os valores trabalhados pelas condicionais irão variar

const Discord = require("discord.js")
const db = require("quick.db")
module.exports.run = async (client,  message,  args, prefix) => {
	var user = `${message.author.id}`
	//db.set(`botadmin.${user}`,{name: 0})
	var argsZero = undefined
	var botadmin = await db.fetch(`botadmin.${user}`)
	var mencao = message.mentions.users.first()
	var blacklistOne = db.get(`blacklist.${user}`)
	
	let noblacklist = new Discord.MessageEmbed()
	.setColor('BLUE')
	.setTitle('Lista negra')
	.setDescription(`${message.author} você esta com sorte, você não está na \`\`Blacklist\`\``)
	.setFooter(`By ${message.author.username}`)
	
	let yesblacklist = new Discord.MessageEmbed()
	.setColor('BLUE')
	.setTitle('Lista negra')
	.setDescription(`${message.author} você está na blacklist, caso queira voltar a me usar preencha esse [formulário](https://himikobot.github.io)`)
	.setFooter(`By ${message.author.username}`)
	
	let adminblacklist = new Discord.MessageEmbed()
	.setColor('BLUE')
	.setTitle(`Lista Negra`)
	.setDescription(`Nao seja bobinho, você é um administrador, você não pode ir para a \`\`Blacklist\`\``)
	.setFooter(`By ${message.author.username}`)
	
	let blacklistadmin = new Discord.MessageEmbed()
	.setColor('BLUE')
	.setDescription(`${mencao} já esta na blacklist! use \`\`${prefix}\`\`blacklist \`\`remove\`\` para removê-lo`)
	.setFooter(`By ${message.author.username}`)
	
	let notaddone  = new Discord.MessageEmbed()
	.setColor('BLUE')
	.setTitle(`Lista negra`)
	.setDescription(`Você não tem permissão suficiente para fazer isso, sinto muito`)
	.setFooter(`By ${message.author.username}`)
	
	let notaddtwo = new Discord.MessageEmbed()
	.setColor('BLUE')
	.setTitle('Lista negra')
	.setDescription(`Parece que você se esqueceu de especificar por que deseja adiciononar esse usuário na lista negra`)
	.setFooter(`By ${message.author.username}`)
	
	let notaddthree = new Discord.MessageEmbed()
	.setColor('BLUE')
	.setTitle('Lista negra')
	.setDescription(`Parece que você se esqueceu de marcar um usuário, e especificar um motivo`)
	.setFooter(`By ${message.author.username}`)
	
	let embedremoveone = new Discord.MessageEmbed()
	.setColor('BLUE')
	.setTitle(`Lista negra`)
	.setDescription(`${mencao} foi removido da lista negra, agora ele(a) poderá voltar a usar meus comandos normalmente`)
	.setFooter(`By ${message.author.username}`)
	
	let embednotremoveone = new Discord.MessageEmbed()
	.setColor('BLUE')
	.setTitle(`Lista negra`)
	.setDescription(`${mencao} não está na lista negra, tente outro usuário`)
	.setFooter(`By ${message.author.username}`)
	
	//Primeiro esquema de condicional
	//ira ignorar botadmin
	
	if(!args[0] && (!botadmin)){
		if(blacklistOne){
			embed = yesblacklist
		}
		if(!blacklistOne){
			embed = noblacklist
		}
		return message.reply({embeds :[embed]})
	}
	//Segunda condicional
			
	if (!args[0] && (user == botadmin.id)) {
		embed = adminblacklist
		return message.reply({embeds :[embed]})
	}
	
	//Casos Add
	let addone = (args[0] == 'add') && mencao && args[2]
	let addtwo = (args[0] == 'add') && mencao && !args[2]
	let addthree = (args[0] == 'add') && (!!mencao)
	
	//Casos Remove
	let removeone = (args[0] == 'remove') && mencao
	let removetwo = (args[0] == 'remove')
	
	if(addone  && botadmin){
		var blacklist = db.get(`blacklist.${mencao.id}`)
		if(blacklist){
			embed = blacklistadmin
			return message.reply({embeds :[embed]})
		}
		if(!blacklist){
			args.shift()
			args.shift()
			myargs = args.toString();
			let newStr = myargs.replace(/,/g, ' ');
			db.set(`blacklist.${mencao.id}`, {motivo: `${newStr}`, adminID: `${message.author.id}`, adminName: `${message.author.username}`, tag: `${mencao.tag}`})
			let embed = new Discord.MessageEmbed()
			.setTitle('Lista negra')
			.setColor('BLUE')
			.setDescription(`${mencao} agora está na blacklist!`)
			.addFields(
				{name: `Adicionado por`, value: `${message.author.username}`},
				{name: `Motivo:`, value:`${newStr}`}
				)
				
			let dm = new Discord.MessageEmbed()
			.setColor('BLUE')
			.setTitle('Lista negra')
			.setDescription(`Voce adicionou ${mencao.username} na lista negra, espero que tenha sido por algo util, pois ja foi enviada uma mensagem ao meu dono notificando a ação, caso tenha sido uma brincadeira de mal gosto da sua parte, peço que remova o usuário da lista negra imediatamente, pois a partir de agora eu irei ignorar todas as mensagens daquele usuário, se o usuário fez por merecer desconsidere essa mensagem`)
			.addFields(
				{name: `Administrador`, value: `${message.author.username}`},
				{name: `Motivo:`, value:`${newStr}`},
				{name: `Clique no link abaixo e preencha o formulário que pede:`, value:`[Formulário](https://himikobot.github.io)`}
				)
			.setFooter(`Nao tente responder a essa mensagem, pois ela foi progamada pela administração`)
			.setTimestamp()
			message.author.send({embeds: [dm]})
			return message.reply({embeds:[embed]})
		}
	}
	if(addone && !botadmin){
		embed = notaddone
		return message.reply({ embeds: [embed] })
	}
	if(addtwo){
		embed = notaddtwo
		return message.reply({embeds: [embed]})
	}
	if(addthree){
		embed = notaddthree
		return message.reply({embeds :[embed]})
	}
	if(removeone && botadmin){
		var blacklist = db.get(`blacklist.${mencao.id}`)
		if(blacklist){
			db.delete(`blacklist.${mencao.id}`)
			embed = embedremoveone
			return message.reply({embeds :[embed]})
		}else{
			embed = embednotremoveone
			message.reply({embeds: [embed]})
		}
	}
	if(removetwo){
		embed = embedremovetwo
		return message.reply({embeds: [embed]})
	}
	if(args[0] == 'view'){
		blacklist = db.get(`blacklist`)
		tags = " "
		newtags = " "
		for(var ids in blacklist){
			tags = blacklist[ids].tag
      newtags += tags + "\n"
		}
		
		embedview = new Discord.MessageEmbed()
		.setColor('BLUE')
		.setTitle('Lista negra')
		.setDescription(`**Lista dos usuários banidos**:\n${newtags}`)
		.setFooter(`By ${message.author.username}`)	
		message.reply({embeds: [embedview]})
	}
}
//03/01/2022