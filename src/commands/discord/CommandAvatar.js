const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
module.exports = new Command({
	name: 'avatarr',
	description: 'Mostra sua foto de perfil',
  category: 'discord',
	aliases: ['avt', 'pfp'],
	usage: {
		op: '<@usuario>',
		ob: 'none'
	},
	author: 'tomori',
	run: async (client, message, args, prefix, cor) => {

		let syntax = new Discord.MessageEmbed()
			.setTitle('❔ Como usar?')
			.setColor(cor)
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
			.setFooter(`By toto`,`${client.user.avatarURL({dinamyc: true})}`)

		let	 user = message.mentions.users.first()

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
		const avatar = user.avatarURL({
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
    
        var a = message.author
    const EmbedAvatar = await new Embed(a)
			.setDescription(`**📸 Olha aqui seu avatar**`)
			.setImage(`${avatar}`)
		message.reply({ embeds: [EmbedAvatar], components: [row] })
    
		//console.log(client.commands);
	}
})