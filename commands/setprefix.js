const Discord = require('discord.js');
const fs = require('fs');
const config = require('../config.json');

module.exports.run = async (client, message, args, prefix) => {
  const embederror = new Discord.MessageEmbed()
  .setTitle(`<a:HYpositive:763111725510950932> | Comando: ${prefix}setprefix`)
  .setColor(`RANDOM`)
  .setDescription(`<a:HYseta1:756119648654852106> **Use**: ${prefix}setprefix <Seu Novo Prefixo> `)
  .addField(`👍 | Observação:`, `<a:HYseta1:756119648654852106> Nenhuma`);

  let prefixes = JSON.parse(fs.readFileSync("./database/prefixes.json", "utf8"));
  if(message.channel.type == 'dm') return;
  if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefix: config.defaultPrefix
    }
  }
  let prefix0 = prefixes[message.guild.id].prefix;
  if(!message.member.permissions.has("MANAGE_GUILD")) return message.reply("Você não pode trocar o prefixo deste servidor, pois vc não tem a permissão necessária `MANAGE_GUILD`");
  if(!message.guild.me.permissions.has("ADMINISTRATOR")) {
    return message.reply(`:x: | Eu não tenho a permissão: ADMINISTRATOR`)
  }

  if(!args[0]) return message.reply({embeds: [embederror]})

  prefixes[message.guild.id] = {
    prefix: args[0]
  }

  fs.writeFile("./database/prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let embed = new Discord.MessageEmbed()
  .setTitle("👍 | Prefixo Definido!")
  .setColor("RANDOM")
  .setDescription(`-> | Definido para **${args[0]}**`)
  message.channel.send({embeds: [embed]})
} 