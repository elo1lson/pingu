const Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767});
const config = require("./config.json");
const object = require("./object.json")
const fs = require("fs");
client.login(config.token); 
client.once('ready', async () => {
    const status = [
    "online"
  ]

  const atividades = [
    [`..help `, "PLAYING"],
    [`..cmd `, "PLAYING"],
    [`no quarto da tua mãe`,"STREAMING"],
    [`https://youtu.be/t9mokswzC40`,"STREAMING"],
    [`No momento estou sendo usada por ${client.users.cache.size} Usuários`, "WATCHING"],
    [`${client.guilds.cache.size} Servidores`, "WATCHING"],
    [`Esse é meu servidor favorito!`,"WATCHING"],
    
  ]

 i = 0;


  setInterval(async () => {
    let i = Math.floor(Math.random() * atividades.length + 1) - 1
    await client.user.setActivity(atividades[i][0], {
      type: atividades[i][1]
    });
  }, 5000)

  console.log(`Logado como ${client.user.username}`)
  var fs = require("fs");
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
      const id = require("./database/prefixes.json")
       if (id){
         io = id[message.guild.id].prefix
       }
      let embedtwo = new Discord.MessageEmbed()
       .setDescription(`Ah, não se esqueça de visitar meu website :D \[Clique aqui](http://himikobot.github.io)`)
       .setColor('RED')
      let embed = new Discord.MessageEmbed()
       .setAuthor(`Ajudinha da ${client.user.username}`)
       .setColor('RED')
       .addField(`<:global:904156862566506506> Meu prefix Global:`,` <:seta:904384277431603200> \`${config.defaultPrefix}\``)
       .addField(`<:sat:904158064708575262> Meu prefix nesse servidor:`,` <:seta:904384277431603200> \`${io}\``)
       .setFooter(`Espero ter te ajudado ${message.author.username} :D`)
       .setTimestamp()
       .setThumbnail('https://cdn.discordapp.com/avatars/864914513274470410/b502451a275aef8d735ba3f13ad51b23.png?size=2048')
      message.reply({embeds: [embed, embedtwo]}).then(msg => {
            setTimeout( () => {

                msg.delete()
            }, 20000)
        })
     }
     if (message.author.bot) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
    let prefixes = JSON.parse(fs.readFileSync("./database/prefixes.json", "utf8"));
    if (message.channel.type == 'dm') return;
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
    console.error('Erro:' + err);
  }
});
