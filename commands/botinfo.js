const os = require("os")
//Retorna strin
arquitetura = os.arch()
//Retorna Objeto
cpu = os.cpus()
cpuModel = cpu[0].model
cpuSpeed = cpu[0].speed
freemem = os.freemem()
t = os.totalmem()
console.log(t)

console.log(freemem)
freememKB = freemem/1024/1024/1024

const Discord = require("discord.js")
module.exports.run = async (client, message, args, prefix) => {
  let embed = new Discord.MessageEmbed()
  .setTitle("Informações de Software e Hardware")
  .addFields(
    {name:`Informações  de CPU`, value:`\nArquitetura\n\`\`${arquitetura}\`\``, inline:true}, 
    {name:`CPU`, value:`**Modelo:**\n\`\`${cpuModel}\`\`\n**Velocidade:**\n\`\`${cpuSpeed}MHz\`\``},
    {name:`Armazenamento`, value:`${freememKB.toPrecision(3)}`}
  )

  message.channel.send({embeds:[embed]})
}