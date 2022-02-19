
const { MessageActionRow, MessageButton } = require('discord.js');
const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
//const lang = require('../../locales/pt-BR/bot/info.json')
module.exports = new Command({
	name: 'q',
	description: 'Informações sobre o bot',
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
				.setCustomId('primary')
				.setLabel('Primary')
				.setStyle('PRIMARY')
			);
		message.reply({ content: "¥", components: [row] })

		const filter = i => i.customId === 'primary' && i.user.id === '539945189901336586';
		const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });
		collector.on('collect', async i => {
			console.log("333")
			if (i.customId === 'primary') {
				await i.update({ content: 'A button was clicked!', components: [row] });
			}
		});
	}

})