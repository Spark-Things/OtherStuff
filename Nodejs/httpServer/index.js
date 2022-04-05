const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) => {
  if(req.url == '/') {
      res.end("Hello from Other Side !!");
  }else if(req.url == '/aboutus'){
    res.end("Hello from AboutUs Side !!");
  }else if(req.url == '/contact'){
    res.end("Hello from Contact Side !!");
  }else if(req.url == '/API'){
    fs.readFile("data.json", "utf-8", (err,data) =>{
      res.writeHead(200,{"content-type": "application/json"})
      const orgdata = JSON.parse(data);
      // console.log(data);
      console.log(orgdata);
      res.end(orgdata[1].name);  
    })
  }else{
    res.end("404 Error");
  }
})

server.listen(8000,"127.0.0.1",() => {
  console.log("Listaning to Port Number 8000");
});
