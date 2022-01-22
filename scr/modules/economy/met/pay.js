const db = require('quick.db')
module.exports = function(id, value){
	if (id != typeof "string") {
		return new TypeError('ID invalido')
	}
	if (value != typeof "string") {
		return new TypeError('Valor invalido')
	}
	db.add(`stats.global.${id}.doado`,`${value}`)
	stats = db.get(`stats.global.${id}.doado`)
	console.log(stats)
}