/**
 * Created by subh on 29/9/18.
 */

// create http server
// require('http').createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('<h1> hello world</h1>')
// }).listen(3000);

// create tcp server
var net = require('net');

var count = 0;
var server = net.createServer(function (conn) {
    count++;

    // set encoding
    conn.setEncoding('utf8');

    // handle connection
    console.log('new connection received !!');
    // send welcome message
    conn.write(
        "welcome to happy land (" + count  + ") :)"
    );

    conn.on('close', function () {
        count--;
        console.log("someone left the chat");
    });

    conn.on('data', function (data) {
        console.log(data);
    });
});

server.listen(3000, function () {
    console.log('server listening on *:3000')
});