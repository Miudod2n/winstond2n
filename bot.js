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

client.on('message', message =>{
    if (message.content.startsWith("!dict")) {
        var resto = message.content.substring(6);
        var resultado;

        switch (resto){
            case "6FO":case "6fo": 
                resultado = "6FO is an acronym to **6 Feet Over**, a die2nite meta. 6FO was created on Season 7 by Dream and lasted until Season 13 when it dissolved to form new metas. Their notable members list can be found here: https://twinoid.com/g/6-feet-over/members";break;
            case "7sins":case "7Sins": 
                resultado = "7sins is an acronym to **S7v7n Zedly Sins, a die2nite meta. 7sins was created around Season 3 and is currently being managed by Sashimi. Notable players: https://twinoid.com/g/7-zedly-sins-die2nite-meta# chat https://discord.gg/8JuJpqK";break;  
            case "AS": case "as":
                resultado = "AS is an acronym that stands for **A**uto **S**earch. It describes the act of waiting in a zone for the next auto-search. It have variations like \"ASing\" (Auto-searching)";break;
            case "BD":case "bd": 
                resultado = "BD is an acronym to **Benevolent Dictators**, a die2nite meta. BD was created on Season 10 by ValiumCereal and lasted until Season 12. More details: https://twinoid.com/g/benevolent-dictators-meta#";break;   
            case "BT":case"bt":
                resultado = "BT is an acronym to **Breakthrough**, a die2nite ability. BT was awarded to all players on the end of Season 4 as a consolation for the 3 days the game went down (Epoqalypse) killing several towns. This ability consist of a 50% chance of killing one zombie in the zone and taking control back for a few minutes. It can only be used once per town. Citizens with the Armageddon Witness distinction have this skill.";break;
            case "COS":case "cos": 
                resultado = "COS is an acronym to **Coalition of Stares**, a die2nite meta. COS was created around Season 5. More information: https://twinoid.com/g/cos#";break;
            case "DoA":case "doa":case "DOA": 
                resultado = "DoA is an acronym to **Drunkards of the Apocalypse**, a die2nite meta. DoA was created around Season 10 by Ivana. More information: https://twinoid.com/g/d2n-meta-doa#";break;
            case "EC":case "ec":
                resultado = "EC stands for **E**lectric **C**omponent, a rare resource used on several constructions and items. http://d2nwiki.com/wiki/Electronic_component";break;
            case "EE": case "ee":
                resultado = "EE is an acronym that stands for **E**xpert **E**xpeditions. This is the name of a rare distinction earned by exploring"+
                " a ruin that is 18Km or more from town and acquiring an object. EE hunters sometimes swarm random towns in search of a cornered town (a town that spawns off the center of the map, allowing a higher chance of more EE ruins) in between their meta jumps.";break;
            case "e.ruin": case "E.Ruin":
                resultado = "E.Ruin is an acronym to **E**xplorable **R**uin. This is a special sort of ruin that presents a mini-game of dungeon exploration once explored. Every big map town has one E.Ruin (2 on Hardcore towns). There are 3 types of e.ruins and each present a different set of unique items and blueprints. http://d2nwiki.com/wiki/Explorable_Ruins";break;
            case "EWB": case "ewb":
                resultado = "EWB is an acronym for **E**xploding **W**ater **B**omb, a water weapon that can be made out of Water Ration + Plastic Bag and Semtex (plastic bag + duct tape + compact detonator + semtex). http://d2nwiki.com/wiki/Exploding_Water_Bomb";break;
            case "hippies": 
                resultado = "hippies is an acronym to **Happy Hippies**, a die2nite meta. hippies was created by Joanne around Season 6. More information: https://twinoid.com/g/happy-hippies#";break;   
            case "ingsoc":case "INGSOC":case "Ingsoc": 
                resultado = "INGSOC is the name of a die2nite meta created around season 4 by fward. More information: https://twinoid.com/g/ingsoc#";break;
            case "LS":case "ls":
                resultado = "LS is an acronym to **Lost Souls**, a die2nite meta. LS was created on Season 4. More information: https://twinoid.com/g/lostsouls#";break;   
            case "MMJ": case "mmj":
                resultado = "MMJ is an acronym that stands for **M**ega **M**eta **J**ump. MMJ is an event where several players schedule a day to "+
                "jump in a random town at the same time. This is usually a server-wide event and quite often results in 5 or more towns filled with "+
                "random players from several meta groups as wel as lone wolf players. MMJs were first used to bypass the meta-cap, a game rule that "+
                "blocked several coalitions of joining the same town, thus disallowing groups of skilled players to play together in the same town."
                "Once the meta-cap was lifted, the players kept doing MMJs every new season as a celebration.";break;
            case "N&C":case "n&c":
                resultado = "N&C is an acronym to **Nick & Company**, a die2nite meta. N&C was created on Season 5 by VertigoProcess. More information: https://twinoid.com/g/n-c-meta/#";break;   
            case "NHB":case "nhb":
                resultado = "NHB stands for **N**o **H**oles **B**arred, a water construction that provides 150 rations. http://d2nwiki.com/wiki/No_Holes_Barred";break;
            case "OI":case "INN":case "inn": 
                resultado = resto+" is one of the acronyms to **Oozing Inn**, a die2nite meta. OI was created on Season 1 by Bram. More information: https://twinoid.com/g/oozing-inn#";break;
            case "P9C":case "p9c":
                resultado = "P9C is an acronym to **Plan 9 Consortium**, a die2nite meta. P9C was proved to be a meta of multiple accounts and then disbanded.";break;
            case "RM":case "rm":
                resultado = "RM is an acronym to **RandoMeta**, a die2nite meta. RM was created by ImbuedGreen on Season 7. Most of its members played as the Shadowclan or Clucky Bastards meta. More information: https://twinoid.com/g/randometa#";break;
            case "RFM":case "rfm":
                resultado = "RFM stands for **Royal Flying Mowers**, a die2nite meta. RFM was created on Season 3. More information: https://twinoid.com/g/rfm-royal-flying-mowers#";break;
            case "RWF":case "rwf": 
                resultado = "RWF stands for **Running With Fridges**, a die2nite meta. RWF was created by greveur on Season 4";break;
            case "SC":case "sc": 
                resultado = "SC stands for **Shadowclan**, a die2nite meta. Shadowclan was created on Season 5. It had other names like Clucky Bastards and RandoMeta";break; 
            case "SotA": 
                resultado = "SotA stands for **Survivors of the Atom**, a die2nite meta who seeks Reactor distinctions. SotA was created on Season 13. More information: https://twinoid.com/g/sota-survivors-of-the-atom#";break;  
            case "SS":case "ss": 
                resultado = "SS stands for **Suicide Squad**, a die2nite meta. SS was created by pkeod on Season 12. More information: https://twinoid.com/g/suicide-squad#";break;
            case "ST":case "st":
                resultado = "ST stands for **S**earch **T**ower, a upgradable construction that reveal which direction was struck with replenishing winds. http://d2nwiki.com/wiki/Searchtower";break;
            case "SVV":case "svv": 
                resultado = "SVV stands for **The Survivors**, a die2nite meta also known as Wandering Souls. SVV was created by Forgotten on Season 12. More information: https://twinoid.com/g/svv#";break;
            case "TZ":case "tz": 
                resultado = "TZ stands for **Team Zero**, a die2nite meta. TZ was created by WalkingCrow on Season 6. More information: https://twinoid.com/g/team-zero#";break;   
            case "TBS":case "tbs": 
                resultado = "TBS stands for **The Bloodied Sleuths**, a die2nite meta. TBS was created on Season 6";break;
            case "UZC":case "uzc": 
                resultado = "UZC stands for **Undead Zombie Chickens**, a die2nite meta. UZC was created by Zombieman on Season 11. More information: https://twinoid.com/g/the-chicken-army-aka-u-z-c-meta#";break;   
            case "WCH":case "wch": 
                resultado = "WCH stands for **Working Class Heroes**, a die2nite meta that had mostly Residents in its ranks. WCH was created on Season 5 by Miudo. More information: https://twinoid.com/g/working-class-heroes-meta#";break;   
            case "WLB":case "wlb": 
                resultado = "WLB is an acronym to **W**orn **L**eather **B**ag, a container item that holds Blueprints (BPs). http://d2nwiki.com/wiki/Worn_Leather_Bag";break;   
            case "WF":case "wf":case"wonfai":case"Wonfai":
                resultado = resto+" stands for **Wonderful Failure**, a die2nite meta. WF was created by Sense on Season 1. More information: https://twinoid.com/g/wonderful-failure#";break;
            case "ZOA":case "zoa": 
                resultado = "ZOA stands for **Zombies Outside Alliance**, a die2nite meta. ZOA was created by Embacie (in memoriam) on Season 6. More information: https://twinoid.com/g/zoa#";break;   
            case "zoo":case "zombie zoo": 
                resultado = "A zoo or **Zombie Zoo** is a game practice that involves clearing the zombies from the map except from one" +
                + " corner and maintaining them there. The benefits of a zombie zoo are the freedom of movement in the World Beyond and" +
                + " a better control of the map. To make a zombie zoo it is required a few days of scouting and camping and killing zombies" +
                + " from everywhere there shouldn't be zombies, in other words, from the zombie zoo corner. After the zoo is built some killing" +
                + " maintenance is necessary every other day to contain the spread. This is often called \"trim the zoo\". A zoo can be made" +
                + " on any corner the town so desires. It also depends on the placement of ruins and zombie patchs, as well as distance and resources" +
                + " available (both human and items). Sometimes towns that can't make a corner zoo try a \"half zoo\" which is a zoo occupying"+
                + " half of the map.\n Creating a zombie zoo might cause a global zombie respawn if the amount of zombies killed in its making" +
                + " surpass a certain threshold that depends on the map size.";break;   

            default: resultado = "I don't know what \""+resto+" is.";


        }

        message.channel.send(resultado);



    }});

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

