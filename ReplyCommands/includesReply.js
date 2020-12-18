const { execute } = require('./condemn');
const condemn = require('./condemn')

module.exports = client => {
    client.on('message', message =>{
        const heademoji = message.guild.emojis.cache.find(emoji => emoji.name === '5head');
        const joy2 = message.guild.emojis.cache.find(emoji => emoji.name === 'JOY2');
        
    
    //included in message
        if(message.content.toLowerCase().includes("5head"))
            message.react(heademoji);
        if(message.content.toLowerCase().includes('успешные люди'))
            message.channel.send('Виталий достиг новой ступени успеха не доступной многим - отдых и сон в подъезде. На подходе - распитие элитарного алкоголя с бомжами у мусорных баков.');
        if(message.content.toLowerCase().includes('полигоны'))
            message.channel.send('Полигон - это такой кароче треугольник, и на него моделька разбивается - называется процесс триангуляции .');
        if(message.content.toLowerCase().includes("fuckign")){
            message.react(joy2);
            message.channel.send("my brain thinks faster than I can type");
        }
        if(message.content.toLowerCase().includes('nigger'))
        condemn.execute(message);
        if(message.content.toLowerCase().includes('niger'))
        condemn.execute(message);
        if(message.content.toLowerCase().includes('fag'))
        condemn.execute(message);
        if(message.content.toLowerCase().includes('faggot'))
        condemn.execute(message);
        if(message.content.toLowerCase().includes('pidor'))
        condemn.execute(message);
        if(message.content.toLowerCase().includes('пидор'))
        condemn.execute(message);
        if(message.content.toLowerCase().includes('пидорас'))
        condemn.execute(message);
        if(message.content.toLowerCase().includes('даун'))
        condemn.execute(message);


        switch(message.content.toLowerCase()){
            case 'ah':
                message.channel.send("Whatever");
                break;
            case 'understandable':
                message.channel.send("have a ....")
                break;
            
        }
    })
}