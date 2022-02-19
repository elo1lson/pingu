const Discord = require('discord.js')
//const locales = require('../../extra.js')
const { MessageActionRow, MessageButton } = require('discord.js');
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
const extra = require('../../extra.js')
module.exports = new Command({
	name: 'botinfo',
	description: extra.descriptions.BOTINFO.description,
	category: 'Bot	',
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
		let boby = `\`\`Bobycake#8894\`\``
		let comp = newlib.length
		let newcomp = comp - 28
		let send = locales.run.BOTINFO.embed.description.replace("%BOTNAME%", client.user.username)
		//let fieldtwovalue = locales.run.BOTINFO.embed.fieldtwo.value

		send = send.replace("%COMMANDS%", "16")
		send = send.replace("%GUILDS%", client.guilds.cache.size)
		send = send.replace("%USERS%", client.users.cache.size)
		send = send.replace("%TOTALCOMMANDS%", "999")
		send = send.replace("%JS%", "[JavaScript](https://pt.m.wikipedia.org/wiki/JavaScript)")
		send = send.replace("%DJS%", "[Discord.js](https://github.com/discordjs/discord.js)")
		send = send.replace("%OPENSOURCE%", "[Open Source](https://www.google.com/search?q=open+source&oq=open+so&aqs=chrome.4.69i57j69i61j69i60l2j0i433i512j46i199i433i465i512j69i59j0i512.3507j0j4&client=ms-android-samsung-gj-rev1&sourceid=chrome-mobile&ie=UTF-8)")
		send = send.replace("%LINK%", "[aqui](https://github.com/tomoriOpen/Tomori)")

		let user = message.author
		let notsend = new Embed(user)
			.setTitle(locales.run.BOTINFO.embed.title)
			.setThumbnail(`${client.user.avatarURL({dinamyc: true})}`)
			.setDescription(send)
			.addFields(
				{
					name: locales.run.BOTINFO.embed.fieldone.name,
					value: `\`\`${locales.run.BOTINFO.embed.fieldone.value
					}\`\``
				},
				/*{
					name: 'Bibliotecas Utilizadas na minha criação:',
					value: `**${newlib.substr(0, newcomp)}**`
				},*/
				{
					name: locales.run.BOTINFO.embed.fieldtwo.name,
					value: '<:github:935233776227856415> [Github](https://github.com/elo1lson/Open-Os_Bot)\n<:sac:935235170552909965> [Suporte](https://discord.gg/NAdSr57Few)\n<:dev:935237634270310421> [Developer](https://github.com/elo1lson)'
				})
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
				.setCustomId('primary')
				.setLabel(locales.run.BOTINFO.button.one)
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

