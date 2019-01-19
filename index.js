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

client.on('ready', () => {
    console.log('Now I am ready for some good, good, @SoMeOnE');
    client.user.setActivity('@someone for some good, good, SOMEONE');
});

client.on('message', msg => {
    if (msg.author.bot) return;
    if ( msg.content.toLowerCase().contains(`<@${client.user.id}>`) ) {
        try {
            if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You need the manage messages permissions for this, wack');
            msg.channel.send(`<@${msg.guild.members.random().id}>`);
        } catch {
            msg.reply('oof, there was an error');
        }
    }
});

client.login(config.token);
