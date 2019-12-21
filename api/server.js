const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");


const userRouter = require('./users/user-rtr')
const authRouter = require('./auth/auth-rtr')
const conRouter = require('./content/content-rtr')
const server = express();

server
//   .use(helmet())
  .use(express.json())
  .use(cors())
  .use(morgan("combined"));

server.get("/", (req, res) => {
  res.send("SERVER IS ON");
});

server.use('/api/users', userRouter)
server.use('/api', authRouter)
server.use('/api/salty', conRouter)
module.exports = server