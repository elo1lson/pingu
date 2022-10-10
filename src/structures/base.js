'use strict'

import { Client, Collection } from 'discord.js';
import { readdirSync } from 'fs'
import { resolve } from 'path'
import { cwd } from 'process';

/**
 * @extends {Base}
 */

class Base extends Client {

  /**
   * @param {Object} options
   * @constructor options
   */

  constructor(options) {
    super({
      intents: 3276799,
      allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: false,
        ...options
      },
    })
    this.vanilla = new Collection()
    this.commands = null
    this.aliases = new Collection()
  }

  config(config) {
    let { PREFIX, TOKEN, FOLDERS } = config

    this.configs = {
      PREFIX,
      TOKEN,
      FOLDERS
    }
  }

  start() {

    if (!this.config.TOKEN) {
      console.log('❌ É necessário fornecer um token antes de tentar fazer login!')
      process.exit(1)
    }
    this.login(this.config.TOKEN)
  }

  #vanilla() {

    let _folder = resolve(cwd(), this.config.FOLDERS.VANILLA || 'src/commands/vanilla')
    let _category = readdirSync(_folder)
    let _command
    let _vanilla
    let _file
    let _iterator

    try {
      _category.forEach(async fileName => {
        _command = readdirSync(`${_folder}/${fileName}`)

        for (iterator of _command) {

          _file = await import(`${_folder}/${fileName}/${iterator}`)
          _vanilla = new _file.default()
          this.vanilla.set(_vanilla.name, _file)
        }
      })

    } catch (e) {
      console.log(e);
      process.exit(1)
    }
  }

  #event() {

    let _folder = resolve(cwd(), this.config.FOLDERS.EVENT || 'src/commands/vanilla')
    let _category = readdirSync(_folder)
    let _Event
    let _file
    let _iterator
    let Event

    try {
      _category.forEach(async fileName => {
        _file = readdirSync(`${_folder}/${fileName}`)

        for (iterator of _file) {

          _Event = await import(`${_folder}/${fileName}/${iterator}`)
          let { name, execute } = new _Event.default(this)
          this.on(name, execute)
        }
      })

    } catch (e) {
      console.log(e)
      process.exit(1)
    }
  }
}

export default Base