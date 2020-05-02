const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar= require('./ayarlar.json')
const seriler= require('./seriler.json')


token= ayarlar.token;

kirei= seriler.kirei;
nani= seriler.nani;


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('ArazNovel Serilerinin Yolunu', { type: 'WATCHING' });
});

client.on('message', msg => {
	
	//KireiCake
	 if (msg.content.includes('the unsuccessful yet academically unparalleled')) 
	 {
    msg.channel.send(kirei);
	 }
          
if (msg.content.includes('Handyman Saitou In Another World')) 
	 {
    msg.channel.send(kirei);
	 }          
//KireiCake  
        
//NaniScan
	 if (msg.content.includes('The Wolf Won')) 
	 {
    msg.channel.send(nani);
	 }
          
if (msg.content.includes('Colorless')) 
	 {
    msg.channel.send(nani);
	 }          
//NaniScan
          

          
          

});

client.login(process.env.token);
 
