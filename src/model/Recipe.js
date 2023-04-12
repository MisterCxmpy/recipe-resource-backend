const db = require('../database/connect')

class Recipe {
  constructor({ recipe_id, recipe_image, tags, recipe_name, date, comments, likes, description, author}) {
    this.recipe_id = recipe_id;
    this.recipe_image = recipe_image;
    this.tags = tags;
    this.recipe_name = recipe_name;
    this.date = date;
    this.comments = comments;
    this.likes = likes;
    this.description = description;
    this.author = author;
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM recipe");
    return response.rows.map((row) => new Recipe(row));
  }

  static async getTop5() {
    const response = await db.query("SELECT * FROM recipe ORDER BY likes DESC LIMIT 5");
    return response.rows.map((row) => new Recipe(row));
  }

  static async getOneById(recipe_id) {
    const response = await db.query("SELECT * FROM recipe WHERE recipe_id = $1", [recipe_id]);
    if (response.rows.length != 1) {
        throw new Error("Unable to locate recipe.");
    }
    return new Recipe(response.rows[0]);
  }

  static async getOneByRecipeName(recipe_name) {
    const response = await db.query("SELECT * FROM recipe WHERE recipe_name = $1", [recipe_name]);
    if (response.rows.length != 1) {
        throw new Error("Unable to locate recipe name.");
    }
    return new Recipe(response.rows[0]);
  }
  
  // static async create(data) {
  //   const { username, email, password } = data;
  //   let response = await db.query("INSERT INTO recipe (username, email, password) VALUES ($1, $2, $3) RETURNING user_id;",
  //       [username, email, password]);
  //   const newId = response.rows[0].user_id;
  //   const newRecipe = await Recipe.getOneById(newId);
  //   return newRecipe;
  // }
}


module.exports = Recipe;
