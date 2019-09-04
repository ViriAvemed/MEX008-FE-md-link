#!/usr/bin/env node
const readFileMd = require('./modules/readFileMd');
const typeOfFile = require('./modules/restrictFile');
const convertFile = require('./modules/converFiletoHTML');


const mdLinks =(pathFile,options)=>{
  if(typeOfFile(pathFile)){

    readFileMd(pathFile)
      .then((data) =>{
        console.log(convertFile(data));
      });



  }else {
    console.log("archivo inválido");
    return  "Archivo inválido";
  }
};


mdLinks(process.argv[2]);



