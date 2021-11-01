const discord = require("discord.js");

exports.run = async(client, message, args)=>
{
  message.channel.send(`Qual a nova cor?`);
  if (message.content == "RED"){
    message.channel.send(`ok`)
  }  }