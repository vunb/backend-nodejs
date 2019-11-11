const fs = require('fs');
const util = require('util');

async function readTextFile() {
  var readFile = util.promisify(fs.readFile);
  var result = await readFile('./readme.txt');

  console.log(result.toString());
}

// Thực thi chương trình
readTextFile();
