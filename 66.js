const http = require('http');
const fs = require('fs');

const  fileContent = fs.readFileSync('65.js')

const sever = http.createServer((req, res)=>{
    red.writeHead(200, {'Content-Type': 'text/html'});
    res.end(fileContent);
}
);

server.listen(80,'127.0.0.1',()=>{
    console.log("Listening to the port 80")
});
