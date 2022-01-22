//Por favor, não meixa nesse código
//Instanciando o client
const fs = require('fs')
const BaseClient = require('./base.js')
const NewClient = new BaseClient({
  intents: 32767,
	allowedMentions:{
		parse: ["users","roles"],
    repliedUser: false}
})
fs.readdirSync(`/home/runner/Open-OsBot/scr/commands/`).forEach(local => {
    const comandos = fs.readdirSync(`/home/runner/Open-OsBot/scr/commands/${local}`).filter(arquivo => arquivo.endsWith('.js'))
    for(let file of comandos) {
        let puxar = require(`/home/runner/Open-OsBot/scr/commands/${local}/${file}`)

	        if(puxar.name) {
            NewClient.commands.set(puxar.name, puxar)
        } 
        if(puxar.aliases && Array.isArray(puxar.aliases))
        puxar.aliases.forEach(x => NewClient.aliases.set(x, puxar.name))
    } 
});
module.exports = NewClient