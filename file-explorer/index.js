/**
 * Created by subh on 28/9/18.
 */
var fs = require('fs')
    , stdin = process.stdin
    , stdout = process.stdout

fs.readdir(".", function (err, files) {

   if (!files.length) {
       console.log("no files to show");
   }

   var stats = [];
    function file(i) {
        var filename = files[i];

        fs.stat(__dirname + '/' + filename, function (err, stat) {
            stats[i] = stat;
            if (stat.isDirectory()) {
                console.log('    ' +i+ ' \033[36m' + filename + '/\033[39m');
            } else {
                console.log('    ' +i+ ' \033[96m' + filename + '\033[39m');
            }

            i++;
            if (i == files.length) {
                read()
            } else {
                file(i);
            }
        })
    }
   file(0)

    function read() {
        stdout.write(' enter your choice :')
        stdin.resume();

        stdin.on('data', option)
    }

    function option(data) {
       var filename = files[Number(data)]
        if (!filename) {
            stdout.write('enter your choice:')
        } else {
           stdin.pause();

           if (stats[Number(data)].isDirectory()) {
               fs.readdir(__dirname + '/' + filename, function (err, files) {
                   files.forEach(function (file) {
                       console.log(file);
                   })
               })
           } else {
               fs.readFile(__dirname + '/' + filename, 'utf8',function (err, data) {
                   console.log('');
                   console.log(data);
                   console.log('\033[90m' + data.replace(/(.*)/g, '   $1') + '\033[39m');
               });
           }

        }
    }
});

