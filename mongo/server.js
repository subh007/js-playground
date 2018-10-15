/**
 * Created by subh on 15/10/18.
 */
var express = require('express')
, mongodb = require('mongodb');

app = express.createServer();

app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({secret: 'my secret'}));

app.set('view engine', 'jade');
app.set('view option', {layout: false});

app.get('/', function (req, res) {
    res.render('index', {authenticated: false});
});

app.get('/login', function (req, res) {
    res.render('login');
});

app.get('/signup', function (req, res) {
    res.render('signup');
});

app.listen(3000);
