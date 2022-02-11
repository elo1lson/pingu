const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js');
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
module.exports = new Command({
	name: 'invite',
	description: 'Meu link de convite',
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
		let embed = new Embed(u)
			.setDescription('Que tal me adicionar em outros servidores do Discord?\nClique [aqui](https://discord.com/oauth2/authorize?client_id=856578187504254976&permissions=8&scope=applications.commands%20bot) para fazer isso')
		message.reply({ embeds: [embed]}).then(m => {
			m.react('❤')
		})
	}
})