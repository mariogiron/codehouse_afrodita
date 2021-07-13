const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.end('Este es mi server bonito');
});

server.listen(3000);