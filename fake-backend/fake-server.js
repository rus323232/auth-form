const http = require('http');
const url = require('url');
const querystring = require('querystring');

function accept(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin' : '*'
    });
    req.setEncoding('utf8');

    req.on('data', function (body) {
        console.log('Body: ' + body);
    });

res.end("Авторизация прошла успешно !");

}

http.createServer(accept).listen(8082);