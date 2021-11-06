const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

app.post('/login', (req, res) => {
  //postman post request {"name": "Mario"} in body as json
  let userName = req.body;
  //if necessary options can be defined here and included in res.cookie
  let options = {
    maxAge:9000000,
    httpOnly: true
  }
  userName.name && res.cookie('name', userName.name, options);
  res.redirect('/hello');
})

app.get('/hello', (req, res) => res.json(`Welcome ${req.cookies.name}!`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))