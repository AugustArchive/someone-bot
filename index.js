/*
 ██████╗ ███████╗ ██████╗ ███╗   ███╗███████╗ ██████╗ ███╗   ██╗███████╗    ██████╗  ██████╗ ████████╗
██╔═══██╗██╔════╝██╔═══██╗████╗ ████║██╔════╝██╔═══██╗████╗  ██║██╔════╝    ██╔══██╗██╔═══██╗╚══██╔══╝
██║██╗██║███████╗██║   ██║██╔████╔██║█████╗  ██║   ██║██╔██╗ ██║█████╗      ██████╔╝██║   ██║   ██║   
██║██║██║╚════██║██║   ██║██║╚██╔╝██║██╔══╝  ██║   ██║██║╚██╗██║██╔══╝      ██╔══██╗██║   ██║   ██║   
╚█║████╔╝███████║╚██████╔╝██║ ╚═╝ ██║███████╗╚██████╔╝██║ ╚████║███████╗    ██████╔╝╚██████╔╝   ██║   
 ╚╝╚═══╝ ╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝    ╚═════╝  ╚═════╝    ╚═╝  
 Made by Yanderella with <3, Remember to read the license before using this code in any of your projects
 */

const { Client } = require('discord.js');
const client = new Client();

const config = require('./config.json');

const { Client: dbiClient } = require('dbi.js');             
const dbi = new dbiClient(config.dbiToken, { id: '536092396375769088' }); 

client.on('ready', () => {
    console.log('Now I am ready for some good, good, @SoMeOnE');
    client.user.setActivity('@someone for some good, good, SOMEONE');

    setInterval( () => {
        dbi.postStats(client.guilds.size).then(console.log).catch(console.error);    // Posting your guild count to DBI and logging all responses
    }, 60000)
});


client.on('message', msg => {
    if (msg.author.bot) return;
    if ( msg.content.toLowerCase().includes(`<@${client.user.id}>`) ) {
        try {
            if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You need the manage messages permissions for this, wack');
            msg.channel.send(`<@${msg.channel.members.random().id}>`);
        } catch {
            msg.reply('oof, there was an error');
        }
    }
});

client.login(config.token);
