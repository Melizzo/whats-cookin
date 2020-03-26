const User = require('./User');
const Pantry = require('./Pantry');

// let recipeData = require('../data/recipes');
let ingredientsData = require('../data/ingredients');

class Recipe {
  constructor(recipeData) {
    this.id = recipeData.id;
    this.image = recipeData.image
    this.ingredients = recipeData.ingredients;
    this.instructions = recipeData.instructions;
    this.name = recipeData.name;
    this.tags = recipeData.tags;
    this.isFavorited = false
  }


  getCostOfIngredients = () => {
    let totalCost = 0;
    this.ingredients.forEach(ingredient => {
      ingredientsData.forEach(singleIngredient => {
        if(ingredient.id === singleIngredient.id) {
          totalCost += (singleIngredient.estimatedCostInCents * ingredient.quantity.amount)
        }
      })
    });
    return totalCost
  };

  filterRecipeByTag(tagName) {
    // filter (.includes) out the recipe.tags array and return only the
    // selected tags
    // return the new selected tags array
    // As a user, I should be able to filter recipes by tag
    // have a sad path for none meeting selected.
  }

  searchRecipeByIngredients() {
    // search recipes by ingredients
  }


  getInstructions() {
    return this.instructions

  }


}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
