/* Chapter 8 - Working with http server */
/* 8.1 - Bare Minimum configuration to run a server */
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Voila! Http Server is up and running');
  res.end();
});

server.listen('8080');
console.log('Http Server is up and running at: localhost:8080');