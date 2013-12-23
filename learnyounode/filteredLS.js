var fs = require('fs');

// grab the directory from which we are going to list the contents
var dir = process.argv[2];

// list the contents of the directory only if they meet the pased filter
var filter = process.argv[3];
fs.readdir(dir, function(err, list){
  if (err) throw err;
  list.forEach(function(o){
    re = new RegExp('\\.' + filter);
    if (o.match(re)){
      console.log(o);
    }
  });
});