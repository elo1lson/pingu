const { Collection, Client } = require('discord.js');
const Cluster = require('discord-hybrid-sharding');
const {connect} = require('moongose')
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
		this.connectToDatabase()

	}
	async connectToDatabase() {
		const connection = await connect('mongodb+srv://Eloilson:@Elo1503@cluster0.cozes.mongodb.net/database?retryWrites=true&w=majority', {
			useNewUrlParser: true,	
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true
		})
		console.log('Database conectada com sucesso!')
	}
}
module.exports = Baseclient

