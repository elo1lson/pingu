import { Client, Collection } from 'discord.js';
import fs from 'fs'
import path from 'path'
import * as url from 'url';

/**
 * Create a new Client
 * @class 
 */
class Base extends Client {
  
  constructor(options) {
    super({
      intents: 32727,
      allowedMentions: {
        parse: ['users', 'roles'],
        repliedUser: false,
        ...options
      }
    })
    this.vanilla = new Array()
    this.slash = new Collection()
    this.aliases = new Collection()
  }

  /**
   * @param {string} folderParam - Folder with commands
   */

  loadVanilla(folderParam) {
    try {
      let folder = path.resolve(process.cwd(), folderParam)

      let categoryPath = fs.readdirSync(folder);

      categoryPath.forEach(fileName => {
        let commands = fs.readdirSync(`${folder}/${fileName}`)
        for (let i of commands) {
          (async () => {
            let fileClass = await import(`${folder}/${fileName}/${i}`)
            this.vanilla.set(fileClass.name, fileClass)
          })()
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default Base
