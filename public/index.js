var socket = io();

socket.on('connect',function () {
  console.log('connected to server');

socket.emit('createMessage',{
  to: 'ABC',
  text: 'Hey this is prince'
});

});

socket.on('disconnect', function () {
  console.log('disconnected');
});

socket.on('newMessage',function (Message) {
  console.log('New Message',Message);
});
