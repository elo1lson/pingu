const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
module.exports = new Command({
	category: 'Bot',
	name: 'help',
	description: 'Mostra a ajuda do bot',
	aliases: ['ajuda'],
	usage: {
		op: 'none',
		ob: 'help'
	},
	author: 'tomori',
	run: async (client, message, args, prefix, cor) => {
		if (args.lenght > 0) return
		let categories = {}

		// .sort() pode ser util no futuro, preguiça me impede
		client.commands.map((cmd) => {
			// esse é o Command
			// agora eu preciso fazer o sort... deixa eu pensar
			if (!cmd.category) return
			if (cmd.category === undefined) return // não funciona adicionar a categoria aqui por padrão


			if (categories[cmd.category] === undefined) {
				categories[cmd.category] = new Array()
			}

			// Mais simples
			categories[cmd.category].push(cmd.name)
			// Mais elaborado
			// categories[cmd.category].push({
			//   // aqui vc pode colocar uma porrada de propriedades - cor, etc
			//   // tb pode colocar no proprio Command, pripriedades customizadas
			//   name: cmd.name,
			//   description: cmd.description,
			// })
		})
		let u = message.author
		let msgembed = new Embed(u)
			.setTitle(`Lista de comandos`)
			.setDescription(`${message.author} confira minha lista de comandos separadas por categorias\n\n`)
			.setThumbnail(`${client.user.avatarURL({dinamyc: true})}`)

		for (let cat in categories) {
			// aqui vc tá indo categoria por categoria
			// constribuir a mensagem aqui
			let cmds = categories[cat]
			// .addField('Inline field title', 'Some value here', true)
			msgembed.addField(`:bookmark: ${cat}`, `\`\`${cmds.join(' - ')}\`\``, true)
		}
		msgembed.addField(`:link: Links Úteis:`, `<:github:935233776227856415> [Github](https://github.com/elo1lson/Open-Os_Bot)\n<:sac:935235170552909965> [Suporte](https://discord.gg/NAdSr57Few)\n<:dev:935237634270310421> [Developer](https://github.com/elo1lson)`)
		try {
			message.reply({ embeds: [msgembed] })
		} catch (e) {
			console.log('Erro no comando Avatar: ' + e)
			message.reply({ content: '❌ Ocorreu um erro ao tentar executar esse comando' })
		}
	}
})
