const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
	let embd = new Discord.MessageEmbed()
		.setAuthor(`Introdução ao Registro`)
		.setColor('RED')
    .setTimestamp()
		.setFooter(`Atenciosamente ${message.author.username}`)
		.setThumbnail(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltv4vmTC-lpSLoHyTGNkMyzT8WjPx98GTSQ&usqp=CAU`)
	  .setDescription(`Leia atentamente as informações abaixo\n\nAntes de acessar qualquer canal para enviar mensagens neste servidor e necessário você tem faça o seu __REGISTRO/CADASTRO__, achamos isso necessário por questões de segurança e praticidade, para acessar os canais deste servidor, vá ate o canal <#913019577141698600>, e clique nos emojis correspondente a cada pergunta\n\n`)
    .addField(`O que acontecerá se eu não me registrar?`,`A resposta e clara, você nao terá acesso aos canais do servidor, ficara limitado a 2 canais de texto que não podera enviar mensagens`)
    .addField(`Alguem pode me registrar?`,`A resposta e sim, mais **NÃO** iremos fazer isso, por que isso cabe a **VOCÊ**`)
    .addField(`Avisos Extras:`,`Membros que ficarem até 1 semana sem fazer fazer confirmação de adesão(O mesmo citado nos tópicos acima) serão automaticamente removidos deste servidor!\n\nE reforçando novamente, infelizmente essa burocracia é por questão de segurança, e também porque estamos lidando com __IFUNNER'S__.`)

	message.channel.send({ embeds: [embd] })
}