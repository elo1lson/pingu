const Discord = require('discord.js');
const cor = require("chalk")
var path = require('path');
var cmd = path.basename(__filename);
module.exports.run = async (client, message, args, prefix) => {
	
	let membro = message.mentions.users.first()
	
	if(!membro) membro = message.author
	let embed = new Discord.MessageEmbed()
		.setColor("GREEN")
		.setImage(membro.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
		.setDescription(`baixe essa imagem clicando [aqui](${membro.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })})`)
	
	if(membro){
			message.reply({embeds:[embed]})
		}else if(!(membro) && (undefined)){
			message.reply({content: "oi" ,embeds:[embed]})
		}else{
			message.reply({embeds:[embed]})	
		}
	

}