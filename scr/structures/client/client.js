//Por favor, não meixa nesse código
//Instanciando o client

const Base = require('./base.js')
const Cluster = require('discord-hybrid-sharding');
let Client = new Base({
			intents: 32767,
			allowedMentions:{
				parse: ["users","roles"],
        repliedUser: false
				
			}
		})
module.exports = Client