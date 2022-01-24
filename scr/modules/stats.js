const db = require('quick.db')
module.exports = class Tomori {
	constructor(cmd) {
		this.cmd = cmd
		this.stats()
	}
	stats(){
		db.add(`config.stats.${this.cmd}`,`1`)
		db.add(`config.stats.geral`,`1`)
		console.log("Adicionei")
		return db.get(`config.stats.geral`)


	}
}