import { Application, Client, Collection } from 'discord.js';
import { AntiCrash as load } from '../imports.js';

import fs from 'fs'
import path from 'path'

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

      },
      ...options
    })
    this.vanilla = new Collection()
    this.commands = new Array()
    this.aliases = new Collection()
  }


  /**
   * @param {string} folderParam
   */

  static antiCrash() {
    load()
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
    }
  }

  async loadEvents(folder) {
    try {
      await this.#loadDir(folder, 'event')
      console.log('Eventos carregados');
    } catch (e) {
      console.log(e, 'Erro ao carregar os eventos');
    }
  }
  async loadVanilla(folder) {
    try {
      await this.#loadDir(folder, 'command')
      console.log('Comandos carregados');

    } catch (e) {
      console.log(e, 'Erro ao carregar os comandos');
    }
  }
  async loadSlash(folder) {
    try {
      await this.#loadDir(folder, 'slash')
      console.log('Slash carregados');

    } catch (e) {
      console.log(e, 'Erro ao carregar os slash');
    }
  }
  /*
  setSlash(id) {
    return id ? this.guilds.cache.get(id) : this.application.commands.set(this.commands)
  }*/
}

export default Base