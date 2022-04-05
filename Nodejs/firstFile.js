const fs = require("fs");
// create a new File 
// fs.writeFileSync('read.txt',"Dogesh no lodo");
// fs.writeFileSync('read.txt',"Dogesh chutiyo");

//Add Texts To the file
// fs.appendFileSync('readwrite.txt',' BC ');

//rename File Name
// fs.renameSync('read.txt', 'readwrite.txt');

//print data from file
const data = fs.readFileSync('readwrite.txt','utf8');
console.log(data);


//delete file 
// fs.unlinkSync('readwrite.txt');