const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
	let cor = 'GREEN'
	let aray =[
		'https://acegif.com/wp-content/uploads/anime-kissin-2.gif',
		'https://67.media.tumblr.com/756c52d84caf10e177777d6ee8504581/tumblr_ngyt1mvACH1qg78wpo1_500.gif',
		'https://i.pinimg.com/originals/6f/c2/5f/6fc25fdd3e22d89b19c3ea76d11789e6.gif',
		'https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-anime-gif-kiss-5.gif',
		'https://uploads.spiritfanfiction.com/fanfics/historias/201605/fanfiction-originais-my-world-with-you-5664696-130620162019.gif',
		]
	let i = 0
	i = Math.floor(Math.random() * aray.length)
	mencao = message.mentions.users.first();
	let embedCheck = new Discord.MessageEmbed()
		.setDescription(`${message.author} acabou de beijar ${mencao}`)
		.setImage(aray[i])
		.setFooter(`Kiss Kiss💏`)
		.setColor(cor)
  let embedErro = new Discord.MessageEmbed()
  .setDescription(`${message.author.username} lebmbre-se que voce precisa marcar um usuário  valido para beijar!`)
  .setColor(cor)
  if(!mencao){
		message.channel.send({embeds: [embedErro]})
	}else{
		message.channel.send({embeds: [embedCheck]})
	}
	if(mencao == `<@539945189901336586>`){
		message.reply('2')
	}

}