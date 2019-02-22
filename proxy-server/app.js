var express = require('express');
const path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/m/:title_url', (req, res) => {
  const titleUrl = req.params.title_url;

  res.redirect('http://localhost:9002/')
  //res.redirect(path.join('http://localhost:9002/', titleUrl));

})

//app.all('/api/restaurant/reviews/*', (req, res) => res.redirect(`http://reviews-api.us-west-2.elasticbeanstalk.com${req.path}`));

module.exports = app;