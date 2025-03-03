const express = require('express');
const app = express();
// console.dir(app);

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!");
//     // console.dir(req);
//     // res.send("HELLO, WE GOT YOUR REQUEST! THIS IS A RESPONSE");
//     // res.send({color: 'red'});
//     res.send('<h1>This is my webpage!</h1>');
// });


// Basic Routing
// /cats = 'meow'
// /dogs = 'woof'
// / = 'Welcome To Our Home Page!'

app.get('/', (req, res) => {
    res.send("This is the Home Page!!!");
})

app.get('/cats', (req, res) => {
    // console.log("CAT REQUEST!!!");
    res.send("MEOW!!!");
})

app.post('/cats', (req, res) => {
    // console.log("CAT REQUEST!!!");
    res.send("SENDING POST REQUEST TO CATS! MEOW MEOW!!!");
})

app.get('/dogs', (req, res) => {
    // console.log("DOG REQUEST!!!");
    res.send("WOOFF!!!");
})

app.get('*', (req, res) => {
    res.send("I don't know the route to that path!!");
})


app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!");
});

