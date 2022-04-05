 const fs = require('fs');

 const biodata = {
   name: 'Sapro',
   ling: 'no',
   age: '16',
   address: 'vandana masi pg'
 }

 const jsondata = JSON.stringify(biodata);

 fs.writeFile('data.json',jsondata,(err) =>{
    console.log("done");
 })

 fs.readFile("data.json","utf-8",(err,data) =>{
   const orgdata = JSON.parse(data);
    console.log(data);
    console.log(orgdata);
 })