// server.mjs
import { createServer } from 'node:http';
import ConvertApi from 'convertapi-js';
import fs from 'fs';





const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('index.html',null,function(error,data){
	  if(error){
		   res.writeHead(404);
		  
	  }else{
		  
		  res.write(data);
	  }
  res.end();
  });
});

// starts a simple http server locally on port 3000
server.listen(8080, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:8080');
});

// run with `node server.mjs`
