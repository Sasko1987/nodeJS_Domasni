const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let collectedData = "";
  req.on("data", (chunk) => {
    collectedData += chunk.toString();
  });
  req.on("end", () => {
    res.writeHead(200, { "Content-type": "text/html" });
    let userName = "User";
    if (collectedData) {
      userName = collectedData.split("=")[1];
    }
    res.write(`<h1>Hello ${userName}</h1>`);
    res.write(
      '<form method=POST action="/"><input type="text" name="user" ></input><button type="submit" >Submit</button></form>'
    );
    fs.writeFile("users.txt", collectedData + "\n", { flag: "a" }, (err) => {
      if (err) return err;
    });
    res.end();
  });
});

server.listen(3000, () => console.log("listening"));
