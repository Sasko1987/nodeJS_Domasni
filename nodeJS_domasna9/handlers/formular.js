const fs = require("fs");
const { readFile, writeFile } = require("./read-write");
async function getTemplate(req, res) {
  const data = await parseTemplate("formular");
  res.status(200).send(data);
}

async function parseTemplate(template) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      `${__dirname}/../views/${template}.html`,
      "utf-8",
      (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      }
    );
  });
}

async function postForm(req, res) {
  const { ime, prezime, prosek } = req.body;

  let data = {
    ime,
    prezime,
    prosek,
  };
  let studenti = await readFile("students.json");
  studenti.push(data);
  await writeFile("students.json", studenti);
  res.redirect("/students");
}

async function getStudents(req, res) {
  const studenti = await readFile("students.json");
  res.render("studenti", { studenti });
}

async function deleteStudent(req, res) {
  let studenti = await readFile("students.json");
  const { index } = req.query;
  studenti = studenti.filter((_, i) => Number(index) !== i);
  await writeFile("students.json", studenti);
  res.redirect("/students");
}

module.exports = { getTemplate, postForm, getStudents, deleteStudent };
