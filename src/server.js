const { serverHttp } = require("./app.js");
require('./websocket.js');

serverHttp.listen(3000, ()=>{
    console.log('SERVER IS RUNNING')
})