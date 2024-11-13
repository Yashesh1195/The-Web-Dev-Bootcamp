// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

// SPREAD IN FUNCTIONS
const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
// let max = Math.max(nums) //NaN
// let max = Math.max(...nums) //53456
// console.log(..."hello");

// SPREAD IN ARRAYS

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs]

// SPREAD IN OBJECTS
