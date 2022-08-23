'use strict'


/**
 * @class
 * @constructor
*/

export default class Vanilla {

  /** 
   * Class base for make commands
   * 
   * @param {Object} ctx Object contains message, client, args
   * @param  {Object} ctx.message argument message
   * @param {Object} ctx.client  
   * @param {Object} ctx.args
   * @param {Object} opts Config object for command
   * @param {String} opts.name 
   * @param {Array} opts.aliases
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