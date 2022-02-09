const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')

module.exports = new Command({
	name: 'kiss',
	category: 'Fun',
	description: 'Que tal dar um dar um beijinho naquele seu amigo?',
	aliases: ['beijar'],
	usage: {
		op: 'none',
		ob: '<usuario>'
	},
	author: 'tomori',
	run: async (client, message, args, prefix, cor) => {
		let mencao = message.mentions.users.first()
		if(!mencao){
			return message.reply({content: 'Marque alguem para fazer kiss kiss'})
		}
		if(mencao == client.user){
			return message.reply({content: '☺ Sou casada sabia? Não posso aceitar isso'})
		}
		if(mencao == message.author){
			return message.reply({content: 'Esquizofrênia amigo(a)?'})
		}
		/*let array = [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5isPRtOdV5YvaW9bpeZVv1HuoQqKzgMmqQ&usqp=CAU",
			"https://acegif.com/wp-content/uploads/anime-kiss-m.gif",
			"https://acegif.com/wp-content/uploads/anime-kissin-1.gif",
			"https://acegif.com/wp-content/uploads/anime-kissin-2.gif",
			"https://acegif.com/wp-content/uploads/anime-kissin-3.gif",
			"https://acegif.com/wp-content/uploads/anime-kissin-4.gif",
			"https://acegif.com/wp-content/uploads/anime-kissin-5.gif"
			]*/
			
		let i = Math.floor(Math.random() *19)
		let url = `https://acegif.com/wp-content/uploads/anime-kissin-${i}.gif`
		let u = message.author
		let embed = new Embed(u)
		.setColor(cor)
		.setDescription(`${message.author} fez Kiss Kiss em ${mencao}`)
		.setImage(`${url}`)
		try {
			message.reply({embeds: [embed] })
		} catch (e) {
			console.log('Erro no comando Kiss: ' + e)
			message.reply({ content: '❌ Ocorreu um erro ao tentar executar esse comando' })
		}
	}
})
