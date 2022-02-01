const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Stats = require('../../helpers/stats.js')
const db = require('quick.db')
//| Instanciando a classe
module.exports = new Command({
	category: 'Owner',
	name: 'setcolor',
	aliases: [],
	author: 'tomori',
	run: async (client, message, args, prefix) => {
		console.log(args.length)
		if (!args[0]) {
			return message.reply('Insira uma cor')
		}
		if (args[0].lenght > 6) return message.reply('😑 Hum.... essa cor é inválida')
		if (args[0].length < 6) return message.reply("A cor precisa ter 6 caracteres")
		
			
			let embed = new Discord.MessageEmbed()
				.setColor('BLACK')
				.setTitle('Definir nova cor')
				.setDescription('Deseja definir essa cor como padrão para todas as embeds?')
				.setThumbnail(`http://placehold.it/500/${args[0]}/${args[0]}`)
			try {
				message.reply({ embeds: [embed] }).then(async m => {
					await m.react('✅')
					await m.react('❌')
					const yes = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
					const no = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
					const Yes = m.createReactionCollector(yes)
					const No = m.createReactionCollector(no)

					Yes.on('collect', r => {
						let newembed = new Discord.MessageEmbed()
							.setColor('BLACK')
							.setTitle('Cor definida!')
							.setDescription('Agora todas as embeds terão essa cor!')
							.setThumbnail(`http://placehold.it/500/${args[0]}/${args[0]}`)
						db.set(`config.color`, `#${args[0]}`)
						message.reply({embeds: [newembed]})
					})
					No.on('collect', r =>{
						m.delete()
					})
				})

				} catch (e) {
				message.reply('Aconteceu um erro ao tentar executar esse comando')
			}
		}




		/*if(!args[0]) return message.reply(`Insira uma cor no formato \`\`RGB\`\``)
		if(args[1]) return message.reply('Apenas cores, por favor🤚')
		if(args[0]){
			db.set(`config.color`,`${args[0]}`)
			message.reply("Setado!")
			
		}
				if (args.join(" ").toLowerCase().includes("burn")) rnd = 38;*/
})