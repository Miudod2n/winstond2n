require('dotenv').config();     
const Discord = require('discord.js');
const client = new Discord.Client();
let english = require('./translate/array_english.js');
let englishb = english.array;
let german = require('./translate/array_german.js');
let germanb = german.array;
let french = require('./translate/array_french.js');
let frenchb = french.array;
let spanish = require('./translate/array_spanish.js');
let spanishb = spanish.array;

client.once('ready', ()=>{
    console.log('I am ready!');
	var today = new Date();
	console.log("today is "+today.getDay());
	//	var memenumber = 0;
    	setTimeout(function(){ // in leftToAttack() milliseconds run this:
	        var dayMillseconds = 1000 * 60 * 60 * 24;
	        sendMessage();
	        setInterval(function(){ // repeat this every 24 hours
	            sendMessage();
	        }, dayMillseconds);
	        
	   	}, leftToAttack());
		///memeattack
    		//setTimeout(function(){
		//	sendMeme(memenumber);
		//	setInterval (function(){
		//		memenumber+=1;
	//			sendMeme(memenumber);
//			},3600000);
	//	},  3600000);
	setTimeout(function(){
		var dayMillseconds = 1000 * 60 * 60 * 24;
		sendMessageGuitar();
	        setInterval(function(){
                    sendMessageGuitar();
                }, dayMillseconds);
		}, leftToGuitar());
	burp()
}); 

client.on('message', message =>{
    if (message.content.startsWith("!translate")) {
        var resto = message.content.substring(11);
        console.log(englishb.length+"|"+spanishb.length+"|"+frenchb.length);
        var indeex =2000; 
        
        if (englishb.includes(resto)){indeex= englishb.indexOf(resto);}
        else if (germanb.includes(resto)) {indeex= germanb.indexOf(resto);}
        else if (spanishb.includes(resto)) {indeex= spanishb.indexOf(resto);}
        else if (frenchb.includes(resto)) {indeex= frenchb.indexOf(resto);}
        
        if (indeex>1999){
            var indexb1 =findBestMatch(resto, englishb) ; 
            var indexb2=findBestMatch(resto, germanb) ;
            var indexb3=findBestMatch(resto, spanishb) ;
            var indexb4=findBestMatch(resto, frenchb) ;
            message.channel.send("I can't translate that. Check for typos and try capitalizing the words.\n"+"Did you mean any of these? "+
                                "\""+englishb[indexb1]+"\", "+
                                "\""+germanb[indexb2]+"\", "+
                                "\""+spanishb[indexb3]+"\", "+
                                "\""+frenchb[indexb4]+"\""
                                );
        } else {
            message.channel.send(":flag_gb: "+englishb[indeex]+"\n"+ ":flag_fr: "+frenchb[indeex]+"\n"+":flag_es: "+spanishb[indeex]+"\n"+":flag_de: "+ germanb[indeex]);
        }

    }}
         );

client.on('message',message => {
    if (message.content === '!pilley') { 
        message.channel.send("Pill for Billey alert turned on");
        setTimeout(function(){ // in leftToAttack() milliseconds run this:
            var dayMillsecondsguitar = 1000 * 60 * 60 * 24;
            sendMessageGuitar();
            setInterval(function(){ // repeat this every 24 hours
                sendMessageGuitar();
            },  dayMillsecondsguitar);
        }, leftToGuitar());
    }
});

client.on('message',message => {
    if (message.content === '!raffle') { 
        //var user = message.guild.members.random();
        var user = message.guild.members.random().user;
        //console.log(randomUser);
        message.channel.send(`${user}`);
    }
});

client.on('message',message => {
    if (message.content === '!ping') {
        message.channel.send('pong');
    }
});

client.on('message',message => { 
    if (message.content.includes ('sneed')) {
	message.channel.send('heh, sneeeed');
    }
});

client.on('message',message => { 
    if (message.content.includes ('purple')) {
	message.react('💀');
    }
});

client.on('message',message => {
    if (message.content === '!hordianspiritqc') {
        message.channel.send('https://cdn.discordapp.com/attachments/663021630565515306/1296058719062462505/Screenshot_20241016-123403.jpg?ex=6710e83e&is=670f96be&hm=2d940ef258bca7c1a600b8a8c4a4a0f3799e521e08f6a4391621f206aeb82e99&');
    }
});

