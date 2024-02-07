const receptite = require("../models/recipe");

function getForm(req, res) {
  res.render("forma.ejs");
}

async function postForm(req, res) {
  const { recipe, ingredients, method } = req.body; // kako da se napravi ingrediants da se isprati ko objekt, isto i za metod
  let data = {
    recipe,
    ingredients: {
      ...ingredients,
    },
    method: {
      ...method,
    },
  };
  console.log(data);
  // await receptite.addRecipe(data);
  // res.redirect("/recipes");
}

async function getRecipes(req, res) {
  const recepti = await receptite.showRecipes();
  res.render("recepti", { recepti });
}

async function deleteRecipe(req, res) {
  const { index } = req.query;
  await receptite.removeRecipe(index);
  res.redirect("/recipes");
}

module.exports = { getForm, postForm, getRecipes, deleteRecipe };
