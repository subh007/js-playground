/**
 * Created by subh on 30/9/18.
 */


var qs = require('querystring')
    , https = require('https');

var startDate = process.argv.slice(2).join('').trim();
// console.log(startDate);

if (!startDate) {
    return console.log('\n Usage: node index <data>\n');
}

https.request({
    host: 'api.nasa.gov'
    , path: '/neo/rest/v1/neo/3542519?' + qs.stringify({start_date: startDate
        , api_key: 'DEMO_KEY'})
    , headers: {'Content-Type': 'application/json'}
}, function (res) {
    var body = '';
    //res.setEncoding('utf8');

    res.on('data', function (chunk) {
        body += chunk;
    });

    res.on('end', function () {
        // console.log(res.uri)
        // console.log(body);

        console.log(' === today\'s ('+ startDate +  ') closest Asteroid ==== ');
        var asteroid = JSON.parse(body);
        console.log('  \033[90m name : ' + asteroid.name + '\033[39m');
        console.log('  \033[90m magnitude : ' + asteroid.absolute_magnitude_h + '\033[39m');
        console.log('  \033[90m hazardous : ' + asteroid.is_potentially_hazardous_asteroid + '\033[39m');
    });
}).end();