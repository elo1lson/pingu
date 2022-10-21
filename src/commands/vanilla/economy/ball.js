'use strict'

import { BasePrefix, Embed } from "../../../imports.js"
//import { PermissionsBitField, ActionRowBuilder, ButtonBuilder } from "discord.js"
import { Bal } from "../../../models/ball.js"

export default class Lang extends BasePrefix {
    constructor(ctx) {
        super(ctx, {
            name: 'bal',
            aliases: ['money'],
        })
    }

    async run() {

        if (await Bal.exists(this.message.author.id) == null) {
            const data = {
                id: this.message.author.id
            }
            await new Bal(data).create()
        }
        const balance = await Bal.value(this.message.author.id)

        this.message.reply({ content: `<:sardinha:1033127054276837410> Você tem \`\`${balance.money}\`\` sardinhas` })

    }
}