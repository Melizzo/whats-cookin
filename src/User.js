const Recipe = require('./Recipe');
const Pantry = require('./Pantry');

class User {
  constructor(id, name, pantry, favoriteRecipes, recipesToCook) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  makeFavoriteRecipe() {
    //add to or remove from the user's favoriteRecipes
  }

  addToRecipesToCook() {
    // if going to cook a recipe that week, push this recipe into the recipesToCook
  }

  filterFavoriteRecipes() {
    // this might just be a method in the recipe class??
    // filter by type
  }

  filterRecipesToCook() {
    // this might just be a method in the recipe class??
    // filter by type
    // this might just need to be 1 method tied to filterFavoriteRecipes
  }

  searchSavedRecipes() {
    // search any of the saved recipes by name or ingredient (these saved recipes are the recipes that have been added to favorite recipes???)
  }

}

if (typeof module !== 'undefined') {
  module.exports = User;
}