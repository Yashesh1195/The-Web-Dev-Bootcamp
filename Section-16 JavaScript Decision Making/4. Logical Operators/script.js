// LOGICAL AND (&)

// const password = prompt("Enter your password!!");

// if(password.length>=6 && password.indexOf(' ') === -1) {
//     console.log("Valid Password!!");
// } else {
//     console.log("Incorrect Format For Password!!");
// }

// LOGICAL OR (|)

const age = prompt("Enter your age!!");

if(age < 5 || age >= 65) {
    console.log("FREE!!");
} else if(age < 10) {
    console.log("Pay $10!!");
} else if(age < 65) {
    console.log("Pay $20!!");
}