// Developer by BluePandora
const express = require('express'); 
const { Client, MessageEmbed } = require('discord.js-selfbot');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map(); // Developer by BluePandora

client.on('ready', () => {
  console.log("================================")
  console.log(`${client.user.username} Starting...`)
  console.log("================================")
  console.log("Bot's Token Verified - Developer by BluePandora"); 
});

    
client.on("message", async msg => { // Developer by BluePandora
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let blue = await data.get(msg.author.id);

        if (blue === 1) {
        } else {
          await data.set(msg.author.id, 1);
          await sleep(5000);
          await msg.channel.send("discord.gg/gifson"); // server connection
          await sleep(4000);
          await msg.channel.send("done ?"); 
        }
      }
    }
  }
});

client.on("guildCreate", blue => { // Developer by BluePandora

  });


  client.on("ready", () => {
    setInterval(() => {
     let blue = client.channels.cache.get("") // j4j channel id of the server


     blue.send("J4J dm me ")


    }, 180000);
})

client.on("ready", () => {
  setInterval(() => {
   let blue = client.channels.cache.get("") // j4j channel id of the server


   blue.send("J4J dm me")


  }, 180000);
})



client.login("TOKEN") // Submit your account's token here
// Developer by BluePandora
