/* Chapter 8 - Working with http server */
/* 8.3 - Routing & Serving Files*/
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const routeMap = {
    '/'       : './src/index.html',
    '/about'   : './src/about.html',
  };
  let readStream; 
  if(Object.keys(routeMap).includes(req.url)) {
    readStream = fs.createReadStream(routeMap[req.url]);
  } else {
    readStream = fs.createReadStream('./src/404-not-found.html');
  }
  res.writeHead(200, {'Content-type': 'text/html'});
  readStream.pipe(res);
});

server.listen('8080');
console.log('Http Server is up and running at: localhost:8080');