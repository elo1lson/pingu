'use strict'


/**
 * @class
 * @constructor
*/

export default class Vanilla {

  /** 
   * Class base for make commands
   * 
   * @param {Ctx} ctx Object contains message, client, args
   * @param  {Message} ctx.message argument message
   * @param {Client} ctx.client  
   * @param {Args} ctx.args
   * @param {Config} opts Config object for command
   * @param {String} opts.name 
   * @param {Aliases} opts.aliases
   * @param {Boolean} opts.avaliable 
   */

  constructor(ctx, opts) {

    if (ctx) {

      this.ctx = ctx
      this.message = ctx.message
      this.args = ctx.args
      this.client = ctx.client
    }

    this.name = opts.name
    this.aliases = opts.aliases
  }
}