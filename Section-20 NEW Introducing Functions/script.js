function rolldie(faces){
    console.log(Math.floor(Math.random()*faces) + 1);
}

// let die1 = rolldie();
// let die2 = rolldie();
// let die3 = rolldie();
// let die4 = rolldie();
// let die5 = rolldie();
// let die6 = rolldie();

// function singSong(){
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
// }

// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();

// function greet(firstName, lastName){
//     console.log(`HI, ${firstName} ${lastName[0]}.!!`);
// }

// greet("Yashesh", "Mehta");

function repeat(message, count){
    let result = '';
    for(let i = 1; i <= count; i++){
        result += message;
    }
    console.log(result);
}