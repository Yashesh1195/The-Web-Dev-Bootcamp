const express = require("express");
const app = express();
const path = require("path");

// It is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and it is based on body parser. 
app.use(express.urlencoded({ extended: true }));
// It is a built-in middleware function in Express. It parses incoming requests with JSON payloads and it is based on body parser. 
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const comments = [
  {
    username: "todd",
    comment: "lol that is so funny",
  },
  {
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    username: "Sk8erBoi",
    comment: "Plz delete your account, Todd",
  },
  {
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

// GET- Display all comments :- /comments
app.get('/comments', (req, res) => {
  res.render('comments/index', { comments })
})

// GET- Form to create new comment :- /comments/new
app.get('/comments/new', (req, res) => {
  res.render('comments/new')
})

// POST- Creates new comment on server :- /comments 
app.post('/comments', (req, res) => {
  // console.log(req.body);
  const { username, comment } = req.body;
  comments.push({username, comment});
  res.send("IT WORKED!!!!");
})

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  // res.send("POST /tacos response");
  const { meat, qty } = req.body;
  res.send(`OK, Here are your ${qty} ${meat} tacos`);
});

app.listen(3000, () => {
  console.log("ON PORT 3000!");
});

// username
// express.text

// bob - hello!

// GET /allcomments
// GET /all
// GET /showmeallcomments
// GET /showmeallcommentsnow

// POST /newcomment
// POST /makecomment

// GET /comments = list all comments
// POST /comments = Create a new comment
// GET /comments/:id = GET one comment
// PATCH /comments/:id = Update one comment
// DELETE /comments/:id = Destroy one comment
