const http = require('http');
const fs = require('fs');
var requests = require('requests');
const homefile = fs.readFileSync("index.html","utf-8");

const replaceVal = (tempVal,orgVal) =>{
  let Tempreture = tempVal.replace("{%tempval%}",orgVal.main.temp);
   Tempreture = Tempreture.replace("{%tempmin%}",orgVal.main.temp_min);
   Tempreture = Tempreture.replace("{%tempmax%}",orgVal.main.temp_max);
   Tempreture = Tempreture.replace("{%location%}",orgVal.name);
   Tempreture = Tempreture.replace("{%Country%}",orgVal.sys.country);
   Tempreture = Tempreture.replace("{%tempStatus%}",orgVal.weather.main);
   return Tempreture;
}

const server = http.createServer((req, res) => {
     if (req.url == '/') {
      requests('https://api.openweathermap.org/data/2.5/weather?q=vadodara&appid=ae85808a18d8a2500844d19dc1c6c79e')
      .on('data', function (chunk) {

        const objdata = JSON.parse(chunk);
        const Array = [objdata];

        const realtimeData = Array.map(val =>replaceVal(homefile, val)).join(" ");
        // console.log(Array)
        res.write(realtimeData);
      })
      .on('end', function (err) {
        if (err) return console.log('connection closed due to errors', err);
        console.log('end');
        res.end();
      }); 
     }

})

server.listen(8000,"127.0.0.1");