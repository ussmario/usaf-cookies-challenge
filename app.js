const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

// app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.post('/login', (req, res) => {
  let userName = req.body;
  userName.name && res.cookie('name', userName.name);
  res.redirect('/hello');
})

app.get('/hello', (req, res) => res.json(`Welcome ${req.cookies.name}!`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))