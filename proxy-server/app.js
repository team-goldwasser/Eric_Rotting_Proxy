var express = require('express');
const path = require('path');
var app = express();

app.use('/m/:title_url', express.static(path.join(__dirname, '../dist')));

module.exports = app;