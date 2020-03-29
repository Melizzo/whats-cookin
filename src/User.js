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

    if (matchedIndex === -1) {
      this.favoriteRecipes.push(recipe)
    } else {
      this.favoriteRecipes.splice(matchedIndex, 1)
    }
  }

  filterFavoriteRecipesByName(name) {
    return this.favoriteRecipes.filter(recipe => recipe.name.includes(name))
  }

  filterFavoriteRecipes(tag) {
    return this.favoriteRecipes.filter(recipe => recipe.tags.includes(tag))
  }

  filterFavoriteRecipesByIngredients(ingredientName) {
    const ingredientID = ingredientsData.filter(ingredient => ingredient.name === ingredientName)[0].id

    const filteredRecipesByIngredient = this.favoriteRecipes.filter(recipe => {
      const matchedIngredient = recipe.ingredients.find(currentIngredient => {
        return currentIngredient.id === ingredientID
      })

      if (matchedIngredient) {
        return recipe
      }
    });

    return filteredRecipesByIngredient
  };

  toggleRecipeToCook(recipe) {
    recipe.isSaved = !recipe.isSaved

    let matchedIndex = this.recipesToCook.findIndex(element => {
      return element.id === recipe.id
    })

    if (matchedIndex === -1) {
      this.recipesToCook.push(recipe)
    } else {
      this.recipesToCook.splice(matchedIndex, 1)
    }
  }

  filterRecipesToCookByName(name) {
    return this.recipesToCook.filter(recipe => recipe.name.includes(name))
  }

  filterRecipesToCook(tag) {
    return this.recipesToCook.filter(recipe => recipe.tags.includes(tag))
  }

  filterRecipesToCookByIngredients(ingredientName) {
    const ingredientID = ingredientsData.filter(ingredient => ingredient.name === ingredientName)[0].id

    const filteredRecipesByIngredient = this.recipesToCook.filter(recipe => {
      const matchedIngredient = recipe.ingredients.find(currentIngredient => {
        return currentIngredient.id === ingredientID
      })

      if (matchedIngredient) {
        return recipe
      }
    });

    return filteredRecipesByIngredient
  };




}


if (typeof module !== 'undefined') {
  module.exports = User;
}
