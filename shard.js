const Cluster = require("discord-hybrid-sharding");
let token = "ODU2NTc4MTg3NTA0MjU0OTc2.YNDEmg.-Gpig7HkkAxMivHvcE1dC17i1z8"
const manager = new Cluster.Manager(`/bot.js`,{
	totalShards: "auto",
	totalClusters: "auto",
	mode: "process" ,  //you can also choose worke
	token: token,
	usev13: true //When you do not use v13 turn it to false
	})

manager.on('clusterCreate', cluster => {
	console.log(`Launched Cluster ${cluster.id}`)
	
});
manager.spawn(undefined, undefined, -1)
