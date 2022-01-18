const Discord = require('discord.js');
const Cluster = require('discord-hybrid-sharding');
const usev13 = true;
class baseClient extends Discord.Client {
    constructor(opts){
        super({
            shards: Cluster.data.SHARD_LIST,
            shardCount: Cluster.data.TOTAL_SHARDS,
            ...opts
        })
        this.cluster = new Cluster.Client(this, usev13);
        this.commands = new Discord.Collection();
        this.aliases = new Discord.Collection();
    }
}
module.exports = baseClient
//vlw  bem c:ae, desculpa por te incomodar + 1 vez