const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar= require('./ayarlar.json')
const seriler= require('./seriler.json')


token= ayarlar.token;

seri= seriler.seri;


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('ArazNovel Serilerinin Yolunu', { type: 'WATCHING' });
});

client.on('message', msg => {
	
	//Manga başı
	 if (msg.content.includes('the unsuccessful yet academically unparalleled')) 
	 {
    msg.channel.send(seri);
	 }

});

client.login(process.env.token);
 
