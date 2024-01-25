const http = require("http");
const {
  convertMilesToKm,
  moduleNumbers,
  convertFeetToMetres,
} = require("./calculator");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>Hello Aleksandar</h1>");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h2>kontaktiraj ne</h2>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h2>za nas</h2>");
  } else if (req.url === "/convert/mitokm") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`Konvertiranata vrednost e ${convertMilesToKm(10)} km`);
  } else if (req.url === "/convert/feettometers") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`Konvertiranata vrednost e ${convertFeetToMetres(10)} km`);
  } else if (req.url === "/convert/module") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`Konvertiranata vrednost e ${moduleNumbers(5, 3)}`);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h3>Site is not found</h3>");
  }
});

server.listen(5000);
