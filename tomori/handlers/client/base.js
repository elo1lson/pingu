const Command = require('./command/command.js')
const Discord = require('discord.js')
const fs = require('fs')

module.exports = class Client extends Discord.Client {
	constructor(commands, aliases, category){
		super({intents, shard, shardCount})
		this.commands = new Discord.Collection()
		this.aliases = new Discord.Collection()
		this.category = fs.readdirSync("../../../commands")
		this.loadC()
	}
	loadC(){
		fs.readdirSync('../../../commands/').forEach(local => {
			const comandos = fs.readdirSync(`../../../commands/${local}`).filter(arquivo => arquivo.endsWith('.js'))
			for(let file of comandos){
				console.log(`${comandos} carregado!`)
				let puxar = require(`../../../commands/${local}/${file}`)
				if(puxar.name){
					this.client.commands.set(puxar.name, puxar)
				}
				if(puxar.aliases && Array.isArray(puxar.aliases))
				puxar.aliases.forEach(x => this.client.aliases.set(x, puxar.name))
				
			}
		})
	}
}
