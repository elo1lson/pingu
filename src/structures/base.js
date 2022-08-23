import { Client, Collection } from 'discord.js';
import fs from 'fs'
import path from 'path'
import * as url from 'url';

/**
 * @class
 */
 
class Base extends Client {

  /**
   * @param {Object} options
   * @constructor options
   */
  constructor(options) {
    super({
      intents: 32727,
      allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: false,

      },
      ...options
    })
    this.vanilla = new Array()
    this.slash = new Collection()
    this.aliases = new Collection()
  }


  /**
   * @param {string} folderParam
   */
   
  #loadDir(folderParam, typeParam) {
    try {
      let folder = path.resolve(process.cwd(), folderParam)

      let categoryPath = fs.readdirSync(folder);

      categoryPath.forEach(fileName => {
        let commands = fs.readdirSync(`${folder}/${fileName}`)
        for (let i of commands) {

          (async () => {
            let fileClass = await import(`${folder}/${fileName}/${i}`)
            if (typeParam == 'command') {
              console.log(fileClass);
              this.vanilla.set(fileClass.name, fileClass)
              return
            }
            if (typeParam == 'event') {
              console.log(fileClass);
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
      console.log('✅[Events]: Eventos carregados!')
    } catch (e) {
      console.log('❌[Events]: Erro ao carregar os eventos: ' + e)
    }
  }
  loadVanilla(folder) {
    try {
      this.#loadDir(folder, 'command')
    } catch (error) {
      console.log(e);
    }

  }
}

export default Base
