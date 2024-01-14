// 5. Модул за обработка на текст
//     - Креирај модул textProcessor.js што ќе содржи функции за обработка на текст, како пребарување на зборови, замена на делови од текст и слично.
//     - Треба претходно да имате некој фајл кој ќе содржи текст и со помош на fs од Node.js да го прочитате тој фајл и соодветно да го изменувате, да пребарувате и слично
//     - Функциите треба да ги повикаш и тестираш во index.js фајлот

const fs = require("fs");

const readSync = fs.readFileSync("skopje.txt", "utf-8");

function findWord(word) {
  const result = readSync.includes(word);
  if (result) {
    console.log(`${word} was found`);
  } else {
    console.log(`${word} was not found`);
  }
}

function replaceText(text, replaceWith) {
  let result = readSync.replace(text, replaceWith);

  fs.writeFile("skopje.txt", result, "utf-8", (err) => {
    if (err) return err;
  });
}

module.exports = { findWord, replaceText };
