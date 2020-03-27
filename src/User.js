const Recipe = require('./Recipe');
const Pantry = require('./Pantry');
const ingredientsData = require('../data/ingredients');
const recipeData = require('../data/recipes');
const userData = require('../data/users');


class User {
  constructor(name, id, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  toggleFavoriteRecipe(recipe) {
    recipe.isFavorited = !recipe.isFavorited
    let matchedIndex = this.favoriteRecipes.findIndex(element => {
      return element.id === recipe.id
    })
    console.log({matchedIndex})
    if (matchedIndex === -1) {
      this.favoriteRecipes.push(recipe)
    } else {
      this.favoriteRecipes.splice(matchedIndex, 1)
    }
  }

  addToRecipesToCook(recipe) {
    this.recipesToCook.push(recipe)
  }

  filterFavoriteRecipes(tag) {
    return this.favoriteRecipes.filter(recipe => recipe.tags.includes(tag))
  }


  filterRecipesToCook(tag) {
    return this.recipesToCook.filter(recipe => recipe.tags.includes(tag))
  }

  searchSavedRecipes() {
    // search any of the saved recipes by name or ingredient (these saved recipes are the recipes that have been added to favorite recipes???)
  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}
