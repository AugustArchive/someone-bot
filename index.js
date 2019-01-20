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
    } else if ( msg.content.toLowerCase().startsWith('some help') ) {
        try {
            msg.channel.send('Help:\nPing someone bot for pinging a random person!\n`some copypasta` for getting the @someone copy pasta');
        } catch(err) {
            msg.reply('oof, there was an error');
        }
    } else if( msg.content.toLowerCase().startsWith('some copypasta') ) {
        try {
           msg.channel.send("@someone BRAINS BRAINS :eyes: BRAINS BRAINS BRAINS :eyes: BRAINS BRAINS BRAINS @someone BRAIN :eyes: BRAIN B-B-B-B-B-B-B-B-R-ʀ-ʳ-ʳ-ʳ-ʳ-ʳᵃᶦⁿ braiiiiiiiin @someone BRAINS YOU :point_up: CAN NOW :ok_hand: :ok_hand: :ok_hand: AT :ping_pong: SOMEONE RANDOM WITH AT :ping_pong: :ping_pong: SOMEONE SOMEBODY AT RANDOM RRRRRRRAAAAAANDOM DOM DOM D₋Dₒₘ ᵂᵉˡᶜᵒᵐᵉ ᵗᵒ ᵗʰᵉ ᴹᵃʳᵏᵉᵗᶦⁿᵍ ⱽᶦᵈᵉᵒ ᴹᵃʳᵏᵉᵗᶦⁿᵍ ᴹᵃʳᵏᵉᵗᶦⁿᵍ GOOD SOMEONE :eyes: ᴹᵃʳᵏᵉᵗᶦⁿᵍ GOOOO:o:OOOOOD ʷᵉ ᵈᵒ ᵐᵃʳᵏᵉᵗᶦⁿᵍ SOMEONE :eyes: THATS SOME GOOO:eyes:OOOD ˢᵒᵐᵉᵒⁿᵉ RIGHT :point_right: THERE ᵣᵢgₕₜ:point_right:ₜₕₑᵣₑ IF I DO SAY SO MY :heart: SOMEONE :eyes: RIGHT THERE :point_left: RIGHT THERE :point_up: RIGHT THERE :point_down: RIGH RIGH ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ ᴴᴹᴹᴹᴹᴹᴹᴹᴹᴹᴹᴹᴹᴹᴹᴹᴹᴹᴹᴹ I'M SOME:o:NE, YOU CAN NOW AT SOMEONE TO :game_die: RANDOMLY TO RANDOMLY SELECT SOMEBODY ₐₜ ᵣₐₙdₒₘ. TYPE AT SOMEONE. DO IT DO IT DO IT DDO IT :muscle: D-DO IT TY-TY-TY-TY-TY-TYPE :b: dₒᵢₜdₒᵢₜdₒᵢₜdₒᵢₜdₒᵢₜdₒᵢₜdₒᵢₜdₒᵢₜdₒᵢₜdₒᵢₜdₒᵢₜdₒᵢₜdₒᵢₜdₒᵢₜdₒᵢₜdₒᵢₜdₒᵢₜdₒᵢₜdₒᵢₜdₒᵢₜ DISCorD nOW has aT sOmeOne huuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuh do it ʰᵉᴸᵖ ᴵ'ᵛᴱ ᶠᴬˡˡᵉᴺ ᵃⁿᴰ ᶦ ᶜᴬᴺ'ᵀ ᵍᵉᵗ ᵘᵖ ᴵ ⁿᴱᵉᵈ ᵃᵗ ˢᵒᵐᴱᵒᴺᵉ :wheelchair: ʜᴇʟᴘ ᴵ'ᵛᵉ ᶠᵃˡˡᵉⁿ ᵃⁿᵈ ᴵ ᶜᵃⁿ'ᵗ ᵍᵉᵗ ᵘᵖ ᴵ ⁿᵉᵉᵈ ᵃᵗ ˢᵒᵐᵉᵒⁿᵉ (in chorus) ʰᵉˡᵖ ᵢ'ᵥₑ fₐₗₗₑₙ ₐₙd ᵢ cₐₙ'ₜ gₑₜ ᵤₚ ᵢ ₙₑₑd ₐₜ ₛₒₘₑₒₙₑ ₕₑₗₚ ᴵ'ᵛᵉ ᶠᵃˡˡᵉⁿ ᵃⁿᵈ ᴵ ᶜᵃⁿ'ᵗ ᵍᵉᵗ ᵘᵖ ᴵ ⁿᵉᵉᵈ ᵃᵗ ˢᵒᵐᵉᵒⁿᵉ ʰᵉˡᵖ ᵢ'ᵥₑ fₐₗₗₑₙ ₐₙd ᵢ cₐₙ'ₜ gₑₜ ᵤₚ ᵢ ₙₑₑd ₐₜ ₛₒₘₑₒₙₑ ₕₑₗₚ ᴵ'ᵛᵉ ᶠᵃˡˡᵉⁿ (solo) ᴬᴺᵈ ᵢ Cₐₙ'ₜ gₑₜ ᵤₚ ᵢ ɴᴇᴇᴅ ᵃᵗ ˢᵒᵐᵉᵒoₒoᵒoₒoᵒooₒoᵒᵒᵒᵒᵒᵒᵒOOOOOOOO");
        } catch(e) {
           msg.reply('oof, there was an error');
        }
    }
});

client.login(config.token);
