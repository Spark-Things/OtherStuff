const EventEmitter = require('events');

const event = new EventEmitter();
  
event.on('Say my Name', (name) => console.log(`${name} bhosad`))

event.emit('Say my Name',"dilu")