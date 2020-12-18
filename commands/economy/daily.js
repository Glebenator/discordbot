const mongo  = require("../../mongo")
const dailySchema = require("../../schemas/daily-schema")
const moist = require("../ReplyCommands/moist")

//array of those who have claimed their daily
let claimedCache = []
const clearCache = () => {
    claimedCache = []
    setTimeout(clearCache, 1000 * 60 * 10) //10 mins
}
clearCache()

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
            message.reply('You have already ran your daily')
            return
        }

        const obj = {
            guildId: guild.id,
            userId: id
        }


        await mongo().then(async mongoose => {
            try{
                const results = await dailySchema.findOne(obj)

                if(results) {
                    const then = new Date(results.updatedAt).getTime()
                    const now = new Date().getTime()

                    const diffTime = Math.abs(now - then)
                    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))

                    if (diffDays <= 1){
                        claimedCache.push(id)

                        message.reply("You have already run your !daily")
                        return
                    }
                }
                await dailySchema.findOneAndUpdate(obj,obj, {
                    upsert: true
                })

                claimedCache.push(id)
                message.reply('Успешен на ' + getRndInteger(0,100) +  '%');
                message.reply('Достал сковородку смазал майонезисом и поджарил для Серёги на '+ getRndInteger(0,100) + '%');
                moist.callback();
                message.channel.send("Максимальное развитие!!!! ♿️💰⌨️💻🖥");
            }
            finally{
                mongoose.connection.close()
            }
        })
    },
  }
  