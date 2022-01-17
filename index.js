//*
const token = process.env['TOKEN']
const Cluster = require('discord-hybrid-sharding');
const client = require('./scr/structures/client.js');
const fs = require("fs")
const config = require("./config.json")
client.categories = fs.readdirSync(`./scr/commands/`);

fs.readdirSync('./scr/commands/').forEach(local => {
    const comandos = fs.readdirSync(`./scr/commands/${local}`).filter(arquivo => arquivo.endsWith('.js'))

    for(let file of comandos) {
        let puxar= require(`./scr/commands/${local}/${file}`)

        if(puxar.name) {
            client.commands.set(puxar.name, puxar)
        } 
        if(puxar.aliases && Array.isArray(puxar.aliases))
        puxar.aliases.forEach(x => client.aliases.set(x, puxar.name))
    } 
});

client.on("messageCreate", async (message) => {

    let prefix = config.prefix;
  
      if (message.author.bot) return;
      if (message.channel.type == 'dm') return;     
  
       if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
    
      if(message.author.bot) return;
      if(message.channel.type === 'dm') return;
  
      if(!message.content.startsWith(prefix)) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
  
      let cmd = args.shift().toLowerCase()
      if(cmd.length === 0) return;
      let command = client.commands.get(cmd)
      if(!command) command = client.commands.get(client.aliases.get(cmd)) 
    
  try {
    console.log(command)
      command.run(client, message, args)
  } catch (err) { 
 
     console.error('Erro:' + err); 
  }
      });

client.login(token);
