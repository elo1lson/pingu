//Constantes globais
const Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767});
const admin = require("./config/admin.json");
//const object = require("./object.json")
const cor = require("chalk")
const fs = require("fs")



const testFolder = "./commands/"
const emoji = require("./config/emoji.json")
const express = require('express');
const app = express();
app.get('/', (request, response) => {
	const ping = new Date();
	ping.setHours(ping.getHours() - 3);
	console.log(
		`🔻| Ping recebido - ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`
	);
response.send(`
Logado 
`);
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

    /*  const database = require("./database/prefixes.json")
      io = database[message.guild.id]
      if(!database)*/
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


