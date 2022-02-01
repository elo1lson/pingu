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
		//let cmdadmin = categories[admin].join(" - ")
	//	let cmdbot = categories[bot].join(" - ")
		let cmddiscord = categories.discord.join(" - ")
	//	let cmdecom = categories[ecom].join(" - ")
		//let cmdfun = categories[fun].join(" - ")
	//	let cmdgame = categories[game].join(" - ")
		//let cmdminecraft = categories[minecraft].join(" - ")
		//let cmdutil = categories[util].join(" - ")
		
		let embedadmin = new Discord.MessageEmbed()
			.setColor('#FF0000')
			.setTitle(':book: Lista de comandos')
			.addField(`Admin:`,`\`\`${cmddiscord}\`\``)
		let msgembed = new Discord.MessageEmbed()
			.setDescription(`Reaja com o emoji correspondente a categoria para exibir os comandos`)
			.addField(`Categorias:`,`:one: Admin\n:two: Bot\n:three: Discord\n:four: Economia\n:five: Fun\n:six: Game\n:seven: Minecraft\n:eight: Útil\n:arrow_backward: Voltar`)
			.setColor('#FF0000')
			.setThumbnail(`${client.user.avatarURL({dinamyc: true})}`)
			.setFooter(`${message.author.tag}`, `${footer}`)
		message.reply({embeds: [msgembed]}).then(async (m) => {
			await m.react('1️⃣')
			await m.react('2️⃣')
			await m.react('3️⃣')
			await m.react('4️⃣')
			await m.react('5️⃣')
			await m.react('6️⃣')
			await m.react('7️⃣')
			await m.react('8️⃣')
			await m.react('◀️')
			const back = (reaction, user) => reaction.emoji.name === "◀️" && user.id === message.author.id;
			const one = (reaction, user) => reaction.emoji.name === "️1️⃣" && user.id === message.author.id;
			const two = (reaction, user) => reaction.emoji.name === "️2️⃣" && user.id === message.author.id;
			const three = (reaction, user) => reaction.emoji.name === "️3️⃣" && user.id === message.author.id;
			const four = (reaction, user) => reaction.emoji.name === "️4️⃣" && user.id === message.author.id;
			const five = (reaction, user) => reaction.emoji.name === "️5️⃣" && user.id === message.author.id;
			const six = (reaction, user) => reaction.emoji.name === "️6️⃣" && user.id === message.author.id;
			const seven = (reaction, user) => reaction.emoji.name === "️7️⃣" && user.id === message.author.id;
			const eight = (reaction, user) => reaction.emoji.name === "️8️⃣" && user.id === message.author.id;
			const Back = m.createReactionCollector(back);
			const One = m.createReactionCollector(one);
			const Two = m.createReactionCollector(two);
			const Three = m.createReactionCollector(three);
			const Four = m.createReactionCollector(four);
			const Five = m.createReactionCollector(five);
			const Six = m.createReactionCollector(six);
			const Seven = m.createReactionCollector(seven);
			const Eight = m.createReactionCollector(eight);
			Back.on('collect', r =>{
				m.edit({embeds: [msgembed]})
			})
			One.on('collect', r =>{
				m.edit({embeds: [embedadmin]})
			})
			Two.on('collect', r => {
				m.edit({ embeds: [msgembed] })
			})
			Three.on('collect', r => {
				m.edit({ embeds: [msgembed] })
			})
			Four.on('collect', r => {
				m.edit({ embeds: [msgembed] })
			})
			Five.on('collect', r => {
				m.edit({ embeds: [msgembed] })
			})
			Six.on('collect', r => {
				m.edit({ embeds: [msgembed] })
			})
			Seven.on('collect', r => {
				m.edit({ embeds: [msgembed] })
			})
			Eight.on('collect', r => {
				m.edit({ embeds: [msgembed] })
			})
		})





	/*	for (let cat in categories) {
			// aqui vc tá indo categoria por categoria
			// constribuir a mensagem aqui
			let cmds = categories[cat]
			// .addField('Inline field title', 'Some value here', true)
			msg.addField(`${cat}`, `\`\`${cmds.join(' - ')}\`\``, true)
		}
*/
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