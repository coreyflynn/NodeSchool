var http = require('http');
var map = require('through2-map');

// get the port to listen on as the first command line argument
var port = process.argv[2];

// create a server that only responds to POST requests and returns an uppercased
// version of the request body
var server = http.createServer( function (req,res){
	if (req.method == 'POST'){
		req.pipe(map(function (chunk){
			return chunk.toString().toUpperCase();
		})).pipe(res);
	}
});

// start the server on the requested port
server.listen(port);
console.log('listening on port ' + port);