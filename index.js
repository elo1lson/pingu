const token = process.env.TOKEN
const db = require('quick.db');
const Cluster = require('discord-hybrid-sharding');
const fs = require('fs')
const bot = require('./src/modules/index.js')
const client = require('./src/structures/client/NewClient.js');
const config = process.env.PREFIX //require("/config.json")
const simplydjs = require("simply-djs")
const firebase = require('firebase')
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaBjQQgDmon2dlHr-QmquI8tKIbuzXV1Q",
  authDomain: "stellar-62f9f.firebaseapp.com",
  databaseURL: "https://stellar-62f9f-default-rtdb.firebaseio.com",
  projectId: "stellar-62f9f",
  storageBucket: "stellar-62f9f.appspot.com",
  messagingSenderId: "82409429792",
  appId: "1:82409429792:web:09de1d8e52cc428bec1545",
  measurementId: "G-H4T8B74CK1"
};
try{
firebase.initializeApp(firebaseConfig)
console.log("Firebase logada")
}catch (e){
console.log(e)
}
client.on('interactionCreate', async interaction => {
  console.log("Interação criada")
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
});

client.on("messageCreate", async (message) => {
  let prefix = config
  let cor = "#841384"
  if (message.author.bot) return;
  if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase()

  if (cmd.length === 0) return;
  let command = client.commands.get(cmd)
  if (!command) command = client.commands.get(client.aliases.get(cmd))
  try {
    command.run(client, message, args, prefix, cor).then(setcmd =>{
    	setcmd = new bot.Stats(command.name)
    	console.log(setcmd)
    })
  } catch (err) {
    console.error('Erro:' + err);
  }
});

client.login(token);
