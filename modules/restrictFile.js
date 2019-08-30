const pathFile = require ("path");


const typeOfFile =() =>{
  if(pathFile.extname("./README.js") === ".md"){
    return true
  }else{
    return false
  }
    };


module.exports=typeOfFile;
