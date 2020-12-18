
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  };

module.exports = {
    commands: 'razer',
    description: 'see why razer is inferior',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.channel.send('razer lost my trust when all i hear are issues online and that they just use gamer marketing to get people buying. like their razer switches which are just different coloured kailh switches');
    },
  }