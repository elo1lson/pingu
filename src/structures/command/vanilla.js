'use strict'

export default class Vanilla {
  constructor(ctx, opts) {
    this.ctx = ctx
    this.message = ctx.message
    this.client = ctx.client 
    this.args =  ctx.args || null
    this.name = opts.name || null
    this.aliases = opts.aliases
    this.avaliable = true || opts.avaliable
  }
}