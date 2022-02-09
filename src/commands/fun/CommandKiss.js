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
			message.reply({content: 'Esquizofrênia amigo(a)?'})
		}
		let array = [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5isPRtOdV5YvaW9bpeZVv1HuoQqKzgMmqQ&usqp=CAU",
			"https://acegif.com/wp-content/uploads/anime-kiss-m.gif",
			"https://animesher.com/orig/1/167/1673/16736/animesher.com_gif-couple-kiss-1673657.gif",
			"https://animesher.com/orig/1/123/1235/12354/animesher.com_anime-boy-anime-couple-shin-1235427.gif",
			"https://animesher.com/orig/1/140/1404/14046/animesher.com_gif-manga-kissing-1404608.gif"
			]
		let i = Math.floor(Math.random() * array.length)
		let u = message.author
		let embed = new Embed(u)
		.setColor(cor)
		.setDescription(`${message.author} fez Kiss Kiss`)
		.setImage(`${array[i]}`)
		try {
			message.reply({ content: [embed] })
		} catch (e) {
			console.log('Erro no comando Kiss: ' + e)
			message.reply({ content: '❌ Ocorreu um erro ao tentar executar esse comando' })
		}
	}
})
