const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/semos" && req.method === "POST") {
    let collectedData = "";
    req.on("data", (chunk) => {
      collectedData += chunk.toString();
    });
    req.on("end", () => {
      const parsedData = JSON.parse(collectedData);
      const podatoci = parsedData.zadaca;
      fs.writeFile("domasni.txt", podatoci + "\n", { flag: "a" }, (err) => {
        if (err) return err;
      });
    });
  } else if (req.url === "/semos") {
    fs.readFile("./domasni.txt", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(200, { "Content-type": "text/plain" });
        res.write(data);
        res.end();
      }
    });
  }
});

server.listen(8000);
