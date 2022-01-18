const Client = require('./base.js')
const Cluster = require('discord-hybrid-sharding');
let Client1 = new Client({
			intents: 32767
		})
module.exports = Client1