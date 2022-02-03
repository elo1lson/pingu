/*
const fs = require("fs")
const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Stats = require('../../modules/index.js')

module.exports = new Command({
	name: 'help',
	description: 'Envia um emoji como foto',
	aliases: ['ajuda'],
	usage: {
		op: 'none',
		ob: 'none'
	},
	author: 'tomori',
	run: async (client, message, args, prefix) => {
		cat = new Discord.Collection()
		
		console.log(cmds)
		let a = new Discord.MessageEmbed()
					.setDescription(`Para saber meus comandos, reaja ao emoji de cada categoria.`)
					.setColor('#FF0000')
					.addFields(
					{
						name: 'Teste',
						value: `teste`
					}
		message.reply({ embeds: [a] }).then(async msg => {
			msg.react('▶️')


			const back = (reaction, user) => reaction.emoji.name === "▶️" && user.id === message.author.id;

			const backL = msg.createReactionCollector(back);
			backL.on('collect', r => {
				const embedd = new Discord.MessageEmbed()
					.setDescription(`Mensagem editada`)
					.setColor('#FF0000')
					.addFields(
					{
						name: 'Teste',
						value: `teste`
					}
				msg.edit({ embeds: [embedd] })
			})
		})
	}
})*/
