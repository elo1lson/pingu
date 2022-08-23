'use strict'

import Vanilla from "../../../structures/command/vanilla.js"

export default class Ping extends Vanilla {
    constructor(ctx) {
        super(ctx)
    }
    static opts() {
        return {
            name: 'ping',
            aliases: [],
            avaliable: true
        }
    }
    async run() {
        this.message.reply('www')
    }
}