const Discord = require('discord.js');
const fs = require('fs')
const Cluster = require('discord-hybrid-sharding');
const usev13 = true;
//| Favor não mexer sem autorização!!
class Baseclient extends Discord.Client {
	constructor(opts) {
		super({
			shards: Cluster.data.SHARD_LIST,
			shardCount: Cluster.data.TOTAL_SHARDS,
			...opts
		})
		this.cluster = new Cluster.Client(this, usev13);
		this.commands = new Discord.Collection();
		this.aliases = new Discord.Collection();
		this.description = new Discord.Collection();
		this.author = new Discord.Collection();
		this.category = new Discord.Collection()

	}
		a = fs.readdirSync(`/home/runner/Open-Os_Bot/scr/commands/`).forEach(f => {
		file = fs.readdirSync(`/home/runner/Open-Os_Bot/scr/commands/${f}`)
		for (var prop in file) {
			let name = fs.readFileSync(`/home/runner/Open-Os_Bot/scr/commands/${f}`)
			category.set(name, prop.name)
			console.log("Setado!!")
		}
	})
}
module.exports = Baseclient