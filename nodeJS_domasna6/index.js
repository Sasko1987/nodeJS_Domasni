const http = require("http");
const url = require("url");

const {
  handleHompage,
  handleEmail,
  handlePageNotFound,
  handleLocation,
} = require("./handlers/handler");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/" || parsedUrl.pathname === "/homepage") {
    handleHompage(req, res);
  } else if (parsedUrl.pathname === "/email") {
    handleEmail(req, res, parsedUrl.query.email);
    console.log(parsedUrl.query.email);
  } else if (parsedUrl.pathname === "/location") {
    handleLocation(req, res, parsedUrl.query);
  } else {
    handlePageNotFound(req, res);
  }
});

const port = 5000;

server.listen(port, () => {
  console.log("Server is listening on port 5000");
});
