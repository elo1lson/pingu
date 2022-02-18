const snekfetch = require('snekfetch');
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
module.exports = new Command({

	name: 'cat',
	description: "client.lang.examples.CAT.description",
	category: 'Fun',
	aliases: ['gato'],
	usage: {
		ob: "none",
		op: "none"
	},
	author: 'tomori',
	run: async (client, message, args) => {
		if (args.lenght > 0) return
		let url = "http://aws.random.cat/meow"
		let req = await snekfetch.get(url)
		let u = message.author
		let embed = new Embed(u)
			.setTitle(client.lang.context.CAT.embed.title)
			.setImage(req.body.file)
		message.reply({ embeds: [embed] }).then(m => m.react('😻'))
	}
})
