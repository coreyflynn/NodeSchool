var net = require('net');

//get port number to serve on
var port = process.argv[2];

//create a server
var server = net.createServer(function(socket){
    var d = new Date();
    var year = d.getFullYear();
    var month = add_zero(d.getMonth() + 1);
    var day = add_zero(d.getDate());
    var hours = add_zero(d.getHours());
    var minutes = d.getMinutes();
    
    var date_string = year + '-' + month + '-' + day  + ' ' + hours + ':' + minutes + '\n';
    socket.end(date_string);
    
});

function add_zero(input){
	input = input.toString();
	return (input.length == 1) ? '0' + input : input;
}

//start the server
server.listen(port);