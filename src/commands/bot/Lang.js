const { MessageActionRow, MessageButton } = require('discord.js');
const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
const extra = require('../../extra.js')
module.exports = new Command({
	name: 'setlang',
	description: extra.descriptions.SETLANG.description,
	category: 'Bot',
	aliases: ['infobot'],
	usage: {
		ob: "none",
		op: "none"
	},
	author: 'tomori',
	run: async (client, message, args) => {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setCustomId('pt')
				.setEmoji('🇧🇷')
				.setLabel('Português')
				.setStyle('SUCCESS')
			)
			.addComponents(
				new MessageButton()
				.setCustomId('pth')
				.setEmoji('🇺🇲')
				.setLabel('English')
				.setStyle('DANGER')
			)
		let u = message.author
		let mainembed = new Embed(u)
		mainembed.setTitle(extra.run.SETLANG.embed.title)
		mainembed.setDescription(extra.run.SETLANG.embed.description)
		mainembed.addField(extra.run.SETLANG.embed.fieldone.name, extra.run.SETLANG.embed.fieldone.value)

		message.reply({ embeds: [mainembed], components: [row] })

		const filter = i => i.customId === 'pt' && i.user.id === message.author.id;
		const filter = i => i.customId === 'pt' && i.user.id != message.author.id;
		const collectorerro = message.channel.createMessageComponentCollector({ filter, time: 15000 });
		
		collectorerro.on('collect', async i => {
			if (i.customId === 'pt') {
				await i.update({content: "Foi mal amiguinho, não foi você que solicitou esse comando",components: [], ephemeral: true});
			}
		});

		const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });
		collector.on('collect', async i => {
			console.log("333")
			if (i.customId === 'pt') {
				await i.update({ components: [row] });
			}
		});
	}

})