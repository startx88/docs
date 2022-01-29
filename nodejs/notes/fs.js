const fs = require('fs');

// write file into directory
fs.writeFileSync('test.txt', 'Hello world!');

// read file into directory
const s = fs.readFileSync('test.txt');
console.log(s.toString('utf-8'));