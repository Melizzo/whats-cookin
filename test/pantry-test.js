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

        // expect(user).to.be.an.instanceof(Pantry);
        });

    it.only('should be able to determine if there is enough ingredients for a recipe', function() {

        pantry1.checkPantryForIngredients(recipe1)
        expect(pantry1.checkPantryForIngredients(recipe1)).to.eq(false);

    });

    
});