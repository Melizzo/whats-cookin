const User = require('./User');
const Pantry = require('./Pantry');

let data = require('../data/recipes');
let ingredients = require('../data/ingredients');

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.image = recipe.image
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.name = recipe.name;
    this.tags = recipe.tags;
    this.isFavorited = false
  }

  getCostOfIngredients() {
    const ingredientsID = this.ingredients[0].id;
    const ingredientAmount = this.ingredients[0].quantity.amount;
    const ingredientCost = (ingredientsID )
    
    // get the cost of its ingredients
    // look into the id number of each ingredient in each recipe and find that 
    // corresponding id number in the ingredients database. 
    // Then, take the estimatedCostInCents from the ingredients database 
    // and multiply that by the amount in the recipes database
  }

  filterRecipeByTag() {
    // As a user, I should be able to filter recipes by tag
  }

  searchRecipeByIngredients() {
    // search recipes by ingredients
  }


  getInstructions() {
    console.log(recipeData.instructions)
   return recipes.instructions 

  //  foreach recipe, go through and return the instructions.  
  }


}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
