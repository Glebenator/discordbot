const mongo = require('../../mongo')
const warnSchema = require('../../schemas/warn-schema')

module.exports = {
    name: 'condemn',
    execute: (async(message) => {
        
        const guildId = message.guild.id
        const userId = message.author.id
        message.channel.send("ОСУЖДАЮ")
        await mongo().then(async mongoose => {
            try{
                await warnSchema.findOneAndUpdate({
                    guildId,
                    userId
                },{
                    guildId,
                    userId,
                    $inc:{
                        warnings: 1
                    }
                },{
                    upsert: true
                })
            } finally{
                mongoose.connection.close();
            }
        })
    })

}