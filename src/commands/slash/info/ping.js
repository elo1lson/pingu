'use strict'

import { BaseSlash, Embed } from "../../../imports.js"
export default class Ping extends BaseSlash {
    constructor(client) {
        super(client, {
            name: 'ping',
            description: 'Mostra meu ping!'
        })

    }
    async run(interaction) {
        let embed = new Embed()
            .setDescription(`Meu ping está em \`\`${this.client.ws.ping}ms\`\``)
        return interaction.reply({ embeds: [embed] })
    }
}