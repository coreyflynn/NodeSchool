var httpCollect = require('./httpCollectModule');

// grab the urls that we are going to read from command line input
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

// read the contents of the url and print it
httpCollect(url1,function(err,data1){
  httpCollect(url2,function(err,data2){
    httpCollect(url3,function(err,data3){
      console.log(data1);
      console.log(data2);
      console.log(data3);
    });
  });
});

