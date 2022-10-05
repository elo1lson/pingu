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

  static config() {
    return {
      avaliable: true
    }
  }
  async run() {
    let embed = new EmbedBuilder()
      .setDescription(`Meu ping está em \`\`${this.client.ws.ping}ms\`\``)

    return this.message.reply({ embeds: [embed] })
  }
}