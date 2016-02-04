var express = require('express');
var app = express();
var sub = express()


app.get('/api/*', function(req, res, next) {
    console.log('sss');
    // res.send('hello world');
    next('route');
}, function(req, res) {
    console.log('xxx');
    res.send('ok');
});

app.get('/api/welcome', function(req, res, next) {
    res.send('welcome sub')
});

app.listen(3000);
