import { Client, Collection } from 'discord.js';
import fs from 'fs'
import path from 'path'

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
    loadVanilla(folderParam) {
        try {
            let folder = path.resolve(__dirname, folderParam)
            console.log(folder);
            let categoryPath = fs.readdirSync(folder);
            console.log(categoryPath);

            /*categoryPath.array.forEach(fileName => {
                let commands = fs.readdirSync(`${folder}/${fileName}`)

                commands.array.forEach(fileContent => {
                    let fileClass = import(`${commands}/${fileContent}`)
                    console.log(fileClass);
                });
            });*/
        } catch (error) {
            console.log(error);
        }

    }
}

export default Base