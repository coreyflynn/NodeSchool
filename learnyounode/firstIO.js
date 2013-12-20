var fs = require('fs');

//grab the firt command line argument, assume it is a file path to be counted
var f = process.argv[2];

//open the file and convert it to a string.  Once converted, split the string on newlines and
//print out the number of lines
data = fs.readFileSync(f);
dataA = data.toString().split('\n');
console.log(dataA.length -1);