var result=0;
for(var i=2;i<process.argv.length;i++){ //comienza a partir del segundo elemento del arreglo, los primeros dos son info
    result+=Number(process.argv[i])
}
console.log(result)
