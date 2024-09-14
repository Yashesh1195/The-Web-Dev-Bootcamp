// IF Statement

// console.log("Before Conditionals");
// if(1 + 2 === 2){
//     console.log("Math Still Works")
// }
// console.log("After Conditionals");

// let random = Math.random();
// if(random < 0.5){
//    console.log("Your Number is less than 0.5")
//    console.log(random)
// } else {
//    console.log("Your Number is greater(or equal) than 0.5")
//    console.log(random)
// }

// ELSE IF & ELSE Statement

// const dayOfWeek = prompt("Enter a Day!!").toLowerCase();

// if (dayOfWeek === "monday") {
//     console.log("UGHH I HATE MONDAYS!!!!");
// } else if(dayOfWeek === "saturday") {
//     console.log("Yay I love Saturdays!!!");
// } else if(dayOfWeek === "friday") {
//     console.log("Fridays are Decent, Especially After Work!!!");
// } else {
//     console.log("MEH!!");
// }

// const age = 30;

// if(age < 5) {
//     console.log("You are a baby. You get in for free!!");
// } else if(age < 10){
//     console.log("You are child. You pay $10");
// } else if(age < 65) {
//     console.log("Your are an adult. You pay $20");
// } else {
//     console.log("You are a senior. You pay $10");
// }

const password = prompt("please enter a new password");

// if(password.length >= 6) {
//     console.log("LONG ENOUGH PASSWORD");
// } else {
//     console.log("PASSWORD TOO SHORT! MUST E 6+ CHARACTERS");
// }
// if(password.indexOf(' ') === -1) {
//     console.log("Good jib! No space!");
// } else {
//     console.log("Password cannot contain spaces!");
// }

if(password.length >= 6) {
    if(password.indexOf(' ') === -1) {
        console.log("Valid Password");
    } else {
        console.log("Password cannot contain spaces!");
    }
} else {
    console.log("PASSWORD TOO SHORT! MUST E 6+ CHARACTERS");
}

