import { Client, Collection } from 'discord.js';
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
    this.slash = new Array()
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
    await this.#loadDir(folder, 'event')

  }
  async loadVanilla(folder) {
    await this.#loadDir(folder, 'command')

  }
}

export default Base