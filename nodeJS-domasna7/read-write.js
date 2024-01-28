const fs = require("fs");

const readFile = async (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        return reject(err);
      } else {
        data = JSON.parse(data);
        return resolve(data);
      }
    });
  });
};

const writeFile = async (fileName, data) => {
  data = JSON.stringify(data);
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

module.exports = { readFile, writeFile };
