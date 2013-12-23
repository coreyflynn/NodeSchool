var net = require('net');

//get port number to serve on
var port = process.argv[2];

//create a server
var server = net.createServer(function(socket){
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    hours = '0' + hours
    
    var date_string = year + '-' + month + '-' + day  + ' ' + hours + ':' + minutes + '\n'; 
    socket.end(date_string);
    
});

//start the server
server.listen(port);