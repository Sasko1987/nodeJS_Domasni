const express = require("express");
const {
  getTemplate,
  postForm,
  getStudents,
  deleteStudent,
} = require("./handlers/formular");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/form", getTemplate);
app.post("/form", postForm);
app.get("/students", getStudents);
app.get("/brisi", deleteStudent);

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
