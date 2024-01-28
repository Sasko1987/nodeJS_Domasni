const { readFile, writeFile } = require("./read-write");

async function showAllRecipes(req, res) {
  const recipes = await readFile("data.json");
  res.status(200).send(recipes);
}

async function addRecipe(req, res) {
  const recipes = await readFile("data.json");
  const newData = req.body;
  recipes.push(newData);
  await writeFile("data.json", recipes);
  res.status(201).send(recipes);
}

async function updateRecipe(req, res) {
  const recipes = await readFile("data.json");
  const { id } = req.params;
  const { ingredients, methods } = req.body;
  console.log(req.body);

  const updatedRecipes = recipes.map((recipe) => {
    if (recipe.id === Number(id)) {
      recipe.ingredients = ingredients;
      recipe.methods = methods; // add this line to update methods
    }
    return recipe;
  });

  await writeFile("data.json", updatedRecipes, (err) => {
    if (err) return err;
  });
  res.status(201).send(recipes);
}

async function deleteRecipe(req, res) {
  const recipes = await readFile("data.json");
  const { id } = req.params;

  const newRecipes = recipes.filter((recipe) => recipe.id !== Number(id));
  await writeFile("data.json", newRecipes, (err) => {
    if (err) return err;
  });
  res.status(200).send(newRecipes);
}

async function editRecipe(req, res) {
  const recipes = await readFile("data.json");
  const { id } = req.params;

  const recipeToEdit = recipes.find((recipe) => recipe.id === Number(id));

  Object.assign(recipeToEdit, req.body);

  console.log(recipes);
}
module.exports = {
  showAllRecipes,
  addRecipe,
  updateRecipe,
  deleteRecipe,
  editRecipe,
};
