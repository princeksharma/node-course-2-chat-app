const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
// console.log(__dirname + '/../public');
// console.log(publicPath);
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket) =>{
  console.log('New user connected');

// socket.emit('newEmail', {
//   from : 'prince@gmail.com',
//   text: 'Hey Whats going on ',
//   createAt: 123
// });
//
// socket.on('createEmail',(newEmail) =>{
//   console.log('create Email', newEmail);
// });

socket.emit('newMessage', {
  from : 'prince',
  text: 'Hey Wassup ',
  createAt: 1234
});

socket.on('createMessage',(message) =>{
  console.log('create Message', message);
});

socket.on('disconnect',() =>{
  console.log('User was disconnected');
});
});

server.listen(3000,()=>{
   console.log(`Server is up on ${port}`);
 });
