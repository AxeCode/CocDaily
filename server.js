var http = require("http");
var fs = require('fs');
http.createServer(function(request, response) {
    fs.readFile('index.html', function(err, data) {
        if (err) {
            response.writeHead(404, {
                'Content-Type': 'text/html'
            });
        } else {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(data.toString());
        }
        response.end();
    });
}).listen(80);
console.log('Server running at http://127.0.0.1:80');
