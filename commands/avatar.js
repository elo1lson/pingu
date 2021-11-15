const Discord = require('discord.js');
const cor = require("chalk")
var path = require('path');
var cmd = path.basename(__filename);
module.exports.run = async (client, message, args, prefix) => {
for (var i = 0; i < 2; i++) {
   console.log(i);
   // more statements
}
  const embd = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}avatar`)
  .setColor("RANDOM")
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}avatar <usuário>`)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`)
  .setFooter(`© HypedGroupCode`);

  let membro = message.mentions.users.first()
  if(!membro) membro = message.author
  const embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setImage(membro.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
  .setDescription(`baixe essa imagem clicando [aqui](${membro.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })})`)

  message.channel.send({embeds:[embed]});
  console.log(cor.blue(`${message.author.username} usou ${cmd}`))
}