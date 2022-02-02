const Cluster = require("discord-hybrid-sharding");
const { token } = require("./config.js");
const manager = new Cluster.Manager(`${__dirname}/bot.js`, {
	mode: "process",
	token: token,
	usev13: true,
});



manager.on('message', (shard, message) => {
	console.log(`Shard[${shard.id}]: ${message._eval} - ${message._result}`);
});

manager.on('clusterCreate', shard => {
	console.log(`[${new Date().toString().split(' ', 5).join(' ')}] cluster[${shard.id}] iniciado!`);
});

manager.on("debug", (data) => {
	console.log(data)
});

manager.spawn();
