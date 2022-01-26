const Discord = require('discord.js');
const fs = require('fs')
const Cluster = require('discord-hybrid-sharding');
const usev13 = true;
//| Favor não mexer sem autorização!!
class Baseclient extends Discord.Client {
		constructor(opts){
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
			
		}
}
module.exports = Baseclient