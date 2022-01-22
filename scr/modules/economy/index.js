const db = require('quick.db')
class Econ {
	constructor(opt = {}){
		this.id = opt.id;
    }
    pay = require('./met/pay.js')
}
module.exports = Econ