const os = require('os');

console.log(os.arch());
console.log(os.hostname());
console.log(os.type());



const memory = os.freemem();
console.log(`${memory/1024/1024/1024}`);


const total = os.totalmem();
console.log(`${total/1024/1024/1024}`);