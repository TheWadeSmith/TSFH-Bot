const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = 'tsfh!';

const fs = require('fs');
const ytdl = require('ytdl-core');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Two Steps From Hell Radio is now online!');
});

client.on('message', async message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
    if (message.content === prefix + 'join') {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        connection.play(ytdl('https://www.youtube.com/watch?v=AfMV4ZC4AnA', { quality: 'highestaudio' }));
      } else {
        message.reply('You need to join a voice channel first!');
      }
    }
  });



client.login(process.env.token);
