const path = require("path");

const typeOfFile = (inputFile) => {
   return path.extname(inputFile) === ".md";
 };

module.exports = typeOfFile;





