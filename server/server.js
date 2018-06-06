const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
const {generateMessage, generateLocationMessage} = require('./utils/message.js')
// console.log(__dirname + '/../public');
// console.log(publicPath);
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket) =>{
  console.log('New user connected');


socket.emit('newMessage', generateMessage('Admin', 'Welcome to chat app'));

socket.broadcast.emit('newMessage',generateMessage('Admin','New User joined'));

socket.on('createMessage',(message,callback) =>{
  console.log('createMessage', message);
  io.emit('newMessage',generateMessage(message.from,message.text));
  callback();
});

socket.on('createLocationMessage',(coords) => {
  io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude ));
});

socket.on('disconnect',() =>{
  console.log('User was disconnected');
});
});

server.listen(3000,()=>{
   console.log(`Server is up on ${port}`);
 });
