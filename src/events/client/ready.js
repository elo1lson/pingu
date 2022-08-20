import Event from "../../structures/event/event.js"

class Ready extends Event {
    constructor(client) {
        super(client, {
            name: 'ready'
        })
    }
    execute = async () => {

        this.client.user.setActivity('Em desenvolvimento...', { type: "PLAYING" })
        this.client.user.setStatus('online')
        console.log(`${this.client.user.username} logado [${this.client.guilds.cache.size}] servs.`)

    }
}
export default Ready