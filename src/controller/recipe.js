const Recipe = require("../model/Recipe");

async function getAll(req, res) {
  try {
    const recipe = await Recipe.getAll()
    return res.status(200).json(recipe);
  } catch (e) {
    return res
      .status(400)
      .json({ message: e });
  }
}

async function getTop5(req, res) {
  try {
    const recipe = await Recipe.getTop5()
    return res.status(200).json(recipe);
  } catch (e) {
    return res
      .status(400)
      .json({ message: e });
  }
}

async function getRecipe(req, res) {
  const idx= req.params.id

  try {
    const recipe = await Recipe.getOneById(idx)
    return res.status(200).json(recipe);
  } catch (e) {
    return res
      .status(400)
      .json({ message: e });
  }
}

module.exports = { getRecipe, getAll, getTop5 };
