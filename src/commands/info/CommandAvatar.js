const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
module.exports = new Command({
	name: 'avatar',
	description: 'Mostra sua foto de perfil',
	category: 'Info',
	aliases: ['avt', 'pfp'],
	usage: {
		op: '<@usuario>',
		ob: 'none'
	},
	author: 'tomori',
	run: async (client, message, args, prefix) => {
		let u = message.author
		let syntax = new Embed(u)
			.setTitle('❔ Como usar?')
			.setDescription(`\`\`avatar\`\` => Envia a imagem do seu perfil!`)
			.addFields(
			{
				name: ':books: Exemplos:',
				value: `\`\`${prefix}avatar\`\` ${client.user}\n\`\`${prefix}$avatar\`\``
			},
			{
				name: ':twisted_rightwards_arrows: Aliases:',
				value: `\`\`pfp, avt\`\``
			})
		let user	= message.mentions.users.first()

		if (args.length > 0 && !message.mentions.users.first()) {
			return message.reply({
				embeds: [syntax]
			})
		}
		if (args.length > 0 && message.mentions.users.first() && (!args[1])) {
			if (args[1]) {
				return message.reply({
					embeds: [syntax]
				})
			} else {
				user = user
			}
		}
		if (!args[0]) {
			user = message.author
		}
		const avatar = user.displayAvatarURL({
			dinamyc: true,
			format: 'png',
			size: 2048
		})
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setLabel('Baixar')
				.setURL(`${avatar}`)
				.setStyle('LINK')
			);
		const EmbedAvatar = new Embed(u)
			.setDescription(`**📸 Olha aqui seu avatar**`)
			.setImage(`${avatar}`)
		try {
			message.reply({ embeds: [EmbedAvatar], components: [row] })
		} catch (e) {
			message.reply({content: '❌ Ocorreu um erro ao tentar executar esse comando'})
			console.log('Erro no comando Avatar: ' + e)
		}
	}
})
