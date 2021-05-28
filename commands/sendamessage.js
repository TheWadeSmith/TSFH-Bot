module.exports = {
    name: 'sendamessage',
    description: "this is a ping command!",
    execute(message, args){
        message.channel.send('message!');
    }
}