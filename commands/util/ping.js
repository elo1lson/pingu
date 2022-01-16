const emoji = require("../config/emoji.json")
const Discord = require("discord.js")
module.exports = {
	name: "ping",
	author: "tomorii",

	run: async (client, message, args) => {

		let ping_do_bot = client.ws.ping;
		let embed_1 = new Discord.MessageEmbed()
			.setColor('BLACK')
			.setDescription(`${emoji.ping} Calculando ping...`);

		let embed_2 = new Discord.MessageEmbed()
			.setColor('BLACK')
			.setDescription(`${emoji.ping} ${message.author.username} seu ping está em \`${ping_do_bot} ms`)
			.setFooter(`Solicitado  por ${message.author.username}`)

		let comando = await message.channel.send({embeds:[embed_1]}).then(msg => {
			setTimeout(() => {
				msg.edit({embeds:[embed_2]})
			}, 2000)
		const emoji = require("../config/emoji.json")
const Discord = require("discord.js")
module.exports = {
	name: "ping",
	author: "tomorii",

	run: async (client, message, args) => {

		let ping_do_bot = client.ws.ping;
		let embed_1 = new Discord.MessageEmbed()
			.setColor('BLACK')
			.setDescription(`${emoji.ping} Calculando ping...`);

		let embed_2 = new Discord.MessageEmbed()
			.setColor('BLACK')
			.setDescription(`${emoji.ping} ${message.author.username} seu ping está em \`\`${ping_do_bot}ms\`\``)
			.setFooter(`Espero ter te ajudado ${message.author.username} XD`)

		let comando = await message.channel.send({embeds:[embed_1]}).then(msg => {
			setTimeout(() => {
				msg.edit({embeds:[embed_2]})
			}, 2000)
		})
	}
}})
	}
}