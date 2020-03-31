class Pantry {
  constructor(userPantry) {
    this.userPantry = userPantry;
  }


  getPantryIdsAndAmounts() {
    return this.userPantry.reduce((acc, ingredient) => {
      let pantryIdsAndAmounts = {};
      pantryIdsAndAmounts['id'] = ingredient.ingredient;
      pantryIdsAndAmounts['amount'] = ingredient.amount;
      acc.push(pantryIdsAndAmounts)
      return acc
    }, [])
  }

  findIngredientsMissing(recipe) {
    const recipeAmountsAndIds = recipe.getRecipeIdsAndAmounts();
    const pantryAmountsAndIds = this.getPantryIdsAndAmounts();
    return recipeAmountsAndIds.map(ingredient => {
      return pantryAmountsAndIds.find(item => {
        return item.id === ingredient.id
      })
    });
  };

  findIngredientsNeeded(recipe) {
    const recipeAmountsAndIds = recipe.getRecipeIdsAndAmounts();
    const ingredientsMissing = this.findIngredientsMissing(recipe);
    const ingredientsToBuy = ingredientsMissing.reduce((acc, pantryIngredient, i) => {
      if (pantryIngredient === undefined) {
        let obj = {};
        obj.id = recipeAmountsAndIds[i].id;
        obj.amount = recipeAmountsAndIds[i].amount;
        acc.push(obj);
      } else {
        recipeAmountsAndIds.forEach(recipeIngredient => {
          if (pantryIngredient.id === recipeIngredient.id) {
            let obj = {};
            obj.id = recipeIngredient.id
            obj.amount = recipeIngredient.amount - pantryIngredient.amount;
            acc.push(obj);
          }
        })
      }

      return acc
    }, []);

    return ingredientsToBuy.filter(ingredient => {
      return ingredient.amount > 0
    })
  }

  // method4() {
  // Remove the ingredients used for a given meal from my pantry,
  // once that meal has been cooked (only applicable if users have a list of
  // mealsToCook; can be considered a stretch goal)
  // }

};


if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
