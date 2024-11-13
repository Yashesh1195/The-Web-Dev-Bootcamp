// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

// function sum(){
//     console.log(arguments);
// }

// function sum(){
//     return arguments.reduce((total, el) => total, el);
// }
//It won't work as arguments.reduce in not a function

function sum(...nums){
    // console.log(nums);
    return nums.reduce((total, el) => total + el);
}

function raceResults(gold, silver, ...everyoneElse){
    console.log(`Gold Medal Goes To: ${gold}`);
    console.log(`Silver Medal Goes To: ${silver}`);
    console.log(`And Thanks To Everyon Else: ${everyoneElse}`);
}
const results = raceResults("Yashesh", "Vanshal", "Tina", "Het", "Travis");
