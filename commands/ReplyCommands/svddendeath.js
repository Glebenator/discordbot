
module.exports = {
    commands: ['svddendeath', 'sd'],
    description: 'Chats oppinion on svddeathdveaths',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.channel.send(' Это кто-то реально слушает такое? или это рофлодонат с целью высрать в уши?');
    },
  }