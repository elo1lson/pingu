import mongoose from "mongoose";

const { Schema, model } = mongoose
const StatSchema = new Schema({
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