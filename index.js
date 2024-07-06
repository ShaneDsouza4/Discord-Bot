require('dotenv').config();
const { connectToMongoDB } = require("./connection");
const { Client, GatewayIntentBits } = require('discord.js');
const { shortenURL } = require("./urlShortener")

connectToMongoDB("mongodb://127.0.0.1:27017/urlShortener")
.then(()=>console.log("MongoDB connected."));

const client = new Client({ 
    intents: [//Permissions 
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ] 
}); 

client.on('messageCreate', async message =>{
    //console.log(message);
    if(message.author.bot){
        return;
    }
    else if(message.content.startsWith('create')){
        const url = message.content.split('create')[1];
        console.log(url);
        const shortUrl = await shortenURL(url, message.author.username);
        console.log(shortUrl)
        return message.reply({
            content: "Generated Short URL: " + shortUrl
        })
    }else{
        message.reply({
            content: "Hi from Bot."
        })
    }
    
    
})

client.on('interactionCreate', interaction => {
    interaction.reply("Bot Says Pong!");
})

client.login(process.env.APIKEY);
