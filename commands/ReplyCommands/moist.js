function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  };

module.exports = {
    commands: 'увлажнение',
    description: 'минус немезис',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.reply('достал хуй и увлажнил сергея немезиса на '+ getRndInteger(0,100) + '%' );
    },
  }