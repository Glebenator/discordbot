function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  };

module.exports = {
    commands: 'razer mouse',
    description: 'see why g502 is better',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.channel.send('why would you buy razer basilisk when its just a shitty clone of the logitech g502 lightspeed');
    },
  }