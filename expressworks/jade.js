var express = require('express');
var path = require('path');

// get the port to listen on
var port = process.argv[2];

// configure the express app to use jade templates and set it to read them from the
// templates directory
var app = express();
app.set('views',path.join(__dirname,'templates'));
app.set('view engine','jade');

// respond to GET requests to '/home' with a rendered jade template using the current time
app.get('/home', function (req,res){
	res.render('index', {date: new Date().toDateString()});
});

// listen on the requested port
app.listen(port);