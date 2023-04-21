const http = require('http');

const srever =http.createServer((req,res)=>{
    console.log('request made');
});

Server.listen(3000,'localhost',() =>{
    console.log('listening for request on port 3000');
});