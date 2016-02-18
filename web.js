var error = require('./error');
var mongo_client = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/'
module.exports = require('express')();
module.exports.get('/', function(req, res) {
    error(req, res, 404);
});
