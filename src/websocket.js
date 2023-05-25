const { io } = require('./app.js');

io.on('connection',(socket)=>{
    console.log(socket.id)
})