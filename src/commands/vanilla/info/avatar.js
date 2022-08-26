'use strict'

import { BasePrefix, Embed } from "../../../imports.js"

export default class Avatar extends BasePrefix {
    constructor(ctx) {
        super(ctx, {
            name: 'avatar',
            aliases: ['pfp']
        })
    }
    static config() {
        return {
            avaliable: true
        }
    }
    async run() {
        if (this.args.length > 1) return
        let user = this.message.mentions.users.first() || this.message.author
        if (!user) return this.message.reply({ content: 'Marque uma pessoa para poder ver o avatar!' })

        let embed = new Embed()
            .setDescription('Avatar de ' + user.username)
            .setImage(user.displayAvatarURL({ size: 2048, dinamyc: true, format: 'png' }))

        return this.message.reply({ embeds: [embed] }).then(async m => {
            await m.react('✅')
            await m.react('❌')
        })
    }
}
