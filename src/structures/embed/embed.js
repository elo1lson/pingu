'use strict'
import { EmbedBuilder } from "discord.js"

export default class Embed extends EmbedBuilder {
  constructor(user, data = {}) {
    super(data)
    this.setColor('Green')
    this.setFooter({ text: user.tag, iconURL: user.displayAvatarURL() })
  }
}