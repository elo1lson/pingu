	//18/01/2022 - tomorii
		//38 linhas
		//Github: elo1lson
		//Discord: tomorii#8894
		//Sinta-se a vontade para usar esse código
	
		//Constantes para uso
		const Discord = require('discord.js')
		const { MessageActionRow, MessageButton } = require('discord.js')
		const Command = require('../../structures/command/command.js')
	
		//Instanciando a classe
		module.exports = new Command({
			name: 'avatar',
			description: 'Mostra sua foto de perfil',
			aliases: ['avt', 'pfp'],
			usage: {
				op: '<@usuario>',
				ob: 'none'
			},
			author: 'tomori',
			run: async (client, message, args) => {
				var syntax = new Discord.MessageEmbed()
				.setColor('RED')
				.setAuthor(`Erro!`,`https://c.tenor.com/jw1BijUXy4AAAAAC/windows-error.gif`)
				.setDescription(`Sintaxe invalida: \`\`${args.join(" ")}\`\` não um argumento válido, use:\n.avatar <@usuario> para avatar de um usuário, ou .avatar para o seu avatar`)
				.addField('Aliases:',`\`\`avt, pfp\`\``)
				
				var user = message.mentions.users.first()
				
				if (args.length > 0 && !message.mentions.users.first()) {
					return message.reply({
						embeds: [syntax]
					})
				}
				if (args.length > 0 && message.mentions.users.first() && (!args[1])) {
					user = user
				}
				if (!args[0]) {
					user = message.author
				}
				const avatar = user.avatarURL({
					dinamyc: true,
					format: 'png',
					size: 1024
	
				})
				const row = new MessageActionRow()
					.addComponents(
						new MessageButton()
						.setLabel('📎 Ver na Web')
						.setURL(`${avatar}`)
						.setStyle('LINK')
					);
	
				const EmbedAvatar = new Discord.MessageEmbed()
					.setDescription(`**📸 Olha aqui seu avatar**`)
					.setImage(`${avatar}`)
				message.reply({ embeds: [EmbedAvatar], components: [row] })
			}
		})