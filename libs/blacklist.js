//Metodo para verificar se o usuário esta banido do bot 
const db = require("quick.db")
const blacklist = function(arg) {
	let blacklist = db.get(`blacklist.${arg}.id`)
	if (arg == blacklist) {
		arg = true
	} else {
		arg = false
	}
	return arg
}
module.exports = blacklist