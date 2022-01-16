const Discord = require('discord.js');
const fs = require('fs');
const config = require('../config.json');

module.exports.run = async (client, message, args, prefix) => {
	const embederror = new Discord.MessageEmbed()
		.setTitle(`Como definir um Prefixo personalizado\n`)
		.setColor(`RANDOM`)
		.setDescription(`<:chat:885695323656310804> **Use**: ${prefix}setprefix <Seu Novo Prefixo>\n`)
		.addField(`<:info:885687139810037841> Observação:`,`Esse prefix sera aplicado em todos os comandos!\n\nAo definir um prefix personalizado será criado um arquivo em meu banco de dados com o seu prefix`);

	let prefixes = JSON.parse(fs.readFileSync("./database/prefixes.json", "utf8"));
	if (message.channel.type == 'dm') return;
	if (!prefixes[message.guild.id]) {
		prefixes[message.guild.id] = {
			prefix: config.defaultPrefix
		}
	}
	let prefix0 = prefixes[message.guild.id].prefix;
	if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply("Você não pode trocar o prefixo deste servidor, pois vc não tem a permissão necessária `MANAGE_GUILD`");
	if (!message.guild.me.permissions.has("ADMINISTRATOR")) {
		return message.reply(`:x: | Eu não tenho a permissão: ADMINISTRATOR`)
	}

	if (!args[0]) return message.reply({ embeds: [embederror] })

	prefixes[message.guild.id] = {
		prefix: args[0]
	}

	fs.writeFile("./database/prefixes.json", JSON.stringify(prefixes), (err) => {
		if (err) console.log(err)
	});

	let embed = new Discord.MessageEmbed()
		.setTitle("Prefix definido com sucesso!")
		.setColor("RANDOM")
		.setDescription(`<:checked:885686349443792917>	Definido para **${args[0]}**`)
		.addField(`<:info:885687139810037841>  Info`,`Agora so responderei pelo prefix **${args[0]}**`)
	message.channel.send({ embeds: [embed] })
}