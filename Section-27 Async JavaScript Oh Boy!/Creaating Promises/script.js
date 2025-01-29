// new Promise((resolve, reject) => {
//     resolve();
// })

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if(rand < 0.7){
//                 resolve('YOUR FAKE DATA HERE!');
//             }
//             else{
//                 reject('REQUEST ERROR!');
//             }
//         }, 1000)
//     })
// }

// fakeRequest('/dog/1')
// .then((data) => {
//     console.log("DONE WITH REQUEST!");
//     console.log("DATA IS:- ", data);
// })
// .catch((err) => {
//     console.log("OH NO!", err)
// })

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('violet', 1000, () => {
//     delayedColorChange('indigo', 1000, () => {
//         delayedColorChange('blue', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('yellow', 1000, () => {
//                     delayedColorChange('orange', 1000, () => {
//                         delayedColorChange('red', 1000, () => {
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
;        }, delay)
    })
}

delayedColorChange('violet', 1000)
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('red', 1000))