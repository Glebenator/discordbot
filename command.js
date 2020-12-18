const { model } = require("mongoose")
const { prefix } = require ('./Data/config.json')

module.exports = (client, aliases, callback) => {
if (typeof aliases === 'string'){
    aliases = [aliases]
}

    client.on('message', message =>{
        const { content } = message;

        aliases.forEach((alias) => {
            const command = `${prefix}${aliases}`

            if(content.startsWith(`${command }` || content === command)){
                callback(message)
            }
        });
    })
}