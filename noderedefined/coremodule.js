const path = require('path');
//For getting filename
const filename = path.join(__filename);

//For getting basename means end filename in the directory.
const basen = path.basename(filename);

//For getting the extension of file
const ext = path.extname(filename);

console.log(filename);
console.log(basen);
console.log(ext);