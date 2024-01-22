const http = require("http");
let { greetings } = require("./api");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, {
      "Content-type": "application/javascript; charset=utf-8",
    });
    return res.end(greetings[0].get);
  } else if (req.url === "/" && req.method === "POST") {
    res.writeHead(200, {
      "Content-type": "application/javascript; charset=utf-8",
    });
    return res.end(greetings[1].post);
  } else if (req.url === "/" && req.method === "PUT") {
    res.writeHead(200, {
      "Content-type": "application/javascript; charset=utf-8",
    });
    return res.end(greetings[2].put);
  } else if (req.url === "/" && req.method === "DELETE") {
    res.writeHead(200, {
      "Content-type": "application/javascript; charset=utf-8",
    });
    return res.end(greetings[3].delete);
  }
});

server.listen(5000);
