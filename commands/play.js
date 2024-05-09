/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');

const queueNames = [];

async function play(client, interaction) {
    try {
        const query = interaction.options.getString('name'); 

        const player = client.riffy.createConnection({
            guildId: interaction.guildId,
            voiceChannel: interaction.member.voice.channelId,
            textChannel: interaction.channelId,
            deaf: true
        });

     
        await interaction.deferReply();

   
        const resolve = await client.riffy.resolve({ query: query, requester: interaction.user });
        const { loadType, tracks, playlistInfo } = resolve;

        if (loadType === 'playlist') {
            for (const track of resolve.tracks) {
                track.info.requester = interaction.user;
                player.queue.add(track);
                queueNames.push(track.info.title); 
            }

            if (!player.playing && !player.paused) player.play();

        } else if (loadType === 'search' || loadType === 'track') {
            const track = tracks.shift();
            track.info.requester = interaction.user;

            player.queue.add(track);
            queueNames.push(track.info.title);

            if (!player.playing && !player.paused) player.play();
        } else {
            const errorEmbed = new EmbedBuilder()
                .setColor('#ff0000')
                .setTitle('Error')
                .setDescription('There are no results found.');

        
            await interaction.editReply({ embeds: [errorEmbed] });
            return;
        }

       
        await new Promise(resolve => setTimeout(resolve, 500));
        
     
const { EmbedBuilder } = require("discord.js");


const embeds = [
  
    new EmbedBuilder()
        .setColor('#7EC8E3')
        .setAuthor({
            name: 'Request Update!',
            iconURL: 'https://cdn.discordapp.com/attachments/1225768419316465698/1238096026728927292/hah_13.jpg?ex=663e0a47&is=663cb8c7&hm=83f6ca32ec8a94ee71be7647e983425da70afbfe2ae49f2d87d258ddffbd84e7&', 
            url: 'https://discord.gg/pXyByNZYrj'
        })
        .setDescription('➡️ **Your request has been successfully processed.**\n➡️** Please use the buttons to control the queue**'),

 
    new EmbedBuilder()
    .setColor('#7EC8E3')
    .setAuthor({
        name: 'Request Update!',
        iconURL: 'https://cdn.discordapp.com/attachments/1225768419316465698/1238096026728927292/hah_13.jpg?ex=663e0a47&is=663cb8c7&hm=83f6ca32ec8a94ee71be7647e983425da70afbfe2ae49f2d87d258ddffbd84e7&', 
        url: 'https://discord.gg/pXyByNZYrj'
    })
    .setDescription('➡️ **Your request has been successfully processed.**\n➡️** Please use the buttons to control the queue**'),

  
    new EmbedBuilder()
    .setColor('#FF0000')
    .setAuthor({
        name: 'Request Update!',
        iconURL: 'https://cdn.discordapp.com/attachments/1225768419316465698/1238096026728927292/hah_13.jpg?ex=663e0a47&is=663cb8c7&hm=83f6ca32ec8a94ee71be7647e983425da70afbfe2ae49f2d87d258ddffbd84e7&', 
        url: 'https://discord.gg/pXyByNZYrj'
    })
    .setDescription('🧊 **Your request has been successfully processed.**\n🧊** Please use the buttons to control the queue**')
];


const randomIndex = Math.floor(Math.random() * embeds.length);


await interaction.followUp({ embeds: [embeds[randomIndex]] });

    } catch (error) {
        console.error('Error processing play command:', error);
        const errorEmbed = new EmbedBuilder()
            .setColor('#ff0000')
            .setTitle('Error')
            .setDescription('An error occurred while processing your request.');

     
        await interaction.editReply({ embeds: [errorEmbed] });
    }
}

module.exports = {
    name: "play",
    description: "Add options too",
    permissions: "0x0000000000000800",
    options: [{
        name: 'name',
        description: 'enter song name / link or playlist',
        type: ApplicationCommandOptionType.String,
        required: true
    }],
    run: play,
    queueNames: queueNames
};

/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
