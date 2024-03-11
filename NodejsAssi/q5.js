// Importing the path module
const path = require('path');


const filePath = '/input.txt';

const fileName = path.basename(filePath);
console.log('File name:', fileName);


const directoryName = path.dirname(filePath);
console.log('Directory name:', directoryName);


const fileExtension = path.extname(filePath);
console.log('File extension:', fileExtension);


const absolutePath = path.join(__dirname, 'input.txt');
console.log('Absolute path:', absolutePath);


