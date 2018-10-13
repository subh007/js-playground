/**
 * Created by subh on 13/10/18.
 */
var request = require('superagent');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

options = {
    'X-TransactionId': '9999'
    , 'X-FromAppId': 'node'
    , 'Real-Time': true
    , 'Accept': 'application/json'
}

module.exports = function search(query, fn) {
    request.get('https://192.168.17.17:8443/aai/v11/examples/' + query)
        .set(options)
        .auth('AAI', 'AAI')
        .end(function (res) {
            if (res.status == 200) {
                console.log(res.body)
                return fn(null, JSON.stringify(res.body, null, 2));
            } else {
                fn(new Error('bad api'));
            }
        });
}