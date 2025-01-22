// The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

const form = document.querySelector("#shelterForm");
const input  = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListener("submit", function(e){
    e.preventDefault();
    // console.log(input.value);
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    // console.log(newLI);
    list.append(newLI);
    //used to empty the form data previusly updated 
    input.value = "";
});