// Статични датотеки и HTTP сервер
//     - Истражете како можеме кога за одредена рута да вратиме одговор со res.send(), да вратиме одговор кој во себе ќе има HTML, CSS и JS.
//     - Креирај HTTP сервер во Node.js кој ќе сервира статични датотеки како HTML, CSS и JS датотеки, враќајќи ги наодносно пристапувајќи до нив кога се пристапува до соодветните URL патеки.

const http = require("http");
const fs = require("fs");

const homepage = fs.readFileSync("./website/index.html");
const css = fs.readFileSync("./website/styles.css");
const javaScript = fs.readFileSync("./website/index.js");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(homepage);
    res.end();
  } else if (req.url === "/styles.css") {
    res.writeHead(200, { "Content-type": "text/css" });
    res.write(css);
    res.end();
  } else if (req.url === "/index.js") {
    res.writeHead(200, { "Content-type": "text/javascript" });
    res.write(javaScript);
    res.end();
  }
});

server.listen(8000);
