const db = require('quick.db')

class blacklist{
	constructor(user){
		this.user = user
	}
	verify(){
		const blacklistdb = db.get(`blacklist.${id}`)
		const admin = blacklistdb.adminID
		const motivo = blacklistdb.motivo
		if (blacklistdb) {
			user.blacklist = true
			user.admin = admin
			user.motivo = motivo
		} else {
			user.blacklist = false
		}
	}
}
module.exports =	blacklist