const Discord = require("discord.js")
const capture = require("../libs/args/args.js")
module.exports.run = async (client,  message,  args, prefix) => {
	var user = `${message.author.id}`
	var botadmin = db.get(`botadmin.${user}`)
	var mencao = message.mentions.users.first()
	var blacklist = db.get(`blacklist.${user}`)
	capture(args[1])
	if (mencao && args[1]) {
		message.channel.send("Ban")
	}
}