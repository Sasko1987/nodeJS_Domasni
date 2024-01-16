const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    res.write("<h1>Добродојдовте на серверот</h1>");
    res.end();
  }
});

server.listen(8080);
