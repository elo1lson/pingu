'use strict'

import Event from "../../structures/event/event.js"

export default class Message extends Event {
    constructor(client) {
        super(client, {
            name: 'messageCreate'
        })
    }
    execute = async (message) => {

        console.log(message.content);
        const prefix = '-'
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase()

        if (message.author.bot) return;
        if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
        if (!message.content.startsWith(prefix)) return;
        if (cmd.length === 0) return;

        let command = this.client.vanilla.get(cmd)

        //  console.log(command);
        if (!command) command = this.client.vanilla.get(this.client.aliases.get(cmd))

        let ctx = {
            client: this.client,
            message,
            args
        }
        try {
           // let commandInstance = new  command.default(ctx)
         //   commandInstance.run()
            console.log(new command.default(ctx).run());

        } catch (error) {
            console.log(error);
        }
    }
}
