const express = require('express');
const path = require('path');


const app = express();
console.log(__dirname);

app.use(express.static(path.join(__dirname, '/public')))
app.get("/", (req, res) => {
   res.send("Hello World");
})
app.get("/data", (req, res) => {
  res.json([
     { 
       id: 1, 
       name: "Spark",
     },
     { 
      id: 2, 
      name: "Spark",
    },
    { 
      id: 1, 
      name: "Spark",
    }
  ])
})
app.listen(8000,()=>{
  console.log("port 8000 listening");
})