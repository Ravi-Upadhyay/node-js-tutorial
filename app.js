/* Chapter 8 - Working with http server */
/* 8.2 - Simple Routing */
/* 8.3 - Run Index.js for Complete routing and Serving Static Files*/
const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.write('Voila! Http Server is up and running');
    res.end();
  } else {
    res.write('Did you lost? Page not found');
    res.end();
  }
});

server.listen('8080');
console.log('Http Server is up and running at: localhost:8080');