const Discord = require('discord.js');

module.exports.run = async (client, message, args, prefix) => {
  //Embed 
  var embed = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setImage(membro.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
  .setDescription(`**Baixe essa imagem clicando [aqui](${membro.displayAvatarURL({ dynamic: true, format: "png", size: 1024 })})**`)
  
  //Embed de erro  
  var embedErro = new Discord.MessageEmbed()
  	.setDescription(`${message.author} use \`\`${prefix}\`\`avatar <@usuario> para avatar de alguém, ou \`\`${prefix}\`\`avatar para seu avatar}`)
  var membro = message.mentions.users.first()
  if(!membro) membro = message.author
  if(args[0] != membro){
  	message.reply({embeds:[embedErro]})
  }
  message.reply({embeds:[embed]});
}
//Finalizado em 08/12/21