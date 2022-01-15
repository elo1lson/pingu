const Discord = require('discord.js');
module.exports.run = async (client, message, args, prefix) => {
	
	let membro = message.mentions.usqers.first()

	if (!membro){
		membro = message.author
	}
	let embed = new Discord.MessageEmbed()
		.setColor('BLUE')
		.setImage(membro.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
		.setTitle(`📸 Seu avatar!`)
		.setDescription(`**Baixe essa imagem clicando [aqui](${membro.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })})**`)
		.setFooter(`By ${message.author.username}`)
		
	if(membro){
		var retorno = message.reply({ embeds: [embed] })
		retorno.react(`✅`)
	}else{
		message.reply({ embeds: [embed] })
	}
}
//04/01/22
//tomorii