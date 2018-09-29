/**
 * Created by subh on 29/9/18.
 */
// require('http').createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('<h1>hello world</h1>');
// }).listen(3001);


// image server
// require('http').createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'image/png'});
//     var stream = require('fs').createReadStream("pnggrad16rgb.png");
//
//     stream.on('data', function (data) {
//         res.write(data);
//     });
//
//     stream.on('end', function () {
//         res.end();
//     })
// }).listen(3001);

// efficient image server
require('http').createServer(function (req, res) {
    console.log(req);
    res.writeHead(200, {'Content-Type': 'image/png'});
    require('fs').createReadStream("pnggrad16rgb.png").pipe(res);
}).listen(3001);