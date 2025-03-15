const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");

// It is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and it is based on body parser. 
app.use(express.urlencoded({ extended: true }));
// It is a built-in middleware function in Express. It parses incoming requests with JSON payloads and it is based on body parser. 
app.use(express.json());
app.use(methodOverride('_method'))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
  {
    id: uuid(),
    username: "Todd",
    comment: "lol that is so funny",
  },
  {
    id: uuid(),
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: uuid(),
    username: "Sk8erBoi",
    comment: "Plz delete your account, Todd",
  },
  {
    id: uuid(),
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
  comments.push({username, comment, id: uuid()});
  // res.send("IT WORKED!!!!");
  res.redirect('/comments');
})

//Show /comments/:id :- GET- Details for one specific comment
app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/show', { comment })

})

//Edit /comments/:id/edit :- GET- Form to edit specific comment
app.get('/comments/:id/edit', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === id);
  res.render('comments/edit', { comment });
})

//Update /comments/:id :- PATCH- Updates specific comment on server
app.patch('/comments/:id', (req, res) => {
  // res.send("UPDATING!!!!");
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find(c => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
})

//Destroy /comments/:id :- DELETE- Deletes specific item on server
app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments = comments.filter(c => c.id !== id);
  res.redirect('/comments');
})


// app.get("/tacos", (req, res) => {
//   res.send("GET /tacos response");
// });

// app.post("/tacos", (req, res) => {
//   // res.send("POST /tacos response");
//   const { meat, qty } = req.body;
//   // console.log(req.body);
//   res.send(`OK, Here are your ${qty} ${meat} tacos`);
// });

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
