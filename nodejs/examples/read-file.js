const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'my.txt'), 'utf-8', (error, res) => {
  if (error) return;
  console.log(res)
})