const db = require('quick.db')
class Econ {
	constructor(opt = {}) {
		this.id = opt.id;
		this.met = opt.met;
		this.val = opt.value;
	}
	reg(id, val, met) {
		if (met != typeof "string"){
			return new TypeError("Metodo invalido")
		}
		try {
			switch (this.met) {
				case "nlost":
					db.add(`stats.global.${id}.nlost`, `${val}`)
					break;
				case "nwin":
					db.add(`stats.global.${id}.nwin`, `${val}`)
					break;
				case "totallost":
					db.add(`stats.global.${id}.totallost`, `${val}`)
					break;
				case "totalwin":
					db.add(`stats.global.${id}.totalwin`, `${val}`)
					break;
				case "totalpay":
					db.add(`stats.global.${id}.totalpay`, `${val}`)
					console.log("okkk")
					break;
				case "totalreceived":
					break;
				default:
					this.val + this.val
			}


		} catch (e) {
			console.log('Erro:' + e)
		}
	}

}
module.exports = Econ