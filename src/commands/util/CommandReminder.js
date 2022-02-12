const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
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
		var time = args[0];
		var reminder = args.splice(1).join(' ');

		if (!time) return message.reply({ content: 'Não posso te lembrar se você não definir um tempo...' });
		if (!reminder) return message.reply({ content: 'Você esqueceu de inserir uma mensagem!' });

		time = await time.toString();

		if (time.indexOf('s') !== -1) { // Seconds
			var timesec = await time.replace(/s.*/, '');
			var timems = await timesec * 1000;
		} else if (time.indexOf('m') !== -1) { // Minutes
			var timemin = await time.replace(/m.*/, '');
			timems = await timemin * 60 * 1000;
		} else if (time.indexOf('h') !== -1) { // Hours
			var timehour = await time.replace(/h.*/, '');
			timems = await timehour * 60 * 60 * 1000;
		} else if (time.indexOf('d') !== -1) { // Days
			var timeday = await time.replace(/d.*/, '');
			timems = await timeday * 60 * 60 * 24 * 1000;
		} else {
			return message.reply({ content: 'O tempo deve ser númerico [s/m/h/d]' });
		}
		var embed = new Discord.MessageEmbed()
			.setTitle(`<:calendar:941847920829939774> Lembretes`)
			.setDescription(`Eu irei te lembrar na dm de \`\`${reminder}\`\` daqui a \`\`${time}\`\``)
		var send = new Discord.MessageEmbed()
			.setDescription(`Você me pediu para te lembrar de \`${reminder}\`, pse eu lembrei, já você...`)
		try {
			message.reply({ embeds: [embed] })
			setTimeout(function() {
				message.author.send({ embeds: [send] });
			}, parseInt(timems));

		} catch (e) {
			console.log('Erro no comando Reminder: ' + e)
			message.reply({ content: '❌ Ocorreu um erro ao tentar executar esse comando' })
		}
	}
})
