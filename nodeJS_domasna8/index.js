const express = require("express");
const app = express();

const { getTextarea, postAnalyse } = require("./handlers/textarea");
app.use(express.urlencoded({ extended: true }));

app.get("/analyse", getTextarea);
app.post("/analyse", postAnalyse);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
