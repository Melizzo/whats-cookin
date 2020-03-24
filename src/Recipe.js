const User = require('./User');
const Pantry = require('./Pantry');

class Recipe {
  constructor(id, image, ingredients, instructions, name, tags) {
    this.id = id;
    this.image = image
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.name = name;
    this.tags = tags;
  }

  filterRecipeByTag() {
    // As a user, I should be able to filter recipes by tag
  }

  searchRecipeByIngredients() {
    // search recipes by ingredients
  }

  getCostOfIngredients() {
    // get the cost of its ingredients
    // look into the id number of each ingredient in each recipe and find that corresponding id number in the ingredients database. Then, take the estimatedCostInCents from the ingredients database and multiply that by the amount in the recipes database
  }

  getInstructions() {
    // getting the instructions for the recipe
  }


}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
