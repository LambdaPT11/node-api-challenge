const express = require('express');
const projectRouter = require('./projects/projectRouter');
const actionRouter = require('./actions/actionRouter');

const server = express();


// middleware - built in
server.use(express.json());
server.use('/api/project', projectRouter);
server.use('/api/action', actionRouter);

// This get call works postman
server.get('/', (req, res) => {
  res.send(`<h2>Server home is running!</h2>`);
});


module.exports = server;
