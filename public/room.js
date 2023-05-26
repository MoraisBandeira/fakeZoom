const socket = io();

const urlSearch =  new URLSearchParams(window.location.search);
const username = urlSearch.get('user');
const room = urlSearch.get('room');


socket.emit("access_room",{
   username,
   room
})


document
.getElementById('floatingTextarea2')
.addEventListener('keyup',event=>{
   const message = event.target.value;
   const data = {
       room,
       message,
       username
   }


   socket.emit('message',data)
})


socket.on('message',data=>{
   document
   .getElementById('floatingTextarea2').value = data.text
})
