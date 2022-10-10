'use strict'
import { Application, Client, Collection } from 'discord.js';

import fs, { readdirSync, readSync } from 'fs'
import path, { resolve } from 'path'
import { cwd } from 'process';
import { parseAllDocuments } from 'yaml';

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
    this.commands = new Array()
    this.aliases = new Collection()
    this.#vanilla()
  }

  static antiCrash() {
    load()
  }

  config(config) {
    let { PREFIX, TOKEN, FOLDERS } = config

    this.configs = {
      PREFIX,
      TOKEN

    }
  }

  start(token) {
    this.login(token)
  }

  async #vanilla() {
    let _folder = resolve(cwd(), 'src/commands/vanilla')
    let _category = readdirSync(_folder)

    try {
      _category.forEach(async fileName => {

        let _command = readdirSync(`${_folder}/${fileName}`)

        for (const iterator of _command) {

          let fileClass = await import(`${_folder}/${fileName}/${iterator}`)
          let vanilla = new fileClass.default()
          this.vanilla.set(vanilla.name, fileClass)
        }
      })

    } catch (e) {
      console.log(e);
    }
  }

  #loadDir(folderParam, typeParam) {
    try {
      let folder = path.resolve(process.cwd(), folderParam)

      let categoryPath = fs.readdirSync(folder);

      categoryPath.forEach(fileName => {
        let commands = fs.readdirSync(`${folder}/${fileName}`)
        for (let i of commands) {

          (async () => {
            let fileClass = await import(`${folder}/${fileName}/${i}`)
            if (typeParam == 'slash') {

              let instanceClass = new fileClass.default(this)
              this.commands.push(instanceClass)
              return

            }
            if (typeParam == 'command') {

              let instanceClass = new fileClass.default()
              this.vanilla.set(instanceClass.name, fileClass)
              return

            }
            if (typeParam == 'event') {
              let evt = new fileClass.default(this)
              this.on(evt.name, evt.execute)
              return
            }
          })()
        }
      });
    } catch (error) {
      console.log(error);
      console.log(45678);
    }
  }

  async loadEvents(folder) {
    try {
      this.#loadDir(folder, 'event')
      console.log('Eventos carregados');
    } catch (e) {
      console.log(e, 'Erro ao carregar os eventos');
    }
  }
  async loadVanilla(folder) {
    try {
      this.#loadDir(folder, 'command')
      console.log('Comandos carregados');

    } catch (e) {
      console.log(e, 'Erro ao carregar os comandos');
    }
  }
  async loadSlash(folder) {
    try {
      this.#loadDir(folder, 'slash')
      console.log('Slash carregados');

    } catch (e) {
      console.log(e, 'Erro ao carregar os slash');
    }
  }

  setSlash(id) {
    //  this.application.commands.set(this.commands)
  }
}

export default Base