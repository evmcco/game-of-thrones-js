console.log(`There are ${characters.length} characters in the array.`);

function countAChars(){
    let aCharsCount = 0;
    characters.forEach(function(character){
        if (character.name[0] === "A") {
            aCharsCount += 1;
        }
    })
    console.log(`There are ${aCharsCount} characters with an A name.`)
}

countAChars();

function countZChars(){
    let zCharsCount = 0;
    characters.forEach(function(character){
        if (character.name[0] === "Z") {
            zCharsCount += 1;
        }
    })
    console.log(`There are ${zCharsCount} characters with a Z name.`)
}

countZChars();

function countDeadChars(){
    let deadCharsCount = 0;
    characters.forEach(function(character){
        if (character.died != '') {
            deadCharsCount += 1;
        }
    })
    console.log(`There are ${deadCharsCount} dead characters in GoT, not including my hopes and dreams of a good ending`)
}

countDeadChars();

function findMostTitles(){
    let mostTitledChar = "";
    let mostTitles = 0;
    let titles = [];
    characters.forEach(function(character){
        charTitles = character.titles.length;
        if (charTitles > mostTitles){
            mostTitledChar = character.name;
            mostTitles = charTitles;
            titles = character.titles;
        }
    })
    console.log(`${mostTitledChar} has the most titles with ${mostTitles}: ${titles}`)
}

findMostTitles();

function countValyrians(){
    let valyrianCount = 0;
    let valyrians = [];
    characters.forEach(function(character){
        if (character.culture === 'Valyrian') {
            valyrianCount += 1;
            valyrians.push(character.name);
        }
    })
    console.log(`There are ${valyrianCount} Valyrian characters: ${valyrians}`);
}

countValyrians();

function hotPieActor(){
    characters.forEach(function(character){
        if (character.name === "Hot Pie"){
            console.log(`Hot Pie's actor's name is ${character.playedBy}`);
        }
    })
}

hotPieActor();

function notInShow(){
    let notInShowCount = 0
    characters.forEach(function(character){
        if (character.tvSeries[0] === "") {
            notInShowCount += 1;
        }
    })
    console.log(`There are ${notInShowCount} book-only characters.`);
}

notInShow();

function findTargs(){
    let targList = [];
    let targCount = 0;
    characters.forEach(function(character){
        lastNineChars = character.name.substr(character.name.length-9);
        if (lastNineChars === "Targaryen"){
            targList.push(character.name);
            targCount += 1;
        }
    })
    console.log(`There are ${targCount} Targaryens: ${targList}`);
}

findTargs();

function houseHisto(){
    let houseObj = new Object();
    characters.forEach(function(character){
        character.allegiances.forEach(function(allegiance){
            let housesKeys = Object.keys(houseObj);
            if (housesKeys.includes(houses[allegiance])){
                houseObj[houses[allegiance]] += 1;
            }
            else {
                houseObj[houses[allegiance]] = 1;
            }
        })
    })
    console.log(houseObj);
}

houseHisto();