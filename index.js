const token = process.env['TOKEN'];
const db = require('quick.db');
const Cluster = require('discord-hybrid-sharding');
const fs = require('fs')
const Stats = require('./src/modules/index.js')
const client = require('./src/structures/client/NewClient.js');
const config = require("./config.json")
const simplydjs = require("simply-djs");
const cor = db.get(`config.color`)
client.on("messageCreate", async (message) => {
  let prefix = config.prefix;

  if (message.author.bot) return;
  if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase()

  if (cmd.length === 0) return;
  let command = client.commands.get(cmd)
  if (!command) command = client.commands.get(client.aliases.get(cmd))
  try {
    command.run(client, message, args, prefix, cor).then(setcmd =>{
    	setcmd = new Stats.Tomori(command.name)
    	console.log(setcmd)
    })
  } catch (err) {
    console.error('Erro:' + err);
  }
});

client.login(token);
