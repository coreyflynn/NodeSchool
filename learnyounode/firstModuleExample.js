var filter = require('./filter');

// grab the directory from which we are going to list the contents
var dir = process.argv[2];

// list the contents of the directory only if they meet the pased filter
var extension = process.argv[3];
filter(dir,extension, function(err,list){
  if (err) throw err;
  
  list.forEach(function(o){
    console.log(o);
  })
});