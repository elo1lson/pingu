/*
26/01/2022 - tomorii
58 linhas
Github: elo1lson
Discord: tomorii#8894
*/

const Discord = require('discord.js')
const Command = require('../../structures/command/command.js')
const Stats = require('../../modules/index.js')

module.exports = new Command({
	name: 'qq',
	description: 'Envia um emoji como foto',
	aliases: ['big-emoji','baixaremoji'],
	usage: {
		op: 'none',
		ob: '<emoji>'
	},
	author: 'tomori',
	run: async (client, message, args, prefix) => {
    console.log(client.categories)
   const back = (reaction, user) => reaction.emoji.name === "↩" && user.id === message.author.id;
        let a = new  Discord.MessageEmbed()
        .setDescription("oii")
        message.reply({embeds: [a]})
        
        const backL = msg.createReactionCollector(back);
        backL.on('collect', r => {
            const embedd = new Discord.MessageEmbed()
                .setAuthor(`${message.guild.name} - Ajuda`)
                .setDescription(`Para saber meus comandos, reaja ao emoji de cada categoria.`)
                .addField(`⭐ **Informações**`, '• `ajuda`, `server`, `user`, `sugerir`, `avatar`, ...')
                .addField(`📥 **Pedidos**`, '• `plugin`, `web`, `outros`')
                .addField(`👦 **Usuário**`, '• `portfolio`, `recomendações`, `reputação`...')
                .addField(`😂 **Diversão**`, '• `bigtext`, `lenny`, `coinflip`, `dados`...')
                .addField(`🎶 **Música**`, '• `play`, `stop`, `skip`, `playlist`...')
                .addField(`🔧 **Staff**`, '• `ban`, `mute`, `chat`, `limpar`...')
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
                .setColor("RANDOM")
            msg.edit({embeds: [embedd]})
        })
	}
})/*
const fs = require("fs")
se = new Set()
fs.readdirSync("/home/runner/Open-OsBot/scr/commands/").forEach(a =>{
 
	se.add(a)
	for (var b in se) {
		console.log(b)
	}
})
console.log(se.has("minecraft"))*/