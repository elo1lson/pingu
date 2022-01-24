//18/01/2022 - tomorii
//49 linhas
//Github: elo1lson
//Discord: tomorii#8894
//Sinta-se a vontade para usar esse código

//Constantes para uso
const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Tomori = require('../../modules/index.js')

//Instanciando a classe
module.exports = new Command({
	name: 'botinfo',
	description: 'Mostra o ping do Bot',
	aliases: ['pin', 'botping'],
	usage: 'none',
	author: 'tomori',
	run: async (client, message, args) => {
		b = new Tomori("botinfo")
		console.log(b)
		let notsend = new Discord.MessageEmbed()
			.setTitle(`:information_source: Sobre Mim`)
			.setColor('#FF0000')
			.setDescription(`Sou a ${client.user.username}, um bot focado em divertir seu servidor e proteger`)
			.setFooter(`By toto`, `${client.user.avatarURL({dinamyc: true})}`)
		message.reply({ embeds: [notsend] })
		client.cluster.broadcastEval(c => c.guilds.cache.size).then(results => console.log(`${results.reduce((prev, val) => prev + val, 0)} total guilds`))
a = client.totalClusters
    console.log(a)

	}
})