const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on("request", (req, res) => {
  // fs.readFile(`${__dirname}/NodeJson/data.json`,(err, data) => {
    // if(err) return console.log(err);
    // res.end(data.toString());
// })
    // const rstream = fs.createReadStream(`${__dirname}/NodeJson/data.json`);
    // rstream.on('data',(chunk) => {
    //       res.write(chunk.toString());
    // })
    // rstream.on('end', () => {
    //   res.end();
    // })
    // rstream.on('error', (err) => {
    //   console.log(err);
    //   res.end("file not found");
    // })

     const rstream = fs.createReadStream("inputs.txt");
     rstream.pipe(res);
  })
server.listen(8000,"127.0.0.1")