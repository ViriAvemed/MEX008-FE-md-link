#!/usr/bin/env node
const readFileMd = require('./modules/readFileMd');
const typeOfFile = require('./modules/restrictFile');
const convertFile = require('./modules/converFiletoHTML');
const argv = require('minimist');

const [A,B,...args] = process.argv;


const mdLinks =(pathFile,options)=>{
  if(typeOfFile(pathFile)){

    readFileMd(pathFile)
      .then((data) =>{
        // console.log(convertFile(data));
      });



  //
  // const promise = new Promise ((resolve, reject) => {
  //   if (typeOfFile())   {
  //     resolve (readFileMd())
  //   } else if (convertFile()){
  //
  //   }else {
  //     reject;
  //     console.error()
  // }
  //
  // })
  }else {
    // console.log("archivo inválido");
    // return  "Archivo inválido";
  }
};

const options ={
  validate: true,
  stats: false
}

// mdLinks(process.argv[2]);
console.log(process.argv.slice(4),options);
