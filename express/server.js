/**
 * Created by subh on 13/10/18.
 */

var express = require('express');
var generate = require('./search')

var app = express.createServer();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('view options', {layout: false});

console.log(app.set('views'));

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/generate', function (req, res, next) {
    generate(req.query.q, function (err, tweet) {
       if (err) return next(err);
       res.render('search', {search: req.query.q, result: tweet});
   }) 
});
app.listen(3000);