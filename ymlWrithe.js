import fs from 'fs'
import YAML from 'yaml'

(async () => {

    var cat = {
        ping: {
            a: [['ping'], ['pong']],
            ping: { description: 'l', b: 'w' },

        }, avatar: "Avatar de {user}"

    }
    var data = YAML.stringify(cat)

    fs.writeFile('file.yml', data, () => {

    })
    const file = fs.readFileSync('./file.yml', 'utf8')
    let touchFile = YAML.parse(file)
    console.log(touchFile);
})()