const Recipe = require('./Recipe');
const User = require('./Pantry');
const recipeData = require('../data/recipes');

class Pantry {
  constructor(userPantry) {
    this.userPantry = userPantry;
    // this.id = pantry;
    // this.recipeData = recipeData;
    // this.ingredientsData = ingredientsData;
    // every user has a pantry (this is based off of the users id, when a new user is instantiated)
    // the pantry holds on to all the ingredients its owner has stocked, and the amount of each ingredient they have
  }


  // showIngredients() {
  //   //return the amount of ingredients the user has?? - WE ADDED THIS METHOD
  // }

  checkPantryForIngredients(recipe) {
    const matchingIngredients = recipe.ingredients.reduce((acc, ingredient) => {
      this.userPantry.forEach(item => {
        if(ingredient.id === item.ingredient){
          acc.push(item.ingredient)
        }
        
      });

      return acc
    }, []);

      if(matchingIngredients.length === recipe.ingredients.length){
        console.log('hi', checkPantryForIngredients())
        return true
      } else {
        return false
      }
  };
  
  method3(recipe) {
    // if checkPantryForIngredients(recipe) === true
    // then check quanity, 
    // if false
    // else return `not enough ingredients to cook this recipe`
    //Determine the amount of ingredients still needed to cook a given meal, based on what’s in my pantry
    // returns ingredients
    // compare lists and return a list of missing items from the pantry list. 
  }

  // method4() {
  //     //Remove the ingredients used for a given meal from my pantry, 
  // once that meal has been cooked (only applicable if users have a list of 
  // mealsToCook; can be considered a stretch goal)
  // }

}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
