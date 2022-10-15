'use strict'

import { BasePrefix, Embed } from "../../../imports.js"
import { PermissionsBitField, ActionRowBuilder, ButtonBuilder } from "discord.js"
import { Guild as GuildModel } from "../../../models/guildModel.js"

export default class Lang extends BasePrefix {
  constructor(ctx) {
    super(ctx, {
      name: 'setlang',
      aliases: [],
    })
  }

  async run() {

    if (this.args.length > 0) return
    let isAdmin = this.message.member.permissions.has([PermissionsBitField.Flags.BanMembers])
    if (!isAdmin) {
      return this.message.reply({ content: 'Voçe não tem permissão suficiente pra fazer isso!' })

    }
    const existGuild = await GuildModel.exists(this.message.guild.id)

    const ptButton = new ButtonBuilder()
      .setCustomId('br')
      .setEmoji('🇧🇷')
      .setStyle(3)

    const enButton = new ButtonBuilder()
      .setCustomId('en')
      .setEmoji('🇺🇲')
      .setStyle(4)
      .setDisabled(true)

    if (existGuild.length > 0) {
      ptButton.setDisabled(true)
      ptButton.setLabel('Idioma Atual')

    }
    const row = new ActionRowBuilder()
      .addComponents(
        ptButton,
        enButton
      );

    const embed = new Embed(this.message.author)
      .setTitle('🌐 Config')
      .setThumbnail('https://cdn-icons-png.flaticon.com/512/2630/2630489.png')
      .setDescription('Selecione meus idiomas que estão disponíveis neste servidor')
      .addFields(
        { name: '🇧🇷 Padrão', value: 'Meu idioma padrão, português' },
        { name: '🇺🇲 English en-US', value: 'Change my language to english `\`\(unavailable)\`\`' }
      )

    const ptEmbed = new Embed(this.message.author)
      .setDescription('🇧🇷 Agora eu falarei portugês!')

    const enEmbed = new Embed(this.message.author)
      .setDescription('🇺🇲 Now i am speak english!')

    const ptFilter = i => i.setCustomId == 'br' && i.user.id == this.message.author.id
    const enFilter = i => i.setCustomId == 'en' && i.user.id == this.message.author.id
    const pt = this.message.channel.createMessageComponentCollector({ ptFilter, time: 20000 })
    const en = this.message.channel.createMessageComponentCollector({ enFilter, time: 20000 })

    const data = {
      id: this.message.guild.id,
      lang: ''
    }

    pt.on('collect', async i => {
      data.lang = 'pt-BR'
      try {

        await new GuildModel(data).create().then(async r => {
          await i.update({ embeds: [ptEmbed], components: [] })
        })
      } catch (e) {
        return
      }
    })

    en.on('collect', async i => {
      data.lang = 'en-US'
      try {

        await new GuildModel(data).create().then(async r => {
          await i.update({ embeds: [enEmbed], components: [] })
        })
      } catch (e) {
        return
      }
    })

    return this.message.reply({
      embeds: [embed],
      components: [row]
    })
  }
}