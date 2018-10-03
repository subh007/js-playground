/**
 * Created by subh on 2/10/18.
 */

var connect = require('connect')
    , fs = require("fs")
    , time = require("./request-time");

// create server
var server = connect.createServer();

server.use(function (req, res, next) {
    console.error(' %s %s', req.method, req.url);
    next();
});

server.use(time({time: 500}));

server.use(function (req, res, next) {

    if ('GET' == req.method && '/images' == req.url.substr(0, 7)) {
        fs.createReadStream(__dirname + req.url).pipe(res);
        res.writeHead(200, {'Content-Type': 'application/jpeg'})
    } else {
        // let middleware handle it
        next();
    }
});

// fast handler
server.use("/a", function (req, res, next) {
    console.error('a is invoked');
   res.writeHead(200);
   res.end('fast');
});

// slow handler
server.use("/b", function (req, res, next) {
    console.error('b is invoked');
    res.writeHead(200);

    setTimeout(function () {
        res.writeHead(200);
        res.end('slow');
    }, 1000);
});

server.use(function (req, res, next) {
    // pipeline termination
    res.writeHead(404);
    res.end('not found');
});

server.listen(3001);