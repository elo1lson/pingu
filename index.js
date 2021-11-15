//Constantes globais
const Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767});
const config = require("./config.json");
const object = require("./object.json")
const cor = require("chalk")
const fs = require("fs")
const testFolder = "./commands/"

//Desnecessário
fs.readdirSync(testFolder).forEach(file => {
	console.log(file);
});

//Puxando arquivos de databasa
const databaseStatus = require("./atividades.json")

//Login do bot
client.login(config.token);

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
 fs.writeFile("./object.json", JSON.stringify(sampleObject, null, 4),
(err) => {
  if (err) { console.error(err); return;
  }; 
 console.log("File has been created"); });
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
      		prefix: config.defaultPrefix
      		
      	}
      	
      }
      let prefix = prefixes[message.guild.id].prefix;
      let pfp = client.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024});
      
      let embedtwo = new Discord.MessageEmbed()
       .setDescription(`Ah, não se esqueça de visitar meu website :D \[Clique aqui](http://himikobot.github.io)`)
       .setColor('RED')
       .setThumbnail(pfp)
      let embed = new Discord.MessageEmbed()
       .setAuthor(`Ajudinha da ${client.user.username}`)
       .setColor('RED')
       .setThumbnail(pfp)
       .addField(`<:global:904156862566506506> Meu prefix Global:`,` <:seta:904384277431603200> \`${prefix}\``)
       .addField(`<:sat:904158064708575262> Meu prefix nesse servidor:`,` <:seta:904384277431603200> \`${prefix}\``)
       .setFooter(`Espero ter te ajudado ${message.author.username} :D`)
       .setTimestamp()
       .setThumbnail('https://cdn.discordapp.com/avatars/864914513274470410/b502451a275aef8d735ba3f13ad51b23.png?size=2048')
       message.author.send(`hd`)
      message.reply({embeds: [embed, embedtwo]}).then(msg => {
            setTimeout( () => {

                msg.delete()
            }, 20000 * 3)
        })
     }
     if (message.author.bot) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
     let prefixes = JSON.parse(fs.readFileSync("./database/prefixes.json", "utf8"));
    if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefix: config.defaultPrefix
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
