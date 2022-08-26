'use strict'

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
    this.message.reply({ content: `Meu ping está em ${this.client.ws.ping}ms` })
  }
}