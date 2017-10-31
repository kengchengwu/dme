const express = require('express');
const app = express();
const port = 80;

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.use('/content', express.static('public/content'));

app.listen(port, function () {
  console.log('App listening on port:'+port);
})