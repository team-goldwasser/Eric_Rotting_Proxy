var express = require('express');
const path = require('path');
var app = express();

app.use('/m/:title_url', express.static(path.join(__dirname, '../dist')));

app.all('/showtime/*', (req, res) => { res.redirect(`http://localhost:9002${req.path}`)});

module.exports = app;