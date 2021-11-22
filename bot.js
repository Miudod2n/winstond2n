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
        sendMessage();
        setInterval(function(){ // repeat this every 24 hours
            sendMessage();
        }, dayMillseconds);
        //setInterval(function(){
        //    changestatus();
        //}, 1000*60*15);
    }, leftToAttack());
    setTimeout(function(){ // in leftToAttack() milliseconds run this:
        var dayMillsecondstwo = 1000 * 60 * 60 * 24;
        sendMessagetwo();
        setInterval(function(){ // repeat this every 24 hours
            sendMessage();
        }, dayMillsecondstwo);
        //setInterval(function(){
        //    changestatus(); 
        //}, 1000*60*15);
    }, leftToAttacktwo());
    
}); 

client.on('message',message => {
    if (message.content === '!raffle') { 
        var usersCount = client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)
        console.log ("KKK "+usersCount);
        var number = randomIntFromInterval(0,usersCount);
        console.log ("KKK2 "+number);
        var list = client.guilds.cache.get("598136432707502130"); 
        console.log ("KKK3 "+list);
       
        var amember = list.members.fetch().then(members => console.log(members));
        message.channel.send('Testing yada '+amember[number].user.username);
    }
});

client.on('message',message => {
    if (message.content === '!ping') {
        message.channel.send('pong');
    }
});

