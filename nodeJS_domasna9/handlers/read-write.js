const fs = require("fs");

async function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        return reject(err);
      } else {
        data = JSON.parse(data);
        return resolve(data);
      }
    });
  });
}

async function writeFile(fileName, data) {
  data = JSON.stringify(data);
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

module.exports = { readFile, writeFile };
