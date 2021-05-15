const fs=require('fs');
const path=require('path');
const directory=process.argv[2];
const extension=`.${process.argv[3]}`;
//filtra los archivos segun extencion y dentro del directorio indicado
fs.readdir(directory, (err,list)=>{
    if(err){
        throw err
    }
    list.forEach(file=>{
        if(path.extname(file)===extension){
            console.log(file);
        }
    });
});
