const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js")
const client = require("../index.js")

module.exports = {
    
	data: new SlashCommandBuilder()
		.setName('first')
		.setDescription('Comando em slash!'),

	async execute(interaction) {

		let bot = "toto" // Coloque o nome do seu bot

        const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`**Olá ${interaction.user}.**`);

		const embed_2 = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`**Sou o bot \`${bot}\`.**`);

		await interaction.reply({ content: `${interaction.user}`, embeds: [embed] });

		setTimeout( () => {

			interaction.editReply({ content: `${interaction.user}`, embeds: [embed_2] })

		}, 2000)

	},
};