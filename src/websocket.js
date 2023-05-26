const { io } = require('./app.js');

const users = [];
const messages = [];


io.on('connection',(socket)=>{
   socket.on('access_room',data=>{
      
       socket.join(data.room);


       const userInRoom = users.find(user=> user.username === data.username && user.room === data.room);


       if(userInRoom){
           userInRoom.socket_id = socket_id
       }else{
        users.push({
            room:data.room,
            username:data.username,
            socket_id:socket.id
            })
        }
    })
 
 
    socket.on('message',data=>{
 
 
        messages.push({
            room:data.room,
            username:data.username,
            text:data.message
        })
 
 
        io.to(data.room).emit('message', {
            text:data.message
        });
 
 
    })
 })
 