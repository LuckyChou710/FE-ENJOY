const http = require('http');
const argv = require('minimist')(process.argv.slice(2));

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello node');
})

server.listen(port,hostname,()=>{
    console.log(argv);
    console.log(`服务器运行在${hostname}`);
})