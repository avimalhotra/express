const dns = require('dns');

dns.lookup('192.168.0.1', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});


require('http').createServer((req,res)=>{ console.log(req.connection.address());res.end('hi') }).listen(3000)