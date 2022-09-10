import { Schema, model } from "mongoose"

const guild = new Schema({
    id: { type: Number, required: true },
    lang: { type: String, required: true }
})


export const guildModel = model('guild', guild)