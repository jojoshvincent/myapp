const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 5000

fs.readFile('index.html',(err,html) =>{
  if(err){
    throw err;
}
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write(html);
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
});
