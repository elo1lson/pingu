const Cluster = require("discord-hybrid-sharding");
let {token} = require("./admin/config.json");
token = token.token
const manager = new Cluster.Manager(`/bot.js`,{
	totalShards: 7 ,
	totalClusters: 2,
	mode: "process" ,  //you can also choose worke
	token: token,
	usev13: true //When you do not use v13 turn it to false
	})

manager.on('clusterCreate', cluster => console.log(`Launched Cluster ${cluster.id}`));
manager.spawn(undefined, undefined, -1)
