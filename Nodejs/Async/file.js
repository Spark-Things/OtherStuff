const fs = require("fs");

// fs.writeFile('read.txt',"Dilu Madarchod",(err) =>{
//   console.log("Fcuk U ");
// })

// fs.appendFile('read.txt'," ShishiMaru", (hip) =>{
//   console.log("TAsk completed");
// })

fs.readFile('read.txt','utf-8',(err,data) =>{
    console.log(data);
})