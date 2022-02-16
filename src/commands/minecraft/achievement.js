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

const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
const snekfetch = require('snekfetch');
module.exports = new Command({
	category: 'Minecraft',
	name: 'achievement',
	description: 'Envia uma imagem com uma conquista do minecraft',
	aliases: ['conquista'],
	usage: {
		op: 'none',
		ob: '<texto>'
	},
	author: 'tomori',
	run: async (client, message, args, prefix) => {
		let u = message.author
		let not = new Embed(u)
			.setTitle('❔ Como usar?')
			.setDescription(`\`\`achievement\`\` => Envia uma imagem com uma conquista do minecraft`)
			.addFields(
			{
				name: ':books: Exemplos:',
				value: `\`\`${prefix}$achievement\`\` Eu amo a ${client.user.username}\n\`\`${prefix}$achievement\`\` Eu sou legal`
			},
			{
				name: ':twisted_rightwards_arrows: Aliases:',
				value: `\`\`conquista\`\``
			})
		if (!args.join(" ")) return message.reply({ embeds: [not] })
		let [title, contents] = args.join(" ").split("|");
		if (!contents)[title, contents] = ["Conquista desbloqueada!", title];
		let rnd = Math.floor((Math.random() * 39) + 1);

		if (args.join(" ").toLowerCase().includes("burn")) rnd = 38;
		if (args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
		if (args.join(" ").toLowerCase().includes("cake")) rnd = 10;
		if (title.length > 24 || contents.length > 22) return message.channel.send("Você inseriu mais de 22 caracteres.");
		const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;

		try {
			snekfetch.get(url).then(r =>{
				message.channel.send({ files: [{ attachment: r.body }] })});
		} catch (e) {
			console.log('Erro no comando Achievement: ' + e)
			message.reply({ content: '❌ Ocorreu um erro ao tentar executar esse comando' })
		}
	}
})
