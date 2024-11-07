// let count = 0;
// while(count<10)
// {
//     count++;
//     console.log(count);
// }

// const SECRET = "BabyHippo";

// let guess = prompt("Enter the Secret Code...");
// while(guess !== SECRET)
// {
//     guess = prompt("Enter the Secret Code...");
// }
// console.log("CONGRATS!!! YOU GOT THE SECRET!!!");

// let input = prompt("Hey, say something!");

// while(true)
// {
//     input = prompt(input);
//     if(input.toLowerCase() === "stop copying me"){
//         break;
//     }
// }
// console.log("OK YOU WIN!");

// for(let i = 0; i < 1000; i++){
//     console.log(i);
//     if(i===100){
//         break;
//     }
// }
// console.log("You've stopped @ 100");

//GUESSING GAME!!!!!!!!!!!

//Maximum Number to make the random targetNum
let maximum = parseInt(prompt("Enter the maximum number!"));

while(!maximum)
{
    maximum = parseInt(prompt("Enter the valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1; 
console.log(targetNum)

//First Guess
let guess = parseInt(prompt("Enter your first guess!"));

let attempts = 1;

while(guess !== targetNum)
{
    if(guess === 'q') break;
    attempts++;
    if(guess > targetNum){
        // guess = parseInt(prompt("Too high! Enter New Guess:"));
        guess = prompt("Too high! Enter New Guess:");
    }
    else if(guess < targetNum){
        guess = prompt("Too low! Enter New Guess:");
    }
}
if(guess === 'q')
{
    console.log("OK, YOU QUIT!!");
}
else{
    console.log("CONGRATS YOU WIN!!")
    console.log(`YOU GOT IT!! It Took You ${attempts} guesses!!`);
}