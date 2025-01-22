// The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

const form = document.querySelector("#shelterForm");
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("SUBMITTED!!!!!!!");
});