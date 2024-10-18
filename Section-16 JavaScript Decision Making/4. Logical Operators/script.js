// LOGICAL AND (&)

// const password = prompt("Enter your password!!");

// if(password.length>=6 && password.indexOf(' ') === -1) {
//     console.log("Valid Password!!");
// } else {
//     console.log("Incorrect Format For Password!!");
// }

// LOGICAL OR (|)

// const age = prompt("Enter your age!!");

// if((age >= 0 && age < 5) || age >= 65) {
//     console.log("FREE!!");
// } else if(age>=5 && age < 10) {
//     console.log("Pay $10!!");
// } else if(age>= 10 && age < 65) {
//     console.log("Pay $20!!");
// } else {
//     console.log("INVALID AGE!!!");
// }

// LOGICAL NOT (!)

// const firstName = prompt("Enter your first name!!");

// if(!firstName) {
//     firstName = prompt("TRY AGAIN!!!!!");
// }

// const age = prompt("Enter your age!!");

// if(!(age >= 0 && age < 5 || age >= 65)) {
//     console.log("You Are Not A Baby Or A Senior!!");
// }

// SWITCH STATEMENT

const day = 7;

switch(day)
{
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
    case 7:
        console.log("WEEKEND");
        break;
    default:
        console.log("Enter Valid Day!!");
        break;
}


