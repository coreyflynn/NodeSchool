var http = require('http');
var fs = require('fs');

// get the port number to listen on
var port = process.argv[2];

// get the location of the file to serve
var fil_loc = process.argv[3];

// create the http server and set it to respond to each request with the content of the
// provided file
var server = http.createServer( function (req,res){
	var readable = fs.createReadStream(fil_loc);
	readable.pipe(res);
});

// set the server to listen on the provided port
server.listen(port);
console.log('listening on port ' + port);