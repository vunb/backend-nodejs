const http = require('http');
const queryString = require('query-string');

const server = http.createServer((req, res) => {

  console.log('Request path: ', req.method, req.url)
  console.log('Query: ', JSON.stringify(queryString.parseUrl(req.url)))

  res.write('Hello world!');
  res.end();
});

server.listen(3000, () => {
  console.log('Start server ok!');
});
