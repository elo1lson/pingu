const Discord = require('discord.js')
const Cluster = require('discord-hybrid-sharding')
class Base extends Discord.Client {
	constructor(options) {
		super(options)
		this.commands = new Discord.Collection()
		this.aliases = new Discord.Collection()
	}
}
module.exports = Base