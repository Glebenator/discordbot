const Discord = require('discord.js');
const client = new Discord.Client();
//client.on('message', message => {});


const TOKEN = ('NTA0ODk5ODY1NDQ5NDYzODA4.W9FepA.QAyooLaTcgecg1M6LOnb4pJdH6w');

//const channel = <client>.channels.cache.get('<id>');
const channel = client.channels.cache.get('<id>');
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

client.on('ready',() => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.content == 'ping'){
        msg.channel.send('Pong!');
    }
});
client.on('message', msg => {
    if(msg.content.includes('5head')||msg.content.includes('5Head')){
        const heademoji = msg.guild.emojis.cache.find(emoji => emoji.name === '5head');
        msg.react(heademoji);
    }
});
client.on('message', msg => {
    if(msg.content == '!logitech'){
        msg.channel.send('i was asking about why to get razer when they copied logitech. that was all i wanted to know, theres no basis on anything said expect for "its better", but sure if 7ms is worth it for shitty QA and having to rma it in 3 months then go ahead. atleast with logitech you can upgrade to the powerplay and have the mouse charge while you play so you never have to worry about it.');
    }
});
client.on('message', msg => {
    if(msg.content == '!razer'){
        msg.channel.send('razer lost my trust when all i hear are issues online and that they just use gamer marketing to get people buying. like their razer switches which are just different coloured kailh switches');
    }
});
client.on('message', msg => {
    if(msg.content == '!180'){
        msg.channel.send('200ms is the limit for human reaction time, so how did you get it faster');
    }
});
client.on('message', msg => {
    if(msg.content == '!razer mouse'){
        msg.channel.send('why would you buy razer basilisk when its just a shitty clone of the logitech g502 lightspeed');
    }
});
client.on('message', msg => {
    if(msg.content == 'Ah' || msg.content == 'ah'){
        msg.channel.send('Whatever');
    }
});
client.on('message', msg => {
    if(msg.content.includes('успешные люди')){
        msg.channel.send('Виталий достиг новой ступени успеха не доступной многим - отдых и сон в подъезде. На подходе - распитие элитарного алкоголя с бомжами у мусорных баков.');
    }
});
client.on('message', msg => {
    if(msg.content == '!успех' || msg.content == '!Успех' ){
        msg.reply('Успешен на ' + getRndInteger(0,100) +  '%');
    }
});
client.on('message', msg => {
    if(msg.content == '!гачи' || msg.content == '!gacchi' ){
        msg.channel.send('!play sia altrenate version');
    }
});




client.login(TOKEN);