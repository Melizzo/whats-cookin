const chai = require('chai');
const expect = chai.expect;
const userData = require('../data/users');
const recipeData = require('../data/recipes');
const User = require('../src/User');
const Recipe = require('../src/Recipe');
const ingredientsData = require('../data/ingredients');

describe('User', function() {

  let user1;
  let recipe1;
  let recipe2;
  let recipe3;
  let recipe4;
  let recipe5;
  let recipe6;

  beforeEach(function() {
    user1 = new User(userData[0].name, userData[0].id, userData[0].pantry);
    recipe1 = new Recipe(recipeData[0].id, recipeData[0].image, recipeData[0].ingredients, recipeData[0].instructions, recipeData[0].name, recipeData[0].tags);
    recipe2 = new Recipe(recipeData[1].id, recipeData[1].image, recipeData[1].ingredients, recipeData[1].instructions, recipeData[1].name, recipeData[1].tags);
    recipe3 = new Recipe(recipeData[2].id, recipeData[2].image, recipeData[2].ingredients, recipeData[2].instructions, recipeData[2].name, recipeData[2].tags);
    recipe4 = new Recipe(recipeData[3].id, recipeData[3].image, recipeData[3].ingredients, recipeData[3].instructions, recipeData[3].name, recipeData[3].tags);
    recipe5 = new Recipe(recipeData[4].id, recipeData[4].image, recipeData[4].ingredients, recipeData[4].instructions, recipeData[4].name, recipeData[4].tags);
    recipe6 = new Recipe(recipeData[5].id, recipeData[5].image, recipeData[5].ingredients, recipeData[5].instructions, recipeData[5].name, recipeData[5].tags);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    expect(user1).to.be.an.instanceof(User);
  });

  it('should have an id', function() {
    expect(user1.id).to.eq(1);
  });

  it('should have a name', function() {
    expect(user1.name).to.eq("Saige O'Kon")
  });

  it('should have a pantry', function() {
    expect(user1.pantry).to.deep.eq(userData[0].pantry)
  });

  it('should be able to favorite & unfavorite a recipe', function() {

    expect(user1.favoriteRecipes.length).to.eq(0)
    user1.toggleFavoriteRecipe(recipe1);
    expect(user1.favoriteRecipes.length).to.eq(1)
    user1.toggleFavoriteRecipe(recipe2);
    expect(user1.favoriteRecipes.length).to.eq(2)
    user1.toggleFavoriteRecipe(recipe1);
    expect(user1.favoriteRecipes.length).to.eq(1)
  });

  it('should be able to save & unsave a recipe to cook', function() {

    expect(user1.recipesToCook.length).to.eq(0)
    user1.toggleRecipeToCook(recipe1);
    expect(user1.recipesToCook.length).to.eq(1)
    user1.toggleRecipeToCook(recipe2);
    expect(user1.recipesToCook.length).to.eq(2)
    user1.toggleRecipeToCook(recipe1);

    expect(user1.recipesToCook.length).to.eq(1)
  });

  it('should be able to filter favorite recipes by tag', function() {
    user1.toggleFavoriteRecipe(recipe4);
    user1.toggleFavoriteRecipe(recipe5);
    user1.toggleFavoriteRecipe(recipe6);
    expect(user1.filterFavoriteRecipes('side dish')).to.deep.eq([recipe4, recipe6]);
  });

  it('should be able to filter the recipes to cook by tag', function() {

    user1.toggleRecipeToCook(recipe3);
    user1.toggleRecipeToCook(recipe4);
    user1.toggleRecipeToCook(recipe5);
    user1.toggleRecipeToCook(recipe6);
    expect(user1.filterRecipesToCook('side dish')).to.deep.eq([recipe4, recipe6]);
  });

  it('should be able to filter recipe to cook by name', function() {
    user1.toggleRecipeToCook(recipe4);
    user1.toggleRecipeToCook(recipe5);
    user1.toggleRecipeToCook(recipe6);
    expect(user1.filterRecipesToCookByName('Elvis Pancakes')).to.deep.eq([recipe4]);
  });

  it('should be able to filter favorite recipes by name', function() {
    user1.toggleFavoriteRecipe(recipe4);
    user1.toggleFavoriteRecipe(recipe5);
    user1.toggleFavoriteRecipe(recipe6);
    expect(user1.filterFavoriteRecipesByName('Mock Udi’s Gluten Free Whole Grain Bread')).to.deep.eq([recipe5]);
  });

  it('should be able to filter recipe to cook by ingredient', function() {
    user1.toggleRecipeToCook(recipe4);
    user1.toggleRecipeToCook(recipe5);
    user1.toggleRecipeToCook(recipe6);
    expect(user1.filterRecipesToCookByIngredients(ingredientsData, 'apple cider vinegar')).to.deep.eq([recipe5]);
  });

  it('should be able to filter favorite recipes by ingredient', function() {
    user1.toggleFavoriteRecipe(recipe4);
    user1.toggleFavoriteRecipe(recipe5);
    user1.toggleFavoriteRecipe(recipe6);
    expect(user1.filterFavoriteRecipesByIngredients(ingredientsData, 'apple cider vinegar')).to.deep.eq([recipe5]);
  });



});
