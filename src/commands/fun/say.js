const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')

module.exports = new Command({
	category: 'Fun',
	name: 'say',
	description: 'Me faça falar algo...',
	aliases: ['falar','fale'],
	usage: {
		op: 'none',
		ob: '<texto>'
	},
	author: 'tomori',
	run: async (client, message, args, prefix, cor) => {
		let footer = message.author.avatarURL({dinamyc: true})
		if(footer === null){
			footer = client.user.displayAvatarURL({dinamyc: true})
		}
		let embed = new Discord.MessageEmbed()
		.setTitle(`Sintaxe da ${client.user.username}`)
		.setColor(cor)
		.setDescription(`\`\`${prefix}say\`\` => Faça eu falar alguma coisa!`)
		.addFields(
			{
				name: ':grey_question: Como usar?',
				value: `\`\`${prefix}say\`\` <texto>`
			},
			{
				name:`:pencil: Exemplo:`,
				value: `\`\`${prefix}say\`\` a ${client.user.username} é minha amiga❤\n\`\`${prefix}say\`\` Eu gosto de batatas🍟`
			},
			{
				name: ':compass: Aliases:',
				value: `\`\`falar, fale\`\``
			}
			)
		.setFooter(`${message.author.tag}`,`${footer}`)
		
		if (!args[0]) {
			return message.reply({embeds: [embed]}).then(msg => {
				msg.react('❓')
			})
		}
		if (args.length > 0){
			message.delete()
			message.channel.send(`${args.join(" ")}\nEnviado por ${message.author}`)
		}
	}
})