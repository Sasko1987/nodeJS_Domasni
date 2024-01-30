const fs = require("fs");

async function getTextarea(req, res) {
  try {
    let output = await parseTemplate("textarea");
    res.status(200).send(output);
  } catch (err) {
    res.status(500).send("Invalid server error");
  }
}

async function postAnalyse(req, res) {
  const { textarea } = req.body;
  console.log(textarea.length);

  const charactersLength = textarea.length;
  const numberOfWords = textarea.split(" ").length;
  const numberOfSentences = textarea.split(/[.!?]/).length;
  const words = textarea.split(" ");
  let numberOfWordsWithMoreThanFive = 0;
  let numberOfWordsEqualsToFive = 0;
  const regex = /^[аеиуоАЕИОУaeiouAEIOU]/;
  let wordsStartWithVowel = 0;
  for (word of words) {
    if (word.length > 5) {
      numberOfWordsWithMoreThanFive++;
    }
    if (word.length === 5) {
      numberOfWordsEqualsToFive++;
    }
    if (
      word.match(regex)
      // word[0] === "е" ||
      // word[0] === "и" ||
      // word[0] === "о" ||
      // word[0] === "у" ||
      // word[0] === "А"
    ) {
      wordsStartWithVowel++;
    }
  }

  try {
    let output = await parseTemplate("textarea_results", {
      characters: charactersLength,
      moreThanFive: numberOfWordsWithMoreThanFive,
      equalsToFive: numberOfWordsEqualsToFive,
      sentinces: numberOfSentences,
      words: numberOfWords,
      vowel: wordsStartWithVowel,
    });
    res.status(200).send(output);
  } catch (err) {
    console.log(err);
  }
}

async function parseTemplate(template, data = null) {
  //zasto datata se stavase null?
  return new Promise((resolve, reject) => {
    fs.readFile(
      `${__dirname}/../views/${template}.html`,
      "utf8",
      (err, content) => {
        if (err) {
          return reject(err);
        }
        if (data) {
          for (d in data) {
            content = content.replace(`{{${d}}}`, data[d]);
          }
        }
        resolve(content);
      }
    );
  });
}

module.exports = { getTextarea, postAnalyse };
