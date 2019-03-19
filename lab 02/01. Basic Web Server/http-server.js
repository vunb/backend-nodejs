var http = require('http');

//create a server object:
http.createServer((req, res) => {
    
  //write a response to the client
  res.write('Hello World!');

  //end the response
  res.end();
}).listen(3000, () => console.log('Server ready!')) 
