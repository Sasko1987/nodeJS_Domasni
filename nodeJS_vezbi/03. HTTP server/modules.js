const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  console.log(parsedUrl);
  const fileName = `./website${parsedUrl.pathname}`;

  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end("Page does not exist");
    } else {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});

server.listen(8000);
