const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const db = require('quick.db')

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
	run: async (client, message, args, prefix) => {
		if (args.lenght > 0) return
		let cor = db.get(`config.color`)
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
		message.reply({ embeds: [msgembed] }).then(async (m) => {
			await m.react('❌')
			const filter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.author.id; };
			m.awaitReactions({ filter, max: 4, time: 60000, errors: ['time'] })
				.then(collected => m.delete())
				.catch(collected => {
					console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
				});
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
