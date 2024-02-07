const { getForm, postForm, getRecipes, deleteRecipe } = require("./controllers/forma");

const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", getForm);
app.post("/", postForm);
app.get("/recipes", getRecipes);
app.get('/brishi', deleteRecipe)

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
