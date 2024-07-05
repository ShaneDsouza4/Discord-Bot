require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
    intents: [//Permissions 
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ] 
}); 

client.on('messageCreate', message =>{
    //console.log(message.content);
    if(message.author.bot){
        return;
    }
    else if(message.content.startsWith('create')){
        const url = message.content.split('create')[1];
        console.log(url);
        return message.reply({
            content: "Generating Short ID for " + url
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
