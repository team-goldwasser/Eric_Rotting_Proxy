var app = require('./app.js');

var port = 9000;

app.listen(port, () => {
  console.log('proxy server is listening on port ' + port);
});


