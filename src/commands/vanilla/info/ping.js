'use strict'

import { EmbedBuilder } from "discord.js"
import { BasePrefix } from "../../../imports.js"

export default class Ping extends BasePrefix {
  constructor(ctx) {
    super(ctx, {
      name: 'ping',
      aliases: [],
    })
  }
  async run() {
    let embed = new EmbedBuilder()
      .setColor('Green')
      .setDescription(`Meu ping está em \`\`${this.client.ws.ping}ms\`\``)

    return this.message.reply({ embeds: [embed] })
  }
}