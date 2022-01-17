class Command {
	constructor(options) {
		this.name = options.name
		this.description = options.description
		this.author = options.author
		this.perm = options.perm
		this.run = options.run
		
	}
}
module.exports = Command