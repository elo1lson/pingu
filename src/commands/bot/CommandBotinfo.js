const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js');
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
//const lang = require('../../locales/pt-BR/bot/info.json')
module.exports = new Command({
	name: 'botinfo',
	description: 'Informações sobre o bot',
	category: 'Bot',
	aliases: ['infobot'],
	usage: {
		ob: "none",
		op: "none"
	},
	author: 'tomori',
	run: async (client, message, args) => {
		let Geral = `\`\`Erro\`\``
		let libs = require('../../../package.json')
		libs = libs.dependencies
		let newlib = "<:chip:935164784154935326> "
		for (var i in libs) {
			newlib += i + '\n<:chip:935164784154935326> '
		}
		let c = 0
		client.commands.map((cmd) => {
			c + 1
		})
		let boby = `\`\`Bobycake#8894\`\``
		let comp = newlib.length
		let newcomp = comp - 28
		let user = message.author
		let notsend = new Embed(user)
			.setTitle('🐊 Sobre')
			.setThumbnail(`${client.user.avatarURL({dinamyc: true})}`)
			.setDescription(client.lang.BOTINFO.embed.description)
			.addFields(
				{
					name: "Criador",
					value: `\`\`bobycake#8894\`\``
				},
				/*{
					name: 'Bibliotecas Utilizadas na minha criação:',
					value: `**${newlib.substr(0, newcomp)}**`
				},*/
				{
					name: 'Links Úteis:',
					value: '<:github:935233776227856415> [Github](https://github.com/elo1lson/Open-Os_Bot)\n<:sac:935235170552909965> [Suporte](https://discord.gg/NAdSr57Few)\n<:dev:935237634270310421> [Developer](https://github.com/elo1lson)'
				})
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setCustomId('primary')
				.setLabel('Próximo')
				.setStyle('PRIMARY')
				.setDisabled(true)
			);
		try {
			message.reply({ embeds: [notsend], components: [row] })
		} catch (e) {
			message.reply({ content: '❌ Ocorreu um erro interno ao tentar executar esse comando' })
		}

	}
})
//2022 - Eloilson
