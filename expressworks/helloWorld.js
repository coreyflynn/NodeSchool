var express = require('express');

// get the port on which the app will listen
var port = process.argv[2];

// start the express app on the requested port and respond to GET requests at '/home'
// with 'Hello Wold'
var app = express();
app.get('/home',function (req,res){
	res.end('Hello World!');
});
app.listen(port);