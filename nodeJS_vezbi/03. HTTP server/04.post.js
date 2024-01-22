const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "POST") {
    let collectedData = "";
    req.on("data", (chunk) => {
      collectedData += chunk.toString();
    });
    req.on("end", () => {
      const parsedData = JSON.parse(collectedData);
      let podatoci = parsedData.zadaca;
      res.end(podatoci);
    });
  }
});

server.listen(5000);