client.on('message', message => {
    if (message.content === "!coin"){
        var number = randomIntFromInterval(0,1);
        if (number===0){
            message.channel.send("Heads.");
        } else {
            message.channel.send("Tails.");
        }
    }
});

client.on('message', message => {
    if (message.content.startsWith("!dice")){
        var resto = message.content.substring(6);
        if (isNaN(parseInt(resto))){
            message.channel.send("Wrong syntax. type \"!dice + space + a number\"");
        }
        else {
            var number = parseInt(resto);
            var rdnnumber = randomIntFromInterval(1,resto);
            message.channel.send(rdnnumber);
        }
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
    console.log(d);
    var yada = -d + d.setHours(21,20,0,0); //utc attack over
    if (Math.sign(yada)>0){
        return yada;
    } else {
        var yoda = 1000 * 60 * 60 * 24;
        return yoda - yada;
    }
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function sendMessage(){
    var generald2n = client.guilds.get('598136432707502130');
        generald2n.channels.get('598136432707502132').send("The zombie attack is now over. Are you still alive?");

    var wch = client.guilds.get('163300463314337793');
        wch.channels.get('695661832240758864').send("The zombie attack is now over. Are you still alive?")    
}                           
    
function changestatus(){
    //todo when custom status for bots on discords are available
    //https://github.com/discord/discord-api-docs/issues/1160#issuecomment-546549711
}

//
client.login(process.env.TOKEN);
