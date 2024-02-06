// creat web server
// 1. create a server
// 2. create a request handler
// 3. listen for requests

// 1. create a server
const http = require('http');
const server = http.createServer((req, res) => {
  // 2. create a request handler
  if (req.url === '/comments') {
    res.write('Here is a list of comments');
    res.end();
  } else if (req.url === '/contact') {
    res.write('Here is the contact page');
    res.end();
  } else {
    res.write('Here is the homepage');
    res.end();
  }
});

// 3. listen for requests
server.listen(3000);
console.log('Server listening on port 3000');
*/

// Path: comments.js
// create web server
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.write('Here is a list of comments');
    res.end();
  } else if (req.url === '/contact') {
    res.write('Here is the contact page');
    res.end();
  } else {
    res.write('Here is the homepage');
    res.end();
  }
});

server.listen(3000);
console.log('Server listening on port 3000');