class Command{
	constructor(options){
		this.name = options.name
		this.description = options.description
		this.aliases = options.aliases
    this.run = options.run
	}
}
module.exports = Command
console.log(`Da classe A ${Command}`)