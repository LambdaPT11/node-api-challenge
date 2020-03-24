const express = require('express');
const userRouter = require('./users/userRouter.js');

const server = express();


// middleware - built in
server.use(express.json());
server.use('/api/users', userRouter)

// This get call works postman
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});


module.exports = server;
