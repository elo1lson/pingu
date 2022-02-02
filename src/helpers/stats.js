const db = require('quick.db')
class Stats {
	constructor(cmd) {
		this.cmd = cmd
		this.stats()
	}
	stats(){
		db.add(`config.stats.${this.cmd}`,`1`)
		db.add(`config.stats.geral`,`1`)
		console.log('Registrando estatísticas')
		return db.get(`config.stats.geral`)
	}
	total(){
		return db.get(`config.stats.geral`)
	}
	cmd(key){
		if(!key)throw new TypeError('Key no found, please insert a command name!')
		let cmd = db.get(`config.stats.${key}`)
		return cmd
	}
}
module.export = Stats
