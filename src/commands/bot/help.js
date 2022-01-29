const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
module.exports = new Command({
	name: 'help',
	description: 'Mostra ajuda',
	aliases: ['ajuda'],
	usage: {
		op: 'none',
		ob: 'help'
	},
	author: 'tomori',
	run: async (client, message, args, prefix) => {
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

			console.log(cmd.category);

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
			.setColor('#FF0000')
			.setThumbnail(`${client.user.avatarURL({dinamyc: true})}`)
			.setFooter(`${message.author.tag}`, `${footer}`)

		for (let cat in categories) {
			// aqui vc tá indo categoria por categoria
			// constribuir a mensagem aqui
			let cmds = categories[cat]
			// .addField('Inline field title', 'Some value here', true)
			msgembed.addField(`${cat}`, `\`\`${cmds.join(' - ')}\`\``, true)
		}
		message.reply({ embeds: [msgembed] }).then(async (m) => {
			await m.react('❌')
			const del = (reaction, user) => reaction.emoji.name === "◀️" && user.id === message.author.id;
			const Del = m.createReactionCollector(del)
			Del.on('collect', r => {
				m.delete()
				message.delete()
			})
		})
		// Aqui envia uma mensagem só, com tudo
		//	message.reply({ content: "Chupa meu saco", embeds: [msg] })

		// let a = new Discord.MessageEmbed()
		// 			.setDescription(`Para saber meus comandos, reaja ao emoji de cada categoria.`)
		// 			.setColor('#FF0000')
		// 			.addFields(
		// 			{
		// 				name: 'Teste',
		// 				value: `teste`
		// 			}


	}
})	