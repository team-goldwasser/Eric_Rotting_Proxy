var express = require('express');

var port = 9000;
var app = express();

app.use(express.static('public'));

app.listen(port);

