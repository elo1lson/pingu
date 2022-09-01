import fs from 'fs'
import YAML from 'yaml'

export let yml = async () => {

    var cat = {
        util: {
            ping: { description: ["Meu ping está em \`\{ping}ms\`\`"] },
            avatar: "Avatar de {user}"
        }

    }
    var data = YAML.stringify(cat)

    fs.writeFile('file.yml', data, () => {

    })
    const file = fs.readFileSync('./file.yml', 'utf8')
    let touchFile = YAML.parse(file)
    console.log(touchFile);
}