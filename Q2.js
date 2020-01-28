var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end("Welcome to Uki. I am Nithilan");
}).listen(8000);
