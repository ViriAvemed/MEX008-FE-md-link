const pathFile = require ("path");

const typeOfFile =() =>{
  return pathFile.extname("./README.md") === ".md";
    };

typeOfFile()

module.exports =typeOfFile;
console.log(typeof typeOfFile())
