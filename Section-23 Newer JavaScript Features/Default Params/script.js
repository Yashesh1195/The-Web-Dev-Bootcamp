// ==========================================
// AN OLDER WAY OF ADDING DEFAULT PARAM VALUE
// ==========================================

// function rollDie(numSides){
//     if(numSides === undefined){
//         numSides = 6;
//     }
//     return Math.floor(Math.random()*numSides) + 1;
// }

// ============
// THE NEW WAY!
// ============

function rollDie(numSides = 6){
    return Math.floor(Math.random() * numSides) + 1;
}

function product(a, b=1){
    return a*b;
}

function greet(person, msg="Hey There", punc = "!"){
    console.log(`${msg}, ${person}${punc}`);
}