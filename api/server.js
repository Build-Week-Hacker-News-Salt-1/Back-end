const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");


const userRouter = require('./users/user-rtr')
const server = express();

server
  .use(helmet())
  .use(express.json())
  .use(cors())
  .use(morgan("combined"));

server.get("/", (req, res) => {
  res.send("SERVER IS ON");
});

server.use('/api/users', userRouter)
module.exports = server