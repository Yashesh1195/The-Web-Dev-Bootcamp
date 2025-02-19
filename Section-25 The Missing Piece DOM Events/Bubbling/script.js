const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener("click", function(e){
    container.style.backgroundColor = randomColor();
    e.stopPropagation();
});

container.addEventListener("click", function() {
    container.classList.toggle('hide');
});