import mongoose from "mongoose"

const { Schema, model } = mongoose
const guild = new Schema({
    id: { type: Number, required: true },
    lang: { type: String, required: true }
})

const GuildModel = model('Guild', guild)
export class Guild {
    constructor(body) {
        this.body = body
    }
    static async exists(id) {
        return await GuildModel.findOne({ id })
    }

    async create() {
        await GuildModel.create(this.body)
    }

}