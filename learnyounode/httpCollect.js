var http = require('http');
var concatstream = require('concat-stream');

// grab the url to process from the first command line argument
url = process.argv[2];

// send a get request and collect all data in the stream
http.get(url, function(res){
  // error out if needed
  res.on('error',console.error);
  
  // pipe the response into concat-stream to collect all of it
  res.pipe(concatstream(function(data){
    data_str = data.toString();
    console.log(data_str.length);
    console.log(data_str);
  }));
});