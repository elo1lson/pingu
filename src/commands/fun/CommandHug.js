const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')

module.exports = new Command({
	name: 'hug',
	category: 'Fun',
	description: 'Envia um emoji como foto',
	aliases: ['big-emoji', 'baixaremoji'],
	usage: {
		op: 'none',
		ob: '<usuario>'
	},
	author: 'tomori',
	run: async (client, message, args, prefix) => {
		let array = [
			"https://c.tenor.com/qr-CxJEClOAAAAAd/anime-anime-hug.gif"
			]
			let mencao = message.mentions.users.first()
			if(!mencao) return message.reply({content: "Marque um usuario para abraçar"})
			if(args[1]) return
			let u = message.author
			let i = array[Math.floor(Math.random() * array.length)]
			let hug = new Embed(u)
			.setDescription(`${message.author} acaba de dar um abraço enorme em ${mencao}`)
			.setImage(`${i}`)
		try{
			message.reply({embeds: [hug]})
		} catch (e) {
			console.log('Erro no comando Hug: ' + e)
			message.reply({ content: '❌ Ocorreu um erro ao tentar executar esse comando' })
		}
	}
})
