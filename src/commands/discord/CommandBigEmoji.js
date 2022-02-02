/*
19/01/2022 - tomorii
68 linhas
Github: elo1lson
Discord: tomorii#8894
Sinta-se a vontade para usar esse código
*/
const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')

//| Instanciando a classe
module.exports = new Command({
	name: 'bigemoji',
  category: 'Discord',
	description: 'Envia um emoji como foto',
	aliases: ['big-emoji','baixaremoji'],
	usage: {
		op: 'none',
		ob: '<emoji>'
	},
	author: 'tomori',
	run: async (client, message, args, prefix, cor) => {
		
    let erro = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle(`Sintaxe da ${client.user.username}`)
    .setDescription(`\`\`${prefix}bigemoji\`\` => Sabe aqueles emojis do servidor? Sabia que eu posso aumentar o tamanho dele e você pode baixa-lo?`)
    .addFields(
    	{
				name: ':grey_question: Como usar?',
				value: `\`\`${prefix}bigemoji\`\` <emoji>`
			},
			{
				name:`:pencil: Exemplo:`,
				value: `\`\`${prefix}bigemoji\`\` <:toto:934042191414833173> n\`\`${prefix}bigemoji\`\` <:toto_cam:934042636585676842> `
			},
			{
				name: ':compass: Aliases:',
				value: `\`\`big-emoji, baixaremoji\`\``
			}
			)
    .setFooter(`By toto`,`${client.user.avatarURL({dinamyc: true})}`)
    if(!args[0]){
    	return message.reply({embeds: [erro]})
    }
    let emoji = message.guild.emojis.cache.find(emoji => emoji.name === args[0].split(":")[1]);
    let embed = new Discord.MessageEmbed()
    .setColor(cor)
    .setTitle(`Emoji ${args[0].split(":")[1]}`)
    .setImage(`${emoji.url}`)
    .setFooter(`By toto`,`${client.user.avatarURL({dinamyc: true})}`)
    
    if (!emoji) {
        return message.reply({content: `🚫** |** O emoji ***${args[0]}*** não é um emoji do servidor`});
    } else {
        message.reply({embeds:[embed]});
    }
	}
})
