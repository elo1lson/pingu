const DB = require("simple-json-db");
const fs = require("fs")
const sha256 = require("js-sha256")

module.exports = class Database {
	/**
	 * Database creation
	 * @param {object} options - Object with options
	 * @param {string} options.path - Path to a database file
	 */
	constructor(options = {}) {
		this.path = options.path && typeof options.path === 'string' ? options.path : "./database.json"
		this.database = new DB(this.path);
	}
	get(key){
		if (!key) {
			throw new TypeError("Nao tem valor!")
		}
	}
  set(key, value) {
        if (!key || !value) throw new TypeError("[SET] No key or value specifiied!")
        try {
            return this.database.set(key, value)
        } catch (err) {
            throw new Error(err)
        }
    }
}