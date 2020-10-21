import Discord from 'discord.js';

const client = new Discord.Client();

const TOKEN_API = 'NzYyNzEyMzE5ODUwOTcxMTQ2.X3tJMw.lpbd_QNFL0VuV836FJx6lNFOenA';

client.on('ready', ()=>{
    console.log(`bot logger at: ${client.user.tag}`);
});

client.on('message', message =>{
    if(message.content === 'ping')
    {
        message.reply('pong');
    }
});

client.login(TOKEN_API);
