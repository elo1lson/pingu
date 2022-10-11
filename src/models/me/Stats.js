import mongoose from "mongoose";
let { Schema, model } = mongoose

let StatSchema = new Schema({
  commandUsage: { type: Number, default: 55 }

})

const StatModel = model('Stat', StatSchema)

export class Stat {
  constructor(body) {
    this.commandUsage = body.commandUsage
  }
  async create() {
    await StatModel.create(body)

  }
}