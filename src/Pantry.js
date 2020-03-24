const Recipe = require('./Recipe');
const User = require('./Pantry');

class Pantry {
  constructor() {
    // every user has a pantry (this is based off of the users id, when a new user is instantiated)
    // the pantry holds on to all the ingredients its owner has stocked, and the amount of each ingredient they have
  }


  showIngredients() {
    //return the amount of ingredients the user has?? - WE ADDED THIS METHOD
  }

  method2() {
    //Determine whether my pantry has enough ingredients to cook a given meal
    // If they do not, they should be able to see a list of what ingredients they need to buy, and how much it will cost. User should be able to do this for at least one recipe.
    // return true or false;
  }

  method3() {
     //Determine the amount of ingredients still needed to cook a given meal, based on what’s in my pantry
     // returns ingredients
  }

  method4() {
      //Remove the ingredients used for a given meal from my pantry, once that meal has been cooked (only applicable if users have a list of mealsToCook; can be considered a stretch goal)
  }

}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
