// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "orange";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "lightblue";
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "darkblue";
//                 document.body.style.color = "white";
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = "green";
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay)
}
delayedColorChange("olive", 1000, () => {
    delayedColorChange("orange", 1000, () => {
        delayedColorChange("magenta", 1000, () => {
            delayedColorChange("lightblue", 1000, () => {
                delayedColorChange("red", 1000, () => {
                    delayedColorChange("teal", 1000, () => {

                    })
                })
            })
        })
    })
})


searchMoviesAPI('amadeus', () => {
    saveToMyDB(movies, () => {
        //If it works, run this
    }, () => {
        //If it doesn't work, run this
    })
}, () => {
    //If API is down, or request failed
})