	const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
const extra = require('../../extra.js')

module.exports = new Command({
	name: 'invite',
	description: extra.descriptions.INVITE.description,
	category: 'Bot',
	aliases: ['convite'],
	usage: {
		ob: "none",
		op: "none"
	},
	author: 'tomori',
	run: async (client, message, args) => {
		if (args.length > 0) return
		let u = message.author
		let send = extra.run.INVITE.embed.description.replace('%AUTHOR%', '[aqui](https://discord.com/oauth2/authorize?client_id=856578187504254976&permissions=8&scope=applications.commands%20bot)')
		let embed = new Embed(u)
		.setDescription(send)

		try {
			message.reply({ embeds: [embed] }).then(m => {
				m.react('❤')
			})
		} catch (e) {
			console.log('Erro no comando Invite ' + e)
			message.reply({ content: '❌ Ocorreu um erro ao tentar executar esse comando' })
		}
	}
})
