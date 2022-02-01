/*
18/01/2022 - tomorii
80 linhas  
Github: elo1lson
Discord: tomorii#8894
Sinta-se a vontade para usar esse código
*/

const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js')
const Command = require('../../structures/command/command.js')

module.exports = new Command({
	name: 'avatar',
	description: 'Mostra sua foto de perfil',
  category: 'discord',
	aliases: ['avt', 'pfp'],
	usage: {
		op: '<@usuario>',
		ob: 'none'
	},
	author: 'tomori',
	run: async (client, message, args, prefix) => {

		let syntax = new Discord.MessageEmbed()
			.setTitle('❔ Como usar?')
			.setColor('#00FF00')
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

		const EmbedAvatar = new Discord.MessageEmbed()
			.setDescription(`**📸 Olha aqui seu avatar**`)
			.setImage(`${avatar}`)
			.setFooter(`By toto`,`${client.user.avatarURL({dinamy: true})}`)
		message.reply({ embeds: [EmbedAvatar], components: [row] })
    
		console.log(client.commands);
	}
})

//<3
/*
const fs = require('fs')
var arry = []
fs.readdirSync('/home/runner/Open-OsBot/scr/commands/discord/').forEach(c =>{
	for (prop of c) {
		content = require(`/home/runner/Open-OsBot/scr/commands/discord/${c}`)
      arry.push(content.name)
    if(arry[content.name]){
      console.log("temmm")
    }

	}
})*/
