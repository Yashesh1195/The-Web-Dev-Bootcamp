// ==============
// FUNCTION SCOPE
// ==============
// let totalEggs = 0;
// function collectEggs() {
//     totalEggs = 6;
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// let bird = "Scarlet Macaw";
// function birdWatch(){
//     let bird =  "Great Blue Heron";
//     console.log(bird);
// }
// birdWatch();
// console.log(bird);


// ==============
// BLOCK SCOPE
// ==============

// let radius = 8;
// if(radius > 0){
//     const PI = 3.14159;
//     let msg = "HIII!!";
// }
// console.log(radius);
// console.log(msg);

// for(var i = 0; i < 5; i++){
//     var msg = "SHDBJKA<!!";
// for(let i = 0; i < 5; i++){
//     let msg = "SHDBJKA<!!";
//     console.log(msg);
// }
// console.log(msg);
// console.log(i);


// ==============
// LEXICAL SCOPE
// ==============

function bankRobbery(){
    const heroes = ["spiderman", "ironman", "black panther"]
    function cryForHelp(){
        function inner(){
            for(let hero of heroes){
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
            }
        }
        inner();
    }
    cryForHelp();
}   