import Event from "../../structures/event/event.js"

class Ready extends Event {
    constructor(client) {
        super(client, {
            name: 'ready'
        })

    }
    async execute() {
        console.log(Object.keys(this.channels));
        this.user.setActivity('Em desenvolvimento...', { type: "PLAYING" })
        this.user.setStatus('online')
        console.log(`${this.user.username} logado [${this.guilds.cache.size}] servs.`)

    }
}
export default Ready