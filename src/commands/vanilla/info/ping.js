'use strict'

import { Prefix } from "../../../commandMaker.js"
export default class Ping extends Prefix {
    constructor(ctx) {
        super(ctx, {
            name: 'ping',
            aliases: [],
            avaliable: true
        })
    }
    async run() {
        this.message.reply({content:`Meu ping está em ${this.client.ws.ping}ms`})
    }
}