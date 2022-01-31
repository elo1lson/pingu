const Discord = require('discord.js');
const Command = require('../../structures/command/command.js')

module.exports = new Command({
	category: 'Discord',
	name: 'serverinfo',
	aliases: ['svinfo'],
	run: async (client, message, args, cor) => {
    console.log('Balor' + cor)
		const serverName = message.guild.name
		const serverId = message.guild.id
		const memberCount = message.guild.members.cache.filter(member => !member.user.bot).size;
		const totalCount = message.guild.memberCount
		const botCount = message.guild.members.cache.filter(member => member.user.bot).size;
		const channels = message.guild.channels.cache.size
		const channelvoice = message.guild.channels.cache.filter(a => a.type === 'GUILD_VOICE').size
		const chaneltext = channels - channelvoice //message.guild.channels.cache.filter(a => a.type === 'GUILD_TEXT').size
		let description = message.guild.description
    let icon = message.guild.iconURL()
    if(!icon) icon = client.user.displayAvatarURL({dinamyc: true})
		if (description === null) description = 'Sem descrição'
		let server = new Discord.MessageEmbed()
			.setColor(cor)
			.setTitle(`:triangular_flag_on_post:  ${serverName}`)
			.setThumbnail(`${icon}`)
			.addFields(
			{
				name: `:desktop: ID's:`,
				value: `**Servidor:** \`\`${message.guild.id}\`\`\n**Shard:** \`\`${message.guild.shardId}\`\``
			},
			{
				name: ':crown: Dono(a):',
				value: `<@${message.guild.ownerId}>\n\`\`(${message.guild.ownerId})\`\``
			},
			{
				name: ':earth_americas: Região:',
				value: `\`\`${message.guild.preferredLocale}\`\``
			},
			{
				name: ':information_source: Descrição:',
				value: `\`\`${description}\`\``
			},
			{
				name: ':zap: Impulsos:',
				value: `\`\`${message.guild.premiumSubscriptionCount}\`\``
			},
			{
				name: `:busts_in_silhouette: Membros: (${message.guild.memberCount})`,
				value: `**:people_holding_hands: Usuários:** ${memberCount}\n**:robot: Bots:** ${botCount}`
			},
			{
				name: `:tv: Canais (${channels}):`,
				value: `:speech_balloon: Texto: ${chaneltext}\n:microphone2: Voz: ${channelvoice}`
			},
			{
				name: ':stopwatch: Criado em:',
				value: `<t:${~~(message.guild.createdTimestamp / 1000)}>`
			},{
        name: ':newspaper: Recursos do servidor:',
        value: `\`\`${message.guild.features.join('\n')}\`\``
      })
			.setFooter(`By toto`,`${client.user.avatarURL({dinamyc: true})}`)
		message.reply({ embeds: [server] }).then(msg => {
			msg.react('▶️')
		})
	}
})