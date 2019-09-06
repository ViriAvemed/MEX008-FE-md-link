#!/usr/bin/env node
const readFileMd = require('./modules/readFileMd');
const typeOfFile = require('./modules/restrictFile');
const searchLinks = require('./modules/search-links');
// const getStats = require('./modules/state');
const getValidation = require('./modules/validate');


const mdLinks =(pathFile)=>{
  if(typeOfFile(pathFile)){
    readFileMd(pathFile)
      .then((data) => {
        return searchLinks(data);
      })
      .then(res => {
        console.log(res);
        getValidation(res);
      })
      .then( arr => {
        console.log(arr);
        return `Total: ${arr.length}`;
      })

  } else {
    console.log("Archivo inválido");
  }
};


mdLinks(process.argv[2]);



// const fetch = require('node-fetch');

// fetch('https://las.leagueoflegends.com')
//   .then((res) => {
//     res.url;
//     res.statusText;
//
//     console.log(`${res.url}  ${res.statusText}`);
// });




