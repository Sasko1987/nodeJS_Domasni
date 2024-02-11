const fs = require("fs");

async function read(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        return reject(err);
      }
      data = JSON.parse(data);
      return resolve(data);
    });
  });
}

async function write(fileName, data) {
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

async function addRecipe(data) {
  const recepti = await read("recipes.json");
  recepti.push(data);
  await write("recipes.json", recepti);
}

function createObject(input, object) {
  const inputData = input
    .split(/[\n,]/)
    .map((el) => el.split(":").map((item) => item.trim()));
  inputData.forEach(([key, value]) => {
    return (object[key] = value);
  });
}

async function showRecipes() {
  return await read("recipes.json");
}

async function removeRecipe(index) {
  let recepti = await read("recipes.json");

  recepti = recepti.filter((recipe, i) => Number(index) !== i);
  await write("recipes.json", recepti);
}

module.exports = {
  read,
  write,
  addRecipe,
  showRecipes,
  removeRecipe,
  createObject,
};
