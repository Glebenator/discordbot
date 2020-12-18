const loadCommands = require ('../load-commands')
const { prefix } = require ('../../Data/config.json')

module.exports = {
    commands: ['help'],
    description: "list all available commands",
    callback: (message, arugments, text) => {
        let reply = "Here is a list of all available commands: \n\n"

        const commands = loadCommands();

        for (const command of commands){
            //check for permissions
            let permissions = command.permissions
            if(permissions){
                let hasPermission = true
                if (typeof permissions === 'string'){
                    permissions = [permissions]
                }
                for (const permission of permissions) {
                    if (!message.member.hasPermission(permission)){
                        hasPermission = false
                        break
                    }
                }
                if (!hasPermission){
                    continue
                }
            }
            const mainCommand = typeof command.commands === 'string' ? command.commands : command.commands[0]
            const args = command.exectedArgs ? ` ${command.exectedArgs}` : ''
            const { description } = command

            reply += `**${prefix}${mainCommand}${args}** = ${description}\n`
        }
        message.channel.send(reply)
    },
}