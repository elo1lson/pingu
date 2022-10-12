'use strict'

import Event from "../../structures/event/event.js"
//import Stats from "../../models/me/Stats.js"
export default class Message extends Event {
    constructor(client) {
        super(client, {
            name: 'messageCreate'
        })
    }
    async execute(message) {

        const prefix = this.configs.PREFIX || '-'
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase()

        if (message.author.bot) return;
        if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
        if (!message.content.startsWith(prefix)) return;
        if (cmd.length === 0) return;

        let command = this.vanilla.get(cmd)

        if (!command) command = this.vanilla.get(this.aliases.get(cmd))
        if (!command) return

        let ctx = {
            client: this,
            message,
            args
        }
        try {
            let commandInstance = new command.default(ctx).run()

        } catch (error) {
            console.log(error);
        }
    }
}
