// async function hello() {
// }

// const sing = async () => {
//     // throw new Error("UH OH!!!!!!!!");
//     throw "OH NO PROBLEM!!!!!!!!";
//     return 'LA LA LA LA!!!!'
// }

// sing()
//     .then((data) => {
//         console.log("PROMISE RESOLVED WITH:- ", data);
//     })
//     .catch((error) => {
//         console.log("OH NO, PROMISE REJECTED!!");
//         console.log(error);
//     })

// const login = async (username, password) => {
//     if(!username || !password) throw "Missing Credentials!!"
//     if(password === "corgifeetarecute") return "Welcome!!"
//     throw "Invalid Password!!"
// }

// login('asdfghjkl', 'corgifeetarecute')
//     .then((msg) => {
//         console.log("LOGGED IN!!");
//         console.log(msg);
//     })
//     .catch((error) => {
//         console.log("ERROR!!");
//         console.log(error);
//     })

// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve();
// ;        }, delay)
//     })
// }

// // delayedColorChange('violet', 1000)
// //     .then(() => delayedColorChange('indigo', 1000))
// //     .then(() => delayedColorChange('blue', 1000))
// //     .then(() => delayedColorChange('green', 1000))
// //     .then(() => delayedColorChange('yellow', 1000))
// //     .then(() => delayedColorChange('orange', 1000))
// //     .then(() => delayedColorChange('red', 1000))

//     async function rainbow() {
//         await delayedColorChange('violet', 1000)
//         // console.log("HIIIII!!!!");
//         await delayedColorChange('indigo', 1000)
//         await delayedColorChange('blue', 1000)
//         await delayedColorChange('green', 1000)
//         await delayedColorChange('yellow', 1000)
//         await delayedColorChange('orange', 1000)
//         await delayedColorChange('red', 1000)

//         return "All DONE!!"
//     }

//     // rainbow().then(() => console.log("END OF RAINBOW!!"));

// async function printRainbow() {
//     await rainbow();
//     console.log("END OF RAINBOW!!");
// }

// printRainbow();


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor((Math.random() * 4500) + 500);
        setTimeout(() => {
            if(delay > 4000) {
                reject("Connection Timeout :(");
            }
            else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay)
    })
}

async function makeTwoRequest() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch(e) {
        console.log("CAUGHT AN ERROR!!");
        console.log("Error is :- ", error)
    }
    
}