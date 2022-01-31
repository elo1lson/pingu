class Database {
	constructor() {
		this.config = new Object()
	}
	objs() {
		this.config.color = db.get(`config.color`)

	}
}
module.exports = Database
