const http = require("http");
let { people } = require("./api");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    people = JSON.stringify(people);
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(people);
    res.end();
  } else if (req.url === "/" && req.method === "POST") {
    let person = [];
    req.on("data", (chunk) => {
      person.push(chunk.toString());
    });

    req.on("end", () => {
      const parsed = JSON.parse(person);
      const name = parsed.name;
      const age = parsed.age;
      people.push({ name, age });
      console.log(people);
      people = JSON.stringify(people);
      res.writeHead(200, { "Content-type": "application/json" });
      res.write(people);
      res.end();
    });
  } else if (req.url === "/" && req.method === "PUT") {
    let info = [];
    req.on("data", (chunk) => {
      info.push(chunk.toString());
    });
    req.on("end", () => {
      const parsedInfo = JSON.parse(info);
      const inputData = parsedInfo.name;

      const person = people.find((person) => person.name === inputData);

      if (person.name === inputData) {
        person.age = parsedInfo.age;
      }
      console.log(parsedInfo.age);
      people = JSON.stringify(people);
      res.writeHead(200, { "Content-type": "application/json" });
      res.write(people);
      res.end();
    });
  } else if (req.url === "/" && req.method === "DELETE") {
    let name = [];
    req.on("data", (chunk) => {
      name.push(chunk.toString());
    });
    req.on("end", () => {
      let collectedData = JSON.parse(name);
      let nameToDelete = collectedData.name;
      let newPeople = people.filter((person) => person.name !== nameToDelete);
      newPeople = JSON.stringify(newPeople);
      res.writeHead(200, { "Content-type": "application/json" });
      res.write(newPeople);
      res.end();
    });
  }
});

server.listen(3000);
