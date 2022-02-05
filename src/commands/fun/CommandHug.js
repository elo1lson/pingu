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
			"https://c.tenor.com/qr-CxJEClOAAAAAd/anime-anime-hug.gif",
			"https://64.media.tumblr.com/tumblr_ma7l17EWnk1rq65rlo1_500.gif",
			"https://acegif.com/wp-content/gif/anime-hug-58.gif",
			"https://1.bp.blogspot.com/-86yVsCoo8Lg/YG74owL3TRI/AAAAAAAAD_g/bzEb8XecokcC7jyolOFu6w44nhklUSCwQCLcBGAsYHQ/s296/anime%2Bhug%2Bgif1.gif",
			"https://1.bp.blogspot.com/-JUqgHJmjyDs/YG76cI82URI/AAAAAAAAD_w/0QtzGkpiel0OlTVEdRCDLmK5Ot46rEq8QCLcBGAsYHQ/s300/romantic%2Banime%2Bhug%2Bgif1.gif",
			"https://i.pinimg.com/originals/3d/59/76/3d59767bee77ee37fda35f5b999cb2e2.gif",
			"https://img.wattpad.com/98621f187a60062b6dbacc20b8db54e7ed081d80/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f3231536372516276532d323034413d3d2d313031373538373033342e313635653932623536336463396664323835353836363537303439382e676966"
			]
			let mencao = message.mentions.users.first()
			if (mencao == client.user) {
				return message.reply({content: "Own❤ que fofo, agradeço sua intenção, mais você não pode me abraçar🦆"})
			} else
			if(mencao.id == message.author.id){
				return message.reply({content: "Tá carente?🤔 compra um hamirti porra"})
			}
			if(args[1]) return
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
