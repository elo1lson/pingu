	class Command{
	constructor(options){
		this.name = options.name
		this.help = options.description
		this.aliases = options.aliases
    this.run = options.run
    this.category = options.category
	}
}
module.exports = Command
	
