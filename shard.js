const Cluster = require("discord-hybrid-sharding");
const token = process.env['TOKEN']
const manager = new Cluster.Manager("./index.js", {
	mode: "process",
	token: token,
	usev13: true,
});
const web = './index.html'
const express = require('express');
const app = express();
app.get('/', (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	console.log(`Ping: ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
	response.sendFile(web);
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

app.listen(process.env.PORT);
manager.spawn();