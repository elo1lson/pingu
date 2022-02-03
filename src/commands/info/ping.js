const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
module.exports = new Command({
	name: 'ping',
	description: 'Mostra o ping do Bot',
	aliases: ['pin', 'botping'],
	usage: 'none',
	author: 'tomori',
	run: async (client, message, args) => {
		var user = message.author
		var footer = user.avatarURL({
			dinamyc: true,
			format: 'png',
			size: 1024
		})

		if (footer === null) footer = client.user.displayAvatarURL({
			dinamyc: true,
			format: 'png',
			size: 1024

		})
		var embed = new Discord.Embed(user)
			.setTitle(`Ping!`)
			.setColor('#FF0000')
			.setDescription(`Meu ping está em: ${client.ws.ping}`)
			.setFooter(`By toto`, `${footer}`)
		console.log(message.channel.type)
		message.reply({ embeds: [embed] }).then(m => {
			var embedtwo = new Discord.MessageEmbed()
				.setTitle('🏓 Pong!')
				.setDescription(`💻 | Api: ${m.createdTimestamp - message.createdTimestamp}ms\n⏱ | Gateway: ${client.ws.ping}ms\n🛰 | Shard: ${client.shards}`)
			m.edit({ embeds: [embedtwo] })
			m.react('🖥')
		})
	}
})
