const express = require('express');
const app = express();

// Assigns setting name to value. You may store any value that you want, but certain names can be used to configure the behavior of the server. 
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send("HI!!!!");
    res.render('home.ejs');
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!!!");
})