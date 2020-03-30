const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/Pantry');
const Recipe = require('../src/Recipe');
const recipeData = require('../data/recipes');
const userData = require('../data/users');

describe('Pantry', function() {
  let recipe1;
  let pantry1;


  beforeEach(() => {
    recipe1 = new Recipe(recipeData[0].id, recipeData[0].image, recipeData[0].ingredients, recipeData[0].instructions, recipeData[0].name, recipeData[0].tags);
    pantry1 = new Pantry(userData[0].pantry);

  });

  it('should be a function', function() {

    expect(Pantry).to.be.a('function');
  });

  it('should be an instance of Pantry', function() {

    expect(pantry1).to.be.an.instanceof(Pantry);
  });

  it('should get the pantry ingredients ids and amounts', function() {

    pantry1.getPantryIdsAndAmounts();
    expect(pantry1.getPantryIdsAndAmounts().length).to.eq(36);
  });

  it('should find the missing ingredients in the pantry compared to the recipe', function() {

    pantry1.findIngredientsMissing(recipe1);
    expect(pantry1.findIngredientsMissing(recipe1)).to.deep.eq([
      { id: 20081, amount: 5 },
      { id: 18372, amount: 3 },
      { id: 1123, amount: 8 },
      { id: 19335, amount: 4 },
      { id: 19206, amount: 2 },
      undefined,
      { id: 2047, amount: 6 },
      undefined,
      undefined,
      { id: 1145, amount: 4 },
      { id: 2050, amount: 4 }
    ])
  });

it('should return the missing ingredients needed and their amounts to cook the recipe', function() {

  pantry1.findIngredientsNeeded(recipe1);
  expect(pantry1.findIngredientsNeeded(recipe1)).to.deep.eq([
      { id: 19206, amount: 1 },
      { id: 19334, amount: 0.5 },
      { id: 1012047, amount: 24 },
      { id: 10019903, amount: 2 }
    ])
});


});
