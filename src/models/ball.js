import mongoose from "mongoose"

const { Schema, model } = mongoose
const economy = new Schema({
    id: { type: Number, required: true },
    money: { type: Number, default: 1000 }
})

const BalModel = model('Economy', economy)

export class Bal {
    constructor(body) {
        this.body = body
    }
    /**
     * 
     * @param {} id 
     * @returns user
     */
    static async exists(id) {
        return await BalModel.findOne({ id })
    }
    static async value(id) {
        return await BalModel.findOne({ id: id })
    }
    async create() {
        await BalModel.create(this.body)
    }
}