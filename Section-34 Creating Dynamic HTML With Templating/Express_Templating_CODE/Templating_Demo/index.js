const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

// Assigns setting name to value. You may store any value that you want, but certain names can be used to configure the behavior of the server. 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    // res.send("HI!!!!");
    // res.render('home.ejs');
    res.render('home');
})

//Loops in EJS
app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    // res.render('cats', { allCats: cats })
    res.render('cats', { cats })
})

//Subreddit Template Demo
app.get('/r/:subreddit', (req, res) => {
    const{ subreddit } = req.params;
    const data = redditData[subreddit];
    console.log(data);
    if(data) {
        res.render('subreddit', { ...data });
    }
    else {
        res.render('notfound', { subreddit });
    }
})

//Passing Data To Templates
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    // res.render('random', {rand: num});
    // res.render('random', {num: num});
    res.render('random', { num });
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!!!");
})