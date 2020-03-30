const chai = require('chai');
const expect = chai.expect;
const recipeData = require('../data/recipes');
const Recipe = require('../src/Recipe');


describe('Recipe', function() {
    let recipe1;


    beforeEach(() => {
      recipe1 = new Recipe(recipeData[0].id, recipeData[0].image, recipeData[0].ingredients, recipeData[0].instructions, recipeData[0].name, recipeData[0].tags);
    });

    it('should be a function', function() {
        expect(Recipe).to.be.a('function');
        });

    it('should be an instance of Recipe', function() {
        expect(recipe1).to.be.an.instanceof(Recipe);
        });

    it('should be able to show an id', function() {
        expect(recipe1.id).to.eq(595736);
    });

    it('should have an image', function() {
        expect(recipe1.image).to.eq("https://spoonacular.com/recipeImages/595736-556x370.jpg")
    });

    it('should have ingredients', function() {
        expect(recipe1.ingredients).to.deep.eq(recipeData[0].ingredients);
    });

    it('should have instructions', function() {
        expect(recipe1.instructions).to.deep.eq(recipeData[0].instructions);
    });

    it('should have a name', function() {
        expect(recipe1.name).to.eq("Loaded Chocolate Chip Pudding Cookie Cups")
    });

    it('should have some tags', function() {
        expect(recipe1.tags).to.deep.eq(recipeData[0].tags)
    });

    it('should calculate the cost of all ingredients', function() {
        recipe1.getCostOfIngredients();
        expect(recipe1.getCostOfIngredients()).to.eq(17776)
    });

    it('should return instructions', function() {
      recipe1.getInstructions();
      expect(recipe1.instructions).to.deep.eq(recipeData[0].instructions)
    });

    it('should get the ids and the amounts of a recipe', function() {

      recipe1.getRecipeIdsAndAmounts();
      expect(recipe1.getRecipeIdsAndAmounts()).to.deep.eq([
        { id: 20081, amount: 1.5 },
        { id: 18372, amount: 0.5 },
        { id: 1123, amount: 1 },
        { id: 19335, amount: 0.5 },
        { id: 19206, amount: 3 },
        { id: 19334, amount: 0.5 },
        { id: 2047, amount: 0.5 },
        { id: 1012047, amount: 24 },
        { id: 10019903, amount: 2 },
        { id: 1145, amount: 0.5 },
        { id: 2050, amount: 0.5 }
      ])
    });


});
