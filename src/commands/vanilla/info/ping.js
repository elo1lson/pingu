'use strict'

import { BasePrefix, Embed } from "../../../imports.js"

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
    let embed = new Embed()
      .setDescription(`Meu ping está em \`\`${this.client.ws.ping}ms\`\``)

    return this.message.reply({ embeds: [embed] })
  }
}