var express = require('express');
var fs = require('fs');
var http = require('http');
var https = require('https');
var app = express();
var api = require('./api');
var web = require('./api');
var error = require('./error');
var privateKey = fs.readFileSync('secret/private.pem', 'utf-8');
var certificate = fs.readFileSync('secret/secret.crt', 'utf-8');
var credentials = {
    key: privateKey,
    cert: certificate
};

var PORT = 80;
var SSLPORT = 443;

var httpServer = http.createServer(app).listen(PORT, function() {

    console.log('App listening at http://localhost:%s', PORT);
});

var httpsServer = https.createServer(credentials, app).listen(SSLPORT, function() {
    console.log('App listening at https://localhost:%s', SSLPORT);
});

app.use(express.static('assets'));

app.use('/api', api);
app.use('/web', web);
app.get('/api/v1', function(req, res) {
    console.log('and this matches too');
    res.send('hello');
});

app.get('/404', function(req, res) {
    error(req, res, 404);
});