client.on('message',message => {
    if (message.content === '!do you Winston?') {
        message.channel.send('I hate mr. Noobowski. :(');
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
            case "9ap diamond": case "9AP diamond": case "diamond":
                resultado = "**9 AP Diamond** is an organized town strategy where players seek to go out and scavenge at 9AP away from town. The result of this is a shape of a diamond in the map. This is done for a number of reasons. Since food and water are the only boosters available on day 1, one player can go up to 9AP away from town counting 6AP base + 6/7AP food + water, round trip. It is always better to deplete zones further from town first as the zones closer to town will get depleted by players returning from their scavenge zones. The diamond also gives some intel on the disposition of nearby ruins the town has before Watchtower kicks in. On organized towns it is customary to select a 9AP diamond spot before the town even start. Some cornered towns might not have a complete diamond as they can be 6AP away from the edge of the map. Here is a day 1 example of a 9AP diamond. https://github.com/Miudod2n/winstond2n/raw/master/images/9apd.png";break;
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
                resultado = "EE is an acronym that stands for **E**xpert **E**xpeditions. This is the name of a rare distinction earned by exploring a ruin that is 18Km or more from town and acquiring an object. EE hunters sometimes swarm random towns in search of a cornered town (a town that spawns off the center of the map, allowing a higher chance of more EE ruins) in between their meta jumps.";break;
            case "e.ruin": case "E.Ruin":
                resultado = "E.Ruin is an acronym to **E**xplorable **R**uin. This is a special sort of ruin that presents a mini-game of dungeon exploration once explored. Every big map town has one E.Ruin (2 on Hardcore towns). There are 3 types of e.ruins and each present a different set of unique items and blueprints. http://d2nwiki.com/wiki/Explorable_Ruins";break;
            case "EWB": case "ewb":
                resultado = "EWB is an acronym for **E**xploding **W**ater **B**omb, a water weapon that can be made out of Water Ration + Plastic Bag and Semtex (plastic bag + duct tape + compact detonator + semtex). http://d2nwiki.com/wiki/Exploding_Water_Bomb";break;
            case "hippies": case "Hippies":
                resultado = "hippies is an acronym to **Happy Hippies**, a die2nite meta that did social jumps (whatever that means). hippies was created by Joanne and Babooshka76 around Season 6. More information: https://twinoid.com/g/happy-hippies#";break;   
            case "ingsoc":case "INGSOC":case "Ingsoc": 
                resultado = "INGSOC is the name of a die2nite meta created around season 4 by fward. More information: https://twinoid.com/g/ingsoc#";break;
            case "LS":case "ls":
                resultado = "LS is an acronym to **Lost Souls**, a die2nite meta. LS was created on Season 4. More information: https://twinoid.com/g/lostsouls#";break;   
            case "LMS":case "Lms":case "lms":
                resultado = "LMS is an acronym to **L**ast **M**an **S**tanding, a distinction earned by the last player to die inside town. To be elegible to LMS, a player needs to be inside town during the last attack that will kill everyone inside town. LMS is random, so having more personal defense won't mather. Hardcore Towns award 2 LMS disctinctions: a regular LMS distinction and a Hardcore LMS distinction. Earning LMS would also earn some Hero days, but since May 2020 Hero days are now free. http://d2nwiki.com/wiki/Last_Man_Standing";break;
            case "MMJ": case "mmj":
                resultado = "MMJ is an acronym that stands for **M**ega **M**eta **J**ump. MMJ is an event where several players schedule a day to jump in a random town at the same time. This is usually a server-wide event and quite often results in 5 or more towns filled with random players from several meta groups as wel as lone wolf players. MMJs were first used to bypass the meta-cap, a game rule that blocked several coalitions of joining the same town, thus disallowing groups of skilled players to play together in the same town. Once the meta-cap was lifted, the players kept doing MMJs every new season as a celebration.";break;
            case "MoS": case "mos": case "MOS":
                resultado = "MoS is an acronym that stands for **M**inistry **o**f **S**lavery, a die2nite construction unlocked via Very Rare Blueprints (One of the preset VRs from A. Bunker e.ruins). MoS allows shunned players to use AP on constructions and the AP used this way contributes with a multiplier of 1.5 . https://github.com/Miudod2n/winstond2n/raw/master/images/mos.png Metas quite often make use of this construction by deliberating shunning some players that constitute the builder force of the town. This, altogether with scrapping (since shunned can't update external maps) and removing the shun later using Altar is a common strategy for when this blueprint is unlocked early http://d2nwiki.com/wiki/Ministry_of_Slavery.";break;
            case "N&C":case "n&c":
                resultado = "N&C is an acronym to **Nick & Company**, a die2nite meta. N&C was created on Season 5 by VertigoProcess. More information: https://twinoid.com/g/n-c-meta#";break;   
            case "NHB":case "nhb":
                resultado = "NHB stands for **N**o **H**oles **B**arred, a water construction that provides 150 rations. http://d2nwiki.com/wiki/No_Holes_Barred";break;
            case "OI":case "INN":case "inn": 
                resultado = resto+" is one of the acronyms to **Oozing Inn**, a die2nite meta. OI was created on Season 1 by Bram. More information: https://twinoid.com/g/oozing-inn#";break;
            case "IBG":case "ibg":case "Ibg": 
                resultado = resto+" is the acronym for **I**ndian **B**urial **G**round, a type of ruin. It spawns 3-6km from town. It is the only ruin that drops Meaty Bones. It has a negative 5% (1 upgrade) penalty for camping as topology. http://d2nwiki.com/wiki/Indian_Burial_Ground";break;
            case "P9C":case "p9c":
                resultado = "P9C is an acronym to **Plan 9 Consortium**, a die2nite meta. P9C was proved to be a meta of multiple accounts and then disbanded.";break;
            case "RM":case "rm":
                resultado = "RM is an acronym to **RandoMeta**, a die2nite meta. RM was created by ImbuedGreen on Season 7. Most of its members played as the Shadowclan or Clucky Bastards meta. More information: https://twinoid.com/g/randometa#";break;
            case "RFM":case "rfm":
                resultado = "RFM stands for **Royal Flying Mowers**, a die2nite meta. RFM was created on Season 3. More information: https://twinoid.com/g/rfm-royal-flying-mowers#";break;
            case "RWF":case "rwf": 
                resultado = "RWF stands for **Running With Fridges**, a die2nite meta. RWF was created by greveur on Season 4";break;
                
                
            case "unnamed":case "Unnamed": 
                resultado = "**Unnamed** was a die2nite meta. More information: https://twinoid.com/g/unnamed-meta#";break;
                
            case "hive":case "Hive": 
                resultado = "**Hive** was a die2nite meta. More information: https://twinoid.com/g/hive#";break;
                
                
                
                
                
                
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
            case "zoo":case "zombie zoo": case "Zoo":
                resultado = "A zoo or **Zombie Zoo** is a game practice that involves clearing the zombies from the map except from one corner and maintaining them there. The benefits of a zombie zoo are the freedom of movement in the World Beyond and a better control of the map. To make a zombie zoo it is required a few days of scouting and camping and killing zombies from everywhere there shouldn't be zombies, in other words, from the zombie zoo corner. After the zoo is built some killing maintenance is necessary every other day to contain the spread. This is often called \"trim the zoo\". A zoo can be made on any corner the town so desires. It also depends on the placement of ruins and zombie patchs, as well as distance and resources available (both human and items). Sometimes towns that can't make a corner zoo try a \"half zoo\" which is a zoo occupying half of the map.\n Creating a zombie zoo might cause a global zombie respawn if the amount of zombies killed in its making surpass a certain threshold that depends on the map size.";break;   
//**
            case "DV":case "dv": 
                resultado = "DV is an acronym to **Die Verdammten**, the german version of the game. DV was the first language version to be released from the original french Hordes in June 2010. It is currently stuck at Season 11. It has 3 Distant towns, 1 Hardcore, and 1 Small Town open at a time. http://www.dieverdammten.de/";break;
            case "Zombinoia":case "zombinoia":case "zbn":case "ZBN":
                resultado = "**Zombinoia** is the spanish version of the game. ZBN was the last language version to be released (March 2012). It is currently stuck at Season 10. There are 2 Distant Regions towns, 1 Hardcore town, and 1 Small Map town open at a time. http://www.zombinoia.com/";break;
            case "Hordes":case "hordes":
                resultado = "**Hordes** is the original version of the game in french. Hordes was created in June 2008. It is currently on Season 14. There are 4 Distant Regions towns, 1 Hardcore towns, and 2 Small Map Towns open at a time. http://www.hordes.fr/";break;
            case "cata": case "Cata":
                resultado = "Cata is a short version for **Catapult**, a construction. The Catapult is a special construction unlocked via Common Blueprints. It is capable of throwing some objects at the World Beyond. The Catapult Operator (\"Cata Operator\") is selected at random base on the activity level of every citizen. It is possible to assign a catapult operator by having one person log after the attack and achieve 5 activity stars by doing the following: ```log in \nopen gates\nwalk outside on some zones searching and back inside\ntake water from Well\npost on forum\nwork in workshop\nvote for an upgrade\nand finally finish catapult and assign an operator``` http://d2nwiki.com/wiki/Catapult";break;
            case "zed": case "zom": case "ZED": case "Zed":
                resultado = resto+" in die2nite is a cute acronym for **Zombies**.";break;
            case "OO": case "oo":
                resultado = "OO is an acronym to **O**val **O**ffice, an external website that provides tools for a better die2nite experience. OO was created by CountCount and is being hosted by spacekdt. It is primarily used to spy on other active towns and to track down attack numbers and some other data. http://ovaloffice.spacekadt.com/";break;
            case "FDTD": case "fdtd":
                resultado = "FDTD is an acronym to **F**rom **D**usk **T**ill **D**awn, a die2nite external tool that provides map functionalities. One can use it to update the items, zombies and other information of their town and it canb be visible to other townmates. FDTD was created and is being hosted by BerZerg. http://d2n.duskdawn.net/";break;
            case "Mapviewer": case "mapviewer": case "MV": case"mv":
                resultado = "**Mapviwer** was an external die2nite tool that provided map functionalities as well as other tools for a better die2nite experience. Mapviewer was created and hosted by Rulesy. Its hosting was no longer renewed so the website is down for the moment.";break;
            case "attrition": case "despair": case "Attrition": case "Despair": case "zd": case "ZD":
                resultado = resto+ " is a short way to say **Zombie Despair**. ZD is an effect that happens in a zone when zombies are killed. Depending on the number of zombies killed in the zone it will produce a residual killing effect that is called Zombie Despair or Zombie Attrition in the next days. http://d2nwiki.com/wiki/Zombie_Despair";break;
            case "DR": case "dr":
                resultado = "A "+resto+" town is a **D**istant **R**egion town. In other words it is a town with a big map. http://d2nwiki.com/wiki/Town#Distant_Towns";break;
            case "HC": case "hc":
                resultado = "A "+resto+" town is a **H**ard**c**ore town. It is a big map town with extra difficulties. http://d2nwiki.com/wiki/Town#Hardcore_Towns";break;
            case "SM": case "sm":
                resultado = "A "+resto+" town is a **S**mall **M**ap town. Originally, the game was played on such towns, but on Season 2, the bigger map towns were introduced. Nowadays, the SM towns are the home for the newcomers and players with under 100 Soul Points. Heroes can also join SM towns. http://d2nwiki.com/wiki/Town#Small_Towns";break;
            case "BED": case "bed":
                resultado = "BED is the acronym for **B**roken **E**lectronic **D**evice, a die2nite resource item that needs to be workshopped into other useful items. https://github.com/Miudod2n/winstond2n/raw/master/images/bed.png";break;
            case "wapi": case "WAPI": case "WaPi":
                resultado = resto+" is an acronym to **W**ater **P**istol, a die2nite water weapon, and can reffer both a loaded or empty Water Pistol";break;
            case "NAB": case "nab": case "n&b": case "N&B": case "neb": case "NEB":
                resultado = resto + " is an acronym to Handful of **N**uts **&** **B**olts, a very important resource item that is present on both constructions and item assemblage. https://github.com/Miudod2n/winstond2n/raw/master/images/neb.png";break;
            case "list":
                resultado = "Meta acronyms```6FO, 7sins, BD, COS, DoA, hippies, hive, INGSOC, LS, N&C, OI, P9C, RM, RFM, RWF, SS, SC, SotA, SVV, TZ, unnamed, TBS, UZC, WCH, WF, ZOA```Item acronyms```EC,  EWB,  BED, N&B, wapi```Concepts```9ap diamond, AS, BT, EE, MMJ, NHB, ST, zoo, DV, Zombinoia, Hordes, cata, zed, OO, FDTD, mapviewer, attrition, DR, HC, SM```";break;
              
            default: resultado = "I don't know what \""+resto+"\" is. For a list of things I might know about use the command \"!dict list\"";


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
    if (message.content === "!hl3"){
        message.channel.send("HL3 roll alert set.");
        setTimeout(function(){
            message.channel.send(message.author+ ", go roll at HL3 game thread.");
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
    var yada = -d + d.setHours(22,20,5,0); //utc attack over
    if (Math.sign(yada)>0){
        console.log (yada);
        return yada;
    } else {
        var yoda = 1000 * 60 * 60 * 24;
        console.log(yoda + " "+ yada);
        return yoda - yada;
    }
}

function leftToAttacktwo(){
    var d = new Date();
    console.log(d);
    var yada = -d + d.setHours(23,20,5,0); //utc attack over
    if (Math.sign(yada)>0){
        console.log (yada);
        return yada;
    } else {
        var yoda = 1000 * 60 * 60 * 24;
        console.log(yoda + " "+ yada);
        return yoda - yada;
    }
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function sendMessage(){
    var generald2n = client.guilds.get('598136432707502130');
        generald2n.channels.get('598136432707502132').send("The zombie attack is now over. Are you still alive?");

   // var wch = client.guilds.get('163300463314337793');
   //     wch.channels.get('695661832240758864').send("The zombie attack is now over. Are you still alive?");
    
   // var oi = client.guilds.get('663021630045290530');
   //  oi.channels.get('663021630565515306').send("The zombie attack is now over. Are you still alive?");
}                           
    
function sendMessagetwo(){
    var generald2n = client.guilds.get('598136432707502130');
        generald2n.channels.get('598136432707502132').send("The other zombie attack is now over (MH). Are you still alive again?");

    //var wch = client.guilds.get('163300463314337793');
    //    wch.channels.get('695661832240758864').send("The zombie attack is now over (MH). Are you still alive again?");
    
    //var oi = client.guilds.get('663021630045290530');
    // oi.channels.get('663021630565515306').send("The zombie attack is now over (MH). Are you still alive again?");
}                           
    


function changestatus(){
    //todo when custom status for bots on discords are available
    //https://github.com/discord/discord-api-docs/issues/1160#issuecomment-546549711
}

//
client.login(process.env.TOKEN);
