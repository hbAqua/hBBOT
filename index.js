const Discord = require("discord.js")
require("dotenv").config()
// Intents 
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "DIRECT_MESSAGES",
        "GUILD_BANS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (Message) => {
    if (Message.content == "Hi"){
       Message.reply("Hello!") 
    }
})



client.login(process.env.TOKEN)