client.on('message',message => { //guiz
    if (message.content.includes ('?')) {
        var guiz = randomIntFromInterval(30,50);
	    if (guiz === 42){
	    message.channel.send('https://i.imgur.com/Qyt7bXw.jpeg');}
    }
});

client.on('message', message =>{
    if (message.content.startsWith("!dict")) {
        var resto = message.content.substring(6);
        var resultado;

        switch (resto){
            case "6FO":case "6fo": 
                resultado = "6FO is an acronym to **6 Feet Over**, a die2nite meta. 6FO was created on Season 7 by Dream and lasted until Season 13 when it dissolved to form new metas.";break;
            case "7sins":case "7Sins": 
                resultado = "7sins is an acronym to **S7v7n Zedly Sins, a die2nite meta. 7sins was created around Season 3 and is currently being managed by Sashimi. Discord server https://discord.gg/8JuJpqK";break;  
            case "9ap diamond": case "9AP diamond": case "diamond":
                resultado = "**9 AP Diamond** is an organized town strategy where players seek to go out and scavenge at 9AP away from town. The result of this is a shape of a diamond in the map. This is done for a number of reasons. Since food and water are the only boosters available on day 1, one player can go up to 9AP away from town counting 6AP base + 6/7AP food + water, round trip. It is always better to deplete zones further from town first as the zones closer to town will get depleted by players returning from their scavenge zones. The diamond also gives some intel on the disposition of nearby ruins the town has before Watchtower kicks in. On organized towns it is customary to select a 9AP diamond spot before the town even start. Some cornered towns might not have a complete diamond as they can be 6AP away from the edge of the map. Here is a day 1 example of a 9AP diamond. https://github.com/Miudod2n/winstond2n/raw/master/images/9apd.png";break;
            case "AS": case "as":
                resultado = "AS is an acronym that stands for **A**uto **S**earch. It describes the act of waiting in a zone for the next auto-search. It have variations like \"ASing\" (Auto-searching)";break;
            case "BD":case "bd": 
                resultado = "BD is an acronym to **Benevolent Dictators**, a die2nite meta. BD was created on Season 10 by ValiumCereal and lasted until Season 12.";break;   
            case "BT":case"bt":
                resultado = "BT is an acronym to **Breakthrough**, a die2nite ability. BT was awarded to all players on the end of Season 4 as a consolation for the 3 days the game went down (Epoqalypse) killing several towns. This ability consist of a 50% chance of killing one zombie in the zone and taking control back for a few minutes. It can only be used once per town. Citizens with the Armageddon Witness distinction have this skill.";break;
            case "COS":case "cos": 
                resultado = "COS is an acronym to **Coalition of Stares**, a die2nite meta. COS was created around Season 5.";break;
            case "DoA":case "doa":case "DOA": 
                resultado = "DoA is an acronym to **Drunkards of the Apocalypse**, a die2nite meta. DoA was created around Season 10 by Ivana.";break;
            case "EC":case "ec":
                resultado = "EC stands for **E**lectric **C**omponent, a rare resource used on several constructions and items. http://d2nwiki.com/wiki/Electronic_component";break;
            case "EE": case "ee":
                resultado = "EE is an acronym that stands for **E**xpert **E**xpeditions. This is the name of a rare distinction earned by exploring a ruin that is 18Km or more from town and acquiring an object. EE hunters sometimes swarm random towns in search of a cornered town (a town that spawns off the center of the map, allowing a higher chance of more EE ruins) in between their meta jumps.";break;
            case "e.ruin": case "E.Ruin":
                resultado = "E.Ruin is an acronym to **E**xplorable **R**uin. This is a special sort of ruin that presents a mini-game of dungeon exploration once explored. Every big map town has one E.Ruin (2 on Hardcore towns). There are 3 types of e.ruins and each present a different set of unique items and blueprints. http://d2nwiki.com/wiki/Explorable_Ruins";break;
            case "EWB": case "ewb":
                resultado = "EWB is an acronym for **E**xploding **W**ater **B**omb, a water weapon that can be made out of Water Ration + Plastic Bag and Semtex (plastic bag + duct tape + compact detonator + semtex). http://d2nwiki.com/wiki/Exploding_Water_Bomb";break;
            case "hippies": case "Hippies":
                resultado = "hippies is an acronym to **Happy Hippies**, a die2nite meta that did social jumps (whatever that means). hippies was created by Joanne and Babooshka76 around Season 6.";break;   
            case "ingsoc":case "INGSOC":case "Ingsoc": 
                resultado = "INGSOC is the name of a die2nite meta created around season 4 by fward. They did mostly Hardcore towns. INGSOC was disolved during MH Beta.";break;
            case "LS":case "ls":
                resultado = "LS is an acronym to **Lost Souls**, a die2nite meta. LS was created on Season 4.";break;   
            case "LMS":case "Lms":case "lms":
                resultado = "LMS is an acronym to **L**ast **M**an **S**tanding, a distinction earned by the last player to die inside town. To be elegible to LMS, a player needs to be inside town during the last attack that will kill everyone inside town. LMS is random, so having more personal defense won't mather. Hardcore Towns award 2 LMS disctinctions: a regular LMS distinction and a Hardcore LMS distinction. Earning LMS would also earn some Hero days, but since May 2020 Hero days are now free. http://d2nwiki.com/wiki/Last_Man_Standing";break;
            case "MMJ": case "mmj":
                resultado = "MMJ is an acronym that stands for **M**ega **M**eta **J**ump. MMJ is an event where several players schedule a day to jump in a random town at the same time. This is usually a server-wide event and quite often results in 5 or more towns filled with random players from several meta groups as wel as lone wolf players. MMJs were first used to bypass the meta-cap, a game rule that blocked several coalitions of joining the same town, thus disallowing groups of skilled players to play together in the same town. Once the meta-cap was lifted, the players kept doing MMJs every new season as a celebration.";break;
            case "MoS": case "mos": case "MOS":
                resultado = "MoS is an acronym that stands for **M**inistry **o**f **S**lavery, a die2nite construction unlocked via Very Rare Blueprints (One of the preset VRs from A. Bunker e.ruins). MoS allows shunned players to use AP on constructions and the AP used this way contributes with a multiplier of 1.5 . https://github.com/Miudod2n/winstond2n/raw/master/images/mos.png Metas quite often make use of this construction by deliberating shunning some players that constitute the builder force of the town. This, altogether with scrapping (since shunned can't update external maps) and removing the shun later using Altar is a common strategy for when this blueprint is unlocked early http://d2nwiki.com/wiki/Ministry_of_Slavery.";break;
            case "N&C":case "n&c":
                resultado = "N&C is an acronym to **Nick & Company**, a die2nite meta. N&C was created on Season 5 by VertigoProcess.";break;   
            case "NHB":case "nhb":
                resultado = "NHB stands for **N**o **H**oles **B**arred, a water construction that provides 150 rations. http://d2nwiki.com/wiki/No_Holes_Barred";break;
            case "OI":case "INN":case "inn": 
                resultado = resto+" is one of the acronyms to **Oozing Inn**, a die2nite meta. OI was created on Season 1 by Bram.";break;
            case "IBG":case "ibg":case "Ibg": 
                resultado = resto+" is the acronym for **I**ndian **B**urial **G**round, a type of ruin. It spawns 3-6km from town. It is the only ruin that drops Meaty Bones. It has a negative 5% (1 upgrade) penalty for camping as topology. http://d2nwiki.com/wiki/Indian_Burial_Ground";break;
            case "P9C":case "p9c":
                resultado = "P9C is an acronym to **Plan 9 Consortium**, a die2nite meta. P9C was proved to be a meta of multiple accounts and then disbanded.";break;
            case "RM":case "rm":
                resultado = "RM is an acronym to **RandoMeta**, a die2nite meta. RM was created by ImbuedGreen on Season 7. Most of its members played as the Shadowclan or Clucky Bastards meta.";break;
            case "RFM":case "rfm":
                resultado = "RFM stands for **Royal Flying Mowers**, a die2nite meta. RFM was created on Season 3.";break;
            case "RWF":case "rwf": 
                resultado = "RWF stands for **Running With Fridges**, a die2nite meta. RWF was created by greveur on Season 4";break;             
            case "unnamed":case "Unnamed": 
                resultado = "**Unnamed** was a die2nite meta.";break;
            case "hive":case "Hive":
                resultado = "**Hive** was a die2nite meta.";break;
            case "SC":case "sc": 
                resultado = "SC stands for **Shadowclan**, a die2nite meta. Shadowclan was created on Season 5. It had other names like Clucky Bastards and RandoMeta";break; 
            case "SotA": 
                resultado = "SotA stands for **Survivors of the Atom**, a die2nite meta who seeks Reactor distinctions. SotA was created on Season 13.";break;  
            case "SS":case "ss": 
                resultado = "SS stands for **Suicide Squad**, a die2nite meta. SS was created by pkeod on Season 12.";break;
            case "ST":case "st":
                resultado = "ST stands for **S**earch **T**ower, a upgradable construction that reveal which direction was struck with replenishing winds. http://d2nwiki.com/wiki/Searchtower";break;
            case "SVV":case "svv": 
                resultado = "SVV stands for **The Survivors**, a die2nite meta also known as Wandering Souls. SVV was created by Forgotten on Season 12.";break;
            case "TZ":case "tz": 
                resultado = "TZ stands for **Team Zero**, a die2nite meta. TZ was created by WalkingCrow on Season 6.";break;   
            case "TBS":case "tbs": 
                resultado = "TBS stands for **The Bloodied Sleuths**, a die2nite meta. TBS was created on Season 6";break;
            case "UZC":case "uzc": 
                resultado = "UZC stands for **Undead Zombie Chickens**, a die2nite meta. UZC was created by Zombieman on Season 11.";break;   
            case "WCH":case "wch": 
                resultado = "WCH stands for **Working Class Heroes**, a die2nite meta that had mostly Residents in its ranks. WCH was created on Season 5 by Miudo.";break;   
            case "WLB":case "wlb": 
                resultado = "WLB is an acronym to **W**orn **L**eather **B**ag, a container item that holds Blueprints (BPs). http://d2nwiki.com/wiki/Worn_Leather_Bag";break;   
            case "WF":case "wf":case"wonfai":case"Wonfai":
                resultado = resto+" stands for **Wonderful Failure**, a die2nite meta. WF was created by Sense on Season 1. More information: https://twinoid.com/g/wonderful-failure#";break;
            case "ZOA":case "zoa": 
                resultado = "ZOA stands for **Zombies Outside Alliance**, a die2nite meta. ZOA was created by Embacie (in memoriam) on Season 6.";break;   
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
    if (message.content === "!ass"){
        message.channel.send("Short Auto-search warning set (1h 30min).");
        setTimeout(function(){
            message.channel.send(message.author+ ", go check your auto-search.");
        },5400 * 1000);
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
    if (message.content.startsWith("!alarm")) {
        var resto = message.content.substring(7);
        if (isNaN(parseInt(resto))) {
            message.channel.send("Wrong syntax. type \"!alarm + a number value in minutes\"");
        }
        else {
	resto = parseInt(resto);

        message.channel.send("Alarm warning set ("+resto+"min).");
        setTimeout(function(){
            message.channel.send(message.author+ ", you wanted a ping now.");
        },(resto*60) * 1000);
            }
        }
    }
);

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
                message.channel.send("Reactor needs - nevermind, this thing is broken since Workshop upgrades also affect repairs too... go do math");
            }
        }
    }

});

