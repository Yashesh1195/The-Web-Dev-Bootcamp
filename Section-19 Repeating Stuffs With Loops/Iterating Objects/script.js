const testScores = {
    yashesh: 99,
    harsh: 98,
    het: 95,
    vanshal: 100
};

// for(let person of testScores)
// {
//     console.log(person);
// }

// for(let person in testScores)
// {
//     console.log(`${person} scored ${testScores[person]}`);
// }
let total=0;
let score = Object.values(testScores)
for(let scores of score){
    total+=scores;
    // console.log(`Total is ${total}`);
}
console.log(total/score.length);