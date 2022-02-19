const { MessageActionRow, MessageButton } = require('discord.js');
const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
const extra = require('../../extra.js')
module.exports = new Command({
	name: 'setname',
	aliases: ['n'],
	description: "4",
	run: async (client, message, args) => {
		if (message.author.id != '539945189901336586') return
		let msgs = args[0]
		let u = message.author
		const embed = new Embed(u)
			.setDescription('Meu nome foi alterado para: ' + `${msgs}`)
		client.user.setUsername(msgs).then(
			message.reply({ embeds: [embed] })).catch(e => e)
	}
})
