//This function makes and returns an object every time it is called. 
//The resulting objects all follow the same "recipe"
function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
    return `rgb(${r}, ${b}, ${g})`;
}

// hex(255, 100, 25);
// "#ff6419"
// "rgb(255, 100, 25)"

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }

    color.hex = function() {
        const { r, g, b } = this;
        return ( 
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    }

    return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.rgb();
firstColor.hex();