const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/Recipe');
const recipeData = require('../data/single-recipe');

describe('Recipe', function() {
    let recipe;
    let recipeInfo;

    beforeEach(() => {
        recipeInfo = recipeData.recipeData[0];
        recipe = new Recipe(recipeInfo);
    });

    it('should be a function', function() {
        expect(Recipe).to.be.a('function');
        });

    it('should be an instance of Recipe', function() {
        expect(recipe).to.be.an.instanceof(Recipe);
        });

    it('should be able to show an id', function() {

        expect(recipe.id).to.eq(595736);
    });

    it('should have an image', function() {

        expect(recipe.image).to.eq("https://spoonacular.com/recipeImages/595736-556x370.jpg")
    });

    it('should have ingredients', function() {
        const ingredient = {
            "id": 20081,
            "quantity": {
              "amount": 1.5,
              "unit": "tsp"
            }
          }
        expect(recipe.ingredients[0]).to.deep.eq(ingredient);
    });

    it('should have instructions', function() {
        const instructions = {
            "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
            "number": 1
          }
        expect(recipe.instructions[0]).to.deep.eq(instructions);
    });

    it('should have a name', function() {
        expect(recipe.name).to.eq("Loaded Chocolate Chip Pudding Cookie Cups")
    });

    it('should have some tags', function() {
        expect(recipe.tags).to.deep.eq([
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre"
          ])
    });

    it('should calculate the cost of all ingredients', function() {
        const ingredient = {
            "id": 20081,
            "quantity": {
              "amount": 1.5,
              "unit": "c"
            }
          }

        recipe.getCostOfIngredients();
        expect(recipe.getCostOfIngredients()).to.equal(17776)
    });

    it('should return instructions', function() {

      recipe.getInstructions();
  
      expect(recipeInfo.instructions).to.deep.equal([{
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        },
        {
          "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
          "number": 3
        },
        {
          "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
          "number": 4
        },
        {
          "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
          "number": 5
        },
        {
          "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
          "number": 6
        }
      ])
    });

});
