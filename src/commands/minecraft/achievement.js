	//26/01/2022 - tomorii
//49 linhas
//Github: elo1lson
//Discord: tomorii#8894
//Sinta-se a vontade para usar esse código

const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const snekfetch = require('snekfetch');
const Stats = require('../../helpers/stats.js')

module.exports = new Command({
	category: 'minecraft',
	name: 'achievement',
	description: 'Envia uma imagem com uma conquista do minecraft',
	aliases: ['conquista'],
	usage: {
		op: 'none',
		ob: '<texto>'
	},
	author: 'tomori',
	run: async (client, message, args, prefix) => {
		let count = new Stats.Tomori("achievement")

		let not = new Discord.MessageEmbed()
			.setTitle('❔ Como usar?')
			.setColor('#00FF00')
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
		snekfetch.get(url).then(r => message.channel.send({ files: [{ attachment: r.body }] }));
	}
})