module.exports = {
  commands: 'ping',
  description: "check ping",
  minArgs: 0,
  maxArgs: 0,
  callback: (message, arguments, text) => {
    message.channel.send(':ping_pong:').then(pingMessage => {
      const start = message.createdTimestamp;
      const end = pingMessage.createdTimestamp;
      const subtraction = end - start;

      pingMessage.edit(`Pong! That took ${subtraction} ms`);
  });
  },
}
