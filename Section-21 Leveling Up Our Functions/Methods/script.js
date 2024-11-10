// const math = {
//     multiply : function(x, y){
//         return x * y;
//     },
//     divide : function(x, y){
//         return x / y;
//     },
//     square : function(x){
//         return Math.pow(x, 2);
//     }
// }

// const myMath = {
//     PI: 3.14159,
//     square(num){
//         // return num*num;
//         return Math.pow(num, 2);
//     },
//     cube(num){
//         // return num ** 3;
//         return Math.pow(num, 3);
//     }
// }

// ============
// THIS KEYWORD
// ============

// const person = {
//     first: "Robert",
//     last: "Herjavec",
//     fullName(){
//         return `${this.first} ${this.last}`
//     }
// }

const cat = {
    name: "Blue Steele",
    color: "Grey",
    breed: "Scottish Fold",
    meow(){
        console.log("THIS IS:", this);
        console.log(`${this.name} says MEOWWWW!!!!`);
    }
}

const meow2 = cat.meow;