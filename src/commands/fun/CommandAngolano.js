const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')

module.exports = new Command({
	name: 'angolano',
	category: 'Fun',
	description: 'Fala uma frase angolana',
	aliases: ['banio',],
	usage: {
		op: 'none',
		ob: 'none'
	},
	author: 'tomori',
	run: async (client, message, args, prefix) => {
		if(args.length > 0) return
		var text = "premeira coisa☝😠 você não pode discutire comigo😠! Oque que qui foi😠👉😠 você não toma bainho🙎🚿 cala boca🤫! (jacalé🐊!) tá me xerá😤! Você qui tá xerá você não escova seus dentes🦷 ... BESTEIRAHH😠 que não me presta, manda fuma💨🚬! teu português não sabe falar🙊🗣 você nunca estudou🤓📚! não vale a pena você é um feiooo! Anda que nem um pato🚶‍♂️🦆! NACULUDUHHHH😲😲"
		try {
			message.reply({ content: `${text}` })
		} catch (e) {
			console.log('Erro no comando Avatar: ' + e)
			message.reply({ content: '❌ Ocorreu um erro ao tentar executar esse comando' })
		}
	}
})
