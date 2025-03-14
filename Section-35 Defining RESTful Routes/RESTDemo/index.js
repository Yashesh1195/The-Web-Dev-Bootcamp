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
    id: 1,
    username: "Todd",
    comment: "lol that is so funny",
  },
  {
    id: 2,
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: 3,
    username: "Sk8erBoi",
    comment: "Plz delete your account, Todd",
  },
  {
    id: 4,
    username: "onlysayswoof",
    comment: "woof woof woof",
  },
];

// Index /comments :- GET- Display all comments
app.get('/comments', (req, res) => {
  res.render('comments/index', { comments })
})

// New /comments/new :- GET- Form to create new comment 
app.get('/comments/new', (req, res) => {
  res.render('comments/new')
})

//  Create /comments :- POST- Creates new comment on server
app.post('/comments', (req, res) => {
  // console.log(req.body);
  const { username, comment } = req.body;
  comments.push({username, comment});
  // res.send("IT WORKED!!!!");
  res.redirect('/comments');
})

//Show /comments/:id :- Get Details for one specific comment
app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === parseInt(id));
  res.render('/comments/show', {comment})

})

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  // res.send("POST /tacos response");
  const { meat, qty } = req.body;
  // console.log(req.body);
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
// GET /comments/:id = GET one comment (using ID)
// PATCH /comments/:id = Update one comment
// DELETE /comments/:id = Destroy one comment
