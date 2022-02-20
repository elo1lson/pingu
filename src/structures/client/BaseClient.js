const { Collection, Client } = require('discord.js');
const Cluster = require('discord-hybrid-sharding');
class Baseclient extends Client {
	constructor(opts) {
		super({
			shards: Cluster.data.SHARD_LIST,
			shardCount: Cluster.data.TOTAL_SHARDS,
			...opts
		})
		this.cluster = new Cluster.Client(this, true);
		this.commands = new Collection();
		this.aliases = new Collection();
		this.description = new Collection();
		this.author = opts.author;

	}
}
module.exports = Baseclient