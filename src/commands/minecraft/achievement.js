const snekfetch = require('snekfetch');

const Discord = require('discord.js')
const { MessageActionRow, MessageButton } = require('discord.js');
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
		let url = `http://aws.random.cat/meow`
		let bod = snekfetch.get(url).then(r => {
			//	let { body } = await superagent.get(`http://aws.random.cat/meow`);
			let u = message.author
			let catembed = new Embed(u)
				.setTitle("Gatos 🐱")
				.setImage(r.body);
			message.channel.send({ embeds: [catembed] });
		})
	}
})
