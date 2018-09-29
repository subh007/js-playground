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

var count = 0
    , users = {};

var server = net.createServer(function (conn) {
    var nickname;
    count++;

    // set encoding
    conn.setEncoding('utf8');

    // handle connection
    console.log('new connection received !!');
    // send welcome message
    conn.write(
        "> welcome to happy land (" + count  + ") :) \n > please enter your name :"
    );

    conn.on('close', function () {
        count--;
        delete users[nickname];
        broadcast('>' + nickname + 'left the chat');
    });

    conn.on('data', function (data) {
        console.log(data);
        data = data.replace('\r\n', '');

        // first from client is nickname

        // if nickname is not initialized the log this
        // nickname joined
        if (!nickname) {
            if (users[data]) {
                conn.write('>nickname is already in use. please try again');
                return;
            } else {
                nickname = data;
                users[nickname] = conn;

                broadcast('> new user ' + nickname + ' has joined \n');
            }
        } else {
            broadcast('> ' + nickname + ': ' + data + '\n');
        }
    });

    function broadcast(msg, exceptMyself) {
        for (var i in users) {
            if (!exceptMyself || i != nickname) {
                users[i].write(msg);
            }
        }
    }
});

server.listen(3000, function () {
    console.log('server listening on *:3000')
});