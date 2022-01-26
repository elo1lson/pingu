const token = process.env['TOKEN'];
const db = require('quick.db');
const Cluster = require('discord-hybrid-sharding');
const fs = require('fs')
  ; const client = require('./scr/structures/client/client.js');
const config = require("./config.json")
client.categories = fs.readdirSync(`./scr/commands/`);
const simplydjs = require("simply-djs");
client.on("messageCreate", async (message) => {
  // messageCreate Event
  /*
  simplydjs.chatbot(client, message, {
    chid: "912886408778236005",
    name: "tomori" // default: Your bot name
  });*/
  let prefix = config.prefix;

  if (message.author.bot) return;
  if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
  if (message.author.bot) return;
  // if(message.channel.type === 'dm') return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase()

  if (cmd.length === 0) return;
  let command = client.commands.get(cmd)
  if (!command) command = client.commands.get(client.aliases.get(cmd))
  try {
    command.run(client, message, args, prefix)
  } catch (err) {
    console.error('Erro:' + err);
  }
});

client.login(token);
