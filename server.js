const http = require('node:http'); //node:http or http only is the same thing

const server=  http.createServer(function (req, res) {
    if(req.url === '/getSecretData'){
        res.end("There is no secret");
    }
    res.end("Hello node from server");
});
server.listen(2222);