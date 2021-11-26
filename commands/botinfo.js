const os = require("os")
//Retorna strin
arquitetura = os.arch()
//Retorna Objeto
cpu = os.cpus()
//Objetos da cpu
const Discord = require("discord.js")
module.exports.run = async (client, message, args, prefix) => {
	var cpuModel, cpuSpeed, freemem, totalmem, uptime, host, time, percent, sec, min, hour
	time = os.uptime()
	cpuModel = cpu[0].model
  cpuSpeed = cpu[0].speed;
 	freemem = os.freemem();
	totalmem = os.totalmem();
  percent = (freemem/totalmem)*100
	sec = os.uptime();
	min = sec/60;
	hour = min/60;
	sec = Math.floor(sec);
	min = Math.floor(min);
	hour = Math.floor(hour)
  host = os.platform();
  hour = hour%60;
  min = min%60;
  sec = sec%60;
  membro = client.user
	let embed = new Discord.MessageEmbed()
  .setTitle("Informações de Software e Hardware")
  .setThumbnail(membro.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
  .setDescription(`Sou a ${client.user.username}, fui desenvolvida pra te ajudar!\n\nAtualmente eu faço parte de ${client.guilds.cache.size} servidores, e cuido de ${client.users.cache.size} lindas pessoas, e estou tentando melhorar a cada dia`)
  .setColor('BLACK')
  .addFields(
    {
    	name:`Informações  de CPU`,
    	value:`\u200B`, inline:true
    	
    }, 
    {
     name:`CPU`,
     value:`**Modelo:**\n\`\`${cpuModel}\`\`\n**Velocidade:**\n\`\`${cpuSpeed}MHz\`\`\n**Arquitetura:**\n\`\`${arquitetura}\`\`\n**Sistema:**\n\`\`${host}\`\``
    },
    {
    	name:`Armazenamento`,
    	value:`**RAM:**\n\`\`${percent.toPrecision(2)}%\`\`\n**SSD:**\n\`\`Indisponível\`\``
    	
    },
    {
    	name:`Util`,
    	value:`**Uptime:**\n\`\`${hour}h${min}min${sec}s\`\``
    	
    },
    {name:`Ajuda & Suporte`,value:`[Website](https://himikobot.github.io)\n[Discord](https://discord.gg/3M6GWaUfYD)`}
  )
  .setFooter(`Obrigado por me usar ${message.author.username}:)`)
  message.channel.send({embeds:[embed]})
}