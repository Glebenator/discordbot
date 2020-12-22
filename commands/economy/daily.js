const mongo  = require("../../mongo")
const dailySchema = require("../../schemas/daily-schema")

const moist = require("../ReplyCommands/moist")
const success = require("../ReplyCommands/success")

//array of those who have claimed their daily
let claimedCache = []
const clearCache = () => {
    claimedCache = []
    setTimeout(clearCache, 1000 * 60 * 10) //10 mins
}
clearCache()
const alreadyClaimed = 'You have already claimed your daily rewards'

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


module.exports = {
    commands: 'daily',
    description: "your success for the day",
    minArgs: 0,
    maxArgs: 0,
    callback: async(message, arguments, text) => {
    const { guild, member } = message
    const { id } = member

    if (claimedCache.includes(id)) {
      console.log('Returning from cache')
      message.reply(alreadyClaimed)
      return
    }

    console.log('Fetching from mongo')

    const obj = {
      guildId: guild.id,
      userId: id,
    }

    await mongo().then(async (mongoose) => {
      try {
        const results = await dailySchema.findOne(obj)

        console.log('RESULTS:', results)

        if (results) {
          const then = new Date(results.updatedAt).getTime()
          const now = new Date().getTime()

          const diffTime = Math.abs(now - then)
          const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))

          if (diffDays <= 1) {
            claimedCache.push(id)

            message.reply(alreadyClaimed)
            return
          }
        }

        await dailySchema.findOneAndUpdate(obj, obj, {
          upsert: true,
        })

        claimedCache.push(id)

        // TODO: Give the rewards
        success.callback(message,arguments,text);
        moistening.callback(message,arguments,text);



        message.reply('You have claimed your daily rewards!')
      } finally {
        mongoose.connection.close()
      }
        })
    },
  }
  