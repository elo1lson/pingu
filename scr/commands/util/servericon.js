const { MessageActionRow, MessageButton } = require('discord.js')
const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')

module.exports = new Command({
	name: 'contador',
	description: 'Mostra o icone do servidor',
	aliases: ['servericon', 'iconserver'],
	usage: {
		op: 'none',
		ob: 'none'
	},
	author: 'tomori',
	run: async (client, message, args) => {
		let pfp = message.guild.iconURL({dinamyc: true, format: 'png', size: 1024})
    if(pfp === null){
      return message.reply('Este servidor não tem uma foto😔 Desculpe por isso')
    }
		
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setLabel('Abrir no navegador')
				.setURL(`${pfp}`)
				.setStyle('LINK')
			);
			
		let embed = new Discord.MessageEmbed()
			.setTitle(`${message.guild.name}`)
			.setImage(`${pfp}`)
			.setFooter(`By toto`, `${client.user.avatarURL({dinamyc: true})}`)
		return message.reply({ embeds: [embed], components: [row] })
	}
})