// The every() method executes a function for each array element.

// The every() method returns true if the function returns true for all elements.

// The every() method returns false if the function returns false for one element.

// The every() method does not execute the function for empty elements.

// The every() method does not change the original array


// The some() method checks if any array elements pass a test (provided as a callback function).

// The some() method executes the callback function once for each array element.

// The some() method returns true (and stops) if the function returns true for one of the array elements.

// The some() method returns false if the function returns false for all of the array elements.

// The some() method does not execute the function for empty array elements.

// The some() method does not change the original array.


const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

// const pass = exams.every(marks => marks >= 75);
const pass = exams.some(marks => marks >= 75);

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2010
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

const greatMovie = movies.every(movie => movie.year > 2010)
// const greatMovie = movies.some(movie => movie.year > 2010)

// const words = ["dog", "cat", "dig", "bag", "wag"];

// words.every(word => {
//     return word.length === 3;
// })

// words.every(word => word[0] === "d");

// words.every(w => {
//     let last_letter = w[w.length-1];
//     return last_letter === "g";
// })