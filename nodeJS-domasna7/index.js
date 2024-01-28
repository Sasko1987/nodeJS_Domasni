const express = require("express");
const app = express();
const {
  showAllRecipes,
  addRecipe,
  updateRecipe,
  deleteRecipe,
  editRecipe,
} = require("./recipes");

app.use(express.json());

app.get("/recipes", showAllRecipes);
app.post("/recipes", addRecipe);
app.put("/recipes/:id", updateRecipe);
app.delete("/recipes/:id", deleteRecipe);
app.patch("/recipes/:id", editRecipe);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
