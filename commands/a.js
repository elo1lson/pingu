const discord = require("discord.js");

exports.run = async(client, message, args)=>
{message.channel.send(`🏓  Seu ping é ${Math.round(client.ws.ping)}ms`);
  }