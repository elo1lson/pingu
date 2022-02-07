const { MessageActionRow, MessageSelectMenu } = require('discord.js');
const Command = require('../../structures/command/command.js')
module.exports = new Command({
	name: 'sr',
	aliases: ['mn'],
	author: 'tomori',
	run: async (client, message, args, prefix) => {
		const row = new MessageActionRow()
			.addComponents(new MessageSelectMenu()
				.setCustomId('select')
				.setPlaceholder('Nothing selected')
				.addOptions([{ label: 'Select me', description: 'This is a description', value: 'first_option', }, { label: 'You can select me too', description: 'This is also a description', value: 'second_option', }, ]), );
		await message.reply({ content: 'Pong!', components: [row] });
	}
})
