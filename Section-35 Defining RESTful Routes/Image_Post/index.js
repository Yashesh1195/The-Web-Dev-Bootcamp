const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'))
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let posts = [
    {
        id: uuid(),
        username: "MADMAX",
        src: "https://media.istockphoto.com/id/1526986072/photo/airplane-flying-over-tropical-sea-at-sunset.jpg?s=612x612&w=0&k=20&c=Ccvg3BqlqsWTT0Mt0CvHlbwCuRjPAIWaCLMKSl3PCks=",
        caption: "Moving around the world"
    },
    {
        id: uuid(),
        username: "ELEVEN",
        src: "https://images.pexels.com/photos/2916820/pexels-photo-2916820.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "Wander often, wonder always"
    },
    {
        id: uuid(),
        username: "IRONMAN",
        src: "https://images.pexels.com/photos/31146786/pexels-photo-31146786/free-photo-of-scenic-boat-ride-on-dubai-creek-skyline.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "Take only memories, leave only footprints"
    },
    {
        id: uuid(),
        username: "ONYOURLEFT",
        src: "https://images.pexels.com/photos/31096100/pexels-photo-31096100/free-photo-of-historic-harbor-with-medieval-fort-and-deer-statues.jpeg?auto=compress&cs=tinysrgb&w=600",
        caption: "Roads were made for journeys, not destinations"
    }
]

//CRUD Operations using REST

//Index
app.get('/posts', (req, res) => {
    res.render('posts/index', { posts });
})

//New
app.get('/posts/new', (req, res) => {
    res.render('posts/new');
})

//Create
app.post('/posts', (req, res) => {
    const { username, src, caption } = req.body;
    posts.push({id: uuid(), username, src, caption});
    res.redirect('/posts');
})

//Show
app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);
    res.render('posts/show', { post });
})

//Edit
app.get('/posts/:id/edit', (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);
    res.render('posts/edit', { post });

})

//Update
app.patch('/posts/:id', (req, res) => {
    const { id } = req.params;
    const newSRC = req.body.src;
    const newCaption = req.body.caption;
    const foundPost = posts.find(p => p.id === id);
    foundPost.src = newSRC;
    foundPost.caption = newCaption;
    res.redirect('/posts');
})

//Destroy
app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    posts = posts.filter(p => p.id !== id);
    res.redirect('/posts');
})

app.listen(8080, () => {
    console.log("ON PORT 8080!!");
})