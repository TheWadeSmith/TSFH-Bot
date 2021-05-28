module.exports = {
    name: 'summon',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send('Now playing!');
    }
}