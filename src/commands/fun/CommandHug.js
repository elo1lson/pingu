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
			"https://c.tenor.com/nxjuBYA2thMAAAAC/love-animecute.gif",
			"https://tenor.com/view/cuddle-anime-hug-love-hug-happy-hug-loving-embrace-gif-24485164",
			"https://tenor.com/view/besos-gif-21030351",
			"https://tenor.com/view/hug-hugs-and-love-hug-anime-anime-elfen-lied-gif-22240429",
			"https://tenor.com/view/anime-cute-hug-gif-14577424",
			"https://tenor.com/view/cat-cute-hug-huggies-kozumexzumire-gif-19555995",
			"https://tenor.com/view/anime-hug-gif-22839306",
			"https://tenor.com/view/chiya-urara-meirochou-anime-saku-gif-8995974",
			"https://tenor.com/view/cuddle-hug-anime-bunny-costumes-happy-gif-17956092",
			"https://tenor.com/view/anime-cheeks-hugs-gif-14106856",
			"https://tenor.com/view/hug-comfort-cute-anime-friends-gif-22169252",
			"https://tenor.com/view/anime-hug-manga-cuddle-japan-gif-10522729",
			"https://tenor.com/view/toilet-bound-hanakokun-anime-anime-hug-gif-16831471",
			"https://tenor.com/view/anime-choke-hug-too-tight-gif-14108949",
			"https://tenor.com/view/hug-anime-clingy-gif-7552075",
			"https://tenor.com/view/anime-anime-hug-anime-girls-anime-girls-hug-anime-yuri-hug-gif-16724635",
			//pt 2
			]
			let mencao = message.mentions.users.first()
			if(!mencao) return message.reply({content: "Marque um usuario para abraçar"})
			if(args[1]) return
			let u = message.author
			let i = Math.floor(Math.random() * array.length)
			let hug = new Embed(u)
			.setDescription(`${message.author} acaba de dar um abraço enorme em ${mencao}`)
			.setImage(`${array[i]}`)
		try{
			message.reply({embeds: [hug]}).then(m=> {
				m.react('	❤')
			})
		} catch (e) {
			console.log('Erro no comando Hug: ' + e)
			message.reply({ content: '❌ Ocorreu um erro ao tentar executar esse comando' })
		}
	}
})