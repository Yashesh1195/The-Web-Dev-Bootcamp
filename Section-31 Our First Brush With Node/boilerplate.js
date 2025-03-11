// All file system operations have synchronous, callback, and promise-based forms, and are accessible using both CommonJS syntax and ES6 Modules (ESM).

const fs = require('fs');
const folderName = process.argv[2] || "Project";
// console.log(fs);

//Async Version of mkdir
// fs.mkdir('Project1/ProjectFiles', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!!");
//     if (err) throw err;
// }); 

//Sync version of mkdir
try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, ' ');
    fs.writeFileSync(`${folderName}/style.css`, ' ');
    fs.writeFileSync(`${folderName}/script.js`, ' ');
}
catch(e) {
    console.log("Something went wrong!!");
    console.log(e);
}
console.log("I COME AFTER MKDIR IN THE FILE!!!");