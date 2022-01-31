const db = require("quick.db")
class Database {
	constructor() {
		this.config = new Object()
    this.objs
	}
	objs() {
var cor = this.config.color = db.get(`config.color`)
    return cor

	}
}
module.exports = Database
