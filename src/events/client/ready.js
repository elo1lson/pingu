import Event from "../../structures/event/event.js"
import mongoose from 'mongoose';
import { Stat } from "../../models/me/Stats.js";
class Ready extends Event {
    constructor(client) {
        super(client, {
            name: 'ready'
        })
    }

}

Ready.prototype.execute = async function () {
    mongoose.connect(process.env.MONGODB)
        .then(r => console.log('Banco de dados online'))
        .catch(e => console.log(e, "Deu erro"))

    this.user.setActivity('Em desenvolvimento...', { type: "PLAYING" })
    this.user.setStatus('online')
    console.log(`${this.user.username} logado [${this.guilds.cache.size}] servidores.`)
}

export default Ready