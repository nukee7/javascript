const http = require('http'); // we could make server without/with express too

const server = http.createServer((req,res) => {
  if(req.url == "/poll"){
    setTimeout(() => {    // WAIT BEFORE RESPONDING BECAUSE WE ARE USING LONG POLLING(3s)
      res.writeHead(200,{'Content-Type': 'application/json',
      })
      res.end(JSON.stringify({
        message: "Hello from server after long polling!"
      })) 
    },3000);
  } else {
    res.writeHead(200);
    res.end("server is running");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
} );