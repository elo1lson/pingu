const Discord = require('discord.js');
const Command = require('../../structures/command/command.js')

module.exports = new Command({
	name: 'ban',
	aliases: ['ba'],
	run: async (client, message, args) => {
    a = message.guild
    console.log(a)
    message.reply(`${a}`)
    
  }
    
})