client.on('message', message =>{
    if (message.content.startsWith("!west")) {      
            message.channel.send("https://cdn.discordapp.com/attachments/663021630565515306/1223058653695709314/image.png?ex=66187922&is=66060422&hm=e4ea450029b771304a4b1e47c813dae38418006ad806fd9528c1bd68d3dd79b7&");
    }
    });

client.on('message', message =>{
    if (message.content.startsWith("!s17bigpicture")) {      
            message.channel.send("> Actually, if you take the big picture, this update is more oriented in the direction of opti cities than never.");
	    message.channel.send("~~~~  Goblino, Oct 5, 2024, https://myhord.es/jx/forum/jump/2993456");
    }
    });

client.on('message', message =>{
    if (message.content.startsWith("!feedback")) {      
            message.channel.send("https://cdn.discordapp.com/attachments/663021630565515306/1293159284460355625/grafik.png?ex=67065bef&is=67050a6f&hm=6913cd2f8a4d927787564dc929d10b155af88cbec31eb14e6fa2080057c87edc&");
	    message.channel.send("https://myhordes.eu/jx/forum/jump/2996778");
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

function leftToGuitar(){
    var d = new Date();
    var yada = -d + d.setHours(21,30,5,0); //18:30 igt
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
	var dateObj = new Date();
	var month = dateObj.getUTCMonth() + 1; 
	var day = dateObj.getUTCDate()+1;
    var generald2n = client.guilds.get('598136432707502130');
        generald2n.channels.get('598136432707502132').send("The zombie attack is now over. Are you still alive?"+birthdays(day+"",month+""));

   // var wch = client.guilds.get('163300463314337793');
   //     wch.channels.get('695661832240758864').send("The zombie attack is now over. Are you still alive?");
    
   // var oi = client.guilds.get('663021630045290530');
   //  oi.channels.get('663021630565515306').send("The zombie attack is now over. Are you still alive?");
}

function sendMessageGuitar(){
    var today = new Date();
	var oi = client.guilds.get('663021630045290530'); 
	if(today.getDay() == 6){
		oi.channels.get('663021630565515306').send("Aren't no one pinging <@509808988712337428> to go back to town in this lovely Saturday night?");}
	else{
		console.log(today.getDay());
     oi.channels.get('663021630565515306').send("");}
	//663021630565515306 Oozing inn #town-chat
	//598136432707502132 Oozing inn #general-chat
	//<@509808988712337428> tara
	
	//1129091170748862464
	//<@&699730237625335809>
}

function burp(){
var dateObj = new Date();
var hour = dateObj.getHours(); 
var oi = client.guilds.get('663021630045290530');
//oi.channels.get('729775289797836910').send("*hicup* ... sorry I dc. It is "+hour+"h in whatever new server they put me in");
}
    
function changestatus(){
    //todo when custom status for bots on discords are available
    //https://github.com/discord/discord-api-docs/issues/1160#issuecomment-546549711
}


function compareTwoStrings(first, second) {
	first = first.replace(/\s+/g, '')
	second = second.replace(/\s+/g, '')

	if (first === second) return 1; // identical or empty
	if (first.length < 2 || second.length < 2) return 0; // if either is a 0-letter or 1-letter string

	let firstBigrams = new Map();
	for (let i = 0; i < first.length - 1; i++) {
		const bigram = first.substring(i, i + 2);
		const count = firstBigrams.has(bigram)
			? firstBigrams.get(bigram) + 1
			: 1;

		firstBigrams.set(bigram, count);
	};

	let intersectionSize = 0;
	for (let i = 0; i < second.length - 1; i++) {
		const bigram = second.substring(i, i + 2);
		const count = firstBigrams.has(bigram)
			? firstBigrams.get(bigram)
			: 0;

		if (count > 0) {
			firstBigrams.set(bigram, count - 1);
			intersectionSize++;
		}
	}

	return (2.0 * intersectionSize) / (first.length + second.length - 2);
}

function findBestMatch(mainString, targetStrings) {
	if (!areArgsValid(mainString, targetStrings)) throw new Error('Bad arguments: First argument should be a string, second should be an array of strings');
	
	const ratings = [];
	let bestMatchIndex = 0;

	for (let i = 0; i < targetStrings.length; i++) {
		const currentTargetString = targetStrings[i];
		const currentRating = compareTwoStrings(mainString, currentTargetString)
		ratings.push({target: currentTargetString, rating: currentRating})
		if (currentRating > ratings[bestMatchIndex].rating) {
			bestMatchIndex = i
		}
	}
	
	
	//const bestMatch = ratings[bestMatchIndex]
	
	return bestMatchIndex;
}

function areArgsValid(mainString, targetStrings) {
	if (typeof mainString !== 'string') return false;
	if (!Array.isArray(targetStrings)) return false;
	if (!targetStrings.length) return false;
	if (targetStrings.find( function (s) { return typeof s !== 'string'})) return false;
	return true;
}

function sendMeme(numberofmeme){
	var generald2n = client.guilds.get('598136432707502130');
	
	switch (numberofmeme){
		case 0 : generald2n.channels.get('598136432707502132').send("https://i.imgur.com/K0j3qhI.jpeg");break;
		case 1 : generald2n.channels.get('598136432707502132').send("https://i.imgur.com/NNWNETj.jpeg");break;
		case 2 : generald2n.channels.get('598136432707502132').send("https://i.imgur.com/VRgBjLD.jpeg");break;
		case 3 : generald2n.channels.get('598136432707502132').send("https://i.imgur.com/ogtF6wj.jpeg");break;
		case 4 : generald2n.channels.get('598136432707502132').send("https://i.imgur.com/JjKBPP3.jpeg");break;
		case 5 : generald2n.channels.get('598136432707502132').send("https://i.imgur.com/m3sli7H.jpeg");break;
		case 6 : generald2n.channels.get('598136432707502132').send("https://i.imgur.com/c5sH9aJ.png");break;
		case 7 : generald2n.channels.get('598136432707502132').send("https://i.imgur.com/ARON5RZ.jpeg");break;
		case 8 : generald2n.channels.get('598136432707502132').send("https://i.imgur.com/WtuaBrM.jpeg");break;
		default : generald2n.channels.get('598136432707502132').send("https://i.imgur.com/K0j3qhI.jpeg");break;

	}

}

function birthdays (day,month){
	var aniver = "";var c=false;
	//January
	if (day==7&&month==1){c=true;aniver="<@395544163426369536>"}//Elmo-Arturia
	//February
	else if (day==4&&month==2){c=true;aniver="<@346743408053846017>"}//cliche
	else if (day==11&&month==2){c=true;aniver="<@134064828976332800>"}//Dylan
	else if (day==14&&month==2){c=true;aniver="<@302855904452280323>"}//Natamar
	else if (day==27&&month==2){c=true;aniver="<@379924747879710721>"}//Cinek West
	//March
	else if (day==14&&month==3){c=true;aniver="<@466628724960264194>"}//Ivana
	else if (day==24&&month==3){c=true;aniver="<@455904123716501513>"}//DGba
	//April
	else if (day==5&&month==4){c=true;aniver="<@253564361786785793>"}//Valedres
	//May
	else if (day==24&&month==5){c=true;aniver="<@141046601572417536>"}//Nekomine
	//June
	else if (day==12&&month==6){c=true;aniver="<@372279099667775508>"}//Damon
	else if (day==20&&month==6){c=true;aniver="<@304320898343895040> and <@273185203705610241>"}//asdryu, Miudo
	else if (day==25&&month==6){c=true;aniver="<@155991335411777537>"}//yungching
	else if (day==28&&month==6){c=true;aniver="<@268175075151314945>"}//Termineitron
	else if (day==30&&month==6){c=true;aniver="<@293129681409146880>"}//UrsulaK
	//July
	//August
	else if (day==11&&month==8){c=true;aniver="<@146652848245964800>"}//Theincredible
	else if (day==9&&month==8){c=true;aniver="<@455290757432213506>"}//Palomino
	else if (day==18&&month==8){c=true;aniver="<@624067980661227550>"}//Sheya
	else if (day==26&&month==8){c=true;aniver="<@220556893716742144>"}//Bram
	else if (day==30&&month==8){c=true;aniver="<@537249302234398722>"}//Erle
	//September
	else if (day==9&&month==9){c=true;aniver="<@416282550256795648>"}//Novaborn
	else if (day==12&&month==9){c=true;aniver="<@145255162519355393>"}//Vaniglia
	else if (day==26&&month==9){c=true;aniver="<@267798407085686784>"}//fdamned6
	//November
	else if (day==25&&month==11){c=true;aniver="<@254985021192929281>"}//RuinT
	//December
	else if (day==17&&month==12){c=true;aniver="<@594216847721889803>"}//Joanne
	else if (day==18&&month==12){c=true;aniver="<@269191615913000961>"}//matsuuu
	else if (day==25&&month==12){c=true;aniver="<@544990372149985280>"}//Denny joke
        else if (day==31&&month==12){c=true;aniver="<@231483688028864513>, and happy new year everyone"}//ApolloFireweaver
	else {aniver="";}
	
	if (c){return "\nHappy Birthday "+aniver+"!";}
	else {return "\n:zombie::door::question:";}
}

//
client.login(process.env.TOKEN); 
