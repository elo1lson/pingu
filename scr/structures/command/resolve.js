const client = require('../client/client.js')
const fs = require('fs')
fs.readdirSync('../../scr/commands/').forEach(local => {
    const comandos = fs.readdirSync(`../../scr/commands/${local}`).filter(arquivo => arquivo.endsWith('.js'))

    for(let file of comandos) {
        let puxar= require(`../../scr/commands/${local}/${file}`)

	        if(puxar.name) {
            client.commands.set(puxar.name, puxar)
        } 
        if(puxar.aliases && Array.isArray(puxar.aliases))
        puxar.aliases.forEach(x => client.aliases.set(x, puxar.name))
    } 
});
