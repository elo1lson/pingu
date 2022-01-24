const db = require('quick.db')
module.exports = class Ecom {
	constructor(id) {
		this.id = id;
	}
	registry(met, value) {
		//|console.log('ID: ' + this.id)
		//|console.log('Valor: ' + value)
		//|console.log('Metodo: ' + met)
		var mets = [
		'nwin',
		'nlost',
		'totalpay',
		'totalreceived',
		'totalwin',
		'totallost',
		'totallotto'
	]
		mets.forEach(i => {
			if (i = met) {
				return met = true
			}
		})
		if (met) {
			console.log('Verificar: ' + met)
			db.add(`stats.global.ecom.${this.id}.${met}`, `${value}`)
			var check = db.get(`stats.global.ecom.${this.id}.${met}`)
			//|console.log(check)

		}

	}
}