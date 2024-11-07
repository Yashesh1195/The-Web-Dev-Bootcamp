// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for(let i=1; i<=10; i+=1) {
//     console.log("I'M IN THE LOOP BODY!!!!!");
//     console.log(i);
// }

// for(let i = 1; i <= 20; i+=2)
// {
//     console.log(i);
// }
// for(let i = 2; i <= 20; i+=2)
// {
//     console.log(i);
// }

// for(i = 100; i >= 0; i-=10)
// {
//     console.log(i);
// }

// for(i=10; i <= 1000; i *= 10)
// {
//     console.log(i);
// }

// for(let i = 20; i <= 30; i++)
// {
//     console.log(i);
// }

// const animals = ["lions", "tigers", "bears"];

// for(let i = 0; i<=animals.length; i++)
// {
//     console.log(i, animals[i]);
// }

// const animals = ["Elephant", "Tiger", "Lion", "Giraffe", "Kangaroo", "Panda", "Zebra", "Cheetah", "Koala", "Penguin",
// "Rhinoceros", "Hippo", "Bear", "Gorilla", "Leopard", "Wolf", "Eagle", "Owl", "Falcon", "Hawk",
// "Whale", "Dolphin", "Shark", "Seal", "Octopus", "Jellyfish", "Starfish", "Crocodile", "Alligator", "Lizard",
// "Chameleon", "Snake", "Turtle", "Frog", "Toad", "Rabbit", "Squirrel", "Bat", "Rat", "Mouse",
// "Dog", "Cat", "Horse", "Cow", "Sheep", "Goat", "Pig", "Chicken", "Duck", "Turkey",
// "Penguin", "Parrot", "Peacock", "Flamingo", "Ostrich", "Swan", "Vulture", "Raven", "Crow", "Pigeon",
// "Koala", "Sloth", "Armadillo", "Anteater", "Beetle", "Ant", "Butterfly", "Moth", "Dragonfly", "Caterpillar",
// "Scorpion", "Spider", "Centipede", "Millipede", "Bee", "Wasp", "Grasshopper", "Locust", "Cricket", "Dragonfly",
// "Clownfish", "Angelfish", "Goldfish", "Betta", "Swordfish", "Tuna", "Salmon", "Trout", "Bass", "Perch",
// "Carp", "Catfish", "Barracuda", "Moray eel", "Turtle", "Shrimp", "Lobster", "Crab", "Mantis shrimp", "Clam",
// "Oyster"];

// for(let i = 0; i <= animals.length-1; i++)
// {
//     console.log(i, animals[i]);
// }

// for(let i = animals.length-1; i >= 0; i--)
// {
//     console.log(i, animals[i]);
// }

// for(let i = 1; i<=10; i++)
// {
//     console.log(`i is: ${i}`);
//     for(let j = 1; j<4; j++)
//     {
//         console.log(`         j is: ${j}`);
//     }
// }

const seatingChart = [
    ['ABC', 'DEF', 'GHI'],
    ['JKL', 'MNO', 'PQR'],
    ['STU', 'VWX', 'YZ']
];

for(let i = 0; i<=seatingChart.length; i++)
{
    const row = seatingChart[i];
    console.log(`ROW #${i}`);
    for(let j = 0; j<row.length; j++)
    {
        console.log(row[j]);
    }
}