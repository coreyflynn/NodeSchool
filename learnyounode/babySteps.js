//grab command line arguments
var argv = process.argv.slice(2,process.argv.length);

//add the numbers in the input
var sum = 0;
argv.forEach(function(o){sum += Number(o);});

//print the result
console.log(sum);