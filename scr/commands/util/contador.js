const { MessageActionRow, MessageButton } = require('discord.js')
const Command = require('../../structures/command/command.js')

const actionRow = new MessageActionRow()
	.addComponents(
        [
            new MessageButton()
                .setStyle('DANGER')
                .setLabel('-1')
                .setCustomId('REMOVER'),
            new MessageButton()
                .setStyle('PRIMARY')
                .setLabel('ZERAR')
                .setCustomId('ZERAR'),
            new MessageButton()
                .setStyle('SUCCESS')
                .setLabel('+1')
                .setCustomId('ADICIONAR')
        ]
	)
module.exports = new Command({
	name: 'contador',
	description: 'Inicia um contador',
	aliases: ['contar', 'cont'],
	usage: {
		op: 'none',
		ob: 'none'
	},
	author: 'tomori',
	run: async (client, message, args) => {
		let contagem = 0
		const reply = await message.reply({
			content: `O contador  esta em ${contagem}`,
			components: [actionRow],
			fetchReply: true
		})
		const filter = (b) => b.user.id === message.user.id
		const collector = reply.createMessageComponentCollector({ filter, time: (10 * 60000) })
		
		collector.on('collect', (i) => {
			switch (i.customId) {
				case 'REMOVER':
					contagem--
					break;
				case 'ADICIONAR':
					contagem++
					break;
				case 'ZERAR':
					contagem = 0
					break;
			}
		
			i.edit({
				content: `Contagem: \`${contagem}\``
			})
		})
		
		collector.on('end', (collected, reason) => {
			if (reason === 'time') message.edit({
				content: `Contagem finalizada em: \`${contagem}\``,
				components: []
			})
		})
	}
	
})/*
module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: 'contador',
			description: 'Inicia um contador no canal'
		})
	}

	run = async (interaction) => {
		let contagem = 0

		const reply = await interaction.reply({
			content: `Contagem: \`${contagem}\``,
			components: [actionRow],
			fetchReply: true
		})

		
}*/