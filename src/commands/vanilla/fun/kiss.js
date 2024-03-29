'use strict'

import { EmbedBuilder } from "discord.js"
import { BasePrefix } from "../../../imports.js"

export default class Kiss extends BasePrefix {
    constructor(ctx) {
        super(ctx, {
            name: 'kiss',
            aliases: ['beijar']
        })

    }

    async run() {
        if (this.args.length > 1) return

        let mentionedUser = this.message.mentions.users.first()
        if (!mentionedUser) return this.message.reply({ content: 'Vc vai beijar o vento por acaso? marca alguem seu imbecil!' })
        if (mentionedUser === this.message.author) return this.message.reply({ content: 'Ta carente? compra um hamirti carai' })
        if (mentionedUser === this.client.user) return this.message.reply({ content: 'Sai fora seu gay' })

        let array = [
            'https://c.tenor.com/tEo2lRjrEuEAAAAj/love-it-kiss.gif',
            'https://c.tenor.com/9V_G8kiWtToAAAAj/lily-and-marigold.gif',
            'https://c.tenor.com/S7pNDfLO5W8AAAAC/anime-kiss-on-neck-anime-cute.gif',
            'https://c.tenor.com/yoMKK29AMQsAAAAM/kiss-toradora.gif',
            'https://c.tenor.com/OjcDtiEDUvMAAAAM/friendly-kiss.gif',
            'https://c.tenor.com/vfbQUwcPWL0AAAAM/kiss-tonikaku-kawaii.gif'
        ]

        let i = Math.floor(Math.random() * array.length)
        let image = array[i]

        let embed = new EmbedBuilder()
            .setAuthor({ name: 'Kiss kiss', iconURL: image })
            .setDescription(`${this.message.author} deu um beijo em ${mentionedUser}`)
            .setImage(image)

        return this.message.reply({ embeds: [embed] })

    }
}