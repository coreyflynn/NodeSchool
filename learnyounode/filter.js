module.exports = function(dir,extension, callback){
  var fs = require('fs');
  var re = new RegExp('\\.' + extension);
  fs.readdir(dir,function(err,list){
    if (err){ 
      return callback(err);
    }
    
    list = list.filter(function (file){
      return re.test(file);
    });
    
    callback(null,list);
  });
};