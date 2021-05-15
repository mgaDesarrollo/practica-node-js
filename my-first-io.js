var fs = require('fs');  //importa libreria file sistem de node

var file=fs.readFileSync(process.argv[2]);
var array=file.toString().split('\n');
console.log(array.length -1);
