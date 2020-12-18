const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./Data/config.json')

const loadCommands = require ('./commands/load-commands')
const mongo = require('./mongo');
const messageCount = require('./message-counter')
const inludesReply = require('./commands/ReplyCommands/includesReply')

client.on('ready', async () =>{
    console.log("ready")

    loadCommands(client)
    messageCount(client)
    inludesReply(client)
    
    await (mongo().then(mongoose => {
        try{
            console.log('Connected to mongo!')
        }
        finally{
            mongoose.connection.close();
        }
    }))
})

client.login(config.TOKEN)