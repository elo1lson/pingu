const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')

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
		let footer = message.author.avatarURL({ dinamyc: true })
		if (footer === null) {
			footer = client.user.displayAvatarURL({ dinamyc: true })
		}
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

		let msgembed = new Discord.MessageEmbed()
			.setTitle(`Lista de comandos`)
			.setDescription(`${message.author} confira minha lista de comandos separadas por categorias\n\nClique em ❌ a qualquer momento para apagar essa mensagem`)
			.setColor(cor)
			.setThumbnail(`${client.user.avatarURL({dinamyc: true})}`)
			.setFooter(`${message.author.tag}`, `${footer}`)

		for (let cat in categories) {
			// aqui vc tá indo categoria por categoria
			// constribuir a mensagem aqui
			let cmds = categories[cat]
			// .addField('Inline field title', 'Some value here', true)
			msgembed.addField(`:bookmark: ${cat}`, `\`\`${cmds.join(' - ')}\`\``, true)
		}
		message.reply({embeds: [msgembed]})
	}
})
