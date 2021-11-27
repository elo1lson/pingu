const Discord = require('discord.js');
require('discord-reply');
require("discord-banner")();

exports.run = async (client, message, args) => {
const categoria = `913033560619905054`;
             let categoria = message.guild.channels.cache.find(ct=>ct.id === categoria && ct.type === "category");
        
message.guild.channels.create(`help-config-${message.author.username}`, { 
permissionOverwrites: [
            {
                id: .id,
                allow: ["SEND_MESSAGES", "READ_MESSAGE_HISTORY", "VIEW_CHANNEL"] 
            },
            {
                id: message.guild.roles.everyone,
                deny: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY", "SEND_MESSAGES" ] 
            }
        ],
type: 'Text'
          }).then(async channel => {
              channel.setParent(categoria, { lockPermissions: false });
            const msg = await channel.send(`<@${message.author.id}>`);
            
            let mes = await message.channel.send(`<a:tomori:913429924449255496> **| canal de configurações criado:**  ${channel}`)
            message.delete()
            mes.delete({ timeout: 5000 })
    
            setTimeout(() => { 
                if(inicio === false){
                    channel.delete();
                
               
                return;
                }
                }, 40000) 
    
} 