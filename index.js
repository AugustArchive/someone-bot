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
    client.user.setActivity('some help for help | @someone');

    setInterval( () => {
        dbi.postStats(client.guilds.size).then(console.log).catch(console.error);    // Posting your guild count to DBI and logging all responses
    }, 60000)
});


client.on('message', msg => {
    if (msg.author.bot) return;
    if ( msg.content.toLowerCase().includes(`<@${client.user.id}>`) || msg.content.toLowerCase().includes(`<@!${client.user.id}>`) ) {
        try {
            if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You need the manage messages permissions for this, wack');
            msg.channel.send(`<@${msg.channel.members.random().id}>`);
        } catch {
            msg.reply('oof, there was an error');
        }
    } else if ( msg.content.toLowerCase().startsWith('some help') ) {
        try {
            msg.channel.send('Help:\nPing someone bot for pinging a random person!\n`some copypasta` for getting the @someone copy pasta');
        } catch(err) {
            msg.reply('oof, there was an error');
        }
    } else if( msg.content.toLowerCase().startsWith('some copypasta') ) {
        try {
           msg.channel.send("https://www.reddit.com/r/copypasta/comments/88li4o/discord_someone/");
        }
         catch(e) {
           msg.reply('oof, there was an error');
        }
    }
});

client.login(config.token);
