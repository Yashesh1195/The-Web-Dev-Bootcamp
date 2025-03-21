// The reduce() method executes a reducer function for array element.

// The reduce() method returns a single value: the function's accumulated result.

// The reduce() method does not execute the function for empty array elements.

// The reduce() method does not change the original array.


// const add = [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;

// for (let price of prices){
//     total+=price;
// };

// console.log(total);

// const total = prices.reduce((total, price) => {
//     return total + price;
// })

// const total = prices.reduce((total, price) => total + price)

const minPrice = prices.reduce((min, price) => {
    if(price < min){
        return price;
    }
    else{
        return min;
    }
})

const maxPrice = prices.reduce((max, price) => {
    if(price > max){
        return price;
    }
    else{
        return max;
    }
})


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
        year: 2019
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

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if(currMovie.score > bestMovie.score){
        return currMovie;
    }
    else{
        return bestMovie;
    }
})


const evens = [2, 4, 6, 8, 10];
const sum = evens.reduce((sum, num) => sum + num);
const add = evens.reduce((sum, num) => sum + num, 100);