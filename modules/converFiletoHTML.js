const MarkdownIt = require("markdown-it");
const readFileMd = require('./readFileMd');
md = new MarkdownIt();



const convertFile = () => {
  const newFile = md.render(readFileMd());
  console.log(newFile);
};

convertFile();



module.exports = convertFile;
