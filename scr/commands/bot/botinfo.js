const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const db = require('quick.db')

module.exports = new Command({
	name: 'botinfo',
	description: 'Mostra o ping do Bot',
	category: 'bot',
	aliases: ['infobot'],
	usage: 'none',	
	author: 'tomori',
	run: async (client, message, args) => {
		if (args.length > 0) {
			return
		}
		let user = message.author
		let footer = user.avatarURL({
			dinamyc: true,
		})
		if (footer === null) {
			user = client.user.avatarURL({
				dinamyc: true
			})
		}
		let Geral = await db.get(`config.stats.geral`)
		let libs = require('../../../package.json')
		libs = libs.dependencies
		let newlib = "<:chip:935164784154935326> "
		for (var i in libs) {
			newlib += i + '\n<:chip:935164784154935326> '
		}
		let comp = newlib.length
		let newcomp = comp - 28
		let notsend = new Discord.MessageEmbed()
			.setTitle(`:information_source: Sobre Mim`)
			.setColor('#FF0000')
			.setThumbnail(`${client.user.avatarURL({dinamyc: true})}`)
			.setDescription(`Sou a <:toto:934042191414833173> ${client.user.username}, estou tentando trazer alegria para todos, atualmente eu faço parte de mais de **${client.guilds.cache.size}** servidores, e cuido de **${client.users.cache.size}** lindas pessoas, e já  executei **${Geral}** comandos desde que fui criada!\n\nFui desenolvida em <:js:935134807631999006>** [JavaScript](https://g.co/kgs/fiDGbJ)** utilizando <:djs:935139154340237322> **[Discord.js](https://github.com/discordjs/discord.js)**, e sou totalmente <:open_source:935141228889124875> **Open Source**! Se você quiser ver meu código fonte ou contribuir para a minha criação, clique [aqui](https://github.com/elo1lson/Open-Os_Bot)`)
			.addFields(
			{
				name: '	Criador:',
				value: '<:dev:935237634270310421> \`\`tomoriiz#8894\`\`'
			},
			{
				name: 'Bibliotecas Utilizadas na minha criação:',
				value: `**${newlib.substr(0, newcomp)}**`
			},
			{
				name: 'Links Úteis:',
				value: '<:github:935233776227856415> [Github](https://github.com/elo1lson/Open-Os_Bot)\n<:sac:935235170552909965> [Suporte](https://discord.gg/NAdSr57Few)\n[Developer](https://github.com/elo1lson)'
			})
			.setFooter(`${message.author}`, `${footer}`)
			.setTimestamp()
		message.reply({ embeds: [notsend] }).then(m => {
			m.react('▶️')
		})
	}
})