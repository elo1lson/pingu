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
		if (!mencao) {
			return message.reply({ content: 'Marque alguem para dar uma beijoca' })
		}
		if (mencao == client.user) {
			return message.reply({ content: '☺ Sou casada sabia? Não posso aceitar isso' })
		}
		if (mencao == message.author) {
			return message.reply({ content: 'Esquizofrênia amigo(a)?' })
		}
		if (args[1]) return

		//Mini sistema de pegar gif	
		let i = Math.floor(Math.random() * 19)
		let url = `https://acegif.com/wp-content/uploads/anime-kissin-${i}.gif`
		let u = message.author
		let embed = new Embed(u)
			.setTitle('❤ Beijocas')
			.setColor(cor)
			.setThumbnail("https://cdn-icons.flaticon.com/png/512/210/premium/210545.png?token=exp=1644435176~hmac=ad95cdf7ddeb81d14ff73d72ee79e94d")
			.setDescription(`${message.author} fez kiss kiss em ${mencao}`)
			.setImage(`${url}`)
		try {
			message.reply({
				embeds: [embed]
			}).then(m => {
				m.react('❤')
			})
		} catch (e) {
			console.log('Erro no comando Kiss: ' + e)
			message.reply({ content: '❌ Ocorreu um erro ao tentar executar esse comando' })
		}
	}
})