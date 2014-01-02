var http = require('http');
var url = require('url');

// get the port to listen on
var port = process.argv[2];

// create a serve that responds to get requests by routing them to either of '/api/parsetime'
// or '/api/unixtime' and returns JSON content back
var server = http.createServer( function (req,res){
	if (req.method == 'GET'){
		var req_object = url.parse(req.url,true);
		var d = new Date(req_object.query.iso);
		if (req_object.pathname == '/api/parsetime'){
			var hour = d.getHours();
			var minute = d.getMinutes();
			var second = d.getSeconds();
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.write('{"hour":' + hour + ',"minute":' + minute + ',"second":' + second + '}');
			res.end();
		}
		if (req_object.pathname == '/api/unixtime'){
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.write('{"unixtime":' + d.getTime() + '}');
			res.end();
		}
	}
});

// start the server listening on the requested port
server.listen(port);
console.log('listening on port ' + port);