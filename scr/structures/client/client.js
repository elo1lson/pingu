const Base = require('./base.js')
const Cluster = require('discord-hybrid-sharding')
const usev13 = true
const client = new Base({
		shards: Cluster.data.SHARD_LIST,
		shardCount: Cluster.data.TOTAL_SHARDS,
		intents: 32767,
		allowedMentions: {
			parse: ["users","roles"],
      repliedUser: false
		}
	})
	
client.cluster = new Cluster.Client()(client, usev13);
module.exports = client