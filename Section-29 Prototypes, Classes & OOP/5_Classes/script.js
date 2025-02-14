//1. ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
//2. JavaScript Classes are templates for JavaScript Objects.
//3. A JavaScript class is not an object.
//4. Use the keyword class to create a class.
//5. Always add a method named constructor():
//6. The constructor method is called automatically when a new object is created.

class Color {
    constructor(r, g, b, name) {
        // console.log("INSIDE CONSTRUCTOR!!!");
        // console.log(r, g, b);
        this.r = r;
        this.g = g;
        this.b = b;
        this.colorName = name;
    }

    innerRGB(){
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`; 
    }

    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }

    hex() {
        const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
    }
}

// const red = new Color(200, 23, 103, 'tomato');
// const green = new Color(80, 255, 50, 'green');

const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');