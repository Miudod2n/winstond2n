require('dotenv').config();
const Discord = require('discord.js');
//const { config } = require('dotenv');
const client = new Discord.Client();

//config({
//    path: __dirname + "/.env"
//});

client.on('ready', ()=>{
    console.log('I am ready!');
    setTimeout(function(){ // in leftToAttack() milliseconds run this:
        var dayMillseconds = 1000 * 60 * 60 * 24;
        setInterval(function(){ // repeat this every 24 hours
            sendMessage();
        }, dayMillseconds);
        //setInterval(function(){
        //    changestatus();
        //}, 1000*60*15);
    }, leftToAttack())
});

client.on('message',message => {
    if (message.content === '!ping') {
        message.channel.send('pong');
    }
});

client.on('message', message => {
    if (message.content === "!bl"){
        message.channel.send("Banklock warning set.");
        setTimeout(function(){
            message.channel.send(message.author+ ", banklock over.");
        },900000);
    }
});

client.on('message', message => {
    if (message.content === "!as"){
        message.channel.send("Auto-search warning set.");
        setTimeout(function(){
            message.channel.send(message.author+ ", go check your auto-search.");
        },7200 * 1000);
    }
});

client.on('message', message =>{
    if (message.content.startsWith("!reactor")) {
        var resto = message.content.substring(9);
        if (isNaN(parseInt(resto))) {
            message.channel.send("Wrong syntax. type \"!reactor + current HP\"");
        }
        else {
            var dano = parseInt(resto);
            if (dano > 125) {
                message.channel.send("No repairs needed at Reactor.");
            } else {
                var novoint;var safe = 62;
                if (dano%2==0){ 
                    novoint = (126-dano)/2;
                } else { 
                    novoint = ((126-dano)+1)/2; 
                }
                message.channel.send("Reactor needs "+novoint+"AP in repairs, staying at **" + safe +  " AP UNrepaired** level to be safe.");
            }
        }
    }

});

function leftToAttack(){
    var d = new Date();
    var yada = -d + d.setHours(21,20,0,0); //utc attack over
    if (Math.sign(yada)>0){
        return yada;
    } else {
        var yoda = 1000 * 60 * 60 * 24;
        return yoda - yada;
    }
}

function sendMessage(){
    var guild = client.guilds.get('163300463314337793');
        guild.channels.get('695661832240758864').send("The zombie attack is now over. Are you still alive?")    
}

function changestatus(){
    //todo when custom status for bots on discords are available
    //https://github.com/discord/discord-api-docs/issues/1160#issuecomment-546549711
}

//
client.login();//process.env.TOKEN);
