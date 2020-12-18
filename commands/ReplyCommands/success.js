function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  };

module.exports = {
    commands: 'успех',
    description: 'насколько ты не успешен',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        if(message.author.id == '242799305616785408'){
            message.reply('Успешен на '+ getRndInteger(90,100) + '%')
            console.log(message.author)
        }
        else{
        message.reply('Успешен на '+ getRndInteger(0,100) + '%' );
        
        }
    },
  }