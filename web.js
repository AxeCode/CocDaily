var error = require('./error')
module.exports = require('express')()
module.exports.get('/', function(req, res) {
    error(req, res, 404);
})
