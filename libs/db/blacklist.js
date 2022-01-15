const db = require('quick.db')

/*class blacklist {
	constructor(entrada) {
		this.entrada = entrada
		this.objeto = new Object()
	}
	checar(){
		var blacklistdb = db.get(`blacklist.${this.entrada}`)
		if(blacklistdb){
			this.objeto.checado = true
      this.objeto.admin  = "3"
      console.log(this.objeto)
		}else{
			this.objeto.checado = false
		}
		return this.objeto
	}
}
*/
class Blacklist {
	constructor() {
		this.user = new Object()
	}
	check(usuario){
		const database = db.get(`blacklist.${this.usuario}`)
		const admin = database.adminID
		const motive = database.motivo
    if(database){
    	this.user.blacklist = true
    	this.user.name = admin
    	this.user.motive = motive
    }else{
    	this.user.blacklist = false
    }
    return this.user
	}
}
module.exports = Blacklist
cla
