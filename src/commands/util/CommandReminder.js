const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Embed = require('../../structures/client/ClientEmbed.js')
module.exports = new Command({
	name: 'reminder',
	category: 'Util',
	description: 'Quer que eu te lembre de algo?',
	aliases: ['lembrar'],
	usage: {
		op: 'none',
		ob: 'none'
	},
	author: 'tomori',
	run: async (client, message, args, prefix) => {
		let time = args[0];
		let reminder = args.splice(1).join(' ');
		let u = message.author

		if (!time) return message.reply({ content: 'Não posso te lembrar se você não definir um tempo...' });
		if (!reminder) return message.reply({ content: 'Você esqueceu de inserir uma mensagem!' });

		// This will not work if the bot is restarted or stopped

		time = await time.toString();

		if (time.indexOf('s') !== -1) { // Seconds
			let timesec = await time.replace(/s.*/, '');
			let timems = await timesec * 1000;
		} else if (time.indexOf('m') !== -1) { // Minutes
			let timemin = await time.replace(/m.*/, '');
			timems = await timemin * 60 * 1000;
		} else if (time.indexOf('h') !== -1) { // Hours
			let timehour = await time.replace(/h.*/, '');
			timems = await timehour * 60 * 60 * 1000;
		} else if (time.indexOf('d') !== -1) { // Days
			let timeday = await time.replace(/d.*/, '');
			timems = await timeday * 60 * 60 * 24 * 1000;
		} else {
			return message.reply({ content: 'O tempo deve ser númerico [s/m/h/d]' });
		}
		let embed = new Embed(u)
			.setTitle(`<:calendar:941847920829939774> Lembretes`)
			.setDescription('Eu irei te lembrar na dm😉')
			.addField(`${reminder}`, `${time}`)
		try {
			message.reply({ embeds: [embed] })
			setTimeout(function() {
				message.author.send({
					embeds: [{
						color: 3447003,
						description: `Você me pediu para te lembrar de \`${reminder}\`, pse eu lembrei, ja você...`
}]
				});
			}, parseInt(timems));

		} catch (e) {
			console.log('Erro no comando Reminder: ' + e)
			message.reply({ content: '❌ Ocorreu um erro ao tentar executar esse comando' })
		}
	}
})