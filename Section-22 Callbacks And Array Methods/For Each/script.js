// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// function print(elements){
//     console.log(elements);
// }

// // print(numbers[2]);
// // print(numbers[5]);
// numbers.forEach(print);

// numbers.forEach(function (el){
//     if(el % 2 === 0)
//     console.log(el);
// })

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: "Stand By Me",
        score: 85
    },
    {
        title: "Parasite",
        score: 95
    },
    {
        title: "Alien",
        score: 90
    }
];

movies.forEach(function (movie){
    console.log(`${movie.title} - ${movie.score}/100`)
})