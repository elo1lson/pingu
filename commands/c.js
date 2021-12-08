const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
	bank = await db.fetch(`bank`)
	for (var i in bank) {
    var foods = db.fetch(`bank`)
    var foodsArray = Array.prototype.slice.call(foods, 0);
    console.log(foodsArray, 0)
    console.log(foodsArray.sort())
		console.log(bank[i].money)
	}

	// Resultado: maria, josé, joão

	message.reply(`${bank}`)
}