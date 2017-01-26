import http from 'http';

// Creating a new server
// Argument: subscribe to event emitter (User will see anything in the response obj, request can read from the request)
const server = http.createServer((req, res) => {
  res.write('Hello HTTP!\n');
  setTimeout(() => {
    res.write('I can stream!\n');
    res.end();
  }, 3000);
});

// Running the server on the specified port
server.listen(8080);
