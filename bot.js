const token = process.env['TOKEN']

const Cluster = require("discord-hybrid-sharding");
const Discord = require("discord.js");
const client = new Discord.Client({
	shards: Cluster.data.SHARD_LIST,
	shardCount: Cluster.data.TOTAL_SHARDS,
	intents: 32767
});
console.log(client)
const usev13 = true;
client.cluster = new Cluster.Client(client, usev13);

/*eventos do bot acima do CLIENT.LOGIN(...)*/
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync(`./commands/`);

fs.readdirSync('./commands/').forEach(local => {
    const comandos = fs.readdirSync(`./commands/${local}`).filter(arquivo => arquivo.endsWith('.js'))

    for(let file of comandos) {
        let puxar= require(`./commands/${local}/${file}`)

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
      command.run(client, message, args)
  } catch (err) { 
 
     console.error('Erro:' + err); 
  }
      });

client.login(token);
/*
const Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767});
console.log(client)	
console.log(client.alloweMentions)
const admin = require("./config/admin.json");
const cor = require("chalk")
const fs = require("fs")

const testFolder = "./commands/"
const emoji = require("./config/emoji.json")
const express = require('express');
const app = express();
app.get('/', (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	console.log(`Ping: ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
	response.send("3");
});
app.listen(process.env.PORT);


//Desnecessário
fs.readdirSync(testFolder).forEach(file => {
	console.log(file);
});

//Puxando arquivos de databasa
const databaseStatus = require("./atividades.json")

//Login do bot

const my = process.env['Token']
client.login(my);
const mySecret = process.env['Token']

//Ligando o bot

client.once('ready', async () =>{

   
  const status = [
    "online"
  ]
  //Obtendo o metodo "name"
  let statusName = databaseStatus.name
  let i = Math.floor(Math.random() * statusName.length + 1 ) - 1
  
  setInterval(async ()=> {
    await client.user.setActivity(statusName[i][0], {
      type: statusName[i][1]
    });
  }, 5000 * 5)
  
  //Conferidor de login
  console.log(cor.yellow(`Logado como ${client.user.username}`))
  var ok = `${client.user.id}`
  var sampleObject = {
    name: ok,
    member: 'id',
  };
})


client.on('messageCreate', message => {
     if (
       message.content == `<@${client.user.id}>`
     ){

      let prefixes = JSON.parse(fs.readFileSync("./database/prefixes.json", "utf8"));
      if(!prefixes[message.guild.id]) {
      	prefixes[message.guild.id] = {
      		prefix: admin.prefix
      		
      	}
      	
      }
      let prefix = prefixes[message.guild.id].prefix;
      let pfp = client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024});
      
      let embed = new Discord.MessageEmbed()
       .setAuthor(`Ajudinha da ${client.user.username}`)
       .setColor('BLACK')
       .setThumbnail(pfp)
       .addField(`${emoji.pasta} Meu prefix Global:`,` ${emoji.setaVerde} \`${admin.prefix}\``)
       .addField(`${emoji.ramo} Meu prefix nesse servidor:`,` ${emoji.setaVerde} \`${prefix}\``)
       .setFooter(`Espero ter te ajudado ${message.author.username} :D`)
       .setTimestamp()
       .setThumbnail(`https://cdn.discordapp.com/avatars/864914513274470410/b502451a275aef8d735ba3f13ad51b23.png?size=2048`)
       message.reply({embeds: [embed]}).then(msg => {
            setTimeout( () => {

                msg.delete()
            }, 10000 * 12)
        })
     }
     if (message.author.bot) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
     let prefixes = JSON.parse(fs.readFileSync("./database/prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefix: admin.prefix
     }
    }
    let prefix = prefixes[message.guild.id].prefix;
    if (!message.content.toLowerCase().startsWith(prefix)) return;
    const args = message.content
        .trim().slice(prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args, prefix);
    } catch (err) {
    console.error(cor.red('- - >') + cor.yellow(err));
  }
});
*/