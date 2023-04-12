const { Router } = require('express');

const recipeController = require('../controller/recipe');

const recipeRouter = Router();

recipeRouter.get("/", recipeController.getAll);
recipeRouter.get("/popular", recipeController.getTop5);
recipeRouter.get("/:id", recipeController.getRecipe);

module.exports = recipeRouter;
