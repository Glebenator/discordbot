function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  };

module.exports = {
    commands: 'logitech',
    description: 'see why logitech is the way to go',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.channel.send('i was asking about why to get razer when they copied logitech. that was all i wanted to know, theres no basis on anything said expect for "its better", but sure if 7ms is worth it for shitty QA and having to rma it in 3 months then go ahead. atleast with logitech you can upgrade to the powerplay and have the mouse charge while you play so you never have to worry about it.');
    },
  }