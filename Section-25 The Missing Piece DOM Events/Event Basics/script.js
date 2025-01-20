const btn = document.querySelector("#v2");

btn.onclick = function() {
    console.log("You Clicked Me!!");
    console.log("I hope it works!!");
}

function scream(){
    console.log("AHHHHHHHHHHHHHHHH!!!!!!!!!!!");
    console.log("Stop!!!!!!!!!!!!!!!!!!!!!!!!");
}

btn.onmouseenter = scream;

// document.querySelector('h1').onclick = function() {
//     alert("You Clicked H1!!!!!!");
// }

document.querySelector('h1').onclick = () => {
    alert("You Clicked H1!!!!!!");
}