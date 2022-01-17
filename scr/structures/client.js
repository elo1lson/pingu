const Discord = require('discord.js')
const Cluster = require('discord-hybrid-sharding')
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
const usev13 = true;

//*
Client = new Client()
Client.cluster = new Cluster.Client(Client, usev13);
module.exports = Client