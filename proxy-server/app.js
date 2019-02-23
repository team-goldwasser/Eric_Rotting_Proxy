var express = require('express');
const path = require('path');
var app = express();
// sample path: 'some-host/m/black_panther'
// var pathHandler = (req, res) => {
//   const title = req.path.split('/m/')[1];
//   if (title || title === '') {
//     res.sendFile(path.join(__dirname, '../dist', 'index.html'))
//   } else {
//     res.send('can not find movie').end();
//   }
// }

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use('/m/:title_url', express.static(path.join(__dirname, '../dist')));

app.all('/showtime/*', (req, res) => { res.redirect(`http://localhost:9002${req.path}`)});

module.exports = app;