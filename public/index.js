var socket = io();

socket.on('connect',function () {
  console.log('connected to server');

// socket.emit('createMessage',{
//   to: 'Prince',
//   text: 'Yup that works for me. '
// });

});

socket.on('disconnect', function () {
  console.log('disconnected from Server');
});

socket.on('newMessage',function (Message) {
  console.log('New Message',Message);
});
