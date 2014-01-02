var express = require('express');
var path = require('path');

// get the port to listen on
var port = process.argv[2];

// configure the express app to use jade templates and set it to read them from the
// templates directory.  
var app = express();
app.set('views',path.join(__dirname,'templates'));
app.set('view engine','jade');

// Configure the app to use urlencoded() middleware from the Connect library
app.use(express.urlencoded());

// respond to GET requests to '/home' with a rendered jade template using the current time
app.get('/home', function (req,res){
	res.render('index', {date: new Date().toDateString()});
});

// route '/form' requests to a string reverser
app.post('/form',function (req,res){
	res.end(req.body.str.split('').reverse().join(''));
});

// listen on the requested port
app.listen(port);