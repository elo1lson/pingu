const Discord = require('discord.js')
const Cluster = require('discord-hybrid-shardin')
class Client extends Discord.Client {
	constructor(options) {
		super({
			shards: Cluster.data.SHARD_LIST,
			shardCount: Cluster.data.TOTAL_SHARDS,
			intents: 32767
		})
		this.commands = new Discord.Collection()
		this.aliases = new Discord.Collection()
	}
}
module.exports = Client