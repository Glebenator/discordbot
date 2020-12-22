
const mongo  = require("../mongo")
const warnSchema = require("../schemas/warn-schema")

module.exports = {
    commands: ['listwarnings', 'lw'],
    minArgs: 1,
    expectedArgs: "<Target user's @>",
    callback: async (message, arguments, text) => {
      const target = message.mentions.users.first()
      if (!target) {
        message.reply('Please specify a user to load the warnings for.')
        return
      }
  
      const guildId = message.guild.id
      const userId = target.id
      await mongo().then(async (mongoose) => {
        try {
          const results = await warnSchema.findOne(
            {
              guildId,
              userId,
            }
          )
          if (results){
          message.reply("has " + results.warnings + " Осуждений")
          }
          else{
            message.channel.send("Could not find this guy")
          }
        } finally {
          mongoose.connection.close()
        }
      })
    },
  }