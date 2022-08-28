'use strict'

import Event from "../../structures/event/event.js"

export default class Message extends Event {
    constructor(client) {
        super(client, {
            name: 'interactionCreate'
        })
    }
    execute = async (interaction) => {
        if (!interaction.isChatInputCommand()) return;
        let cmd = this.client.commands.find(c => c.name == interaction.commandName)
        if(!cmd) return
        cmd.run(interaction)

    }
}