module.exports = function(url,callback){
  var http = require('http');
  var concatstream = require('concat-stream');
  http.get(url, function(res){
    // error out if needed
    res.on('error',function(){
      callback(new Error('httpCollect error'));
    });
    
    // pipe the response into concat-stream to collect all of it
    res.pipe(concatstream(function(data){
      data_str = data.toString();
      callback(null,data_str);
    }));
  });
}