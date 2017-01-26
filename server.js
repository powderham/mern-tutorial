import config from './config';
import express from 'express';
import fs from 'fs';
const server = express();

server.get('/', (req, res) => {
  res.send("Working!")
});

// Before using the express middleware, this is how you make a route
server.get('/about.html', (req, res) => {
  fs.readFile('./about.html', (err, data) => {
    res.send(data.toString());
  });
});

server.listen(config.port, () => {
  console.info('Express listening on port: ', config.port);
});
