/**
 * Created by subh on 2/10/18.
 */

var connect = require('connect')
    , fs = require("fs");

// create server
var server = connect.createServer();

server.use("/images", function (req, res, next) {
   fs.createReadStream(__dirname + '/sample.png').pipe(res);
});
server.listen(3001);