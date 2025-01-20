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

// addEventListener

const btn3 = document.querySelector("#v3");
btn3.addEventListener('dblclick', function() {
    alert("CLICKED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
});
btn3.addEventListener('dblclick', scream);

function twist(){
    console.log("TWIST");
}

function shout(){
    console.log("SHOUT");
}

const tasButton = document.querySelector("#tas");

// tasButton.onclick = twist;
// tasButton.onclick = shout;
//It will over write shout over twist

tasButton.addEventListener('click', twist, {once: true});
tasButton.addEventListener('click', shout, {once: true});
//th problem of overwriting is handled by this function 